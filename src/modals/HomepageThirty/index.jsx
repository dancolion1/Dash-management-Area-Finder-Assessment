import React from "react";
import HomepageThirtyReview from "../../components/HomepageThirtyReview";
import { default as ModalProvider } from "react-modal";

export default function HomepageThirty({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[695px]">
      <div className="w-full">
        <HomepageThirtyReview
          createfromOne={true}
          className="pt-[25px] sm:pt-5 border-gray-300_02 border border-solid bg-gray-900_05 rounded-md"
        />
      </div>
    </ModalProvider>
  );
}
