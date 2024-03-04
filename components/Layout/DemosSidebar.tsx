"use client";

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react' 
import Image from "next/image";

import taskManagementApp from "/public/images/demos/task-management-app.jpg";
import moneyTransferApp from "/public/images/demos/money-transfer-app.jpg";
import expenseTrackerApp from "/public/images/demos/expense-tracker-app.jpg";
import gameApp from "/public/images/demos/game-app.jpg";
import saasApp from "/public/images/demos/saas-app.jpg";
import onlineBankingApp from "/public/images/demos/online-banking-app.jpg";

export default function DemosSidebar() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <div className="relative">  
      <button
        type="button"
        className="py-[12px] md:py-[15px] px-[12px] md:px-[15px] inline-block rounded-l-[6px] bg-[#d1032a] text-white font-semibold text-[14px] md:text-[18px] leading-none fixed top-[200px] right-0 z-[999999] transition duration-500 ease-in-out hover:bg-[#bb0124]"
        onClick={() => setOpen(true)}
        ref={cancelButtonRef}
      >
        D<br/>e<br/>m<br/>o<br/>s
      </button>
    
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left rtl:text-right shadow-xl transition-all sm:my-8 sm:w-full md:max-w-[730px] lg:max-w-[1000px] xl:max-w-[1300px]">
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center justify-between">
                    <h1 className="text-[20px] md:text-[25px]">Click to view the demos</h1>
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-full bg-red-600 px-2 py-1 text-[16px] font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        <i className="ri-close-fill"></i>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="grid gap-[25px] md:gap-[35px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <a href="/" className="text-center">
                        <Image 
                          src={taskManagementApp} 
                          alt="taskManagementApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          Task Management App Landing
                        </h4>
                      </a>

                      <a href="/money-transfer-app" className="text-center">
                        <Image 
                          src={moneyTransferApp} 
                          alt="moneyTransferApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          Money Transfer App Landing
                        </h4>
                      </a>

                      <a href="/expense-tracker-app" className="text-center">
                        <Image 
                          src={expenseTrackerApp} 
                          alt="expenseTrackerApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          Expense Tracker App Landing
                        </h4>
                      </a>
 
                      <a href="/saas-app" className="text-center">
                        <Image 
                          src={saasApp} 
                          alt="saasApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          SaaS App Landing
                        </h4>
                      </a>

                      <a href="/game-app" className="text-center">
                        <Image 
                          src={gameApp} 
                          alt="gameApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          Game App Landing
                        </h4>
                      </a>

                      <a href="/online-banking-app" className="text-center">
                        <Image 
                          src={onlineBankingApp} 
                          alt="onlineBankingApp"
                          className='border'
                        />
                        <h4 className='mt-[20px] text-[18px] hover:text-primary-color'>
                          Online Banking App Landing
                        </h4>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}