import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  {
    tablecell: "May 10th, 2024",
    areasone: "Ibeju-Lekki",
    views: "3550",
    reviewsone: "128",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "June 24th, 2024",
    areasone: "Iyana-Ipaja",
    views: "4250",
    reviewsone: "658",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "August 25th, 2024",
    areasone: "Ikotun",
    views: "1250",
    reviewsone: "58",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ibeju-Lekki",
    views: "3550",
    reviewsone: "128",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Iyana-Ipaja",
    views: "4250",
    reviewsone: "658",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ikotun",
    views: "1250",
    reviewsone: "58",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ibeju-Lekki",
    views: "3550",
    reviewsone: "128",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Iyana-Ipaja",
    views: "4250",
    reviewsone: "658",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ikotun",
    views: "1250",
    reviewsone: "58",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ibeju-Lekki",
    views: "3550",
    reviewsone: "128",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Iyana-Ipaja",
    views: "4250",
    reviewsone: "658",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ikotun",
    views: "1250",
    reviewsone: "58",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Ibeju-Lekki",
    views: "3550",
    reviewsone: "128",
    rowview: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    areasone: "Iyana-Ipaja",
    views: "4250",
    reviewsone: "658",
    rowview: "images/img_notification.svg",
  },
];

export default function AdminTwoPage() {
  const [searchBarValue39, setSearchBarValue39] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("tablecell", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h1" className="md:p-5 border-blue_gray-50 border border-solid">
            Date Created
          </Heading>
        ),
        meta: { width: "288px" },
      }),
      table1ColumnHelper.accessor("areasone", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h2" className="md:p-5 border-blue_gray-50 border border-solid">
            Areas
          </Heading>
        ),
        meta: { width: "408px" },
      }),
      table1ColumnHelper.accessor("views", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h3" className="md:p-5 border-blue_gray-50 border border-solid">
            Views
          </Heading>
        ),
        meta: { width: "220px" },
      }),
      table1ColumnHelper.accessor("reviewsone", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-r border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h4" className="md:p-5 border-blue_gray-50 border border-solid">
            Reviews
          </Heading>
        ),
        meta: { width: "220px" },
      }),
      table1ColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex flex-col items-center justify-center border-blue_gray-50 border-l border-b border-r border-solid">
            <Img src={info?.getValue?.()} alt="notification" className="h-[16px] w-[16px] my-[13px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex md:p-5">
            <div className="h-[50px] w-[24px] border-blue_gray-50 border border-solid" />
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
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="md:self-stretch p-[37px] md:p-5 flex-1">
            <div className="mb-[3px]">
              <div className="flex md:flex-col justify-between items-start gap-5">
                <Text size="6xl" as="p">
                  All Areas Created
                </Text>
                <div className="flex sm:flex-col justify-center items-center w-[42%] md:w-full gap-2">
                  <Button size="xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[143px] !rounded">
                    CREATE AREA
                  </Button>
                  <Input
                    size="xs"
                    shape="square"
                    name="search"
                    placeholder={`Search`}
                    value={searchBarValue39}
                    onChange={(e) => setSearchBarValue39(e)}
                    prefix={<Img src="images/img_rewind.svg" alt="rewind" className="cursor-pointer" />}
                    suffix={
                      searchBarValue39?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue39("")}
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
                size="xs"
                variant="striped"
                bodyProps={{ className: "" }}
                headerProps={{ className: "bg-gray-50_02 md:flex-col" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="mt-[23px]"
                columns={table1Columns}
                data={table1Data}
              />
              <div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col self-center items-center justify-center p-1 z-[1] border-blue_gray-50 border-l border-b border-r border-solid">
                    <Img src="images/img_notification.svg" alt="notification" className="h-[16px] w-[16px] my-[13px]" />
                  </div>
                  <div className="flex flex-col self-stretch items-end mt-[-50px] relative">
                    <div className="flex mr-6 p-4 md:mr-0 z-[1] border-blue_gray-50 border-l border-b border-r border-solid">
                      <Text as="p">658</Text>
                    </div>
                    <div className="flex flex-col self-stretch items-end mt-[-50px] relative">
                      <div className="flex mr-[244px] p-4 md:mr-0 z-[1] border-blue_gray-50 border-l border-b border-r border-solid">
                        <Text as="p">4250</Text>
                      </div>
                      <div className="flex flex-col self-stretch items-start mt-[-50px] relative">
                        <div className="flex ml-72 p-4 md:ml-0 z-[1] border-blue_gray-50 border-l border-b border-r border-solid">
                          <Text as="p">Iyana-Ipaja</Text>
                        </div>
                        <div className="flex flex-col self-stretch items-start mt-[-50px] relative">
                          <div className="flex p-4 border-blue_gray-50 border-l border-b border-r border-solid">
                            <Text as="p">May 10th, 2024</Text>
                          </div>
                          <div className="flex md:flex-col self-stretch justify-between items-center mt-[-22px] gap-5 relative border-blue_gray-50 border border-solid">
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
                            <div className="flex sm:flex-col justify-between items-center w-[61%] md:w-full gap-5">
                              <div className="flex items-center">
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="flex justify-center items-center h-[40px] w-[40px] !text-gray-50 text-center !font-medium bg-blue-A700 rounded-[20px]"
                                >
                                  1
                                </Text>
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="ml-[17px] !text-blue_gray-500 text-center !font-medium"
                                >
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
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="ml-[31px] !text-blue_gray-500 text-center !font-medium"
                                >
                                  8
                                </Text>
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="ml-[33px] !text-blue_gray-500 text-center !font-medium"
                                >
                                  9
                                </Text>
                                <div className="flex flex-col ml-[17px]">
                                  <div className="flex flex-col items-center p-[11px]">
                                    <Text
                                      size="2xl"
                                      as="p"
                                      className="h-[17px] !text-blue_gray-500 text-center !font-medium"
                                    >
                                      10
                                    </Text>
                                  </div>
                                </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
