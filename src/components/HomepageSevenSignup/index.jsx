import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

export default function HomepageSevenSignup({ signup = "Sign Up", password, passwordis, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center gap-[21px] p-[21px] sm:p-5 bg-gray-900_05">
        <a href="#" className="mt-[3px]">
          <Text size="5xl" as="p" className="!text-gray-50">
            {signup}
          </Text>
        </a>
        <div className="flex flex-col self-stretch gap-[23px]">
          <div className="flex flex-col gap-[17px]">
            <div className="flex sm:flex-col justify-center gap-4">
              <Input
                color="gray_900_06"
                shape="round"
                name="firstName"
                placeholder={`First Name`}
                className="w-full sm:w-full sm:pr-5 tracking-[0.04px] border-blue-A700_7f border border-solid"
              />
              <Input
                color="gray_900_06"
                shape="round"
                name="lastName"
                placeholder={`Last Name`}
                className="w-full sm:w-full sm:pr-5 tracking-[0.04px] border-blue-A700_7f border border-solid"
              />
            </div>
            <Input
              color="gray_900_06"
              shape="round"
              name="userName"
              placeholder={`Username`}
              className="sm:pr-5 tracking-[0.04px] border-blue-A700_7f border border-solid"
            />
            <Input
              color="gray_900_06"
              shape="round"
              name="email"
              placeholder={`E-mail address`}
              className="sm:pr-5 tracking-[0.04px] border-blue-A700_7f border border-solid"
            />
            <div className="flex flex-col items-start gap-[3px]">
              {!!password ? (
                <div className="flex self-stretch pt-[21px] pb-[11px] pl-3 pr-[35px] gap-px sm:pt-5 sm:pr-5 text-gray-50 tracking-[0.04px] text-left text-sm border-red-400 border border-solid bg-gray-900_06 rounded-md">
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
              <div className="flex self-stretch pt-[21px] pb-[11px] pl-3 pr-[35px] gap-px sm:pt-5 sm:pr-5 text-gray-50 tracking-[0.04px] text-left text-sm border-red-400 border border-solid bg-gray-900_06 rounded-md">
                • • • • • • • • • • • • • • • •
              </div>
              <Heading size="s" as="h2" className="!text-red-400 tracking-[0.03px] !font-semibold">
                Password is incorrect
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="flex flex-col self-stretch items-center gap-[15px]">
              <Button size="5xl" shape="round" className="w-full sm:px-5 !text-gray-50 uppercase font-medium">
                SIGN UP
              </Button>
              <div className="flex justify-center items-start w-[67%] md:w-full gap-1">
                <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
                <Text size="md" as="p" className="h-[13px] !text-gray-50 text-center">
                  Or
                </Text>
                <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
              </div>
              <div className="flex flex-col self-stretch gap-2">
                <Button
                  color="gray_300_01"
                  size="3xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !rounded-lg"
                >
                  Sign Up with Google
                </Button>
                <Button
                  color="gray_300_01"
                  size="3xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon_blue_a400.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !rounded-lg"
                >
                  Sign Up with Facebook
                </Button>
                <Button
                  color="gray_300_01"
                  size="3xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_social_icon_white_a700.svg" alt="Social icon" />}
                  className="w-full gap-3 sm:px-5 !text-white-A700 !rounded-lg"
                >
                  Sign Up with Apple
                </Button>
              </div>
            </div>
            <Text size="xl" as="p" className="!text-gray-50 text-center">
              <span className="text-gray-50">Already have an account?&nbsp;</span>
              <span className="text-blue-A700 font-semibold">Log In</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
