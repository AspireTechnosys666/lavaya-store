import { useEffect, useRef } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PDFDownloadLink } from "@react-pdf/renderer";

import useGetSetting from "@hooks/useGetSetting";
import OrderServices from "@services/OrderServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import InvoiceTable from "@component/invoice/InvoiceTable";
import InvoiceForDownload from "@component/invoice/InvoiceForDownload";
import { notifySuccess } from "@utils/toast";

const Order = ({ data }) => {
  const divToPrintRef = useRef(null);
  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();

  useEffect(() => {
    notifySuccess("Your Order Confirmed!");
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
      <div className="bg-[#e0015e1c] rounded-md mb-5 px-4 py-3">
        <label>
          {showingTranslateValue(
            storeCustomizationSetting?.dashboard?.invoice_message_first
          )}{" "}
          <span className="font-bold text-[#e74c3c]">
            {data?.user_info?.name},
          </span>{" "}
          {showingTranslateValue(
            storeCustomizationSetting?.dashboard?.invoice_message_last
          )}
        </label>
      </div>
      <div className="py-5 bg-white flex flex-col items-center">
        <div className=" flex items-center justify-center">
          <div
            id="divToPrint"
            ref={divToPrintRef}
            className="w-[300px] md:w-full max-md:overflow-x-auto"
          >
            {data?.user_info?.name && <InvoiceTable invoiceData={data} />}
          </div>
        </div>
        <div className="w-full flex justify-end mx-10">
          <PDFDownloadLink
            document={<InvoiceForDownload invoiceData={data} />}
            fileName="Invoice"
          >
            <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-end bg-[#e0015e]  text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md mr-5">
              {showingTranslateValue(
                storeCustomizationSetting?.dashboard?.download_button
              )}{" "}
              <span className="ml-2 text-base">
                <IoCloudDownloadOutline />
              </span>
            </button>
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const orderId = params.id;
    const res = await OrderServices.getOrderInfoById(orderId);
    return {
      props: {
        data: res,
        loading: false,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        data: {},
        loading: false,
      },
    };
  }
};

export default Order;
