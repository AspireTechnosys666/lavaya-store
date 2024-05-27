import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LoadingBar from "react-top-loading-bar";

import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import OrderServices from "@services/OrderServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import InvoiceTable from "@component/invoice/InvoiceTable";
import InvoiceForDownload from "@component/invoice/InvoiceForDownload";

const Order = ({ params }) => {
  const orderId = params.id;
  console.log(orderId)
  const divToPrintRef = useRef(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await OrderServices.getOrderInfoById(orderId);
      setData(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && !data?.user_info?.name && (
        <LoadingBar color="#530022" progress={80} />
      )}
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
        <div className="py-5 px-0 bg-white flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            <div
              id="divToPrint"
              ref={divToPrintRef}
              className="w-full md:w-full max-md:overflow-x-auto"
            >
              {data?.user_info?.name && <InvoiceTable invoiceData={data} />}
            </div>
          </div>
          <div className="w-full flex justify-end mx-10">
            <PDFDownloadLink
              document={<InvoiceForDownload data={data} />}
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
    </>
  );
};

export const getServerSideProps = ({ params }) => {
  return {
    props: { params },
  };
};

export default dynamic(() => Promise.resolve(Order), { ssr: false });
