import { FiLock, FiMail } from "react-icons/fi";

//internal  import
import Error from "@component/form/Error";
import useLoginSubmit from "@hooks/useLoginSubmit";
import InputArea from "@component/form/InputArea";
import { useEffect } from "react";

export const initOTPless = (callback) => {
  const otplessInit = Reflect.get(window, "otplessInit");

  const loadScript = () => {
    const isScriptLoaded = document.getElementById("otplessIdScript");
    if(isScriptLoaded) return;

    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    script.setAttribute("cid","FSREKE6NJ8LLPFPAEF6HKEIFSQ5NRTX8");
    document.body.appendChild(script);
  };

  otplessInit ? otplessInit() : loadScript();

  Reflect.set(window, "otpless", callback);
};


const Login = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

  useEffect(() => initOTPless(callback), []);

  const callback = (otplessUser) => {
    alert({ otplessUser });
    // your code here
  };

  return (
    <>
      {/* <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Login</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Login with your email and password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="justin@gmail.com"
              label="Email"
              name="registerEmail"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.registerEmail} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="12345678"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          {loading ? (
            <button
              disabled={loading}
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-[#e0015e] text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              <img
                src="/loader/spinner.gif"
                alt="Loading"
                width={20}
                height={10}
              />
              <span className="font-serif ml-2 font-light">Processing</span>
            </button>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
            >
              Login
            </button>
          )}
        </div>
      </form> */}
      <div>
        <div id="otpless-login-page"></div>
      </div>
    </>
  );
};

export default Login;
