import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import { useDebouncedCallback } from "use-debounce";

//internal import
import NavbarPromo from "@layout/navbar/NavbarPromo";
import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import CartDrawer from "@component/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "@utils/analytics";
import AddressModal from "@component/modal/AddressModal";

const Navbar = () => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [addressModalOpen, setAddressModalOpen] = useState(false);

  const { toggleCartDrawer, setIsLoading, address } =
    useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();

  const { storeCustomizationSetting } = useGetSetting();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const handleSubmit = (searchText) => {
    // return;
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      // setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  const debounced = useDebouncedCallback((e) => {
    const searchValue = e.target.value;
    handleSubmit(searchValue);
    setIsLoading(true);
  }, 1000);

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setImageUrl(user.image);
    }
    if (router?.query?.query?.length > 0) {
      setSearchText(router?.query?.query);
    } else {
      setSearchText("");
    }
  }, [router?.query?.query?.length > 0]);

  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <AddressModal
        modalOpen={addressModalOpen}
        setModalOpen={setAddressModalOpen}
      />

      <div className="bg-[#fff] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-24 md:h-16 lg:h-auto flex flex-col md:flex-row items-center justify-between py-3.5 mx-auto">
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-4 hidden md:hidden lg:block"
            >
              <Image
                width={130}
                height={43}
                src={
                  storeCustomizationSetting?.navbar?.header_logo ||
                  "/logo/logo.png"
                }
                alt="logo"
                className="object-contain"
                onClick={() => {
                  setIsLoading(true);
                }}
              />
            </Link>
            <button
              className="md:max-w-[210px] 2xl:max-w-[210px] flex flex-col items-center"
              onClick={() => setAddressModalOpen(!addressModalOpen)}
            >
              <h3 className="w-full py-1 px-4 text-[14px] text-left font-medium  rounded-[150px] hover:bg-[#e0015e] hover:text-white block">
                Deliver to{" "}
                <span className="font-semibold">
                  {address?.state} {address.pinCode}
                </span>
              </h3>
              {/* <div className="flex relative">
                <p className="text-[13px] text-left line-clamp-1 pr-4">
                  
                </p>
                <MdOutlineArrowDropDown className="min-w-[24px] w-[24px] min-h-[24px] drop-shadow-xl absolute bottom-0 right-0" />
              </div> */}
            </button>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[500px] xl:max-w-[650px] 2xl:max-w-[700px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={debounced}
                    className="relative pr-12 md:pr-14 bg-[#e0015e]  overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-[#fff]  focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder={t(`common:search-placeholder`)}
                        style={{ marginLeft: "2px" }}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          debounced(e);
                        }}
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-[#fff] absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-[#e0015e]  text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-[#e0015e] text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-[#20b7dc] rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}

              <button
                className="pl-5 text-[#e0015e]  text-2xl font-bold"
                aria-label="Login"
              >
                {imageUrl || userInfo?.image ? (
                  <Link
                    href="/user/dashboard"
                    className="relative top-1 w-6 h-6 rounded-full"
                    onClick={() => {
                      setIsLoading(true);
                    }}
                  >
                    <Image
                      width={30}
                      height={30}
                      src={imageUrl || userInfo?.image}
                      alt="user"
                      className="bg-white rounded-full aspect-[4/4] object-cover"
                    />
                  </Link>
                ) : userInfo?.phone ? (
                  <Link
                    href="/user/dashboard"
                    className="leading-none font-bold font-serif block"
                    onClick={() => {
                      setIsLoading(true);
                    }}
                  >
                    {userInfo?.name?.[0] || (
                      <FiUser className="w-6 h-6 drop-shadow-xl" />
                    )}
                  </Link>
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
