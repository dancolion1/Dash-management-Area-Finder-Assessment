import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

export default function HomepageSignup({ signup = "Sign Up", password, passwordis, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center gap-[21px] p-[22px] sm:p-5 bg-gray-50_01">
        <a href="#" className="mt-0.5">
          <Text size="5xl" as="p">
            {signup}
          </Text>
        </a>
        <div className="flex flex-col self-stretch gap-[23px]">
          <div className="flex flex-col gap-[17px]">
            <div className="flex sm:flex-col justify-center gap-4">
              <Input
                shape="round"
                name="firstName"
                placeholder={`First Name`}
                className="w-full sm:w-full sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
              />
              <Input
                shape="round"
                name="lastName"
                placeholder={`Last Name`}
                className="w-full sm:w-full sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
              />
            </div>
            <Input
              shape="round"
              name="userName"
              placeholder={`Username`}
              className="sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
            />
            <Input
              shape="round"
              name="email"
              placeholder={`E-mail address`}
              className="sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
            />
            <div className="flex flex-col items-start gap-[3px]">
              {!!password ? (
                <div className="flex self-stretch pt-[21px] pb-[11px] pl-3 pr-[35px] gap-px sm:pt-5 sm:pr-5 text-gray-900_04 tracking-[0.04px] text-left text-sm border-red-400 border border-solid bg-gray-50_03 rounded-md">
                  • • • • • • • • • • • • • • • •
                </div>
              ) : null}
              {!!passwordis ? (
                <Heading size="s" as="h1" className="!text-red-400 tracking-[0.03px] !font-semibold">
                  {passwordis}
                </Heading>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-[3px]">
              <div className="flex self-stretch pt-[21px] pb-[11px] pl-3 pr-[35px] gap-px sm:pt-5 sm:pr-5 text-gray-900_04 tracking-[0.04px] text-left text-sm border-red-400 border border-solid bg-gray-50_03 rounded-md">
                • • • • • • • • • • • • • • • •
              </div>
              <Heading size="s" as="h2" className="!text-red-400 tracking-[0.03px] !font-semibold">
                Password does not match
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="flex flex-col self-stretch items-center gap-[15px]">
              <Button
                color="indigo_A200_7c"
                size="3xl"
                shape="round"
                className="w-full sm:px-5 tracking-[0.70px] uppercase font-medium opacity-0.38"
              >
                SIGN UP
              </Button>
              <div className="flex justify-center items-start w-[67%] md:w-full gap-1">
                <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
                <Text size="md" as="p" className="h-[13px] text-center">
                  Or
                </Text>
                <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
              </div>
              <div className="flex flex-col self-stretch gap-2">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !text-gray-900_03 border-gray-300_01 border border-solid !rounded-lg"
                >
                  Sign Up with Google
                </Button>
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon_blue_a400.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !text-gray-900_03 border-gray-300_01 border border-solid !rounded-lg"
                >
                  Sign Up with Facebook
                </Button>
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon_black_900_01.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !text-gray-900_03 border-gray-300_01 border border-solid !rounded-lg"
                >
                  Sign Up with Apple
                </Button>
              </div>
            </div>
            <Text size="xl" as="p" className="text-center">
              <span className="text-gray-900_03">Already have an account?&nbsp;</span>
              <span className="text-blue-A700 font-semibold">Log In</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
