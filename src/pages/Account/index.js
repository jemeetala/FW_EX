import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  CheckBox,
  List,
  Stack,
  Input,
} from "components";

const AccountPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="bg-bluegray_900 items-center lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group345_5.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group345"
              />
              <Image
                src={"images/img_dashboardoutli_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="dashboardOutli"
              />
              <Image
                src={"images/img_usercircleout_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="usercircleOut"
              />
              <Image
                src={"images/img_group331_5.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group331"
              />
              <Image
                src={"images/img_boxoutline_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="boxOutline"
              />
              <Image
                src={"images/img_notesoutline_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="notesOutline"
              />
              <Image
                src={"images/img_chartpiealto_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="chartpiealtO"
              />
              <Image
                src={"images/img_presentationli_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="presentationli"
              />
              <Image
                src={"images/img_settingoutline_7.svg"}
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
                      src={"images/img_searchoutline_6.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="searchOutline"
                    />
                    <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                      Contacts
                    </Text>
                    <Image
                      src={"images/img_angledownoutl_6.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownOutl"
                    />
                  </Row>
                  <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                    Search your CRM...
                  </Text>
                  <Row className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]">
                    <Image
                      src={"images/img_group5_6.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_7.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_7.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Image
                      src={"images/img_group100_6.svg"}
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                      alt="Group100"
                    />
                    <Image
                      src={"images/img_group99_6.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group99"
                    />
                  </Row>
                </Row>
              </header>
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
                <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Accounts
                </Text>
                <Row className="items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[32%]">
                  <Image
                    src={"images/img_angleleftbou_5.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angleleftbOu"
                  />
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                    My Accounts (03)
                  </Text>
                  <Row className="bg-indigo_51 border border-blue_800 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] rounded-radius4 w-[33%]">
                    <Image
                      src={"images/img_vector_40.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[19%]"
                      alt="Vector"
                    />
                    <Text className="font-normal xl:ml-[10px] ml-[11.99px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      My Accounts
                    </Text>
                  </Row>
                  <Row className="bg-indigo_51 border border-blue_800 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] rounded-radius4 w-[19%]">
                    <Image
                      src={"images/img_vector_41.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[43%]"
                      alt="Vector"
                    />
                    <Text className="font-normal xl:ml-[10px] ml-[11.99px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      All
                    </Text>
                  </Row>
                </Row>
                <Row className="items-center justify-center lg:ml-[300px] xl:ml-[343px] ml-[386px] 3xl:ml-[463px] w-[32%]">
                  <Button
                    className="2xl:pr-[14px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-bluegray_900 border border-gray_200 border-solid flex items-center justify-between lg:pl-[6px] lg:pr-[11px] lg:py-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 text-center w-[29%] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    rightIcon={
                      <Image
                        src={"images/img_vector_42.svg"}
                        className="w-[10.4px] text-center lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px]"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700">
                      Add account
                    </div>
                  </Button>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[37%]">
                    <Image
                      src={"images/img_webgridaltou_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Edit coumns
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[28%]">
                    <Image
                      src={"images/img_filteroutline_5.svg"}
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
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] xl:pr-[100px] pr-[113px] 3xl:pr-[135px] lg:pr-[87px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
                <CheckBox
                  className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[7%]"
                  inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                  name="Group145"
                  label="Name"
                ></CheckBox>
                <Image
                  src={"images/img_sortoutline_30.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[157px] xl:ml-[179px] ml-[202px] 3xl:ml-[242px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Open deals amou...
                </Text>
                <Image
                  src={"images/img_sortoutline_31.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  last contacted ti...
                </Text>
                <Image
                  src={"images/img_sortoutline_32.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Related contacts
                </Text>
                <Text className="font-semibold lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  sales owner
                </Text>
                <Image
                  src={"images/img_sortoutline_33.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Webdite
                </Text>
                <Image
                  src={"images/img_sortoutline_34.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[2px] lg:ml-[2px] ml-[3px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
                <Text className="font-semibold 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Work
                </Text>
                <Image
                  src={"images/img_sortoutline_35.svg"}
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
                      name="Group146"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_42.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group147"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_43.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group148"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_44.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group149"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_45.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group150"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_46.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group151"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_47.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group152"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_48.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                  <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] w-[8%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[85%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group153"
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
                  <Row className="font-sourcesanspro items-center justify-center lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] my-[1px] w-[29%]">
                    <Text className="font-semibold xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      $200
                    </Text>
                    <Text className="font-normal 3xl:ml-[114px] lg:ml-[74px] xl:ml-[84px] ml-[95.2px] 2xl:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      13 days ago
                    </Text>
                    <Column className="bg-amber_100 font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[83px] ml-[94.2px] 2xl:ml-[94px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                        J
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-between 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[25%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      www.dhiwise.com
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      1234567866
                    </Text>
                    <Image
                      src={"images/img_morevertical_49.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="morevertical"
                    />
                  </Row>
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

export default AccountPage;
