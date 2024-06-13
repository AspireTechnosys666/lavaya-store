import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

const getRatePrice = ({ price, gst = 0 }) => {
  return Math.round((100 / (100 + Number(gst))) * price * 100) / 100;
};

const getCsGstPrice = (originalPrice, ratePrice) => {
  return Math.round(((originalPrice - ratePrice) * 100) / 2) / 100;
};

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
  table: {
    display: "table",
    width: "auto",
    color: "#4b5563",
    marginRight: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 0,
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    padding: 0,
    textAlign: "left",
  },
  tableRowTop: {
    // margin: 'auto',
    flexDirection: "row",
    textAlign: "left",
    borderBottom: "1px solid black",
  },
  tableRow: {
    // margin: 'auto',
    flexDirection: "row",
    textAlign: "left",
  },
  tableRowHeder: {
    // margin: 'auto',
    flexDirection: "row",
    backgroundColor: "#f9fafb",
    paddingLeft: 0,
    textTransform: "uppercase",
    textAlign: "left",
  },
  tableCol1: {
    width: "15%",
    textAlign: "left",
    borderRight: "0.8px solid black",
  },
  tableCol2: {
    width: "90%",
    textAlign: "left",
    borderRight: "0.8px solid black",
  },
  tableCol: {
    width: "20%",
    textAlign: "left",
    borderRight: "0.8px solid black",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "6",
    marginRight: "6",
  },

  tableCellQuantity: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    textAlign: "center",
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "12",
    marginRight: "12",
  },

  invoiceFirst: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottom: 1,
    borderColor: "#f3f4f6",
    // backgroundColor:'#EEF2FF',
  },
  invoiceSecond: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  invoiceSecondUserCol: {
    width: "50%",
    padding: "5px",
    border: "1px solid black",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
  },
  userInfoLabel: {
    fontSize: 10,
    marginRight: "5px",
  },
  userInfoValue: {
    fontSize: 10,
    color: "#4b5563",
  },
  invoiceSecondBillCol: {
    width: "50%",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
  },
  billInfoTop: {
    padding: "5px",
    borderBottom: "1px solid black",
  },
  billInfoBottom: {
    padding: "5px",
  },
  billInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  billInfoLabel: {
    fontSize: 10,
    width: "50%",
  },
  billInfoValue: {
    fontSize: 10,
    width: "50%",
    color: "#4b5563",
    paddingLeft: "5px",
  },
  invoiceThird: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderTop: 1,
    borderColor: "#ffffff",
    backgroundColor: "#f4f5f7",
    borderRadius: 12,
    marginLeft: "13",
    marginRight: "13",

    // backgroundColor:'#F2FCF9',
  },
  logo: {
    width: 64,
    height: 25,
    bottom: 5,
    right: 10,
    marginBottom: 10,
    textAlign: "right",
    color: "#4b5563",
    fontWeight: "bold",
    fontSize: 10.3,

    marginRight: "39%",
    textTransform: "uppercase",
  },
  title: {
    color: "#2f3032",
    fontWeight: "bold",
    fontSize: 8.1,
    textTransform: "uppercase",
  },
  info: {
    fontSize: 9,
    color: "#6b7280",
  },
  infoCost: {
    fontSize: 10,
    color: "#6b7280",
    marginLeft: "4%",
    marginTop: "7px",
    textAlign: "left",
    width: "25%",
  },
  invoiceNum: {
    fontSize: 9,
    color: "#6b7280",
    marginLeft: "6%",
  },
  topAddress: {
    fontSize: 10,
    color: "#6b7280",
    width: "100%",
    textAlign: "center"
  },
  amount: {
    fontSize: 10,
    color: "#ef4444",
  },
  amountBorder: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: "100%",
    padding: "10px 10px 0px",
  },
  totalAmount: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
  },
  status: {
    color: "#10b981",
  },
  quantity: {
    color: "#1f2937",
  },
  itemPrice: {
    color: "#1f2937",
    textAlign: "left",
  },
  header: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    color: "black",
  },

  thanks: {
    color: "#22c55e",
  },
  infoRight: {
    textAlign: "right",
    fontSize: 9,
    color: "#6b7280",
    width: "25%",
    marginRight: "39%",
    fontWeight: "bold",
  },
  titleRight: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 8.1,
    width: "25%",
    marginRight: "39%",
    textTransform: "uppercase",
    color: "#2f3032",
  },
  topBg: {
    // backgroundColor:'#EEF2FF',
  },
  invoiceDiv: {
    alignItems: "baseline",
  },
  bold: {
    fontWeight: "bold",
    color: "black",
  },
});

