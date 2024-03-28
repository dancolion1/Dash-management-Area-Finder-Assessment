import React from "react";
import { Button, Input, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageFour({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="w-full px-6 sm:px-5 bg-gray-50_01 rounded-lg">
        <div className="self-end py-[130px] md:py-5">
          <div className="flex flex-col items-end mb-[5px] gap-[23px]">
            <div className="flex justify-between items-center w-[60%] md:w-full gap-5">
              <a href="#">
                <Text as="p" className="!font-medium">
                  Reset Password
                </Text>
              </a>
              <Img src="images/img_close.svg" alt="close_one" className="h-[16px] w-[16px]" />
            </div>
            <div className="flex flex-col self-stretch items-start gap-[22px]">
              <Text as="p">Please, enter your valid e-mail address.</Text>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={`E-mail Address`}
                className="self-stretch sm:pr-5 tracking-[0.04px] border-gray-300_02 border border-solid"
              />
              <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
                get recovery link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}