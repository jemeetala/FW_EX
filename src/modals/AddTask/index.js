import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Image, Text, TextArea, Row, Button } from "components";

const AddTaskModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Input
            className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
            WrapClassName="2xl:pb-[19px] 2xl:pt-[18px] 3xl:pb-[23px] 3xl:pl-[38px] 3xl:pr-[43px] 3xl:pt-[22px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[15px] lg:pl-[24px] lg:pr-[28px] lg:pt-[14px] pb-[19.5px] pl-[32px] pr-[36px] pt-[18.5px] w-[38%] xl:pb-[17px] xl:pl-[28px] xl:pr-[32px] xl:pt-[16px]"
            name="Add task"
            placeholder="Add task"
            suffix={
              <Image
                src={"images/img_vector_34.svg"}
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                alt="Vector"
              />
            }
          ></Input>
          <Column className="bg-white_A700 items-start justify-center lg:pb-[43px] xl:pb-[49px] pb-[56px] 3xl:pb-[67px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] w-[38%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              WrapClassName="3xl:ml-[38px] bg-bluegray_51 lg:ml-[24px] ml-[32px] w-[88%] xl:ml-[28px]"
              name="Mark as complet"
              placeholder="Mark as completed"
            ></Input>
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              <span className="text-black_901 font-sourcesanspro">Title </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              WrapClassName="2xl:pr-[15px] 3xl:ml-[38px] 3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[13px] bg-white_A700 border border-bluegray_100 border-solid flex lg:ml-[24px] lg:mt-[3px] lg:pl-[9px] lg:pr-[11px] lg:py-[8px] ml-[32px] mt-[4px] pl-[12px] pr-[15.34px] py-[11px] rounded-radius4 w-[88%] xl:ml-[28px] xl:mt-[3px] xl:pl-[10px] xl:pr-[13px] xl:py-[9px]"
              name="Enter title of "
              placeholder="Enter title of task"
              suffix={
                <Image
                  src={"images/img_vector_35.svg"}
                  className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Description
            </Text>
            <TextArea
              className="bg-white_A700 border border-bluegray_100 border-solid font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[88%]"
              name="Group275"
              placeholder="Start typing the details about the task"
            ></TextArea>
            <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[25px] xl:pr-[29px] pr-[33px] 3xl:pr-[39px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Column className="items-start w-[30%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    Task Type
                  </Text>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                    WrapClassName="2xl:pb-[11px] 2xl:pr-[21px] 2xl:pt-[10px] 3xl:pb-[13px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:pt-[12px] bg-white_A700 border border-bluegray_100 border-solid flex lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[8px] mt-[4px] pb-[11.5px] pl-[16px] pr-[21.66px] pt-[10.5px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pb-[10px] xl:pl-[14px] xl:pr-[19px] xl:pt-[9px]"
                    name="Select type"
                    placeholder="Select type"
                    suffix={
                      <Image
                        src={"images/img_vector_36.svg"}
                        className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                </Column>
                <Column className="items-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[65%]">
                  <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-sourcesanspro">
                      Due date
                    </span>
                    <span className="text-red_700 font-sourcesanspro">*</span>
                  </Text>
                  <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                    <Row className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-2 items-center justify-between px-[0] w-[100%]">
                      <Input
                        className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                        WrapClassName="2xl:pb-[11px] 2xl:pr-[17px] 2xl:pt-[10px] 3xl:pb-[13px] 3xl:pl-[19px] 3xl:pr-[21px] 3xl:pt-[12px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[12px] lg:pr-[13px] lg:py-[8px] pb-[11.5px] pl-[16px] pr-[17.66px] pt-[10.5px] rounded-radius4 w-[100%] xl:pb-[10px] xl:pl-[14px] xl:pr-[15px] xl:pt-[9px]"
                        name="06/28/2022"
                        placeholder="06/28/2022"
                        suffix={
                          <Image
                            src={"images/img_vector_37.svg"}
                            className="w-[16.67px] h-[16.67px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                            alt="Vector"
                          />
                        }
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                        WrapClassName="2xl:pb-[11px] 2xl:pr-[17px] 2xl:pt-[10px] 3xl:pb-[13px] 3xl:pl-[19px] 3xl:pr-[21px] 3xl:pt-[12px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[12px] lg:pr-[13px] lg:py-[8px] pb-[11.5px] pl-[16px] pr-[17.66px] pt-[10.5px] rounded-radius4 w-[100%] xl:pb-[10px] xl:pl-[14px] xl:pr-[15px] xl:pt-[9px]"
                        name="09:40 "
                        placeholder="09:40"
                        suffix={
                          <Image
                            src={"images/img_vector_38.svg"}
                            className="w-[16.67px] h-[16.67px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                            alt="Vector"
                          />
                        }
                      ></Input>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Task Type
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
              WrapClassName="2xl:pb-[11px] 2xl:pr-[21px] 2xl:pt-[10px] 3xl:ml-[38px] 3xl:pb-[13px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:pt-[12px] bg-white_A700 border border-bluegray_100 border-solid flex lg:ml-[24px] lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[8px] ml-[32px] mt-[4px] pb-[11.5px] pl-[16px] pr-[21.66px] pt-[10.5px] rounded-radius4 w-[88%] xl:ml-[28px] xl:mt-[3px] xl:pb-[10px] xl:pl-[14px] xl:pr-[19px] xl:pt-[9px]"
              name="Select an outco"
              placeholder="Select an outcome"
              suffix={
                <Image
                  src={"images/img_vector_39.svg"}
                  className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-start justify-center lg:pb-[20px] xl:pb-[23px] pb-[26px] 3xl:pb-[31px] lg:pl-[292px] xl:pl-[334px] pl-[376px] 3xl:pl-[451px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] w-[38%]">
            <Button className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[51%]">
              Cancel
            </Button>
            <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[43%]">
              Save
            </Button>
          </Row>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddTaskModal;
