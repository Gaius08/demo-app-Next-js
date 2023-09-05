'useclient'
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../../utils/constant/staticImage';
import Banner from '../bannerMarquee/banner';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const menu = ["home","about","dolor"]
  return (
    <header className="bg-black text-white">
      <section className="mx-auto py-4 items-center">
        <article className="flex items-center px-5">
          <Link href="/"><Image src={Icon.logo} alt="logo" className="mr-2" width={35} height={30}/></Link>
          <p className="px-2 text-[1rem] font-semibold w-full ">{isMenu? "Menu":"Lorem"}</p>
          <nav className='flex max-sm:hidden'>
            {menu.map((item,index)=>(
              <Link href={`#${item}`} className="px-2 text-[1rem] font-semibold w-full hover:text-gray-300 capitalize" key={index}>{item}</Link>
            ))}
          </nav>
          <Image alt='menu-icon' className='sm:hidden' src={isMenu?Icon.close:Icon.menu} onClick={()=>setIsMenu(!isMenu)} />
        </article>
        {isMenu &&
          <article className='flex h-[85vh] items-center sm:hidden'>
            <nav className="mt-2 space-y-6 px-5 flex flex-col" onClick={()=>setIsMenu(!isMenu)}>
              {menu.map((item,index)=>(
                <Link href={`#${item}`} className='hover:text-gray-300 font-medium text-xl tracking-wide capitalize' key={index}>{item}</Link>
              ))}
              <div className='flex justify-between gap-12'>
                <Link href="/loremipsum1" className='text-[#666666] font-bold text-xl tracking-wide uppercase'>lore ipsum</Link>
                <Link href="/loremipsum1" className='text-[#666666] font-bold text-xl tracking-wide uppercase'>comming soon</Link>
              </div>
            </nav>
            <div className='fixed bottom-0 w-full'>
              <Banner />
            </div>
          </article>
        }
      </section>
    </header>
  );
}
