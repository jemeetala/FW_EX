import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Input,
  List,
  Line,
  Button,
} from "components";

const AddnotesPage = () => {
  return (
    <>
      <Column className="bg-bluegray_100 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="bg-bluegray_900 items-center lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group345_6.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group345"
              />
              <Image
                src={"images/img_dashboardoutli_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="dashboardOutli"
              />
              <Image
                src={"images/img_group331_6.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group331"
              />
              <Image
                src={"images/img_useroutline_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="userOutline"
              />
              <Image
                src={"images/img_boxoutline_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="boxOutline"
              />
              <Image
                src={"images/img_notesoutline_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="notesOutline"
              />
              <Image
                src={"images/img_chartpiealto_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="chartpiealtO"
              />
              <Image
                src={"images/img_presentationli_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="presentationli"
              />
              <Image
                src={"images/img_settingoutline_8.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="settingOutline"
              />
            </Column>
          </aside>
          <Column className="items-center lg:mb-[21px] xl:mb-[24px] mb-[27px] 3xl:mb-[32px] w-[93%]">
            <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
              <Row className="border border-bluegray_200 border-solid items-center justify-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                <Image
                  src={"images/img_searchoutline_7.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="searchOutline"
                />
                <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                  Contacts
                </Text>
                <Image
                  src={"images/img_angledownoutl_7.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
              <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                Search your CRM...
              </Text>
              <Row className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]">
                <Image
                  src={"images/img_group5_7.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group5"
                />
                <Image
                  src={"images/img_group4_8.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group4"
                />
                <Image
                  src={"images/img_group3_8.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group3"
                />
                <Image
                  src={"images/img_group100_7.svg"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                  alt="Group100"
                />
                <Image
                  src={"images/img_group99_7.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group99"
                />
              </Row>
            </Row>
            <header className="w-[100%]">
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
                <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Contacts
                </Text>
                <Image
                  src={"images/img_angleleftbou_6.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                  Jane Sampleton
                </Text>
                <Row className="items-center justify-center lg:ml-[246px] xl:ml-[281px] ml-[317px] 3xl:ml-[380px] w-[57%]">
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                    WrapClassName="2xl:py-[16px] 3xl:pl-[12px] 3xl:py-[19px] bg-white_A700 border border-gray_200 border-solid flex lg:pl-[7px] lg:py-[12px] pl-[10px] pr-[0] py-[16.5px] rounded-radius4 w-[11%] xl:pl-[8px] xl:py-[14px]"
                    name="Email"
                    placeholder="Email"
                    prefix={
                      <Image
                        src={"images/img_vector_43.svg"}
                        className="w-[20px] lg:w-[15px] xl:w-[17px] 3xl:w-[24px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <List
                    className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-2 min-h-[auto] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[30%]"
                    orientation="horizontal"
                  >
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                      <Image
                        src={"images/img_phoneoutline.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="phoneOutline"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                        Call
                      </Text>
                      <Image
                        src={"images/img_angledownsoli_6.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownSoli"
                      />
                    </Row>
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                      <Image
                        src={"images/img_commentaltmes.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="commentaltmes"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                        SMS
                      </Text>
                      <Image
                        src={"images/img_angledownsoli_7.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownSoli"
                      />
                    </Row>
                  </List>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[10%]">
                    <Image
                      src={"images/img_addtask1_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="addtask1"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Task
                    </Text>
                  </Row>
                  <List
                    className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-2 min-h-[auto] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[37%]"
                    orientation="horizontal"
                  >
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                      <Image
                        src={"images/img_calenderoutlin.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="calenderOutlin"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                        Meeting
                      </Text>
                      <Image
                        src={"images/img_angledownsoli_8.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownSoli"
                      />
                    </Row>
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                      <Image
                        src={"images/img_dollaraltoutl.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="dollaraltOutl"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                        Add deal
                      </Text>
                      <Image
                        src={"images/img_angledownsoli_9.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownSoli"
                      />
                    </Row>
                  </List>
                  <Image
                    src={"images/img_frame420_2.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Frame420"
                  />
                </Row>
              </Row>
            </header>
            <Column className="bg-bluegray_51 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[224px] xl:pb-[256px] pb-[288px] 3xl:pb-[345px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[480px] xl:pr-[549px] pr-[618px] 3xl:pr-[742px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius4 w-[99%]">
              <Row className="items-start justify-start w-[100%]">
                <Image
                  src={"images/img_ellipse10.png"}
                  className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse10"
                />
                <Row className="items-start justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                  <Column className="items-start justify-start w-[74%]">
                    <Column className="items-center w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901 w-[auto]">
                          Jane Sampleton
                        </Text>
                        <Image
                          src={"images/img_frame470.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain w-[35%]"
                          alt="Frame470"
                        />
                      </Row>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[90%]">
                      <Image
                        src={"images/img_locationpoint.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="locationpoint"
                      />
                      <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_800 w-[auto]">
                        Galveston, Texas, US
                      </Text>
                      <Image
                        src={"images/img_group437.svg"}
                        className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                        alt="Group437"
                      />
                    </Row>
                  </Column>
                  <Line className="bg-bluegray_100 h-[2px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[12px] xl:ml-[14px] ml-[16.67px] 2xl:ml-[16px] 3xl:ml-[20px] rotate-[-90deg] w-[1%]" />
                  <Column className="items-start justify-start lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] w-[14%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Score
                    </Text>
                    <Text className="font-bold lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                      82
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[17%]">
                  <Row className="items-center justify-evenly w-[97%]">
                    <Text className="font-semibold my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Customer fit
                    </Text>
                    <Image
                      src={"images/img_infocircleout_2.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="infocircleOut"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame474.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-cover w-[100%]"
                    alt="Frame474"
                  />
                </Column>
                <Text className="font-semibold lg:mb-[36px] xl:mb-[41px] mb-[47px] 3xl:mb-[56px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                  Show scoring factors
                </Text>
                <Image
                  src={"images/img_infocircleout_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[35px] xl:mb-[40px] mb-[46px] 3xl:mb-[55px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="infocircleOut"
                />
              </Row>
              <Row className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[79%]">
                <Column className="items-start justify-start w-[34%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Job title
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Educational Specialist
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Accounts
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Not available
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Emails
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    janesampleton@mail.com
                  </Text>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[59%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Work
                    </Text>
                    <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      +123456786777
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[45%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Sales owner
                    </Text>
                    <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[34%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Tags
                    </Text>
                    <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Button className="bg-bluegray_600 font-normal not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]">
                        Contact
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mb-[199px] xl:mb-[227px] mb-[256px] 3xl:mb-[307px] lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius8 w-[58%]">
                  <Column className="border border-bluegray_51 border-solid items-center justify-start 3xl:pb-[110px] lg:pb-[71px] xl:pb-[81px] pb-[92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[104px] xl:pr-[119px] pr-[134px] 3xl:pr-[160px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius6 w-[90%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Type your notes here...
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_51 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    View All notes
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddnotesPage;
