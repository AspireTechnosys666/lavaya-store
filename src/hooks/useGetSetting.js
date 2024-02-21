import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//internal import
// import useAsync from "./useAsync";
import SettingServices from "@services/SettingServices";
import { addSetting, changeLoading } from "@redux/slice/settingSlice";
import { storeCustomization } from "@utils/storeCustomizationSetting";

const useGetSetting = () => {
  const lang = Cookies.get("_lang");
  const dispatch = useDispatch();

  // const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  // const {
  //   data: storeCustomizationSetting,
  //   loading,
  //   error,
  // } = useAsync(SettingServices.getStoreCustomizationSetting);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const settings = useSelector((state) => state.setting.settingItem);
  const isSettingLoading = useSelector((state) => state.setting.isLoading);

  const globalSetting = settings.find(
    (value) => value.name === "globalSetting"
  );

  const storeCustomizationSetting = settings.find(
    (value) => value.name === "storeCustomizationSetting"
  );

  // useEffect(() => {
  //   setSocket(io(process.env.NEXT_PUBLIC_API_BASE_URL));
  //   // setSocket(io("http://localhost:5065"));
  // }, []);

  // Function to fetch and add the setting
  const fetchAndAddSetting = async () => {
    try {
      setLoading(true);
      const res = await SettingServices.getStoreCustomizationSetting();
      const storeCustomizationSettingData = {
        ...res,
        name: "storeCustomizationSetting",
      };

      if (Object.keys(res).length > 0) {
        dispatch(addSetting(storeCustomizationSettingData));
      } else {
        const storeCustomizationData = {
          ...storeCustomization?.setting,
          name: "storeCustomizationSetting",
        };
        dispatch(addSetting(storeCustomizationData));
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log("Error on getting storeCustomizationSetting setting", err);
    }
  };

  const fetchGlobalSetting = async () => {
    try {
      const res = await SettingServices.getGlobalSetting();
      const globalSettingData = {
        ...res,
        name: "globalSetting",
      };

      dispatch(addSetting(globalSettingData));
    } catch (err) {
      setError(err.message);
      console.log("Error on getting globalSetting setting", err);
    }
  };

  useEffect(() => {
    if (!isSettingLoading) {
      dispatch(changeLoading(true));
      if (!storeCustomizationSetting) {
        fetchAndAddSetting();
      }

      if (!globalSetting) {
        fetchGlobalSetting();
      }
    }
    
    if (!lang) {
      Cookies.set("_lang", "en", {
        sameSite: "None",
        secure: true,
      });
    }

    setTimeout(() => {
      dispatch(changeLoading(false));
    }, 100000)
  }, []);

  return {
    lang,
    error,
    loading,
    globalSetting,
    storeCustomizationSetting,
  };
};

export default useGetSetting;
