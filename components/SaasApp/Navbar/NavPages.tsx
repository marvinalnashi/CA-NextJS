import React, { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'

const NavPages: React.FC = () => {
  const currentRoute = usePathname()

  return (
    <>
      <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
        <Menu as="div" className="relative inline-block text-left rtl:text-right">
          <div className="text-[16px] md:text-[16px] lg:text-[18px]">
            <Menu.Button>
              Pages <i className="ri-arrow-down-s-line relative top-[2px]"></i>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 rtl:right-0 z-[999] mt-[10px] md:mt-[26px] xl:mt-[35px] w-[250px] sm:w-[270px] origin-top-right rounded-[10px] bg-black p-[20px] sm:p-[30px] shadow-lg ring-1 space-y-[12px] ring-black ring-opacity-5 focus:outline-none">
              <li>
                <Link
                  href="/features/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/features/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/contact/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/blog/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/blog/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/blog/blog-details/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/blog/blog-details/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Blog Details
                </Link>
              </li>

              <li>
                <Link
                  href="/login/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/login/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/register/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  href="/forgot-password/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/forgot-password/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Forgot Password
                </Link>
              </li>

              <li>
                <Link
                  href="/download/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/download/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Download
                </Link>
              </li>

              <li>
                <Link
                  href="/thank-you/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/thank-you/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Thank you
                </Link>
              </li>

              <li>
                <Link
                  href="/team/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/team/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href="/faq/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${currentRoute === '/faq/' ? 'text-primary' : 'text-slate-200'}`}
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/privacy-policy/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-conditions/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/terms-conditions/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/404/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${currentRoute === '/404/' ? 'text-primary' : 'text-slate-200'}`}
                >
                  404 Error Page
                </Link>
              </li>

              <li>
                <Link
                  href="/coming-soon/"
                  className={`text-[15px] md:text-[16px] font-medium transition-all hover:text-primary ${
                    currentRoute === '/coming-soon/' ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  Coming Soon
                </Link>
              </li>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </>
  )
}

export default NavPages
