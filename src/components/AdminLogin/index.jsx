import React from "react";
import { Text, Button, Input, Img } from "./..";

export default function AdminLogin({
  login = "Log In",
  label = "E-mail",
  labelOne = "Password",
  logIn = "LOG IN",
  forgotyour = "Forgot your Password?",
  ...props
}) {
  return (
    <div {...props}>
      <a href="#">
        <Text size="5xl" as="p">
          {login}
        </Text>
      </a>
      <div className="flex flex-col self-stretch gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-[3px]">
            <Text size="2xl" as="p" className="tracking-[0.04px]">
              {label}
            </Text>
            <Input
              size="lg"
              shape="round"
              name="email"
              className="self-stretch sm:pr-5 border-gray-300_02 border border-solid"
            />
          </div>
          <div className="flex flex-col items-start gap-[3px]">
            <Text size="2xl" as="p" className="tracking-[0.04px]">
              {labelOne}
            </Text>
            <Input
              size="lg"
              shape="round"
              name="password"
              suffix={<Img src="images/img_passwordpassword_indigo_100.svg" alt="passwordpassword" />}
              className="self-stretch gap-[35px] border-gray-300_02 border border-solid"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[25px]">
          <Button size="5xl" shape="round" className="w-full sm:px-5 font-medium !rounded-lg">
            {logIn}
          </Button>
          <a href="#">
            <Text as="p" className="underline">
              {forgotyour}
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
