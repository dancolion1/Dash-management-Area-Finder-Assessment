import React from "react";
import { Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageTwo({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="flex flex-col w-full gap-6 p-6 sm:p-5 bg-gray-50_01 rounded-lg">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center w-[47%] md:w-full gap-[19px]">
            <Img src="images/img_frame.svg" alt="image" className="h-[108px] w-[108px]" />
            <Text as="p" className="!text-blue-A700 text-center !font-medium">
              Verify E-mail Address
            </Text>
          </div>
          <Text as="p" className="text-center leading-[140%]">
            <>
              Thank you for signing up on AreaFinder. In order to
              <br />
              keep your account safe and secure, we’ll need you to
              <br />
              verify your e-mail address by clicking the verification
              <br />
              link sent to your mail box. Thank you!
            </>
          </Text>
        </div>
        <Button size="5xl" shape="round" className="w-full sm:px-5 !text-gray-50 uppercase font-medium">
          Go to your mailbox
        </Button>
      </div>
    </ModalProvider>
  );
}
