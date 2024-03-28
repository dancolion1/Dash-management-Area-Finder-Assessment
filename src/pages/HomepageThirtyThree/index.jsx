import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import HomepageTwentyEightPostreview from "../../components/HomepageTwentyEightPostreview";
import HomepageTwentySevenSearchheader from "../../components/HomepageTwentySevenSearchheader";

export default function HomepageThirtyThreePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_05">
        <div className="flex flex-col gap-[33px]">
          <div className="flex flex-col items-start gap-[33px]">
            <div className="self-stretch h-[722px] relative">
              <div className="flex flex-col items-end w-full top-[0.00px] right-0 left-0 m-auto absolute">
                <div className="flex flex-col self-stretch">
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col self-stretch items-end">
                      <div className="flex flex-col self-stretch items-center">
                        <HomepageTwentySevenSearchheader
                          leaveAReview="Leave a review"
                          bookmarkOne="images/img_bookmark.svg"
                          iconOne="images/img_icon.svg"
                          className="self-stretch bg-gray-900_05"
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
                    <Text size="2xl" as="p" className="mt-[-14px] mr-[618px] md:mr-0 !text-gray-50 relative">
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
                        <Text size="2xl" as="p" className="self-start !text-gray-50">
                          James T.
                        </Text>
                        <Text size="2xl" as="p" className="self-end !text-gray-50_99">
                          5 months ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[36%] mt-[-24px] mr-[100px] gap-4 grid-cols-[repeat(auto-fill,_minmax(235px_,_1fr))] md:mr-0 relative grid">
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
              <div className="flex flex-col w-[54%] gap-2 bottom-[0.00px] left-[7%] m-auto absolute">
                <Text as="p" className="!text-gray-50 leading-[150%]">
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The
                  drainage system is poor and most residents litter their surroundings. There are several grocery stores
                  and Supermarkets.
                </Text>
                <div className="flex flex-col">
                  <div className="flex self-start items-center flex-wrap">
                    <Img
                      src="images/img_offer_indigo_100.svg"
                      alt="offer_one"
                      className="self-start h-[24px] w-[24px]"
                    />
                    <Text size="2xl" as="p" className="!text-indigo-100">
                      1224
                    </Text>
                    <Img
                      src="images/img_user_indigo_100.svg"
                      alt="user_one"
                      className="self-end h-[24px] w-[24px] ml-[17px]"
                    />
                    <Text size="2xl" as="p" className="!text-indigo-100">
                      4
                    </Text>
                    <Img
                      src="images/img_user_indigo_100_24x24.svg"
                      alt="user_three"
                      className="self-end h-[24px] w-[24px] ml-[41px]"
                    />
                    <Text size="2xl" as="p" className="h-[17px] !text-indigo-100">
                      24
                    </Text>
                  </div>
                  <div className="flex flex-col pt-[33px] gap-[33px] sm:pt-5">
                    <HomepageTwentyEightPostreview
                      zipcode="1000"
                      twentyfour="24"
                      className="flex flex-col gap-2 md:p-5 border-blue_gray-100 border-t border-solid flex-1"
                    />
                    <HomepageTwentyEightPostreview
                      zipcode="900"
                      twentyfour="24"
                      className="flex flex-col gap-2 md:p-5 flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[54%] md:w-full ml-[100px] md:p-5 md:ml-0 border-blue_gray-100 border-b border-solid">
              <div className="w-full border-blue_gray-100 border-t border-solid">
                <HomepageTwentyEightPostreview zipcode="214" twentyfour="24" className="flex flex-col gap-2" />
              </div>
            </div>
          </div>
          <HomepageTwentyEightPostreview
            zipcode="24"
            twentyfour="24"
            className="flex flex-col w-[54%] md:w-full ml-[100px] gap-2 md:p-5 md:ml-0"
          />
        </div>
      </div>
    </>
  );
}
