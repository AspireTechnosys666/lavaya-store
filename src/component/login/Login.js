import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiLock, FiMail } from "react-icons/fi";

//internal  import
import Error from "@component/form/Error";
import useLoginSubmit from "@hooks/useLoginSubmit";
import InputArea from "@component/form/InputArea";
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
      phone: mobile?.number || '',
      email: email?.email || ''
    })
    .then((res) => {
      setLoading(false);
      setModalOpen(false);
      router.push(redirect || "/");
      notifySuccess("Login Success!");
      dispatch({ type: "USER_LOGIN", payload: res });
      Cookies.set("userInfo", JSON.stringify(res), {
        expires: cookieTimeOut,
      }); 
    })
    .catch((err) => {
      notifyError(err ? err?.response?.data?.message : err.message);
      console.log(err ? err?.response?.data?.message : err.message)
      setLoading(false);
    });
  
    // const { email }
    // alert({ otplessUser });
    // your code here
  };

  return (
    <>
      <div id="otpless-login-page"></div>
    </>
  );
};

export default Login;
