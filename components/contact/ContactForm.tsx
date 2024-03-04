"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../FormHelpers/Input";
import TextArea from "../FormHelpers/TextArea";
import Button from "../FormHelpers/Button";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      number: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    toast.success("Successfully submitted your feedback!");
    reset();
  };

  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container mx-auto">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              GET IN TOUCH
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Your Gateway to Excellence: Contact Us and Unlock a World of
              Possibilities
            </h2>
          </div>

          <div className="bg-[#F8F6F5] rounded-[20px]">
            <div className="grid gap-[25px] items-center lg:gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {/* ContactInfo */}
              <ContactInfo />

              <div className="xl:col-span-2 px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] py-[30px] md:py-[50px]">
                <form
                  className="space-y-[25px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <Input
                      id="name"
                      placeholder="Your Name"
                      register={register}
                      errors={errors}
                      required
                    />

                    <Input
                      id="email"
                      placeholder="Your Email"
                      register={register}
                      errors={errors}
                      required
                    />
                  </div>

                  <Input
                    id="subject"
                    placeholder="Your Subject"
                    register={register}
                    errors={errors}
                    required
                  />

                  <Input
                    id="number"
                    placeholder="Your Number"
                    register={register}
                    errors={errors}
                    required
                  />

                  <TextArea
                    id="comment"
                    placeholder="Enter Message..."
                    register={register}
                    errors={errors}
                    required
                  />

                  <div className="text-center">
                    <Button
                      label="Send Your Message"
                      classAtts="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