const InvoiceForDownload = ({ data }) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page} className="grid grid-cols-2">
          <View style={styles.invoiceFirst} className="col-span-1">
            <View>
              <Image
                  src="/logo/logo.png"
                  alt="Invoice"
                  style={{ width: 100 }}
                />
            </View>
            <View>
              <Text>Lavaya World Private Limited</Text>
            </View>
            <View style={styles.topAddress}>
              <Text>28/C/48, Jhelam Apartment, RHB Pratap Nagar, Sanganer, Jaipur, Rajasthan-303905</Text>
            </View>
            <View style={styles.topAddress}>
              <Text>E-mail : info@lavaya.network</Text>
            </View>
          </View>

          <View style={styles.invoiceSecond}>
            <View style={styles.invoiceSecondUserCol}>
              <View>
                <Text style={styles.userInfoLabel}>Purchased by:-</Text>
                <Text style={styles.userInfoValue}>
                  {data?.user_info?.name}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userInfoValue}>
                  {data?.user_info?.address}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userInfoLabel}>ZipCode:</Text>
                <Text style={styles.userInfoValue}>
                  {data?.user_info?.zipCode}
                </Text>
              </View>

              <View style={styles.userInfo}>
                <Text style={styles.userInfoLabel}>Contact No:</Text>
                <Text style={styles.userInfoValue}>
                  {data?.user_info?.contact}
                </Text>
              </View>
            </View>
            <View style={styles.invoiceSecondBillCol}>
              <View style={styles.billInfoTop}>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Bill No</Text>
                  <Text style={styles.billInfoValue}>
                    : ORD-{data?._id?.substring(20, 24)}{" "}
                  </Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Date</Text>
                  <Text style={styles.billInfoValue}>
                    : {dayjs(data.createdAt).format("DD/MM/YYYY")}
                  </Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Payment Mode</Text>
                  <Text style={styles.billInfoValue}> : {"Online"}</Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Payment Status</Text>
                  <Text style={styles.billInfoValue}>
                    : <Text style={styles.bold}>{data?.paymentStatus}</Text>
                  </Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Tracking Id</Text>
                  <Text style={styles.billInfoValue}>
                    : {data?.paymentTrackingId}
                  </Text>
                </View>
              </View>
              <View style={styles.billInfoBottom}>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>Distributor Code</Text>
                  <Text style={styles.billInfoValue}>: LW129263</Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>TAN #:</Text>
                  <Text style={styles.billInfoValue}>: JPRL03398D</Text>
                </View>
                <View style={styles.billInfo}>
                  <Text style={styles.billInfoLabel}>GST #:</Text>
                  <Text style={styles.billInfoValue}>: 08AAFCL3008H1ZQ</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRowTop}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>S.No</Text>
                </Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>Title</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>Rate</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>GST%</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>Quantity</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>CGST</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>SGST</Text>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <Text style={styles.header}>Total</Text>
                </Text>
              </View>
            </View>
            {data?.cart?.map((item, i) => (
              <View key={i} style={styles.tableRow}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{i + 1}</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>{item?.title?.en ? item.title.en : item.title} </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>
                      ₹
                      {getRatePrice({
                        price: item.price,
                        gst: item.gst,
                      })}{" "}
                    </Text>
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>{item?.gst || 0}% </Text>
                  </Text>
                </View>

                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>{item.quantity} </Text>
                  </Text>
                </View>

                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>
                      {getCsGstPrice(
                        (item?.price || 0) * item.quantity,
                        getRatePrice({
                          price: item?.price || 0,
                          gst: item.gst,
                        }) * item.quantity
                      )}{" "}
                    </Text>
                  </Text>
                </View>

                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>
                      {getCsGstPrice(
                        item?.price || 0 * item.quantity,
                        getRatePrice({
                          price: item?.price || 0,
                          gst: item.gst || 0,
                        }) * item.quantity
                      )}{" "}
                    </Text>
                  </Text>
                </View>

                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <Text style={styles.quantity}>
                      {Math.round(item?.price || 0 * item?.quantity || 0 * 100) / 100}{" "}
                    </Text>
                  </Text>
                </View>
              </View>
            ))}
            <View style={styles.tableRow}>
              <Text style={styles.amountBorder}>
                <Text style={styles.tableCell}>
                  <Text style={styles.totalAmount}>
                    Gross Bill Amount: ₹{Math.round(data.subTotal * 100) / 100}
                  </Text>
                </Text>
              </Text>
            </View>
          </View>

          <View
            style={{
              textAlign: "center",
              fontSize: 12,
            }}
          >
            <Text>This is a Computer Generated Invoice</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceForDownload;
