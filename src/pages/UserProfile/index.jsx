import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Input } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar2 from "../../components/Sidebar2";

export default function UserProfilePage() {
  const [searchBarValue28, setSearchBarValue28] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <Header2 className="p-4 bg-gray-100_02" />
        <div className="flex md:flex-col justify-center">
          <Sidebar2 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="flex md:self-stretch p-[35px] md:p-5 flex-1">
            <div className="flex flex-col w-[75%] md:w-full mb-[30px] ml-1 gap-6 md:ml-0">
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
                    value={searchBarValue28}
                    onChange={(e) => setSearchBarValue28(e)}
                    prefix={<Img src="images/img_icons.svg" alt="icons" className="cursor-pointer" />}
                    suffix={
                      searchBarValue28?.length > 0 ? (
                        <Img
                          src="images/img_iccancel.svg"
                          alt="ic_cancel"
                          onClick={() => setSearchBarValue28("")}
                          className="cursor-pointer"
                        />
                      ) : null
                    }
                    className="gap-2.5 text-gray-900_04 tracking-[0.04px] border-gray-300_02 border border-solid flex-grow"
                  />
                  <Button size="3xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[146px]">
                    search
                  </Button>
                </div>
              </div>
              <div className="flex flex-col pb-4 gap-8">
                <div className="flex justify-center border-blue_gray-100 border-b border-solid flex-1">
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
                <div className="flex flex-col gap-3.5 flex-1">
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
                <div className="flex justify-center border-blue_gray-100 border-b border-solid flex-1">
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
                <div className="flex flex-col gap-3.5 flex-1">
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
                <div className="flex justify-center border-blue_gray-100 border-t border-solid flex-1">
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
      </div>
    </>
  );
}
