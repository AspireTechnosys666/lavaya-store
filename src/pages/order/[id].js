import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import Loading from "@component/preloader/Loading";
import { UserContext } from "@context/UserContext";
import OrderServices from "@services/OrderServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import InvoiceTable from "@component/invoice/InvoiceTable";

const Order = ({ params }) => {
  const orderId = params.id;
  const divToPrintRef = useRef(null);
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();

  const printDocument = async () => {
    const input = divToPrintRef.current;
    const pageHeight = input.clientHeight;
    const pageWidth = input.clientWidth;
    const pageData = [];

    let currentY = 0;
    const scale = 0.9;

    while (currentY < input.clientHeight) {
      const canvas = await html2canvas(input, {
        height: Math.min(pageHeight - currentY, pageHeight),
        width: pageWidth,
        y: -currentY,
        scale: scale
      });
      pageData.push(canvas.toDataURL('image/png'));
      currentY += pageHeight * scale;
    }

    const pdf = new jsPDF('p', 'px', [pageWidth, pageHeight]);
    let currentPage = 0;

    for (let i = 0; i < pageData.length; i++) {
      if (i > 0) {
        pdf.addPage([pageWidth, pageHeight]);
      }
      pdf.setPage(currentPage + 1);
      pdf.addImage(pageData[i], 'JPEG', 0, 0, pageWidth, pageHeight);
      currentPage++;
    }

    pdf.save('download.pdf');
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await OrderServices.getOrderById(orderId);
        setData(res);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("err", err.message);
      }
    })();

    if (!userInfo) {
      router.push("/");
    }
  }, []);

  return (
    <Layout title="Invoice" description="order confirmation page">
      {loading && !data ? (
        <Loading loading={loading} />
      ) : (
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
              <div id="divToPrint" ref={divToPrintRef} className="w-[300px] md:w-full overflow-x-auto">
                {
                  data?.user_info?.name && (
                    <InvoiceTable invoiceData={data} />
                  )
                }
              </div>
            </div>
            <div className="w-full flex justify-end mx-10">
              <button
                className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-end bg-[#e0015e]  text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                onClick={() => {
                  printDocument();
                }}
              >
                {showingTranslateValue(
                  storeCustomizationSetting?.dashboard?.download_button
                )}{" "}
                <span className="ml-2 text-base">
                  <IoCloudDownloadOutline />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = ({ params }) => {
  return {
    props: { params },
  };
};

export default dynamic(() => Promise.resolve(Order), { ssr: false });
