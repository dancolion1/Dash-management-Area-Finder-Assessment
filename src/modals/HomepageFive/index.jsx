import React from "react";
import { Button, Input, Img, Heading, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageFive({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="flex flex-col w-full pb-6 gap-5 px-6 sm:pb-5 sm:px-5 bg-gray-50_01 rounded-lg">
        <div className="flex flex-col items-end gap-[21px]">
          <div className="flex justify-between items-center w-[65%] md:w-full mt-[78px] gap-5">
            <a href="#" className="self-start">
              <Text as="p" className="!font-medium">
                Reset Password
              </Text>
            </a>
            <Img src="images/img_close.svg" alt="close_one" className="self-end h-[16px] w-[16px]" />
          </div>
          <div className="flex flex-col self-stretch items-start gap-[5px]">
            <Text as="p">Please, input your Password</Text>
            <div className="flex flex-col self-stretch gap-1">
              <div className="flex pt-[21px] pb-[11px] pl-3 pr-[35px] gap-px sm:pt-5 sm:pr-5 text-gray-900_04 tracking-[0.04px] text-left text-sm border-red-400 border border-solid bg-gray-50_03 rounded-md">
                • • • • • • • • • • • • • • • •
              </div>
              <Heading size="s" as="h1" className="!text-red-400 tracking-[0.03px] !font-semibold leading-[8px]">
                <span className="text-red-400 text-[8px] font-medium">
                  <>
                    Password must have:
                    <br />
                  </>
                </span>
                <span className="text-red-400 text-[6px] font-normal">
                  <>
                    8 Characters minimum
                    <br />
                    At least one Uppercase character
                    <br />
                    At least one number and one special character
                  </>
                </span>
              </Heading>
            </div>
          </div>
          <Input
            shape="round"
            type="password"
            name="password"
            placeholder={`Password`}
            suffix={<Img src="images/img_passwordpassword.svg" alt="passwordpassword" />}
            className="self-stretch gap-[35px] tracking-[0.04px] border-gray-300_02 border border-solid"
          />
        </div>
        <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
          reset password
        </Button>
      </div>
    </ModalProvider>
  );
}
