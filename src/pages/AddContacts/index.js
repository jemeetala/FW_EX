import React from "react";

import {
  Column,
  Stack,
  Row,
  Image,
  Text,
  Button,
  CheckBox,
  List,
  Input,
} from "components";

const AddContactsPage = () => {
  return (
    <>
      <Column className="bg-gray_900_d8 font-sourcesanspro items-center justify-end mx-[auto] w-[100%]">
        <Stack className="h-[1055px] 2xl:h-[1056px] 3xl:h-[1267px] lg:h-[821px] xl:h-[939px] w-[100%]">
          <Row className="absolute bottom-[3%] inset-x-[0] items-start justify-evenly top-[0] w-[100%]">
            <aside className="bg-bluegray_900 items-center justify-start lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
              <Column className="">
                <Image
                  src={"images/img_group345_4.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group345"
                />
                <Image
                  src={"images/img_dashboardoutli_4.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="dashboardOutli"
                />
                <Image
                  src={"images/img_group331_4.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group331"
                />
                <Image
                  src={"images/img_useroutline_4.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="userOutline"
                />
                <Image
                  src={"images/img_boxoutline_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="boxOutline"
                />
                <Image
                  src={"images/img_notesoutline_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="notesOutline"
                />
                <Image
                  src={"images/img_chartpiealto_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="chartpiealtO"
                />
                <Image
                  src={"images/img_presentationli_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="presentationli"
                />
                <Image
                  src={"images/img_settingoutline_6.svg"}
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
                      src={"images/img_searchoutline_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="searchOutline"
                    />
                    <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                      Contacts
                    </Text>
                    <Image
                      src={"images/img_angledownoutl_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownOutl"
                    />
                  </Row>
                  <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                    Search your CRM...
                  </Text>
                  <Row className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]">
                    <Image
                      src={"images/img_group5_5.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_6.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_6.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Image
                      src={"images/img_group100_5.svg"}
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                      alt="Group100"
                    />
                    <Image
                      src={"images/img_group99_5.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group99"
                    />
                  </Row>
                </Row>
              </header>
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-end lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
                <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Contacts
                </Text>
                <Row className="items-start justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[19%]">
                  <Image
                    src={"images/img_angleleftbou_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angleleftbOu"
                  />
                  <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                    My Contacts (10)
                  </Text>
                  <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Save view as
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[413px] xl:ml-[473px] ml-[532px] 3xl:ml-[638px] w-[34%]">
                  <Button
                    className="2xl:pr-[14px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-bluegray_900 border border-gray_200 border-solid flex items-center justify-between lg:pl-[6px] lg:pr-[11px] lg:py-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 text-center w-[33%] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    rightIcon={
                      <Image
                        src={"images/img_vector_32.svg"}
                        className="w-[10.4px] text-center lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px]"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700">
                      Import Contatcts
                    </div>
                  </Button>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[35%]">
                    <Image
                      src={"images/img_webgridaltou_4.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Edit coumns
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_4.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[27%]">
                    <Image
                      src={"images/img_filteroutline_4.svg"}
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
          <Column className="absolute bottom-[0] items-center justify-start right-[0] w-[93%]">
            <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] xl:pr-[100px] pr-[113px] 3xl:pr-[135px] lg:pr-[87px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
              <CheckBox
                className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[7%]"
                inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                name="Group117"
                label="Name"
              ></CheckBox>
              <Image
                src={"images/img_sortoutline_23.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
              <Row className="items-center justify-center lg:ml-[157px] xl:ml-[179px] ml-[202px] 3xl:ml-[242px] w-[7%]">
                <Image
                  src={"images/img_infocircleout_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="infocircleOut"
                />
                <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Score
                </Text>
                <Image
                  src={"images/img_sortoutline_24.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
              </Row>
              <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Open deals amou...
              </Text>
              <Image
                src={"images/img_sortoutline_25.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
              <Text className="font-semibold lg:ml-[20px] xl:ml-[23px] ml-[26.25px] 2xl:ml-[26px] 3xl:ml-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                last contacted ti...
              </Text>
              <Image
                src={"images/img_sortoutline_26.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
              <Text className="font-semibold lg:ml-[16px] xl:ml-[18px] ml-[21.25px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                sales owner
              </Text>
              <Image
                src={"images/img_sortoutline_27.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
              <Text className="font-semibold lg:ml-[51px] xl:ml-[58px] ml-[66.25px] 2xl:ml-[66px] 3xl:ml-[79px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Emails
              </Text>
              <Image
                src={"images/img_sortoutline_28.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
              <Text className="font-semibold ml-[108.25px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Work
              </Text>
              <Image
                src={"images/img_sortoutline_29.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group118"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_9.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_33.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group119"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_10.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_34.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group120"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_11.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_35.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group121"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_12.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_36.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group122"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_13.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_37.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group123"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_14.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_38.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group124"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_15.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_39.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group125"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_16.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_40.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                  <CheckBox
                    className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group126"
                    label="R"
                  ></CheckBox>
                  <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                    <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                    <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                        Riya D
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                        Lead
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  18
                </Text>
                <Image
                  src={"images/img_arrowupsolid_17.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="arrowupSolid"
                />
                <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $0
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
                <Image
                  src={"images/img_morevertical_41.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
            </List>
          </Column>
          <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[33%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              WrapClassName="2xl:pb-[17px] 2xl:pl-[13px] 2xl:pr-[17px] 2xl:pt-[16px] 3xl:pb-[20px] 3xl:pl-[16px] 3xl:pr-[20px] 3xl:pt-[19px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[13px] lg:pl-[10px] lg:pr-[13px] lg:pt-[12px] pb-[17.24px] pl-[13.82px] pr-[17.27px] pt-[16.36px] w-[100%] xl:pb-[15px] xl:pl-[12px] xl:pr-[15px] xl:pt-[14px]"
              name="Add Contact"
              placeholder="Add Contact"
              suffix={
                <Image
                  src={"images/img_vector_33.svg"}
                  className="w-[13.83px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Column className="items-center w-[100%]">
              <Column className="bg-white_A700 items-start justify-center lg:pb-[12px] xl:pb-[13px] pb-[15.6px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[20px] xl:pl-[23px] pl-[25.92px] 2xl:pl-[25px] 3xl:pl-[31px] lg:pr-[21px] xl:pr-[24px] pr-[27.64px] 2xl:pr-[27px] 3xl:pr-[33px] lg:pt-[19px] xl:pt-[22px] pt-[25.13px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
                <Text className="font-normal ml-[0] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-sourcesanspro">
                    First Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  name="Enter First Nam"
                  placeholder="Enter First Name"
                ></Input>
                <Text className="font-normal ml-[0] xl:mt-[4px] lg:mt-[4px] mt-[5.59px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-sourcesanspro">
                    Last Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  name="Enter Last Name"
                  placeholder="Enter Last Name"
                ></Input>
                <Text className="font-normal ml-[0] xl:mt-[4px] lg:mt-[4px] mt-[5.58px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Mobile Number
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="border border-gray_200 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  name="Enter mobile nu"
                  placeholder="Enter mobile number"
                ></Input>
                <Text className="font-normal ml-[0] xl:mt-[4px] lg:mt-[4px] mt-[5.19px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Email
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="border border-gray_200 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  name="Enter mail addr"
                  placeholder="Enter mail addres"
                ></Input>
              </Column>
              <Stack className="bg-gray_100 border border-indigo_50 border-solid lg:h-[59px] xl:h-[68px] h-[75.39px] 2xl:h-[76px] 3xl:h-[91px] lg:pb-[12px] xl:pb-[13px] pb-[15.59px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[253px] xl:pl-[289px] pl-[325.68px] 2xl:pl-[325px] 3xl:pl-[391px] lg:pr-[15px] xl:pr-[17px] pr-[19.48px] 2xl:pr-[19px] 3xl:pr-[23px] lg:pt-[16px] xl:pt-[18px] pt-[20.8px] 2xl:pt-[20px] 3xl:pt-[24px] w-[100%]">
                <Button className="absolute bg-white_A700 border border-gray_200 border-solid bottom-[0] font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] right-[12%] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[55%]">
                  Cancel
                </Button>
                <Button className="absolute bg-bluegray_900 border border-gray_200 border-solid bottom-[0] font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] right-[0] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[46%]">
                  Save
                </Button>
              </Stack>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default AddContactsPage;
