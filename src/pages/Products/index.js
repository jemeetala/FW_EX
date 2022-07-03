import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Input,
  CheckBox,
  List,
  Stack,
} from "components";

const ProductsPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="bg-bluegray_900 items-center lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group345.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group345"
              />
              <Image
                src={"images/img_dashboardoutli.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="dashboardOutli"
              />
              <Image
                src={"images/img_usercircleout.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="usercircleOut"
              />
              <Image
                src={"images/img_useroutline.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="userOutline"
              />
              <Image
                src={"images/img_group331.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group331"
              />
              <Image
                src={"images/img_notesoutline.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="notesOutline"
              />
              <Image
                src={"images/img_chartpiealto.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="chartpiealtO"
              />
              <Image
                src={"images/img_presentationli.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="presentationli"
              />
              <Image
                src={"images/img_settingoutline.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="settingOutline"
              />
            </Column>
          </aside>
          <Column className="items-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] w-[93%]">
            <Column className="items-center w-[100%]">
              <header className="w-[100%]">
                <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                  <Row className="border border-bluegray_200 border-solid items-center justify-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                    <Image
                      src={"images/img_searchoutline.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="searchOutline"
                    />
                    <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                      Contacts
                    </Text>
                    <Image
                      src={"images/img_angledownoutl.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownOutl"
                    />
                  </Row>
                  <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                    Search your CRM...
                  </Text>
                  <Row className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]">
                    <Image
                      src={"images/img_group5.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Image
                      src={"images/img_group100.svg"}
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                      alt="Group100"
                    />
                    <Image
                      src={"images/img_group99.svg"}
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
                  src={"images/img_angleleftbou.svg"}
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
                        src={"images/img_vector.svg"}
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
                        src={"images/img_vector_1.svg"}
                        className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[24%]">
                    <Image
                      src={"images/img_webgridaltou.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Edit coumns
                    </Text>
                    <Image
                      src={"images/img_angledownsoli.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame420.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 w-[11%]"
                    alt="Frame420"
                  />
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[18%]">
                    <Image
                      src={"images/img_filteroutline.svg"}
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
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[125px] xl:pr-[143px] pr-[161px] 3xl:pr-[193px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
                <CheckBox
                  className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[8%]"
                  inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                  name="Group9"
                  label="Name"
                ></CheckBox>
                <Image
                  src={"images/img_sortoutline.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[157px] xl:ml-[179px] ml-[202px] 3xl:ml-[242px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Active
                </Text>
                <Image
                  src={"images/img_sortoutline_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] ml-[61px] 3xl:ml-[73px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Base currency amount
                </Text>
                <Image
                  src={"images/img_sortoutline_2.svg"}
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
                  src={"images/img_sortoutline_3.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  created by
                </Text>
                <Image
                  src={"images/img_sortoutline_4.svg"}
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
                      name="Group10"
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
                    src={"images/img_morevertical.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group11"
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
                    src={"images/img_morevertical_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group12"
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
                    src={"images/img_morevertical_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group13"
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
                    src={"images/img_morevertical_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group14"
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
                    src={"images/img_morevertical_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group15"
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
                    src={"images/img_morevertical_5.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group16"
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
                    src={"images/img_morevertical_6.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="morevertical"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group17"
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
                    src={"images/img_morevertical_7.svg"}
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
        </Row>
      </Column>
    </>
  );
};

export default ProductsPage;
