import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useLoginSubmit from "@hooks/useLoginSubmit";

const OtpForm = ({ phone, setModalOpen }) => {
  const { handleSubmit } = useForm();
  const {
    otpRefs,
    otpInput,
    otpLoading,
    setOtpMobile,
    handleOtpChange,
    handleOtpPaste,
    handleOtpKeyDown,
    submitOtpHandler,
  } = useLoginSubmit(setModalOpen);

  useEffect(() => {
    setOtpMobile(phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(submitOtpHandler)}
      >
        <div className="mb-8 flex items-center">
          {otpInput.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength={1}
              ref={otpRefs.current[index]}
              name={`otp_input_${index + 1}`}
              className="w-12 h-12 mx-1 text-center border rounded"
              onChange={(e) => handleOtpChange(index, e)}
              onPaste={(e) => handleOtpPaste(e)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
            />
          ))}
        </div>
        {otpLoading ? (
          <button
            disabled={otpLoading}
            type="submit"
            className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-[#e0015e] text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-[#e0015e] h-12 mt-1 text-sm lg:text-sm w-full"
          >
            <Image
              src="/loader/spinner.gif"
              alt="otpLoading"
              width={20}
              height={10}
            />
            <span className="font-serif ml-2 font-light">Processing</span>
          </button>
        ) : (
          <button
            disabled={otpLoading || otpInput.join("").length < 4}
            type="submit"
            className={`w-full text-center py-3 rounded-md bg-[#e0015e] text-white hover:bg-[#e0015e] transition-all focus:outline-none my-1 ${
              otpInput.join("").length < 4 && "!opacity-[0.5]"
            }`}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default OtpForm;
