"use client";
import Image from "next/image";
import banner from "../../public/image/phone1.png";
import CategoryCard from "@/components/phone-card/CategoryCard";
import Link from "next/link";
import { styled } from "styled-components";
import { useGetCategoryPhonesQuery } from "@/redux/services/phoneApi";
import { useEffect, useState } from "react";

const Hero = () => {
  // const [phone, setPhone] = useState([]);
  // const phone: any = [];
  const { isLoading, data } = useGetCategoryPhonesQuery("trending");

  let user: any;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("access_token");
  }

  // setPhone((prev)=>{...prev, data})

  // useEffect(() => {
  //   // phone.push(data[0], data[1], data[3], data[2], data[4]);

  // }, [data, phone]);

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
        </div>

        <div className=" bg-[#F2F2F2] py-[56px] lg:py-[96px]">
          <div className="container flex gap-8">
            <div className="xl:w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href={`/articles/one`}>
                <div className="w-full h-[30vh]">
                  <Image
                    className="rounded-t-xl w-full h-full"
                    src={"/image/ios-vs-android.png"}
                    alt="mobile"
                    width={300}
                    height={300}
                    unoptimized
                  />
                </div>
                <div className="bg-[#252728] px-4 pb-8 pt-4 rounded-b-lg">
                  <h4 className="font-sans font-bold text-white text-2xl">
                    IOS vs Android
                  </h4>
                  <button className="text-gray-500 pt-1">Read more</button>
                </div>
              </Link>
            </div>
            <div className="xl:w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href={`/articles/one`}>
                <div className="w-full h-[30vh]">
                  <Image
                    className="rounded-t-xl w-full h-full"
                    src={"/image/android13.png"}
                    alt="mobile"
                    width={300}
                    height={300}
                    unoptimized
                  />
                </div>
                <div className="bg-[#252728] px-4 pb-8 pt-4 rounded-b-lg">
                  <h4 className="font-sans font-bold text-white text-2xl">
                    Learn about android 13
                  </h4>
                  <button className="text-gray-500 pt-1">Read more</button>
                </div>
              </Link>
            </div>
            <div className="xl:w-[50%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href={`/articles/one`}>
                <div className="w-full h-[30vh]">
                  <Image
                    className="rounded-t-xl w-full h-full"
                    src={"/image/budget-phone.png"}
                    alt="mobile"
                    width={300}
                    height={300}
                    unoptimized
                  />
                </div>
                <div className="bg-[#252728] px-4 pb-8 pt-4 rounded-b-lg">
                  <h4 className="font-sans font-bold text-white text-2xl">
                    Top budget phones of the year 2022
                  </h4>
                  <button className="text-gray-500 pt-1">Read more</button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container flex flex-col xl:flex-row item-center gap-5 pt-[96px] lg:pt-[128px]">
          {/* <Link href={`/phones/${upcomming}`}> */}
          <CategoryCard
            path="upcomming"
            imgUrl="/image/upcoming-phone.png"
            name="Upcomming Smartphones"
          />
          {/* </Link> */}
          <CategoryCard
            path="latest"
            imgUrl="/image/latest-phone.png"
            name="Latest Smartphones"
          />
          <CategoryCard
            path="gaming"
            imgUrl="/image/gaming-phone.png"
            name="Gaming Smartphones"
          />
          <CategoryCard
            path="trending"
            imgUrl="/image/tranding-phone.png"
            name="Trending Smartphones"
          />
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
            {user ? (
              <>
                <Link href={`/phones/recommended/1`}>
                  <BoxShadow>
                    <Image
                      src={"/image/iphone14.png"}
                      alt="Phone"
                      height={320}
                      width={250}
                      unoptimized
                    />
                    <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                      iPhone 14
                    </h4>
                  </BoxShadow>
                </Link>
                <Link href={`/phones/recommended/5`}>
                  <BoxShadow>
                    <Image
                      src={"/image/iphone-14-pro.png"}
                      alt="Phone"
                      height={320}
                      width={250}
                      unoptimized
                    />
                    <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                      iPhone 14 Pro
                    </h4>
                  </BoxShadow>
                </Link>
                <Link href={`/phones/recommended/4`}>
                  <BoxShadow>
                    <Image
                      src={"/image/iphone 14.jpg"}
                      alt="Phone"
                      height={320}
                      width={250}
                      unoptimized
                    />
                    <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                      iPhone 15
                    </h4>
                  </BoxShadow>
                </Link>
                <Link href={`/phones/recommended/3`}>
                  <BoxShadow>
                    <Image
                      src={"/image/iphone-13-pro-max.jpg"}
                      alt="Phone"
                      height={320}
                      width={250}
                      unoptimized
                    />
                    <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                      iPhone 13 Pro Max
                    </h4>
                  </BoxShadow>
                </Link>
                <Link href={`/phones/recommended/6`}>
                  <BoxShadow>
                    <Image
                      src={"/image/xiaomi 13.jpg"}
                      alt="Phone"
                      height={320}
                      width={250}
                      unoptimized
                    />
                    <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                      xiaomi 13
                    </h4>
                  </BoxShadow>
                </Link>
              </>
            ) : (
              <>
                {data &&
                  data.map((phone: any, i: number) => {
                    let phones: any = [];
                    if (i < 5) {
                      phones.push(phone);
                    } else {
                      return;
                    }
                    return (
                      <>
                        {phones.map((phone: any, i: any) => (
                          <Link
                            href={`/phones/recommended/${phone.id}`}
                            key={i}
                          >
                            <BoxShadow>
                              <Image
                                src={phone.photo}
                                alt="Phone"
                                height={320}
                                width={250}
                                unoptimized
                              />
                              <h4 className="text-xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
                                {phone.name}
                              </h4>
                            </BoxShadow>
                          </Link>
                        ))}
                      </>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

const BoxShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;
