import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import InputArea from "@component/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";
import Error from "@component/form/Error";
import OtpForm from "./OtpForm";

const Login = ({ setModalOpen }) => {
  const {
    handleSubmit,
    submitHandler,
    register,
    errors,
    loading,
    isOtpSent,
    setIsOtpSent,
    otpMobile,
  } = useLoginSubmit(setModalOpen);

  return (
    <>
      <div className="relative h-[500px] w-full md:w-[390px] px-8 py-10 flex flex-col justify-center">
        <div
          className="absolute top-[25px] cursor-pointer"
          onClick={() => {
            isOtpSent ? setIsOtpSent(false) : setModalOpen(false);
          }}
        >
          <FaArrowLeft size={20} />
        </div>
        <div className="mb-3 flex flex-col font-sans justify-center items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dwujlnajx/image/upload/v1707828137/undefined/favicon_izikze.png"
            alt="logo"
            width={70}
            height={100}
          />
          <h3 className="font-bold text-[1.5rem] text-center">Lavaya Store</h3>
          {isOtpSent ? (
            <>
              <span>We have sent a verification code to</span>
              <p className=" text-lg mb-5">+91 {otpMobile}</p>
            </>
          ) : (
            <p className=" text-lg mb-5">{`Let's Sign In`}</p>
          )}
        </div>
        {isOtpSent ? (
          <OtpForm phone={otpMobile} setModalOpen={setModalOpen} />
        ) : (
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-5">
              <InputArea
                register={register}
                defaultValue=""
                label=""
                name="phone"
                maxLength={10}
                // type="number"
                placeholder="Enter your phone number"
                preText={"+91"}
                className="!pl-12"
              />
              <Error errorName={errors.registerEmail} />
            </div>
            {loading ? (
              <button
                disabled={loading}
                type="submit"
                className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-[#e0015e] text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-[#e0015e] h-12 mt-1 text-sm lg:text-sm w-full"
              >
                <Image
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
                className="w-full text-center py-3 rounded-md bg-[#e0015e] text-white hover:bg-[#e0015e] transition-all focus:outline-none my-1"
              >
                Continue
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
