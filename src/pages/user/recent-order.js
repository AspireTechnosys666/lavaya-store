/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { Pagination, Windmill } from "@windmill/react-ui";

//internal import
import myTheme from "@styles/mytheme";
import Loading from "@component/preloader/Loading";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import OrderHistory from "@component/order/OrderHistory";
import { SidebarContext } from "@context/SidebarContext";

const RecentOrder = ({ data, loading, error }) => {
  const { handleChangePage } = useContext(SidebarContext);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="rounded-md font-serif">
          {loading ? (
            <Loading loading={loading} />
          ) : error ? (
            <h2 className="text-xl text-center my-10 mx-auto w-11/12 text-red-400">
              {error}
            </h2>
          ) : data?.orders?.length === 0 ? (
            <div className="text-center">
              <span className="flex justify-center my-30 pt-16 text-[#e0015e] font-semibold text-6xl">
                <IoBagHandle />
              </span>
              <h2 className="font-medium text-md my-4 text-gray-600">
                You Have no order Yet!
              </h2>
            </div>
          ) : (
            <div className="flex flex-col">
              <h3 className="text-lg font-serif font-medium mb-5">
                {showingTranslateValue(
                  storeCustomizationSetting?.dashboard?.recent_order
                )}
              </h3>
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                    <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr className="bg-gray-100">
                          <th
                            scope="col"
                            className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            Order ID
                          </th>
                          <th
                            scope="col"
                            className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            OrderTime
                          </th>

                          <th
                            scope="col"
                            className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            Order Status
                          </th>
                          <th
                            scope="col"
                            className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            Payment Status
                          </th>
                          <th
                            scope="col"
                            className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            Total
                          </th>
                          <th
                            scope="col"
                            className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                          >
                            Invoice / Reorder
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data?.orders?.map((order) => (
                          <tr key={order._id}>
                            <OrderHistory order={order} />
                            <td className="px-5 py-3 whitespace-nowrap text-right text-sm flex justify-end gap-x-2">
                              {order?.status && (
                                <Link href={`/order/${order._id}`} className="flex flex-col items-center">
                                  <LiaFileInvoiceSolid
                                    className="w-5 h-5 drop-shadow-xl text-[#e0015e]"
                                    title="View Invoice"
                                  />
                                </Link>
                              )}
                              {order?.paymentStatus !== "Success" && (
                                <Link
                                  href={`/checkout?id=${
                                    order._id
                                  }&reorder=${true}`}
                                  className="flex flex-col items-center"
                                >
                                  <FaCartArrowDown
                                    className="w-5 h-5 drop-shadow-xl text-[#e0015e]"
                                    title="Re Order"
                                  />
                                </Link>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {data?.totalDoc > 10 && (
                      <Windmill usePreferences theme={myTheme}>
                        <Pagination
                          totalResults={data?.totalDoc}
                          resultsPerPage={8}
                          onChange={handleChangePage}
                          label="Table navigation"
                        />
                      </Windmill>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
