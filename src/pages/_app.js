import "@styles/custom.css";
import { CartProvider } from "react-use-cart";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

//internal import
import store from "@redux/store";
import useAsync from "@hooks/useAsync";
import { UserProvider } from "@context/UserContext";
import DefaultSeo from "@component/common/DefaultSeo";
import { SidebarProvider } from "@context/SidebarContext";
import SettingServices from "@services/SettingServices";
import { handlePageView } from "@utils/analytics";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const {
    data: storeSetting,
    loading,
    error,
  } = useAsync(SettingServices.getStoreSetting);

  useEffect(() => {
    // Initialize Google Analytics
    if (!loading && !error && storeSetting?.google_analytic_status) {
      ReactGA.initialize(storeSetting?.google_analytic_key || "");

      // Initial page load
      handlePageView();

      // Track page view on route change
      const handleRouteChange = () => {
        handlePageView(`/${router.pathname}`, "lavaya");
      };

      // Set up event listeners
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [storeSetting]);

  return (
    <>
      {/* {!loading && !error && storeSetting?.tawk_chat_status && (
        <TawkMessengerReact
          style={{bottom:"20%"}}
          propertyId={storeSetting?.tawk_chat_property_id || ""}
          widgetId={storeSetting?.tawk_chat_widget_id || ""}
        />
      )} */}
      <GoogleOAuthProvider clientId={storeSetting?.google_client_id || ""}>
        <UserProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <SidebarProvider>
                  <CartProvider>
                    <DefaultSeo />
                    <Component {...pageProps} />
                  </CartProvider>
              </SidebarProvider>
            </PersistGate>
          </Provider>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
