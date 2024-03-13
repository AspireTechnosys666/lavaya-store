import { useEffect } from "react";

const CCAvenuePayment = ({ formRef, ccAvenueForm }) => {

  useEffect(() => {
    if (ccAvenueForm?._id) {
      formRef.current.submit();
    }
  }, [ccAvenueForm?._id])

  return (
    <>
      <form
        ref={formRef}
        method="POST"
        name="customerData"
        action={`${process.env.NEXT_PUBLIC_API_BASE_URL}/ccavenue/ccavRequestHandler`}
      >
        <table width="40%" height="100" border="1" align="center">
          <caption>
            <font size="4" color="blue">
              <b>Integration Kit</b>
            </font>
          </caption>
        </table>
        <table width="40%" height="100" border="1" align="center">
          <tr>
            <td>Parameter Name:</td>
            <td>Parameter Value:</td>
          </tr>
          <tr>
            <td>Compulsory information</td>
          </tr>
          <tr>
            <td>Merchant Id</td>
            <td>
              <input
                type="text"
                name="merchant_id"
                id="merchant_id"
                value="2066581"
              />
            </td>
          </tr>
          <tr>
            <td>Order Id</td>
            <td>
              <input type="text" name="order_id" value={ccAvenueForm?._id} />
            </td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <input type="text" name="currency" value="INR" />
            </td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>
              <input type="text" name="amount" value={ccAvenueForm?.total} />
            </td>
          </tr>
          <tr>
            <td>Redirect URL</td>
            <td>
              <input
                type="text"
                name="redirect_url"
                value={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}order/${ccAvenueForm?._id}`}
              />
            </td>
          </tr>
          <tr>
            <td>Cancel URL</td>
            <td>
              <input
                type="text"
                name="cancel_url"
                value={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}`}
              />
            </td>
          </tr>
          <tr>
            <td>Language</td>
            <td>
              <input type="text" name="language" id="language" value="EN" />
            </td>
          </tr>
          <tr>
            <td>Billing information(optional):</td>
          </tr>
          <tr>
            <td>Billing Name</td>
            <td>
              <input type="text" name="billing_name" value={ccAvenueForm?.user_info?.name} />
            </td>
          </tr>
          <tr>
            <td>Billing Address:</td>
            <td>
              <input type="text" name="billing_address" value={ccAvenueForm?.user_info?.address} />
            </td>
          </tr>
          <tr>
            <td>Billing City:</td>
            <td>
              <input type="text" name="billing_city" value={ccAvenueForm?.user_info?.city}  />
            </td>
          </tr>
          <tr>
            <td>Billing State:</td>
            <td>
              <input type="text" name="billing_state" value={ccAvenueForm?.user_info?.state} />
            </td>
          </tr>
          <tr>
            <td>Billing Zip:</td>
            <td>
              <input type="text" name="billing_zip" value={ccAvenueForm?.user_info?.zipCode} />
            </td>
          </tr>
          <tr>
            <td>Billing Country:</td>
            <td>
              <input type="text" name="billing_country" value={ccAvenueForm?.user_info?.country} />
            </td>
          </tr>
          <tr>
            <td>Billing Tel:</td>
            <td>
              <input type="text" name="billing_tel" value={ccAvenueForm?.user_info?.contact} />
            </td>
          </tr>
          <tr>
            <td>Billing Email:</td>
            <td>
              <input
                type="text"
                name="billing_email"
                value={ccAvenueForm?.user_info?.email}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Checkout" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default CCAvenuePayment;
