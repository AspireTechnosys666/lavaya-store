import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";

//internal import
import useAsync from "@hooks/useAsync";
import { UserContext } from "@context/UserContext";
import OrderServices from "@services/OrderServices";
import CouponServices from "@services/CouponServices";
import { notifyError, notifySuccess } from "@utils/toast";
import SettingServices from "@services/SettingServices";

const useCheckoutSubmit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    state: { userInfo, shippingAddress },
    dispatch,
  } = useContext(UserContext);

  const [error, setError] = useState("");
  const [total, setTotal] = useState("");
  const [couponInfo, setCouponInfo] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const router = useRouter();
  const couponRef = useRef("");
  const promoRef = useRef("");
  const ccRevenueRef = useRef(null);
  const { isEmpty, items, cartTotal, emptyCart } = useCart();

  const { data } = useAsync(CouponServices.getAllCoupons);
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  const currency = globalSetting?.default_currency || "₹";

  const submitHandler = async (data) => {
    try {
      if (isEmpty) {
        notifyError(`Cart is Empty!`);
        return;
      }
      dispatch({ type: "SAVE_SHIPPING_ADDRESS", payload: data });
      Cookies.set("shippingAddress", JSON.stringify(data));
      setIsCheckoutSubmit(true);
      setError("");

      const userDetails = {
        name: `${data.firstName}`,
        contact: data.contact,
        email: data.email,
        address: data.address,
        country: data?.country || "India",
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      };

      let orderInfo = {
        user_info: userDetails,
        shippingOption: data.shippingOption,
        paymentMethod: data.paymentMethod,
        status: "Pending",
        cart: items,
        subTotal: cartTotal,
        shippingCost: shippingCost,
        discount: discountAmount,
        total: total,
        couponCode,
        promoCode,
        orderId,
      };

      const res = await OrderServices.addOrder(orderInfo);

      if (res._id) {
        if (!orderId) {
          setOrderId(res.orderId);
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: total * 100,
          name: "Lavaya Store",
          description: "Lavaya - Online Shopping Portal",
          image: "https://manager.lavaya.store/@/assets/logo-BIzwMFPV.png",
          handler: async (response) => {
            if (response.razorpay_payment_id) {
              const payload = {
                paymentTrackingId: response.razorpay_payment_id,
              };
              await OrderServices.updateOrder(res._id, payload);
              Cookies.remove("couponInfo");
              sessionStorage.removeItem("products");
              notifySuccess("Your Order Confirmed!");
              emptyCart();
              setOrderId(null);
              router.push(`/order/${res._id}`);
            } else {
              console.log(response);
            }
          },
          prefill: {
            name: userDetails.name,
            contact: userDetails.contact,
            email: userDetails.email,
          },
          notes: {
            address: "Jaipur, Rajasthan",
          },
          theme: {
            color: "#e0015e",
            hide_topbar: false,
          },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open("payment.failed", () => {});
      }
      setIsCheckoutSubmit(false);
    } catch (err) {
      notifyError(err.message);
      setIsCheckoutSubmit(false);
    }
  };

  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current.value) {
      notifyError("Please Input a Coupon Code!");
      return;
    }
    const result = data.filter(
      (coupon) => coupon.couponCode === couponRef.current.value
    );

    if (result.length < 1) {
      notifyError("Please Input a Valid Coupon!");
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError("This coupon is not valid!");
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ₹${result[0].minimumAmount} required for Apply this coupon!`
      );
      return;
    } else {
      notifySuccess(
        `Your Coupon ${result[0].couponCode} is Applied on ${result[0].productType}!`
      );
      setIsCouponApplied(true);
      setMinimumAmount(result[0]?.minimumAmount);
      setDiscountPercentage(result[0].discountType);
      dispatch({ type: "SAVE_COUPON", payload: result[0] });
      Cookies.set("couponInfo", JSON.stringify(result[0]));
      setCouponCode(couponRef.current.value);
    }
  };

  const handlePromoCode = (e) => {
    e.preventDefault();

    if (!promoRef.current.value) {
      notifyError("Please Input a Promo Code!");
      return;
    }

    setPromoCode(promoRef.current.value);
  };

  useEffect(() => {
    if (Cookies.get("couponInfo")) {
      const coupon = JSON.parse(Cookies.get("couponInfo"));
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountType);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, [isCouponApplied]);

  //remove coupon if total value less then minimum amount of coupon
  useEffect(() => {
    if (minimumAmount - discountAmount > total || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove("couponInfo");
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  //calculate total and discount value
  useEffect(() => {
    const discountProductTotal = items?.reduce(
      (preValue, currentValue) => preValue + currentValue.itemTotal,
      0
    );

    let totalValue = "";
    let subTotal = parseFloat(cartTotal + Number(shippingCost)).toFixed(2);
    const discountAmount =
      discountPercentage?.type === "fixed"
        ? discountPercentage?.value
        : discountProductTotal * (discountPercentage?.value / 100);

    const discountAmountTotal = discountAmount ? discountAmount : 0;

    totalValue = Number(subTotal) - discountAmountTotal;

    setDiscountAmount(discountAmountTotal);

    setTotal(totalValue);
  }, [cartTotal, shippingCost, discountPercentage]);

  //if not login then push user to home page
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }

    setValue("firstName", shippingAddress.firstName);
    setValue("address", shippingAddress.address);
    setValue("contact", shippingAddress.contact);
    setValue("email", shippingAddress.email);
    setValue("city", shippingAddress.city);
    setValue("state", shippingAddress.state);
    setValue("country", shippingAddress.country);
    setValue("zipCode", shippingAddress.zipCode);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    couponInfo,
    couponRef,
    ccRevenueRef,
    handleCouponCode,
    promoRef,
    promoCode,
    handlePromoCode,
    discountPercentage,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    currency,
    isCheckoutSubmit,
    isCouponApplied,
    setValue,
    setOrderId,
  };
};

export default useCheckoutSubmit;
