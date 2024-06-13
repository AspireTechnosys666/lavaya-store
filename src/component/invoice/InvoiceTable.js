import dayjs from "dayjs";
import Image from "next/image";

const getRatePrice = ({ price, gst = 0 }) => {
  return Math.round((100 / (100 + Number(gst))) * price * 100) / 100;
};

const getCsGstPrice = (originalPrice, ratePrice) => {
  return Math.round(((originalPrice - ratePrice) * 100) / 2) / 100;
};

const InvoiceTable = ({ invoiceData }) => {
  return (
    <table
      width="100%"
      style={{ maxWidth: 800 }}
      cellPadding={0}
      cellSpacing={0}
      align="center"
      className="my-5 md:mx-10"
    >
      <tbody>
        <tr>
          <td align="center" valign="top">
            <table width="100%" cellPadding={0} cellSpacing={0} align="center">
              <tbody>
                <tr>
                  <td align="center" valign="top" className="border-invoice">
                    <table
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            className="border-bottom-invoice"
                          >
                            {" "}
                            RETAIL INVOICE{" "}
                            <span style={{ float: "right" }}>
                              Distributor Copy
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            className="border-bottom-invoice"
                          >
                            <table
                              width="100%"
                              cellPadding={5}
                              cellSpacing={0}
                              align="center"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" width="100%">
                                    <Image
                                      id="rptdetails_ctl00_Image1"
                                      alt=""
                                      src="/logo/logo.png"
                                      align="middle"
                                      width={200}
                                      height={200}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" valign="top" width="100%">
                                    <strong>
                                      Lavaya World Private Limited
                                    </strong>
                                    <br /> 28/C/48, Jhelam Apartment, RHB Pratap
                                    Nagar, Sanganer, Jaipur, Rajasthan-303905{" "}
                                    <br />
                                    E-mail : info@lavaya.network
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top">
                            <table width="100%" cellPadding={0} cellSpacing={0}>
                              <tbody>
                                <tr>
                                  <td
                                    align="left"
                                    valign="top"
                                    width="50%"
                                    className="border-right-invoice"
                                  >
                                    <table
                                      width="100%"
                                      cellPadding={2}
                                      cellSpacing={0}
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="left" valign="middle">
                                            <b> Purchased by:-</b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            {invoiceData.user_info.name}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            {invoiceData.user_info.address}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            {invoiceData.user_info.city},
                                            {invoiceData.user_info.country}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            ZipCode:{" "}
                                            {invoiceData.user_info.zipCode}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            {`Contact No: ${invoiceData.user_info.contact}`}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td align="left" valign="top" width="50%">
                                    <table
                                      width="100%"
                                      cellPadding={2}
                                      cellSpacing={0}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="left"
                                            valign="middle"
                                            className="border-bottom-invoice"
                                          >
                                            <table
                                              width="100%"
                                              cellPadding={2}
                                              cellSpacing={0}
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Bill No{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    ORD-{invoiceData?._id?.substring(20, 24)}{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Dated{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    {dayjs(
                                                      invoiceData.createdAt
                                                    ).format("DD/MM/YYYY")}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Payment Mode{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Online{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Payment Status{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    <b>{invoiceData.paymentStatus}</b>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Tracking Id{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {invoiceData.paymentTrackingId}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" valign="middle">
                                            <table
                                              width="100%"
                                              cellPadding={2}
                                              cellSpacing={0}
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    Distributor Code{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    LW129263{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    TAN #:{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    JPRL03398D{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    GST #:{" "}
                                                  </td>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    :{" "}
                                                  </td>
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                  >
                                                    {" "}
                                                    08AAFCL3008H1ZQ{" "}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    className="border-bottom-invoice"
                  >
                    <table
                      width="100%"
                      style={{ minHeight: 200 }}
                      cellPadding={2}
                      cellSpacing={0}
                      align="center"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            S.No{" "}
                          </td>
                          <td
                            align="left"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            Title{" "}
                          </td>
                          <td
                            align="right"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            Rate{" "}
                          </td>
                          <td
                            align="center"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            GST%{" "}
                          </td>
                          <td
                            align="center"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            Quantity{" "}
                          </td>
                          <td
                            align="right"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            CGST{" "}
                          </td>
                          <td
                            align="right"
                            valign="middle"
                            className="border-left-invoice border-bottom-invoice"
                          >
                            {" "}
                            SGST{" "}
                          </td>
                          <td
                            align="right"
                            valign="middle"
                            className="border-left-invoice border-right-invoice border-bottom-invoice"
                          >
                            {" "}
                            Total{" "}
                          </td>
                        </tr>
                        {invoiceData.cart.map((item, index) => (
                          <tr key={index}>
                            <td
                              align="left"
                              valign="middle"
                              className="border-left-invoice border-right-invoice"
                            >
                              {" "}
                              {index + 1}
                              {" "}
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {item?.title?.en ? item.title.en : item.title}
                            </td>
                            <td
                              align="right"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {getRatePrice({
                                price: item.price || 0,
                                gst: item?.gst || 0,
                              })}{" "}
                            </td>
                            <td
                              align="center"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {item?.gst || 0}%
                            </td>
                            <td
                              align="center"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {item.quantity}
                            </td>
                            <td
                              align="right"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {getCsGstPrice(
                                (item?.price || 0) * item.quantity,
                                getRatePrice({
                                  price: item?.price || 0,
                                gst: item?.gst || 0,
                                }) * item.quantity
                              )}{" "}
                            </td>
                            <td
                              align="right"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {getCsGstPrice(
                                (item?.price || 0) * item.quantity,
                                getRatePrice({
                                  price: item?.price || 0,
                                  gst: item?.gst || 0,
                                }) * item.quantity
                              )}{" "}
                            </td>
                            <td
                              align="right"
                              valign="middle"
                              className="border-right-invoice"
                            >
                              {" "}
                              {Math.round(item.price * item.quantity * 100) /
                                100}{" "}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    className="border-left-invoice border-right-invoice border-bottom-invoice"
                  >
                    <table width="100%" cellPadding={3} cellSpacing={0}>
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            valign="middle"
                            colSpan={6}
                            className=" font-bold"
                          >
                            {" "}
                            Gross Bill Amount: ₹
                            {Math.round(invoiceData.subTotal * 100) / 100}
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            valign="middle"
                            className="border-top-invoice"
                            colSpan={6}
                          >
                            {" "}
                            This is a Computer Generated Invoice{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;
