"use client";
import Image from "next/image";
import banner from "../../public/image/phone1.png";
import CategoryCard from "@/components/phone-card/CategoryCard";
import Link from "next/link";
import { styled } from "styled-components";
import PhoneCard from "@/components/phone-card/PhoneCard";

const Hero = () => {
  return (
    <>
      <section id="home" className="my-[96px] lg:my-[128px]">
        <div className="container">
          <div className="flex  xl:flex-row flex-col items-center pb-14">
            <div className="xl:h-[380px] xl:w-[500px]">
              <Image
                src={banner}
                alt="banner"
                width={668}
                height={445}
                className="h-full w-full"
                unoptimized
              />
            </div>
            <div className="flex justify-center xl:block ">
              <div>
                <h2 className="text-6xl font-bold">Top Smartphones</h2>
                <h2 className="text-3xl xl:text-6xl font-bold">2023</h2>
                <Link
                  className="text-red-400 hover:underline pt-4"
                  href="/phones/trending"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          {/* mobile cards */}
          <div className="flex flex-col xl:flex-row item-center gap-5">
            {/* <Link href={`/phones/${upcomming}`}> */}
            <CategoryCard
              path="upcomming"
              imgUrl=""
              name="Upcomming Smartphones"
            />
            {/* </Link> */}
            <CategoryCard path="latest" imgUrl="" name="Latest Smartphones" />
            <CategoryCard path="gaming" imgUrl="" name="Gaming Smartphones" />
            <CategoryCard
              path="trending"
              imgUrl=""
              name="Trending Smartphones"
            />
          </div>
        </div>
        <div className="bg-gradient-to-tl my-[96px] lg:my-[128px] from-slate-200 to-zinc-200">
          <div className="container ">
            <div className="max-w-[1280px] m-auto flex items-center justify-between">
              <div className="max-w-[470px]">
                <h5 className="text-4xl xl:text-5xl font-bold font-sans">
                  Learn about 5G
                  <span className="text-3xl xl:text-4xl font-bold block font-sans">
                    and every other networks
                  </span>
                </h5>
                <button className="text-red-400 hover:underline">
                  Read more
                </button>
              </div>
              <div>
                <div className="xl:h-[365px] xl:w-[550px] mb-8">
                  <Image
                    src="/image/phone-holding.png"
                    alt="banner"
                    width={550}
                    height={365}
                    className="h-full w-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="font-sans text-5xl font-bold text-gray-900 pb-8">
            Phones you may like
          </h2>
          <div className="flex justify-between">
            <Link href={`/phones/recommended/1`}>
              <BoxShadow>
                <Image
                  src={"/image/phone1.png"}
                  alt="Phone"
                  height={320}
                  width={250}
                  unoptimized
                />
                <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                  iPhone 13 pro max
                </h4>
              </BoxShadow>
            </Link>
            <BoxShadow>
              <Image
                src={"/image/phone1.png"}
                alt="Phone"
                height={320}
                width={250}
                unoptimized
              />
              <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                iPhone 13 pro max
              </h4>
            </BoxShadow>
            <BoxShadow>
              <Image
                src={"/image/phone1.png"}
                alt="Phone"
                height={320}
                width={250}
                unoptimized
              />
              <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                iPhone 13 pro max
              </h4>
            </BoxShadow>
            <BoxShadow>
              <Image
                src={"/image/phone1.png"}
                alt="Phone"
                height={320}
                width={250}
                unoptimized
              />
              <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                iPhone 13 pro max
              </h4>
            </BoxShadow>
            <BoxShadow>
              <Image
                src={"/image/phone1.png"}
                alt="Phone"
                height={320}
                width={250}
                unoptimized
              />
              <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                iPhone 13 pro max
              </h4>
            </BoxShadow>
          </div>
        </div>
        {/* <div className="bg-gradient-to-tl my-3 xl:my-10 bg-[#9ADCE6]">
          <div className="container flex items-center justify-between">
            <div>
              <h5 className="text-xl xl:text-4xl font-bold">
                Recommend phones see what people like
              </h5>
              <button className="text-red-400 hover:underline">
                Read more
              </button>
            </div>
            <div>
              <div className="xl:h-[300px] xl:w-[300px]">
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;

const BoxShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;
