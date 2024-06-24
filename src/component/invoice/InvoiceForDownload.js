import {
  Document,
  // Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

const styles = StyleSheet.create({
  page: {
    marginRight: 10,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 29,
    lineHeight: 1.5,
  },
  container: {
    borderWidth: 2,
    borderColor: "#000",
    width: 350,
    alignSelf: "center",
    padding: "10px 0px",
    fontSize: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
  section: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  tableHeader: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  tableFooter: {
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    textAlign: "right",
    paddingVertical: 5,
  },
  footer: {
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 5,
  },
  centerText: {
    textAlign: "center",
  },
  textWrapTitle: {
    width: 130,
  },
  textWrap: {
    width: 50,
    wordBreak: "break-all",
    textAlign: "center",
  },
  borderBottom: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  totalAmount: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    textAlign: "right",
  },
  eMessage: {
    paddingTop: 5,
  },
});

const getRatePrice = ({ price, gst = 0 }) => {
  return Math.round((100 / (100 + Number(gst))) * price * 100) / 100;
};

const getCsGstPrice = (originalPrice, ratePrice) => {
  return Math.round(((originalPrice - ratePrice) * 100) / 2) / 100;
};

const InvoiceForDownload = ({ invoiceData }) => {
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
    <>
      <Document>
        <Page size="A4" style={styles.page} className="grid grid-cols-2">
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>TAX INVOICE</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.boldText}>LAVAYA WORLD PRIVATE LIMITED</Text>
              <Text>GSTIN - 08AAFCL3008H1ZQ</Text>
              <Text>TAN No - {invoiceData?.paymentTrackingId || "-"}</Text>
              <Text style={styles.boldText}>From</Text>
              <Text>Lavaya Store</Text>
              <Text style={styles.boldText}>Invoice No- {invoiceData?.orderId}</Text>
              <Text style={styles.boldText}>
                Invoice Date-{" "}
                {dayjs(invoiceData?.createdAt).format("DD/MM/YYYY")}
              </Text>
              <Text style={styles.boldText}>To</Text>
              <Text style={styles.boldText}>
                Name: {invoiceData?.user_info?.name}
              </Text>
              <Text style={styles.boldText}>Member Id:</Text>
              <Text style={styles.boldText}>
                Contact No: {invoiceData?.user_info?.contact}
              </Text>
              <Text style={styles.boldText}>GST No:</Text>
              <Text style={styles.boldText}>
                Address: {invoiceData?.user_info?.address},{" "}
                {invoiceData?.user_info?.city}, {invoiceData?.user_info?.state}
              </Text>
            </View>
            <View style={styles.tableHeader}>
              <Text style={styles.textWrapTitle}>Product</Text>
              <Text style={styles.textWrap}>Qty</Text>
              <Text style={styles.textWrap}>Price</Text>
              <Text style={styles.textWrap}>Discount</Text>
              <Text style={styles.textWrap}>Tot Amt</Text>
            </View>
            <View style={styles.borderBottom}>
              {invoiceData?.cart?.length > 0
                ? invoiceData.cart.map((item) => (
                    <View key={item._id} style={styles.tableRow}>
                      <Text style={styles.textWrapTitle}>
                        {item?.title?.en ? item.title.en : item.title}
                      </Text>
                      <Text style={styles.textWrap}>{item?.quantity}</Text>
                      <Text style={styles.textWrap}>
                        {item?.prices?.originalPrice}
                      </Text>
                      <Text style={styles.textWrap}>
                        {item?.prices?.originalPrice - item?.prices?.price}
                      </Text>
                      <Text style={styles.textWrap}>{item?.itemTotal}</Text>
                    </View>
                  ))
                : null}
            </View>
            <View style={styles.tableFooter}>
              <Text>Total Quantity - {totalQuantity}</Text>
              <Text>Total Amount - {invoiceData.total}</Text>
              <Text>Taxable Amount - {totalCsGstPrice * 2}</Text>
              <Text>Total CGST Amount - {totalCsGstPrice}</Text>
              <Text>Total SGST Amount - {totalCsGstPrice}</Text>
              <Text>Total Discount - {totalDiscount}</Text>
            </View>
            <View>
              <Text style={styles.totalAmount}>
                All Inclusive Tax Amt: Rs. {invoiceData.total}
              </Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.boldText}>
                For Lavaya Store Dausa Pre Authorized Signatory
              </Text>
              <Text style={styles.boldText}>Receiver Remark</Text>
              <Text style={styles.boldText}>Signature</Text>
              <Text style={styles.boldText}>Remark</Text>
            </View>
            <View style={styles.eMessage}>
              <Text style={styles.centerText}>
                This invoice is electronically generated and no signature is
                required.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceForDownload;
