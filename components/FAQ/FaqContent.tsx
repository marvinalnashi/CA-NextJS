"use client";

import React from "react";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              faq’s
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Frequently Ask Questions
            </h2>
          </div>

          <div className="max-w-[560px] md:max-w-[765px] xl:max-w-[872px] mx-auto">
            <div className="space-y-[25px]">
              <details className="bg-[#F8F6F5] rounded-[20px]" open>
                <summary className="text-[16px] md:text-[20px] text-black-color font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  How does Paid Search Marketing work?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  What are the benefits of Paid Search Marketing?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Which platforms offer Paid Search Marketing?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  How do I create a Paid Search Marketing campaign?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  What is Quality Score in Paid Search Marketing?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>

              <details className="bg-[#F8F6F5] rounded-[20px]">
                <summary className="text-[16px] md:text-[20px] text-black font-semibold select-none cursor-pointer py-[15px] px-[30px]">
                  Is Paid Search Marketing suitable for all businesses?
                </summary>
                <div className="border-t leading-7 py-[30px] px-[30px] space-y-3">
                  <p>
                    Paid Search Marketing works through an auction-based system.
                    Advertisers bid on specific keywords, stating the maximum
                    amount they are willing to pay for each click on their ad.
                    The search engine then considers the bid amount, ad
                    relevance, and other factors to determine which ads will be
                    displayed
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
