import React from "react";
import { Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageNine({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="w-full px-6 sm:px-5 bg-gray-900_05 rounded-lg">
        <div className="self-end py-[26px] sm:py-5">
          <div className="flex flex-col mb-[5px] gap-6">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center w-[47%] md:w-full gap-[19px]">
                <Img src="images/img_frame.svg" alt="image" className="h-[108px] w-[108px]" />
                <Text as="p" className="!text-blue-A700 text-center !font-medium">
                  Verify E-mail Address
                </Text>
              </div>
              <Text as="p" className="!text-gray-50 text-center leading-[140%]">
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
            <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
              Go to your mailbox
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
