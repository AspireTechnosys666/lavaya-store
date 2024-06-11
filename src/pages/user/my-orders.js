/* eslint-disable @next/next/link-passhref */
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoBagHandle } from "react-icons/io5";
import { Pagination, Windmill } from "@windmill/react-ui";
import { FaCartArrowDown } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import LoadingBar from "react-top-loading-bar";

//internal import
import Dashboard from "@pages/user/dashboard";
import OrderServices from "@services/OrderServices";
import Loading from "@component/preloader/Loading";
import { UserContext } from "@context/UserContext";
import OrderHistory from "@component/order/OrderHistory";
import { SidebarContext } from "@context/SidebarContext";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import myTheme from "@styles/mytheme";

const MyOrders = () => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { currentPage, handleChangePage, isLoading, setIsLoading } =
    useContext(SidebarContext);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    OrderServices.getOrderCustomer({
      page: currentPage,
      limit: 8,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(false);
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo]);

  return (
    <>
      {isLoading && (
        <LoadingBar color="#20b7dc" style={{ height: "3px" }} progress={80} />
      )}
      <Dashboard
        title={showingTranslateValue(
          storeCustomizationSetting?.dashboard?.my_order
        )}
        description="This is user order history page"
      >
        <div className="overflow-hidden rounded-md font-serif">
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
              <h2 className="text-xl font-serif font-semibold mb-5">
                My Orders
              </h2>
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
                                  }&showPaymentStatus=${false}`}
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
      </Dashboard>
    </>
  );
};

export default MyOrders;
