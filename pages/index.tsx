'use client';
import HomeReuseContent from '@/components/homeReuseContent/homeReuseContent';
import Banner from '@/components/bannerMarquee/banner';
import About from '@/components/about/about';
import { UserContent1, UserContent2 } from '@/utils/constant/staticContent';
export default function Index() {

  return (
    <main>
      <section className="container mx-auto max-w-[1237px] px-5 pt-16" id="home" >
        <article className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">
            LOREM IPSUM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
            <HomeReuseContent detail={UserContent1} />
          </div>
        </article>

        <article className="lg:mt-[20rem] py-10 mb-[10rem] lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer"id="about">
          <About/>
        </article>
      </section>

      <section>
        <Banner />
      </section>
      
      <section className="container mx-auto max-w-[1237px] px-5 pt-16" id="dolor" >
        <article className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
          <h1 className="lg:mb-24 sm:mb-5 text-4xl font-bold text-white md:text-5xl lg:text-[7rem] dark:text-white uppercase md:w-9/12 xs:w-full">
            lorem ipsum dolor set
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2.5rem] mt-12">
            <HomeReuseContent detail={UserContent2} />
          </div>
        </article>

        <article className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
          <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">
            lorem ipsum dolor
          </h1>
        </article>
      </section>
    </main>
  );
}
