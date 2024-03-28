import React from "react";
import HomepageTwentyReview from "../../components/HomepageTwentyReview";
import { default as ModalProvider } from "react-modal";

export default function HomepageTwenty({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[695px]">
      <div className="w-full">
        <HomepageTwentyReview
          reviewlocation="Review Location"
          select={true}
          description="Placeholder"
          className="flex md:flex-col justify-center items-center pt-[9px] border-gray-300_02 border border-solid bg-gray-50_01 rounded-md"
        />
      </div>
    </ModalProvider>
  );
}
