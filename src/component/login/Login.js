import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import CustomerServices from "@services/CustomerServices";
import { UserContext } from "@context/UserContext";
import { notifyError, notifySuccess } from "@utils/toast";

export const initOTPless = (callback) => {
  const otplessInit = Reflect.get(window, "otplessInit");

  const loadScript = () => {
    const isScriptLoaded = document.getElementById("otplessIdScript");
    if(isScriptLoaded) return;

    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    script.setAttribute("cid", process.env.NEXT_PUBLIC_OTPLESS_CID);
    document.body.appendChild(script);
  };

  otplessInit ? otplessInit() : loadScript();

  Reflect.set(window, "otpless", callback);
};


const Login = ({ setShowResetPassword, setModalOpen }) => {
  // const { handleSubmit, submitHandler, register, errors, loading } = useLoginSubmit(setModalOpen);
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => initOTPless(callback), []);

  const callback = (otplessUser) => {
    const { mobile, email } = otplessUser
    CustomerServices.customerLogin({
      phone: mobile.number
    })
    .then((res) => {
      setLoading(false);
      setModalOpen(false);
      router.push(redirect || "/");
      notifySuccess(res?.message || "Login Success!");
      dispatch({ type: "USER_LOGIN", payload: res });
      Cookies.set("userInfo", JSON.stringify(res), {
        expires: cookieTimeOut,
      });
    })
    .catch((err) => {
      notifyError(err ? err?.response?.data?.message : err.message);
      setLoading(false);
    });
  };

  return (
    <>
      <div id="otpless-login-page"></div>
    </>
  );
};

export default Login;
