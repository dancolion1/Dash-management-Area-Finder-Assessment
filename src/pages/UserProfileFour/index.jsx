import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Input } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar2 from "../../components/Sidebar2";

export default function UserProfileFourPage() {
  const [searchBarValue31, setSearchBarValue31] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1024px] w-full md:h-auto bg-gray-50_01 relative">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col self-stretch items-center">
            <Header2 className="self-stretch p-4 bg-gray-100_02" />
            <Button
              color="deep_orange_50"
              size="5xl"
              shape="round"
              leftIcon={<Img src="images/img_checkcircle_red_600.svg" alt="check-circle" />}
              className="mt-[-27px] gap-3 sm:px-5 font-clashdisplay font-medium relative border-red-600 border border-solid min-w-[339px]"
            >
              Review Edited Not Successful
            </Button>
          </div>
          <Sidebar2 className="flex flex-col self-center h-screen w-[202px] mt-[-23px] top-0 py-10 sm:py-5 !sticky bg-gray-100_02 overflow-auto md:hidden" />
        </div>
        <div className="flex w-[73%] h-max left-[17%] bottom-0 top-0 my-auto absolute">
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col items-start gap-[11px]">
              <Text size="5xl" as="p" className="!text-black-900_01">
                All Reviews Created
              </Text>
              <div className="flex md:flex-col self-stretch gap-2">
                <Input
                  color="gray_50"
                  size="sm"
                  shape="round"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue31}
                  onChange={(e) => setSearchBarValue31(e)}
                  prefix={<Img src="images/img_icons.svg" alt="icons" className="cursor-pointer" />}
                  suffix={
                    searchBarValue31?.length > 0 ? (
                      <Img
                        src="images/img_iccancel.svg"
                        alt="ic_cancel"
                        onClick={() => setSearchBarValue31("")}
                        className="cursor-pointer"
                      />
                    ) : null
                  }
                  className="gap-2.5 md:p-5 text-gray-900_04 tracking-[0.04px] border-gray-300_02 border border-solid flex-grow"
                />
                <Button size="3xl" shape="round" className="md:p-5 sm:px-5 uppercase font-medium min-w-[146px]">
                  search
                </Button>
              </div>
            </div>
            <div className="flex flex-col pb-4 gap-8">
              <div className="flex justify-center md:p-5 border-blue_gray-100 border-b border-solid flex-1">
                <div className="flex flex-col w-full gap-3.5">
                  <div className="flex flex-col self-start items-start gap-1">
                    <div className="flex items-start gap-6">
                      <div className="flex items-start gap-[7px]">
                        <Text size="6xl" as="p">
                          Oba-Ajao Estate
                        </Text>
                        <div className="flex items-center mt-1 gap-1">
                          <Img src="images/img_signal.svg" alt="image" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            5.0
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_settings_blue_a700.svg" />
                        </Button>
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_thumbs_up.svg" />
                        </Button>
                      </div>
                    </div>
                    <Text size="xl" as="p">
                      February 19th, 2024
                    </Text>
                  </div>
                  <Text as="p" className="leading-[140%]">
                    Major roads are motorable and the power supply is good. For those who work in Lekki, living in
                    Ikota is a plus because they will experience or no traffic to and from work. The neighbourhood is
                    serene and highly accessible.
                  </Text>
                </div>
              </div>
              <div className="w-full h-px bg-blue_gray-100" />
              <div className="flex flex-col gap-3.5 md:p-5 flex-1">
                <div className="flex flex-col self-start items-start gap-1">
                  <div className="flex items-start gap-6">
                    <div className="flex items-start gap-[7px]">
                      <Text size="6xl" as="p">
                        Oba-Ajao Estate
                      </Text>
                      <div className="flex items-center mt-1 gap-1">
                        <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                        <Text size="2xl" as="p">
                          5.0
                        </Text>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                        <Img src="images/img_settings_blue_a700.svg" />
                      </Button>
                      <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                        <Img src="images/img_thumbs_up.svg" />
                      </Button>
                    </div>
                  </div>
                  <Text size="xl" as="p">
                    February 19th, 2024
                  </Text>
                </div>
                <Text as="p" className="leading-[140%]">
                  Major roads are motorable and the power supply is good. For those who work in Lekki, living in
                  Ikota is a plus because they will experience or no traffic to and from work. The neighbourhood is
                  serene and highly accessible.
                </Text>
              </div>
              <div className="w-full h-px bg-blue_gray-100" />
              <div className="flex justify-center md:p-5 border-blue_gray-100 border-b border-solid flex-1">
                <div className="flex flex-col w-full gap-3.5">
                  <div className="flex flex-col self-start items-start gap-1">
                    <div className="flex items-start gap-6">
                      <div className="flex items-start gap-[7px]">
                        <Text size="6xl" as="p">
                          Oba-Ajao Estate
                        </Text>
                        <div className="flex items-center mt-1 gap-1">
                          <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            5.0
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_settings_blue_a700.svg" />
                        </Button>
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_thumbs_up.svg" />
                        </Button>
                      </div>
                    </div>
                    <Text size="xl" as="p">
                      February 19th, 2024
                    </Text>
                  </div>
                  <Text as="p" className="leading-[140%]">
                    Major roads are motorable and the power supply is good. For those who work in Lekki, living in
                    Ikota is a plus because they will experience or no traffic to and from work. The neighbourhood is
                    serene and highly accessible.
                  </Text>
                </div>
              </div>
              <div className="w-full h-px bg-blue_gray-100" />
              <div className="flex flex-col gap-3.5 md:p-5 flex-1">
                <div className="flex flex-col self-start items-start gap-1">
                  <div className="flex items-start gap-6">
                    <div className="flex items-start gap-[7px]">
                      <Text size="6xl" as="p">
                        Oba-Ajao Estate
                      </Text>
                      <div className="flex items-center mt-1 gap-1">
                        <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                        <Text size="2xl" as="p">
                          5.0
                        </Text>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                        <Img src="images/img_settings_blue_a700.svg" />
                      </Button>
                      <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                        <Img src="images/img_thumbs_up.svg" />
                      </Button>
                    </div>
                  </div>
                  <Text size="xl" as="p">
                    February 19th, 2024
                  </Text>
                </div>
                <Text as="p" className="leading-[140%]">
                  Major roads are motorable and the power supply is good. For those who work in Lekki, living in
                  Ikota is a plus because they will experience or no traffic to and from work. The neighbourhood is
                  serene and highly accessible.
                </Text>
              </div>
              <div className="w-full h-px bg-blue_gray-100" />
              <div className="flex justify-center md:p-5 border-blue_gray-100 border-t border-solid flex-1">
                <div className="flex flex-col w-full gap-3.5">
                  <div className="flex flex-col self-start items-start gap-1">
                    <div className="flex items-start gap-6">
                      <div className="flex items-start gap-[7px]">
                        <Text size="6xl" as="p">
                          Oba-Ajao Estate
                        </Text>
                        <div className="flex items-center mt-1 gap-1">
                          <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
                          <Text size="2xl" as="p">
                            5.0
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_settings_blue_a700.svg" />
                        </Button>
                        <Button color="blue_A700_b2" size="xs" variant="outline" shape="square" className="w-[24px]">
                          <Img src="images/img_thumbs_up.svg" />
                        </Button>
                      </div>
                    </div>
                    <Text size="xl" as="p">
                      February 19th, 2024
                    </Text>
                  </div>
                  <Text as="p" className="leading-[140%]">
                    Major roads are motorable and the power supply is good. For those who work in Lekki, living in
                    Ikota is a plus because they will experience or no traffic to and from work. The neighbourhood is
                    serene and highly accessible.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex p-[7px]">
              <div className="flex items-center gap-2">
                <Img src="images/img_brightness.svg" alt="brightness_one" className="self-end h-[14px] w-[14px]" />
                <Text size="2xl" as="p" className="!text-gray-900_b2 text-center">
                  Show more
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
