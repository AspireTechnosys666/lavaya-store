import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
//internal import

import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@component/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory
  );

  // console.log('category',data)

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };

  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 md:gap-0">
          {data[0]?.children?.map((category, i) => (
            <li className="group" key={i + 1}>
              <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-3 md:p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg justify-center">
                <div className="flex flex-col md:items-center justify-between md:justify-center">
                  <div
                    onClick={() =>
                      handleCategoryClick(
                        category._id,
                        showingTranslateValue(category?.name)
                      )
                    }
                  >
                    {category.icon ? (
                      <Image
                        src={category?.icon}
                        alt="category"
                        width={100}
                        height={100}
                        loading="eager"
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        alt="category"
                        width={35}
                        height={35}
                      />
                    )}
                  </div>

                  <div className="md:pl-4">
                    <h3
                      onClick={() =>
                        handleCategoryClick(
                          category._id,
                          showingTranslateValue(category?.name)
                        )
                      }
                      className="text-sm text-gray-600 font-serif font-medium leading-tight mt-2 md:mt-4 line-clamp-1  group-hover"
                    >
                      {showingTranslateValue(category?.name)}
                    </h3>
                    {/* <ul className="pt-1 mt-1">
                      {category?.children?.slice(0, 3).map((child) => (
                        <li key={child._id} className="pt-1">
                          <a
                            onClick={() =>
                              handleCategoryClick(
                                child._id,
                                showingTranslateValue(child?.name)
                              )
                            }
                            className="flex items-center font-serif text-xs text-gray-400 cursor-pointer"
                          >
                            <span className="text-xs text-gray-400 ">
                              <IoChevronForwardSharp />
                            </span>
                            {showingTranslateValue(child?.name)}
                          </a>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
