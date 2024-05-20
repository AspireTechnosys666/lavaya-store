import React, { useEffect, useState } from "react";

import MainModal from "@component/modal/MainModal";

const AddressModal = ({ modalOpen, setModalOpen, setPinCode }) => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [locationError, setLocationError] = useState("");

  const setCoordinates = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
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

  console.log(position)

  return (
    <MainModal
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      isCrossCloseReq={false}
    >
      <div className="min-w-[500px] inline-block p-6 overflow-hidden text-left  transition-all transform bg-[#f3f4f6] shadow-xl absolute top-[115px] left-[12vw]">
        <p className="text-[#333] mb-[15px]">Change Location</p>
        <div className="flex h-full gap-3">
          <button
            className="px-3 text-[12px] rounded text-white bg-[#e0015e]"
            onClick={getLocation}
          >
            Detect my location
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
              type="text"
              name="select-locality"
              placeholder="Enter pincode"
              autoComplete="off"
              className="text-[14px] border border-[#ccc] focus:border-[#e0015e] focus:ring-0"
              maxLength={6}
              minLength={6}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length === 6) {
                  setPinCode(value);
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
