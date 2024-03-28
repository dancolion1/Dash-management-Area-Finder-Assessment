import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar1 from "../../components/Sidebar1";

export default function AdminNineteenPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <Header2 className="p-4 bg-gray-100_02" />
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="flex md:flex-col justify-center items-start md:self-stretch gap-10 p-[39px] md:p-5 flex-1">
            <div className="md:self-stretch flex-1">
              <div className="flex flex-col gap-[21px]">
                <div className="flex sm:flex-col justify-between items-center gap-5">
                  <div className="flex flex-col items-start gap-[7px]">
                    <div className="flex items-start">
                      <Img src="images/img_trending_flat.svg" alt="trendingflat" className="h-[15px] w-[15px]" />
                      <Text as="p" className="!text-gray-900_bf underline">
                        Back
                      </Text>
                    </div>
                    <Text size="6xl" as="p">
                      Ikota-Lekki, Lagos
                    </Text>
                  </div>
                  <Button
                    size="3xl"
                    shape="round"
                    className="self-end mb-0.5 sm:px-5 uppercase font-medium min-w-[210px]"
                  >
                    Leave a review
                  </Button>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col pb-[17px] gap-4 border-blue_gray-100 border-b border-solid flex-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
                          <Img
                            src="images/img_ellipse_1_24x24.png"
                            alt="james_tone"
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
                        <div className="flex items-center gap-1">
                          <Img src="images/img_signal.svg" alt="image" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            4.0
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-900 leading-[150%]">
                        There is no stable electricity. The roads are fairly good and there is a sense of community. The
                        drainage system is poor and most residents litter their surroundings. There are several grocery
                        stores and Supermarkets.
                      </Text>
                    </div>
                    <div className="flex md:flex-col justify-center gap-2">
                      <Button
                        color="gray_50"
                        shape="round"
                        className="border-gray-900_03 border border-solid min-w-[69px] !rounded"
                      >
                        Schools
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Hospitals
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Resort Park
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Shopping Malls
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Airport
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Train Station
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Nightlife
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Public Wifi
                      </Button>
                    </div>
                    <div className="flex self-start gap-8">
                      <div className="flex self-start items-center py-px">
                        <Img src="images/img_offer_indigo_900.svg" alt="image_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="self-end h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img src="images/img_settings.svg" alt="image_two" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img src="images/img_bookmark_indigo_900.svg" alt="image_three" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-[17px] gap-4 border-blue_gray-100 border-b border-solid bg-blue-A700_0c flex-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
                          <Img
                            src="images/img_ellipse_1_24x24.png"
                            alt="circleimage"
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
                        <div className="flex items-center gap-1">
                          <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            4.0
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-900 leading-[150%]">
                        There is no stable electricity. The roads are fairly good and there is a sense of community. The
                        drainage system is poor and most residents litter their surroundings. There are several grocery
                        stores and Supermarkets.
                      </Text>
                    </div>
                    <div className="flex md:flex-col justify-center gap-2">
                      <Button
                        color="gray_50"
                        shape="round"
                        className="border-gray-900_03 border border-solid min-w-[69px] !rounded"
                      >
                        Schools
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Hospitals
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Resort Park
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Shopping Malls
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Airport
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Train Station
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Nightlife
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Public Wifi
                      </Button>
                    </div>
                    <div className="flex self-start gap-8">
                      <div className="flex self-start items-center py-px">
                        <Img src="images/img_offer_indigo_900.svg" alt="offer_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="self-end h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img
                          src="images/img_bookmark_indigo_900.svg"
                          alt="bookmark_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-[17px] gap-4 border-blue_gray-100 border-b border-solid flex-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
                          <Img
                            src="images/img_ellipse_1_24x24.png"
                            alt="circleimage"
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
                        <div className="flex items-center gap-1">
                          <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            4.0
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-900 leading-[150%]">
                        There is no stable electricity. The roads are fairly good and there is a sense of community. The
                        drainage system is poor and most residents litter their surroundings. There are several grocery
                        stores and Supermarkets.
                      </Text>
                    </div>
                    <div className="flex md:flex-col justify-center gap-2">
                      <Button
                        color="gray_50"
                        shape="round"
                        className="border-gray-900_03 border border-solid min-w-[69px] !rounded"
                      >
                        Schools
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Hospitals
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Resort Park
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Shopping Malls
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Airport
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Train Station
                      </Button>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Nightlife
                      </Text>
                      <Button
                        color="gray_50"
                        shape="round"
                        className="md:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                      >
                        Public Wifi
                      </Button>
                    </div>
                    <div className="flex self-start gap-8">
                      <div className="flex self-start items-center py-px">
                        <Img src="images/img_offer_indigo_900.svg" alt="offer_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="self-end h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img
                          src="images/img_bookmark_indigo_900.svg"
                          alt="bookmark_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                          24
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-[17px] gap-4 border-blue_gray-100 border-b border-solid flex-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
                          <Img
                            src="images/img_ellipse_1_24x24.png"
                            alt="circleimage"
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
                        <div className="flex items-center gap-1">
                          <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            4.0
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-900 leading-[150%]">
                        There is no stable electricity. The roads are fairly good and there is a sense of community. The
                        drainage system is poor and most residents litter their surroundings. There are several grocery
                        stores and Supermarkets.
                      </Text>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Schools
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Hospitals
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Resort Park
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Shopping Malls
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Airport
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Train Station
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Nightlife
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                      >
                        Public Wifi
                      </Text>
                    </div>
                    <div className="flex self-start gap-8">
                      <div className="flex self-start items-center py-px">
                        <Img src="images/img_offer_indigo_900.svg" alt="offer_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="self-end !text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />
                        <Text size="2xl" as="p" className="!text-indigo-900">
                          24
                        </Text>
                      </div>
                      <div className="flex self-end items-start py-px">
                        <Img
                          src="images/img_bookmark_indigo_900.svg"
                          alt="bookmark_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Text size="2xl" as="p" className="!text-indigo-900">
                          24
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[35%] md:w-full gap-[15px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col pb-2 gap-2">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <div className="flex justify-center items-center sm:self-stretch gap-2 flex-1">
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
                    <div className="flex items-center gap-1">
                      <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                      <Text size="2xl" as="p">
                        4.0
                      </Text>
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 leading-[150%]">
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery
                    stores and Supermarkets.
                  </Text>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex sm:flex-col gap-2">
                    <Button
                      color="gray_50"
                      shape="round"
                      className="sm:self-stretch w-full border-gray-900_03 border border-solid flex-1 !rounded"
                    >
                      Schools
                    </Button>
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                    >
                      Hospitals
                    </Text>
                    <Button
                      color="gray_50"
                      shape="round"
                      className="border-gray-900_03 border border-solid min-w-[93px] !rounded"
                    >
                      Resort Park
                    </Button>
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                    >
                      Shopping Malls
                    </Text>
                  </div>
                  <div className="flex gap-2">
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                    >
                      Airport
                    </Text>
                    <Button
                      color="gray_50"
                      shape="round"
                      className="border-gray-900_03 border border-solid min-w-[100px] !rounded"
                    >
                      Train Station
                    </Button>
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
                    >
                      Nightlife
                    </Text>
                    <Button
                      color="gray_50"
                      shape="round"
                      className="border-gray-900_03 border border-solid min-w-[86px] !rounded"
                    >
                      Public Wifi
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-row gap-8">
                  <div className="flex items-center mb-1 py-px">
                    <Img src="images/img_offer_indigo_900.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Text size="2xl" as="p" className="self-end h-[17px] !text-indigo-900">
                      24
                    </Text>
                  </div>
                  <div className="flex items-start py-px">
                    <Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />
                    <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
                      24
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
              <div className="py-[13px] border-blue_gray-100 border-t-[0.5px] border-solid">
                <div className="self-start border-blue_gray-100 border-b-[0.5px] border-solid">
                  <div className="flex justify-between items-center gap-5">
                    <Text size="2xl" as="p" className="text-right">
                      Add a comment
                    </Text>
                    <Button size="md" shape="round" className="uppercase font-medium min-w-[68px]">
                      POST
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col pb-[9px] gap-2 border-blue_gray-100 border-b-[0.5px] border-solid flex-1">
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <Img
                        src="images/img_ellipse_1_24x24.png"
                        alt="james_tone"
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
                  <Text as="p" className="!text-gray-900 leading-[150%]">
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery
                    stores and Supermarkets.
                  </Text>
                </div>
                <div className="flex flex-col pb-[9px] gap-2 border-blue_gray-100 border-b-[0.5px] border-solid flex-1">
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <Img
                        src="images/img_ellipse_1_24x24.png"
                        alt="circleimage"
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
                  <Text as="p" className="!text-gray-900 leading-[150%]">
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery
                    stores and Supermarkets.
                  </Text>
                </div>
                <div className="flex flex-col pb-[9px] gap-2 border-blue_gray-100 border-b-[0.5px] border-solid flex-1">
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <Img
                        src="images/img_ellipse_1_24x24.png"
                        alt="circleimage"
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
                  <Text as="p" className="!text-gray-900 leading-[150%]">
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery
                    stores and Supermarkets.
                  </Text>
                </div>
                <div className="flex flex-col pb-[9px] gap-2 border-blue_gray-100 border-b-[0.5px] border-solid flex-1">
                  <div>
                    <div className="flex justify-center items-start gap-2">
                      <Img
                        src="images/img_ellipse_1_24x24.png"
                        alt="circleimage"
                        className="h-[24px] w-[24px] rounded-[50%]"
                      />
                      <div className="flex">
                        <div className="flex gap-2 flex-wrap">
                          <Text size="2xl" as="p">
                            James T.
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-900_99">
                            5 months ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 leading-[150%]">
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery
                    stores and Supermarkets.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
