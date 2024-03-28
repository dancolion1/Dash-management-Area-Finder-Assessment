import React from "react";
import { Text, Button, Img, Input } from "./..";

export default function HomepageTwentySixLogin({
  login = "Log In",
  logIn = "Log in",
  subheadline = "Or",
  logInWith = "Log in with Google",
  loginwith1 = "Log in with Facebook",
  loginwith2 = "Log in with Apple",
  subheadlineOne = "Forgot your password?",
  confirmation,
  ...props
}) {
  return (
    <div {...props}>
      <a href="#">
        <Text size="5xl" as="p" className="!text-gray-50">
          {login}
        </Text>
      </a>
      <div className="flex flex-col self-stretch gap-4">
        <Input
          color="gray_900_02"
          shape="round"
          name="userName"
          placeholder={`Username`}
          className="sm:pr-5 border-blue-A700_7f border border-solid !rounded"
        />
        <Input
          color="gray_900_02"
          shape="round"
          name="password"
          placeholder={`Password`}
          suffix={<Img src="images/img_eye_gray_50.svg" alt="eye" />}
          className="gap-[35px] border-blue-A700_7f border border-solid !rounded"
        />
      </div>
      <div className="flex flex-col self-stretch gap-[15px]">
        <Button size="3xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
          {logIn}
        </Button>
        <div className="flex justify-center items-start gap-1">
          <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
          <Text size="md" as="p" className="h-[13px] !text-gray-50 text-center">
            {subheadline}
          </Text>
          <div className="h-px mt-[5px] bg-blue-A700_59 flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            color="gray_300_01"
            size="3xl"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_social_icon.svg" alt="Social icon" />}
            className="w-full gap-3 sm:px-5 !rounded-lg"
          >
            {logInWith}
          </Button>
          <Button
            color="gray_300_01"
            size="3xl"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_social_icon_blue_a400.svg" alt="Social icon" />}
            className="w-full gap-3 sm:px-5 !rounded-lg"
          >
            {loginwith1}
          </Button>
          <Button
            color="gray_300_01"
            size="3xl"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_social_icon_white_a700.svg" alt="Social icon" />}
            className="w-full gap-3 sm:px-5 !text-white-A700 !rounded-lg"
          >
            {loginwith2}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[15px]">
        <a href="#">
          <Text size="xl" as="p" className="!text-gray-50 text-center underline">
            {subheadlineOne}
          </Text>
        </a>
        <Text size="xl" as="p" className="flex !text-gray-50 text-center">
          <span className="text-gray-50">Don’t have an account?&nbsp;</span>
          <a href="#" className="text-blue-A700 font-semibold underline">
            Sign Up
          </a>
        </Text>
      </div>
    </div>
  );
}
