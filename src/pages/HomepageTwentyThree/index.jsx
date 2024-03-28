import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import HomepageEighteenPostreview from "../../components/HomepageEighteenPostreview";
import HomepageSeventeenSearchheader from "../../components/HomepageSeventeenSearchheader";

export default function HomepageTwentyThreePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="flex flex-col gap-[33px]">
          <div className="h-[722px] relative">
            <div className="flex flex-col items-end w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div className="flex flex-col self-stretch">
                <div className="flex flex-col items-end">
                  <div className="flex flex-col self-stretch items-end">
                    <div className="flex flex-col self-stretch items-center">
                      <HomepageSeventeenSearchheader
                        reviewspeople="Reviews (People are raving about the selected location)"
                        leaveAReview="Leave a review"
                        bookmarkOne="images/img_bookmark.svg"
                        iconOne="images/img_icon.svg"
                        className="self-stretch bg-gray-100_02"
                      />
                      <div className="flex items-center mt-[-6px] gap-3 p-[15px] relative border-green-800 border border-solid bg-gray-100 shadow-md rounded-md">
                        <Img src="images/img_check_circle.svg" alt="image" className="h-[16px] w-[16px]" />
                        <Text
                          size="2xl"
                          as="p"
                          className="self-start !text-green-800 !font-clashdisplay text-right !font-medium"
                        >
                          Review submitted
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_signal.svg"
                      alt="signal_one"
                      className="h-[12px] w-[12px] mt-[-6px] mr-[643px] md:mr-0 relative"
                    />
                  </div>
                  <Text size="2xl" as="p" className="mt-[-14px] mr-[618px] md:mr-0 relative">
                    4.0
                  </Text>
                </div>
                <div className="flex items-center w-[14%] md:w-full mt-[-20px] ml-[100px] gap-2 md:p-5 md:ml-0 relative">
                  <Img
                    src="images/img_ellipse_1_24x24.png"
                    alt="circleimage_one"
                    className="h-[24px] w-[24px] rounded-[50%]"
                  />
                  <div className="flex self-end mb-0.5">
                    <div className="flex gap-2 flex-wrap">
                      <Text size="2xl" as="p" className="self-start">
                        James T.
                      </Text>
                      <Text size="2xl" as="p" className="self-end !text-gray-900_99">
                        5 months ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[36%] mt-[-24px] mr-[104px] gap-4 grid-cols-[repeat(auto-fill,_minmax(235px_,_1fr))] md:mr-0 relative grid">
                <Img
                  src="images/img_placeholder_image.png"
                  alt="placeholder_one"
                  className="h-[224px] w-full md:h-auto object-cover rounded-lg"
                />
                <Img
                  src="images/img_placeholder_image_224x235.png"
                  alt="placeholder_one"
                  className="w-full md:h-auto object-cover rounded-lg"
                />
                <Img
                  src="images/img_placeholder_image_1.png"
                  alt="placeholder_one"
                  className="w-full md:h-auto object-cover rounded-lg"
                />
                <a href="#" className="w-full">
                  <Text />
                </a>
              </div>
            </div>
            <div className="w-[54%] bottom-[0.00px] left-[7%] m-auto absolute">
              <Text as="p" className="!text-gray-900 leading-[150%]">
                There is no stable electricity. The roads are fairly good and there is a sense of community. The
                drainage system is poor and most residents litter their surroundings. There are several grocery stores
                and Supermarkets.
              </Text>
              <div className="flex mt-2 gap-[17px]">
                <div className="flex self-start items-center">
                  <Img src="images/img_offer_indigo_900_24x24.svg" alt="offer_one" className="h-[24px] w-[24px]" />
                  <Text size="2xl" as="p" className="self-end !text-indigo-900">
                    1224
                  </Text>
                </div>
                <div className="flex md:flex-row self-end w-[16%] gap-[31px]">
                  <div className="flex items-start py-px">
                    <Img src="images/img_settings.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Text size="2xl" as="p" className="!text-indigo-900">
                      4
                    </Text>
                  </div>
                  <div className="flex items-start py-px">
                    <Img src="images/img_bookmark_indigo_900.svg" alt="bookmark_one" className="h-[24px] w-[24px]" />
                    <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                      24
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[33px] gap-[33px]">
                <HomepageEighteenPostreview
                  imageOne="images/img_offer_indigo_900_24x24.svg"
                  zipcode="1000"
                  twentyfour="24"
                  className="flex flex-col gap-2 md:p-5 flex-1"
                />
                <div className="w-full h-px bg-blue_gray-100" />
                <div className="flex justify-center md:p-5 border-blue_gray-100 border-t border-solid flex-1">
                  <HomepageEighteenPostreview
                    imageOne="images/img_offer_indigo_900_24x24.svg"
                    zipcode="900"
                    twentyfour="24"
                    className="flex flex-col w-full gap-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[54%] md:w-full ml-[100px] gap-4 md:p-5 md:ml-0">
            <HomepageEighteenPostreview
              imageOne="images/img_offer_indigo_900_24x24.svg"
              zipcode="214"
              twentyfour="24"
              className="flex flex-col gap-2 flex-1"
            />
            <div className="w-[722px] h-px bg-blue_gray-100" />
            <HomepageEighteenPostreview zipcode="24" twentyfour="24" className="flex flex-col gap-2 flex-1" />
          </div>
        </div>
      </div>
    </>
  );
}
