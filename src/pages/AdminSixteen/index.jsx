import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table9Data = [
  {
    tablecell: "May 10th, 2024",
    areasone: "Agege, Lagos",
    name: "Tina Rhodes",
    review: "Met expectations...",
    views: "850",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Apata, Ibadan",
    name: "Henry Nwoko",
    review: "Above expectations...",
    views: "724",
    status: "Pending",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "June 24th, 2024",
    areasone: "Ekpoma, Benin",
    name: "Dami Biobaku",
    review: "This is a very lovely...",
    views: "1299",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Idumota, Lagos",
    name: "Tina Rhodes",
    review: "Met expectations...",
    views: "234",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "June 24th, 2024",
    areasone: "Odeda, Abeokuta",
    name: "James Taiwo",
    review: "Above expectations...",
    views: "419",
    status: "Pending",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "June 24th, 2024",
    areasone: "Badagry, Lagos",
    name: "Tina Rhodes",
    review: "This is a very lovely...",
    views: "101",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Met expectations...",
    views: "1011",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "James Taiwo",
    review: "Above expectations...",
    views: "2300",
    status: "Pending",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "This is a very lovely...",
    views: "640",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Met expectations...",
    views: "640",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Above expectations...",
    views: "640",
    status: "Pending",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "This is a very lovely...",
    views: "640",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Met expectations...",
    views: "640",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
];

export default function AdminSixteenPage() {
  const [searchBarValue55, setSearchBarValue55] = React.useState("");
  const table9Columns = React.useMemo(() => {
    const table9ColumnHelper = createColumnHelper();
    return [
      table9ColumnHelper.accessor("tablecell", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h1" className="border-blue_gray-50 border border-solid">
            Date Created
          </Heading>
        ),
        meta: { width: "181px" },
      }),
      table9ColumnHelper.accessor("areasone", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h2" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Areas
          </Heading>
        ),
        meta: { width: "181px" },
      }),
      table9ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h3" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Name
          </Heading>
        ),
        meta: { width: "233px" },
      }),
      table9ColumnHelper.accessor("review", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h4" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Review
          </Heading>
        ),
        meta: { width: "261px" },
      }),
      table9ColumnHelper.accessor("views", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h5" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Views
          </Heading>
        ),
        meta: { width: "140px" },
      }),
      table9ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text as="p" className="!text-red-600 !font-medium border-blue_gray-50 border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h6" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Status
          </Heading>
        ),
        meta: { width: "140px" },
      }),
      table9ColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex">
            <div className="flex flex-col items-center justify-center p-1 border-blue_gray-50 border-b border-r border-solid">
              <Img src={info?.getValue?.()} alt="notification" className="h-[16px] w-[16px] my-[13px]" />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <div className="h-[50px] w-[24px] border-blue_gray-50 border-t border-b border-r border-solid" />
          </div>
        ),
        meta: { width: "24px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <Header2 className="p-4 bg-gray-100_02" />
        <div className="flex md:flex-col justify-center">
          <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="md:self-stretch p-[15px] md:p-5 flex-1">
            <div className="flex flex-col mb-[25px] gap-[23px]">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <Text size="6xl" as="p" className="self-end mb-[5px]">
                  All Reviews Created
                </Text>
                <div className="flex md:flex-col justify-center items-end w-[73%] md:w-full">
                  <Button
                    color="gray_100"
                    size="5xl"
                    shape="round"
                    leftIcon={<Img src="images/img_check_circle.svg" alt="check-circle" />}
                    className="mb-2.5 gap-3 sm:px-5 font-clashdisplay font-medium border-green-800 border border-solid min-w-[339px]"
                  >
                    Review Edited Successfully
                  </Button>
                  <Button
                    size="xl"
                    shape="round"
                    className="ml-1 md:ml-0 sm:px-5 uppercase font-medium min-w-[159px] !rounded"
                  >
                    create REVIEW
                  </Button>
                  <Input
                    size="xs"
                    shape="square"
                    name="search"
                    placeholder={`Search`}
                    value={searchBarValue55}
                    onChange={(e) => setSearchBarValue55(e)}
                    prefix={<Img src="images/img_rewind.svg" alt="rewind" className="cursor-pointer" />}
                    suffix={
                      searchBarValue55?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue55("")}
                          height={10}
                          width={10}
                          fillColor="#8f95b2ff"
                        />
                      ) : null
                    }
                    className="w-[28%] md:w-full ml-2 gap-2.5 md:ml-0 sm:pr-5 text-blue_gray-300"
                  />
                  <Button
                    size="xl"
                    variant="outline"
                    shape="round"
                    className="ml-2 md:ml-0 sm:px-5 uppercase font-medium min-w-[100px] !rounded"
                  >
                    Search
                  </Button>
                </div>
              </div>
              <ReactTable
                size="md"
                bodyProps={{ className: "" }}
                headerProps={{ className: "md:flex-col" }}
                rowDataProps={{ className: "md:flex-col" }}
                columns={table9Columns}
                data={table9Data}
              />
              <div className="flex md:flex-col justify-between items-center gap-5 border-blue_gray-50 border border-solid">
                <div className="flex">
                  <Button
                    color="white_A700"
                    size="xl"
                    shape="round"
                    leftIcon={<Img src="images/img_arrowleft_blue_gray_800.svg" alt="arrow_left" />}
                    className="gap-2 font-semibold border-blue_gray-100_01 border border-solid min-w-[115px] !rounded-lg"
                  >
                    Previous
                  </Button>
                </div>
                <div className="flex justify-between items-center w-[61%] md:w-full gap-5">
                  <div className="flex items-center flex-wrap">
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[40px] w-[40px] !text-blue-A700 text-center !font-medium bg-blue-A700_0c rounded-[20px]"
                    >
                      1
                    </Text>
                    <Text size="2xl" as="p" className="ml-[17px] !text-blue_gray-500 text-center !font-medium">
                      2
                    </Text>
                    <Text size="2xl" as="p" className="ml-8 !text-blue_gray-500 text-center !font-medium">
                      3
                    </Text>
                    <Text
                      size="2xl"
                      as="p"
                      className="self-end mb-[7px] ml-[31px] !text-blue_gray-500 text-center !font-medium"
                    >
                      ...
                    </Text>
                    <Text size="2xl" as="p" className="ml-[31px] !text-blue_gray-500 text-center !font-medium">
                      8
                    </Text>
                    <Text size="2xl" as="p" className="ml-[33px] !text-blue_gray-500 text-center !font-medium">
                      9
                    </Text>
                    <Text size="2xl" as="p" className="h-[17px] ml-[29px] !text-blue_gray-500 text-center !font-medium">
                      10
                    </Text>
                  </div>
                  <div className="flex">
                    <Button
                      color="white_A700"
                      size="xl"
                      shape="round"
                      rightIcon={<Img src="images/img_arrowleft_blue_gray_800.svg" alt="arrow_right" />}
                      className="gap-2 font-semibold border-blue_gray-100_01 border border-solid min-w-[88px] !rounded-lg"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
