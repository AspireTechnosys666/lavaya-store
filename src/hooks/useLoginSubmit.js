import React, { useContext, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import CustomerServices from "@services/CustomerServices";
import { UserContext } from "@context/UserContext";
import { notifyError, notifySuccess } from "@utils/toast";

const useLoginSubmit = (setModalOpen) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpMobile, setOtpMobile] = useState('');
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const [otpLoading, setOtpLoading] = useState(false);

  const otpRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const submitHandler = async ({ phone }) => {
    try {
      setLoading(true);
      
      const loginRes = await CustomerServices.loginWithOtp({ phone });
      if (loginRes) {
        setIsOtpSent(true);
        setOtpMobile(phone)
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, e) => {
    const newOtp = [...otpInput];
    newOtp[index] = e.target.value;
    setOtpInput(newOtp);
    if (e.target.value !== "" && index < otpInput.length - 1) {
      otpRefs.current[index + 1].current.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    const otpArray = pastedData.split("").slice(0, 4);
    const newOtp = [...otpInput];
    otpArray.forEach((digit, index) => {
      if (index < otpInput.length) {
        newOtp[index] = digit;
      }
    });
    setOtpInput(newOtp);
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otpInput[index] === "") {
      otpRefs.current[index - 1].current.focus();
    }
  };

  const submitOtpHandler = async () => {
    try {
      const expirationDate = new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      );
      const res = await CustomerServices.verifyLoginOtp({
        phone: otpMobile,
        otp: otpInput.join(""),
      });
      setOtpLoading(false);
      setModalOpen(false);
      router.push(redirect || "/");
      notifySuccess("Login Success!");
      dispatch({ type: "USER_LOGIN", payload: res });
      Cookies.set("userInfo", JSON.stringify(res), {
        expires: expirationDate,
      });
    } catch (err) {
      setLoading(false);
      notifyError(err.response.data.message);
    }
  };

  return {
    handleSubmit,
    submitHandler,
    register,
    errors,
    loading,
    isOtpSent,
    setIsOtpSent,
    otpRefs,
    otpMobile,
    setOtpMobile,
    otpInput,
    otpLoading,
    setOtpLoading,
    handleOtpChange,
    handleOtpPaste,
    handleOtpKeyDown,
    submitOtpHandler
  };
};

export default useLoginSubmit;
