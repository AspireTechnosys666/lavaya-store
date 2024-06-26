import React from "react";
import dayjs from "dayjs";

const OrderHistory = ({ order }) => {
  // console.log(order)
  return (
    <>
      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-sm font-medium">
          {order?.orderId || '-'}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">
          {dayjs(order.createdAt).format("HH:mm, D MMM YYYY")}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
        {order.status === "Delivered" && (
          <span className="text-emerald-500">{order.status}</span>
        )}
        {order.status === "Pending" && (
          <span className="text-orange-500">{order.status}</span>
        )}
        {order.status === "Cancel" && (
          <span className="text-red-500">{order.status}</span>
        )}
        {order.status === "Processing" && (
          <span className="text-indigo-500">{order.status}</span>
        )}
        {
          !order?.status && <span>-</span>
        }
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{order?.paymentStatus || "-"}</span>
      </td>
      
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm font-bold">
          ₹ {" "}
          {parseFloat(order?.total).toFixed(2)}
        </span>
      </td>
    </>
  );
};

export default OrderHistory;
