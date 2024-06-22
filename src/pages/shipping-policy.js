import React, { useContext, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@component/header/PageHeader";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { SidebarContext } from "@context/SidebarContext";

const ShippingPolicy = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingBar color="#20b7dc" style={{ height: "3px" }} progress={80} />
      )}
      <Layout
        title="Shipping Policy"
        description="This is shipping policy page"
      >
        <PageHeader
          headerBg={storeCustomizationSetting?.shipping_policy?.header_bg}
          title={showingTranslateValue(
            storeCustomizationSetting?.shipping_policy?.title
          )}
        />
        <div className="bg-white">
          <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
            <CMSkeleton
              html
              count={15}
              height={15}
              error={error}
              loading={loading}
              data={storeCustomizationSetting?.shipping_policy?.description}
            />
            <br />
            <CMSkeleton count={15} height={15} loading={loading} />
            <br />
            <CMSkeleton count={15} height={15} loading={loading} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShippingPolicy;
