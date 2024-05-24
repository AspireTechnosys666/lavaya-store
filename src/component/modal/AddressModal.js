import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import MainModal from "@component/modal/MainModal";
import { SidebarContext } from "@context/SidebarContext";

const AddressModal = ({ modalOpen, setModalOpen  }) => {
  const [locationError, setLocationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { address, changeAddress } = useContext(SidebarContext);

  const setCoordinates = async (position) => {
    setIsLoading(true);
    const getPinCode = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
    );
    changeAddress({
      state: getPinCode?.data?.address?.city,
      pinCode: getPinCode?.data?.address?.postcode,
    });
    setModalOpen(false);
    setIsLoading(false);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(setCoordinates);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              setCoordinates,
              (err) => {
                setLocationError(`ERROR(${err.code}): ${err.message}`);
              },
              {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
              }
            );
          } else if (result.state === "denied") {
            setLocationError(
              "We do not have permission to determine your location. Please enter manually."
            );
          }
        });
    } else {
      setLocationError("Geolocation is not available in your browser.");
      console.log("Geolocation is not available in your browser.");
    }
  };

  useEffect(() => {
    if (locationError?.length > 0) {
      setTimeout(() => {
        setLocationError("");
      }, 3000);
    }
  }, [locationError?.length]);

  return (
    <MainModal
      modalOpen={address?.pinCode?.length < 1 ? true : modalOpen}
      setModalOpen={setModalOpen}
      isCrossCloseReq={false}
    >
      <div className="min-w-[500px] inline-block p-6 overflow-hidden text-left  transition-all transform bg-[#f3f4f6] shadow-xl absolute top-[115px] left-[12vw]">
        <p className="text-[#333] mb-[15px]">Change Location</p>
        <div className="flex h-full gap-3">
          <button
            className="w-[122px] text-[12px]  rounded text-white bg-[#e0015e] text-center"
            onClick={getLocation}
          >
            {isLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              <>Detect my location</>
            )}
          </button>
          <div className="flex items-center relative">
            <div className="mx-[10px] flex items-center justify-center border border-[#ccc] h-7 w-7 rounded-[50%] ">
              <span className="absolute w-[10px] h-[1px] left-0 top-[1/2] bg-[#ccc]"></span>
              <span className="flex items-center justify-center text-[12px]">
                OR
              </span>
              <span className="absolute w-[10px] h-[1px] right-0 top-[1/2] bg-[#ccc]"></span>
            </div>
          </div>
          <div style={{ width: "220px" }}>
            <input
              type="number"
              name="select-locality"
              placeholder="Enter pincode"
              autoComplete="off"
              className="text-[14px] border border-[#ccc] focus:border-[#e0015e] focus:ring-0"
              maxLength={6}
              minLength={6}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length === 6) {
                  changeAddress({
                    pinCode: value,
                  });
                  setModalOpen(false);
                }
              }}
            />
          </div>
        </div>
        {locationError?.length > 0 && (
          <p className="mt-4 text-[12px] text-[#E73838]">{locationError}</p>
        )}
      </div>
    </MainModal>
  );
};

export default AddressModal;
