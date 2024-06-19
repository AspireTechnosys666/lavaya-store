import dayjs from "dayjs";

const getRatePrice = ({ price, gst = 0 }) => {
  return Math.round((100 / (100 + Number(gst))) * price * 100) / 100;
};

const getCsGstPrice = (originalPrice, ratePrice) => {
  return Math.round(((originalPrice - ratePrice) * 100) / 2) / 100;
};

const InvoiceTable = ({ invoiceData }) => {
  const totalQuantity = invoiceData.cart.reduce(
    (total, el) => total + el.quantity,
    0
  );
  const totalDiscount = invoiceData.cart.reduce(
    (total, el) => total + (el?.prices?.originalPrice - el?.prices?.price) * el.quantity,
    0
  );
  const totalCsGstPrice = invoiceData.cart.reduce(
    (total, el) =>
      total +
      getCsGstPrice(
        (el?.price || 0) * el.quantity,
        getRatePrice({
          price: el?.price || 0,
          gst: el?.gst || 0,
        }) * el.quantity
      ),
    0
  );

  return (
    <table
      className="border-[2px] border-[#000] w-[350px] text-xs"
      align="center"
      cellPadding={10}
      cellSpacing={10}
    >
      <tbody>
        <tr>
          <td
            className=" border-b-[1px] border-[#000] text-center"
            colSpan={5}
          >
            TAX INVOICE
          </td>
        </tr>
        <tr>
          <td className=" border-b-[1px] border-[#000]" colSpan={5}>
            <h2 className="font-bold">LAVAYA WORLD PRIVATE LIMITED</h2>
            <p className="!mb-0">GSTIN - 08AAFCL3008H1ZQ</p>
            <p className="!mb-0">
              TAN No - {invoiceData?.paymentTrackingId || "-"}
            </p>
            <p className="!mb-0">
              <b>From</b>
            </p>
            <p className="!mb-0">Lavaya Store</p>
            <p className="!mb-0">
              <b>Invoice No-</b> {invoiceData?.orderId}
            </p>
            <p className="!mb-0">
              <b>Invoice Date-</b>{" "}
              {dayjs(invoiceData?.createdAt).format("DD/MM/YYYY")}
            </p>
            <p className="!mb-0">
              <b>To</b>
            </p>
            <p className="!mb-0">
              <b>Name:</b> {invoiceData?.user_info?.name}
            </p>
            <p className="!mb-0">
              <b>Member Id:</b>
            </p>
            <p className="!mb-0">
              <b>Contact No:</b> {invoiceData?.user_info?.contact}
            </p>
            <p className="!mb-0">
              <b>GST No:</b>
            </p>
            <p className="!mb-0">
              <b>Address:</b> {invoiceData?.user_info?.address},{" "}
              {invoiceData?.user_info?.city}, {invoiceData?.user_info?.state}
            </p>
          </td>
        </tr>
        <tr className="border-y-[1px] border-[#000]">
          <td className="">Product</td>
          <td className="">Qty</td>
          <td className="">Price</td>
          <td className="">Discount</td>
          <td className="">Tot Amt</td>
        </tr>
        {invoiceData.cart.map((item) => (
          <tr key={item._id} className="">
            <td className="!py-0.5">
              {item?.title?.en ? item.title.en : item.title}
            </td>
            <td className="!py-0.5">{item?.quantity}</td>
            <td className="!py-0.5">{item?.prices?.originalPrice}</td>
            <td className="!py-0.5">
              {item?.prices?.originalPrice - item?.prices?.price}
            </td>
            <td className="!py-0.5">{item?.itemTotal}</td>
          </tr>
        ))}
        <tr className="border-y-[1px] border-[#000]">
          <td className="  text-right" colSpan={5}>
            <p className="!mb-0">Total Quantity - {totalQuantity}</p>
            <p className="!mb-0">Total Amount - {invoiceData.total}</p>
            <p className="!mb-0">Taxable Amount - {totalCsGstPrice * 2}</p>
            <p className="!mb-0">Total CGST Amount - {totalCsGstPrice}</p>
            <p className="!mb-0">Total SGST Amount - {totalCsGstPrice}</p>
            <p className="!mb-0">Total Discount - {totalDiscount}</p>
          </td>
        </tr>
        <tr>
          <td
            className=" border-b-[1px] border-[#000] text-right"
            colSpan={5}
          >
            <p className="!mb-0 font-bold">
              All Inclusive Tax Amt : Rs. {invoiceData.total}
            </p>
          </td>
        </tr>
        <tr>
          <td className=" border-b-[1px] border-[#000]" colSpan={5}>
            <p className="!mb-0 font-bold">
              For Lavaya Store Dausa Pre Authorized Signatory
            </p>
            <p className="!mb-0 font-bold">Receiver Remark</p>
            <p className="!mb-0 font-bold">Signature</p>
            <p className="!mb-0 font-bold">Remark</p>
          </td>
        </tr>
        <tr>
          <td
            className=" border-b-[1px] border-[#000] text-center"
            colSpan={5}
          >
            <p className="!mb-0">
              This invoice is electronically generated and no signature is
              required.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;
