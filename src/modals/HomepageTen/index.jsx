import React from "react";
import { Button, Input, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageTen({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="w-full px-6 sm:px-5 bg-gray-900_05 rounded-lg">
        <div className="self-end py-[132px] md:py-5">
          <div className="flex flex-col items-end mb-[5px] gap-[23px]">
            <div className="flex justify-between items-center w-[70%] md:w-full gap-5">
              <Text as="p" className="!text-gray-50 !font-medium">
                Resend Verification mail
              </Text>
              <Img src="images/img_close.svg" alt="close_one" className="h-[16px] w-[16px]" />
            </div>
            <div className="flex flex-col self-stretch items-start gap-[22px]">
              <Text as="p" className="!text-gray-50">
                Please, enter your valid e-mail address
              </Text>
              <Input
                color="gray_900_06"
                shape="round"
                type="email"
                name="email"
                placeholder={`E-mail Address`}
                className="self-stretch sm:pr-5"
              />
              <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
                resend verification link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
