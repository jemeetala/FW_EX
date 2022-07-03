import React from "react";

import {
  Column,
  Stack,
  Row,
  Image,
  Text,
  Input,
  CheckBox,
  List,
  Button,
} from "components";

const Products1Page = () => {
  return (
    <>
      <Column className="bg-gray_900_d8 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[100%]">
          <Row className="absolute inset-[0] items-start justify-evenly w-[100%]">
            <aside className="bg-bluegray_900 items-center justify-start lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
              <Column className="">
                <Image
                  src={"images/img_group345_2.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group345"
                />
                <Image
                  src={"images/img_dashboardoutli_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="dashboardOutli"
                />
                <Image
                  src={"images/img_usercircleout_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="usercircleOut"
                />
                <Image
                  src={"images/img_useroutline_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="userOutline"
                />
                <Image
                  src={"images/img_group331_2.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group331"
                />
                <Image
                  src={"images/img_notesoutline_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="notesOutline"
                />
                <Image
                  src={"images/img_chartpiealto_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="chartpiealtO"
                />
                <Image
                  src={"images/img_presentationli_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="presentationli"
                />
                <Image
                  src={"images/img_settingoutline_4.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="settingOutline"
                />
              </Column>
            </aside>
            <Column className="items-center justify-start 3xl:mb-[1077px] lg:mb-[697px] xl:mb-[797px] mb-[897px] w-[93%]">
              <header className="w-[100%]">
                <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                  <Row className="border border-bluegray_200 border-solid items-center justify-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                    <Image
                      src={"images/img_searchoutline_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="searchOutline"
                    />
                    <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                      Contacts
                    </Text>
                    <Image
                      src={"images/img_angledownoutl_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownOutl"
                    />
                  </Row>
                  <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                    Search your CRM...
                  </Text>
                  <Row className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]">
                    <Image
                      src={"images/img_group5_3.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_3.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_4.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Image
                      src={"images/img_group100_3.svg"}
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                      alt="Group100"
                    />
                    <Image
                      src={"images/img_group99_3.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group99"
                    />
                  </Row>
                </Row>
              </header>
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
                <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Products
                </Text>
                <Image
                  src={"images/img_angleleftbou_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                  All Products (1)
                </Text>
                <Row className="items-center justify-center lg:ml-[327px] xl:ml-[374px] ml-[421px] 3xl:ml-[505px] w-[50%]">
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    WrapClassName="2xl:pr-[14px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-bluegray_900 border border-gray_200 border-solid flex lg:pl-[6px] lg:pr-[11px] lg:py-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 w-[19%] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    name="Add product"
                    placeholder="Add product"
                    suffix={
                      <Image
                        src={"images/img_vector_24.svg"}
                        className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                    WrapClassName="2xl:pr-[14px] 3xl:ml-[12px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-white_A700 border border-gray_200 border-solid flex lg:ml-[7px] lg:pl-[6px] lg:pr-[11px] lg:py-[10px] ml-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 w-[21%] xl:ml-[8px] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    name="Add categories"
                    placeholder="Add categories"
                    suffix={
                      <Image
                        src={"images/img_vector_25.svg"}
                        className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[24%]">
                    <Image
                      src={"images/img_webgridaltou_2.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Edit coumns
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_2.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame420_1.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 w-[11%]"
                    alt="Frame420"
                  />
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[18%]">
                    <Image
                      src={"images/img_filteroutline_2.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="filterOutline"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Filters
                    </Text>
                    <Text className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      01
                    </Text>
                  </Row>
                </Row>
              </Row>
            </Column>
          </Row>
          <Column className="absolute bottom-[1%] items-start justify-start right-[0] w-[93%]">
            <Column className="items-center w-[100%]">
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[125px] xl:pr-[143px] pr-[161px] 3xl:pr-[193px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
                <CheckBox
                  className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[8%]"
                  inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                  name="Group77"
                  label="Name"
                ></CheckBox>
                <Image
                  src={"images/img_sortoutline_11.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[157px] xl:ml-[179px] ml-[202px] 3xl:ml-[242px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Active
                </Text>
                <Image
                  src={"images/img_sortoutline_12.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] ml-[61px] 3xl:ml-[73px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Base currency amount
                </Text>
                <Image
                  src={"images/img_sortoutline_13.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] ml-[95px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  category
                </Text>
                <Text className="font-semibold 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  created at
                </Text>
                <Image
                  src={"images/img_sortoutline_14.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  created by
                </Text>
                <Image
                  src={"images/img_sortoutline_15.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
              </Row>
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group78"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_16.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group79"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_17.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group80"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_18.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group81"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_19.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group82"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_20.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group83"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_21.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group84"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_22.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group85"
                      label="R"
                    ></CheckBox>
                    <div className="absolute bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  </Stack>
                  <Column className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[4%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[139px] ml-[157px] 3xl:ml-[188px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    $200
                  </Text>
                  <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[51px] ml-[58.2px] 2xl:ml-[58px] 3xl:ml-[69px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    --
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[158px] xl:ml-[181px] ml-[204.2px] 2xl:ml-[204px] 3xl:ml-[245px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[31%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Hardware
                    </Text>
                    <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      A few seconds ago
                    </Text>
                    <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Row>
                  <Image
                    src={"images/img_morevertical_23.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
              </List>
            </Column>
            <Input
              className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
              name="Showing 1-3 of "
              placeholder="Showing 1-3 of 3"
            ></Input>
          </Column>
          <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[38%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              WrapClassName="2xl:pb-[19px] 2xl:pt-[18px] 3xl:pb-[23px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[22px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[15px] lg:pl-[12px] lg:pr-[15px] lg:pt-[14px] pb-[19.5px] pl-[16px] pr-[20px] pt-[18.5px] w-[100%] xl:pb-[17px] xl:pl-[14px] xl:pr-[17px] xl:pt-[16px]"
              name="Add Account"
              placeholder="Add Account"
              suffix={
                <Image
                  src={"images/img_vector_26.svg"}
                  className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Column className="items-center w-[100%]">
              <Column className="bg-white_A700 items-start justify-center lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]">
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-sourcesanspro">
                    Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="2xl:pr-[15px] 3xl:ml-[40px] 3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[13px] bg-white_A700 border border-bluegray_100 border-solid flex lg:ml-[26px] lg:mt-[3px] lg:pl-[9px] lg:pr-[11px] lg:py-[8px] ml-[34px] mt-[4px] pl-[12px] pr-[15.34px] py-[11px] rounded-radius4 w-[88%] xl:ml-[30px] xl:mt-[3px] xl:pl-[10px] xl:pr-[13px] xl:py-[9px]"
                  name="Enter title of "
                  placeholder="Enter title of task"
                  suffix={
                    <Image
                      src={"images/img_vector_27.svg"}
                      className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Category
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                  WrapClassName="2xl:pr-[21px] 2xl:py-[12px] 3xl:ml-[40px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:py-[15px] border border-gray_200 border-solid flex lg:ml-[26px] lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[9px] ml-[34px] mt-[4px] pl-[16px] pr-[21.66px] py-[12.5px] rounded-radius4 w-[88%] xl:ml-[30px] xl:mt-[3px] xl:pl-[14px] xl:pr-[19px] xl:py-[11px]"
                  name="Choose value"
                  placeholder="Choose value"
                  suffix={
                    <Image
                      src={"images/img_vector_28.svg"}
                      className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <Row className="items-center justify-start lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[21%]">
                  <Image
                    src={"images/img_group44.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Group44"
                  />
                  <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                    Add outcome
                  </Text>
                </Row>
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  SKU Number
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                  WrapClassName="3xl:ml-[40px] border border-gray_200 border-solid lg:ml-[26px] lg:mt-[3px] ml-[34px] mt-[4px] rounded-radius4 w-[88%] xl:ml-[30px] xl:mt-[3px]"
                  name="Enter value"
                  placeholder="Enter value"
                ></Input>
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Owner
                </Text>
                <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] lg:pr-[25px] xl:pr-[29px] pr-[33px] 3xl:pr-[39px] w-[100%]">
                  <Row className="border border-gray_200 border-solid items-center justify-between lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Jemee Tala
                    </Text>
                    <Image
                      src={"images/img_frame466_1.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[262px] xl:ml-[299px] ml-[337px] 3xl:ml-[404px] my-[1px] object-contain w-[11%]"
                      alt="Frame466"
                    />
                  </Row>
                </Column>
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Valid till
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="2xl:pr-[17px] 2xl:py-[12px] 3xl:ml-[40px] 3xl:pl-[19px] 3xl:pr-[21px] 3xl:py-[15px] border border-gray_200 border-solid flex lg:ml-[26px] lg:mt-[3px] lg:pl-[12px] lg:pr-[13px] lg:py-[9px] ml-[34px] mt-[4px] pl-[16px] pr-[17.66px] py-[12.5px] rounded-radius4 w-[88%] xl:ml-[30px] xl:mt-[3px] xl:pl-[14px] xl:pr-[15px] xl:py-[11px]"
                  name="Choose date"
                  placeholder="Choose date"
                  suffix={
                    <Image
                      src={"images/img_vector_29.svg"}
                      className="w-[16.67px] h-[16.67px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
              </Column>
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] w-[100%]">
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                  WrapClassName="2xl:py-[14px] 3xl:pl-[21px] 3xl:py-[17px] bg-white_A700 border border-gray_200 border-solid flex lg:pl-[14px] lg:py-[11px] pl-[18px] pr-[0] py-[14.5px] rounded-radius4 w-[32%] xl:pl-[16px] xl:py-[12px]"
                  name="Customize field"
                  placeholder="Customize fields"
                  prefix={
                    <Image
                      src={"images/img_vector_30.svg"}
                      className="w-[20px] h-[20px] lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <Button className="bg-white_A700 border border-gray_200 border-solid font-normal mb-[1px] lg:ml-[154px] xl:ml-[177px] ml-[199px] 3xl:ml-[238px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[14%]">
                  Cancel
                </Button>
                <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[12%]">
                  Save
                </Button>
              </Row>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default Products1Page;
