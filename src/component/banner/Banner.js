import Link from "next/link";
import React from "react";

//internal import
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Banner = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-[#e0015e] font-bold">
              {showingTranslateValue(
                storeCustomizationSetting?.home?.promotion_title
              )}
            </span>{" "}
          </h1>

          <p className="text-gray-500">
            {showingTranslateValue(
              storeCustomizationSetting?.home?.promotion_description
            )}
          </p>
        </div>
        <Link
          href={`${storeCustomizationSetting?.home?.promotion_button_link}`}
          className="text-sm font-serif font-medium px-6 py-2 bg-[#e0015e] text-center rounded-full text-white hover:bg-[#20b7dc]"
        >
          {showingTranslateValue(
            storeCustomizationSetting?.home?.promotion_button_name
          )}
        </Link>
      </div>
    </>
  );
};

export default Banner;
