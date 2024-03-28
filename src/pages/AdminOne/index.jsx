import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    tablecell: "May 10th, 2024",
    areasone: "Agege, Lagos",
    name: "Tina Rhodes",
    review: "Significantly above expectations",
    views: "850",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Apata, Ibadan",
    name: "Henry Nwoko",
    review: "Met expectations",
    views: "724",
    status: "Status",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ekpoma, Benin",
    name: "Dami Biobaku",
    review: "Met expectations",
    views: "1299",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Idumota, Lagos",
    name: "Tina Rhodes",
    review: "Above expectations",
    views: "234",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Odeda, Abeokuta",
    name: "James Taiwo",
    review: "Met expectations",
    views: "419",
    status: "Status",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Tina Rhodes",
    review: "Below expectations",
    views: "101",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Above expectations",
    views: "1011",
    status: "Declined",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "James Taiwo",
    review: "Above expectations",
    views: "2300",
    status: "Status",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Badagry, Lagos",
    name: "Dami Biobaku",
    review: "Significantly below expectations",
    views: "640",
    status: "Approved",
    rowview: "images/img_notification.svg",
  },
];

export default function AdminOnePage() {
  const [searchBarValue38, setSearchBarValue38] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("tablecell", {
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
      tableColumnHelper.accessor("areasone", {
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
      tableColumnHelper.accessor("name", {
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
        meta: { width: "201px" },
      }),
      tableColumnHelper.accessor("review", {
        cell: (info) => (
          <div className="flex">
            <Button
              color="blue_gray_50"
              size="5xl"
              variant="outline"
              shape="square"
              className="sm:pr-5 text-gray-900_03 min-w-[285px]"
            >
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading as="h4" className="border-blue_gray-50 border-t border-b border-r border-solid">
            Review
          </Heading>
        ),
        meta: { width: "285px" },
      }),
      tableColumnHelper.accessor("views", {
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
      tableColumnHelper.accessor("status", {
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
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex">
            <div className="flex flex-col items-center justify-center p-2 border-blue_gray-50 border-b border-r border-solid">
              <Img src={info?.getValue?.()} alt="notification" className="h-[16px] w-[16px] my-[9px]" />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <div className="h-[50px] w-[32px] border-blue_gray-50 border-t border-b border-r border-solid" />
          </div>
        ),
        meta: { width: "32px" },
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
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="flex flex-col md:self-stretch gap-2.5 p-[39px] md:p-5 flex-1">
            <div className="flex flex-col gap-[39px]">
              <div className="flex flex-col gap-[21px]">
                <div className="flex justify-between items-start gap-5 flex-wrap">
                  <Text size="6xl" as="p" className="mb-0.5">
                    Admin Dashboard
                  </Text>
                  <Text as="p">Monday, February 19th, 2024</Text>
                </div>
                <div className="flex md:flex-col gap-6">
                  <div className="flex flex-col items-start w-full pl-[9px] pr-[15px] gap-[3px] py-[15px] border-blue-A700 border-t border-l-[6px] border-b border-r border-solid bg-gray-100_02 rounded-md">
                    <div className="flex items-center ml-2 gap-2 md:ml-0">
                      <Button color="blue_gray_900" size="lg" shape="circle" className="w-[32px] !rounded-[16px]">
                        <Img src="images/img_linkedin.svg" />
                      </Button>
                      <Text size="6xl" as="p">
                        AREAS
                      </Text>
                    </div>
                    <Text size="7xl" as="p" className="self-end text-right">
                      246
                    </Text>
                  </div>
                  <div className="flex flex-col items-start w-full pl-[9px] pr-[15px] gap-[3px] py-[15px] border-gray-900_03 border-t border-l-[6px] border-b border-r border-solid bg-gray-100_02 rounded-md">
                    <div className="flex items-center w-[44%] md:w-full ml-2 gap-2 md:ml-0">
                      <Img
                        src="images/img_streamline_chat_blue_gray_900.svg"
                        alt="streamlinechat"
                        className="h-[32px] w-[32px] rounded-[50%]"
                      />
                      <Text size="6xl" as="p">
                        REVIEWS
                      </Text>
                    </div>
                    <Text size="7xl" as="p" className="self-end text-right">
                      416
                    </Text>
                  </div>
                  <div className="flex flex-col items-start w-full pl-[9px] pr-[15px] gap-[3px] py-[15px] border-teal-300 border-t border-l-[6px] border-b border-r border-solid bg-gray-100_02 rounded-md">
                    <div className="flex items-center w-[36%] md:w-full ml-2 gap-2 md:ml-0">
                      <Img
                        src="images/img_eye_blue_gray_900.svg"
                        alt="eye_one"
                        className="h-[32px] w-[32px] rounded-[50%]"
                      />
                      <Text size="6xl" as="p">
                        USERS
                      </Text>
                    </div>
                    <Text size="7xl" as="p" className="self-end text-right">
                      250
                    </Text>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-[18px]">
                  <div className="flex sm:flex-col justify-between items-start gap-5">
                    <Text size="6xl" as="p">
                      Recent Reviews
                    </Text>
                    <div className="flex justify-center items-center w-[29%] sm:w-full gap-2">
                      <Input
                        size="xs"
                        shape="square"
                        name="search"
                        placeholder={`Search`}
                        value={searchBarValue38}
                        onChange={(e) => setSearchBarValue38(e)}
                        prefix={<Img src="images/img_rewind.svg" alt="rewind" className="cursor-pointer" />}
                        suffix={
                          searchBarValue38?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue38("")}
                              height={10}
                              width={10}
                              fillColor="#8f95b2ff"
                            />
                          ) : null
                        }
                        className="gap-2.5 sm:pr-5 text-blue_gray-300 flex-grow"
                      />
                      <Button
                        size="xl"
                        variant="outline"
                        shape="round"
                        className="sm:px-5 uppercase font-medium min-w-[100px] !rounded"
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
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-between items-center gap-5 border-blue_gray-50 border border-solid">
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
    </>
  );
}
