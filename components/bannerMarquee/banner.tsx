import Image from 'next/image';
import React from 'react';
import { Images } from '../../utils/constant/staticImage';
export default function Banner() {
  return (
    <article className="overflow-hidden flex relative h-[50px]">
      <Image src={Images.banner} alt="background-image" layout="fill" />
      {[1,2,3].map((_,index)=>(
        <article className="animate-marquee whitespace-nowrap text-white flex items-center" key={index}>
            {[1,2,3,4,5,6].map((_,index2)=>(
                <span className="text-[1.2rem] font-bold mx-4 uppercase" key={index2}>
                    lorem ipsum
                </span>
            ))}
        </article>
      ))}
    </article>
  );
}
