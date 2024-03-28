import React from "react";
import { Heading } from "./..";

export default function HomepageSevenNav({ spotta = "SPOTTA", ng = "NG", search = "Login", ...props }) {
  return (
    <div {...props}>
      <div className="flex">
        <div className="flex gap-1 py-[7px] flex-wrap">
          <Heading size="s" as="h1" className="self-start !text-gray-50 tracking-[5.00px] !font-clashdisplay">
            {spotta}
          </Heading>
          <Heading
            size="xs"
            as="h2"
            className="flex justify-center items-center h-[13px] p-[3px] !text-gray-50 !font-clashdisplay bg-indigo-A200 rounded-sm"
          >
            {ng}
          </Heading>
        </div>
      </div>
      <a href="Login" target="_blank" rel="noreferrer">
        <Heading size="md" as="h2" className="!text-indigo-A200_01 tracking-[0.70px] uppercase text-right">
          {search}
        </Heading>
      </a>
    </div>
  );
}
