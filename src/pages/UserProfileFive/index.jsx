import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar2 from "../../components/Sidebar2";

export default function UserProfileFivePage() {
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
          <div className="flex justify-center md:self-stretch p-[39px] md:p-5 flex-1">
            <div className="flex flex-col items-start w-[55%] md:w-full mb-[70px] gap-[21px]">
              <div className="flex flex-col items-start gap-2">
                <Text size="6xl" as="p" className="!text-black-900_01">
                  User Profile
                </Text>
                <Text as="p" className="!text-black-900_01">
                  Update your personal details here
                </Text>
              </div>
              <div className="flex flex-col self-stretch gap-6 p-6 sm:p-5 bg-white-A700 shadow-lg rounded-lg">
                <div className="flex sm:flex-col justify-center items-start gap-5">
                  <Img src="images/img_avatar.png" alt="avatar_one" className="h-[64px] w-[64px] rounded-[50%]" />
                  <div className="flex flex-col items-center gap-3 p-4 border-blue_gray-50 border border-solid bg-white-A700 rounded-lg">
                    <Button
                      color="gray_100_02"
                      size="2xl"
                      shape="circle"
                      className="w-[40px] border-gray-50_04 border-[3px] border-solid !rounded-[20px]"
                    >
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex items-center gap-1 px-[121px] md:px-5">
                        <div className="flex">
                          <div className="flex">
                            <Heading size="md" as="h1" className="self-end !text-blue-A700">
                              Click to upload
                            </Heading>
                          </div>
                        </div>
                        <Text size="2xl" as="p" className="self-end !text-blue_gray-700_01">
                          or drag and drop
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="!text-blue_gray-700_01 text-center">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex sm:flex-col justify-center gap-6">
                    <div className="flex flex-col items-start w-full sm:w-full gap-[3px]">
                      <Text size="2xl" as="p" className="tracking-[0.04px]">
                        First Name
                      </Text>
                      <Input
                        shape="round"
                        name="firstName"
                        placeholder={`Bola`}
                        className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full sm:w-full gap-[3px]">
                      <Text size="2xl" as="p" className="tracking-[0.04px]">
                        Last Name
                      </Text>
                      <Input
                        shape="round"
                        name="lastName"
                        placeholder={`Ahmed`}
                        className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Username
                    </Text>
                    <Input
                      shape="round"
                      name="userName"
                      placeholder={`medbola419`}
                      className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Email Address
                    </Text>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`ahmedbola419@gmail.com`}
                      className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Phone Number
                    </Text>
                    <Input
                      shape="round"
                      name="phoneNumber"
                      placeholder={`+2348140346474`}
                      className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Location
                    </Text>
                    <Input
                      shape="round"
                      name="location"
                      placeholder={`Lagos, Nigeria`}
                      className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <Button size="5xl" variant="outline" shape="round" className="w-full sm:px-5 uppercase font-medium">
                    cancel
                  </Button>
                  <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
                    save changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
