import React from "react";
import { Button, Text, Heading, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function HomepageThirteen({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[498px]">
      <div className="w-full px-6 sm:px-5 bg-gray-900_05 rounded-lg">
        <div className="self-end py-[105px] md:py-5">
          <div className="flex flex-col items-center mb-[5px] gap-5">
            <div className="flex flex-col items-center w-[83%] md:w-full gap-6">
              <Img src="images/img_checkmark.svg" alt="checkmark_one" className="h-[100px] w-[100px]" />
              <Heading size="xl" as="h1" className="!text-blue-A700 text-center">
                Congratulations!
              </Heading>
              <Text size="4xl" as="p" className="!text-gray-50 text-center">
                Your password has been reset successfully!
              </Text>
            </div>
            <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
              login
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
