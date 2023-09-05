import Image from 'next/image'
import React, { useState } from 'react'
import { Icon, Images } from '../../utils/constant/staticImage';

export default function Footer() {
    const [tab, setTab] = useState(0);

  return (
    <footer className="lg:mt-[4rem] lg:pb-[17rem]">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <section key={index} >
            <article className="rounded p-2 pb-2 ">
              <div className="relative h-[45px] cursor-pointer" onClick={() =>{tab === index ? setTab(-1) :setTab(index)}}>
                {tab === index && (
                  <Image src={Images.banner} alt="background-image" layout="fill" />
                )}
                <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                  <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                  <button className="text-left text-white font-semibold focus:outline-none">
                    <Image alt="plus-icon" src={tab === index ? Icon.plus : Icon.minus} />
                  </button>
                </div>
              </div>

              {tab === index && (
                <p className="container mx-auto max-w-[1237px] px-5  leading-7 mt-5 text-[#a1a1a1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              )}
            </article>
          </section>
        ))}
      </footer>
  )
}
