import Image from "next/image";
import banner from "../../public/image/phone1.png";
import cardPhone from "../../public/image/cardPhone.jpg";
import CategoryCard from "@/components/phone-card/CategoryCard";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="pt-[50px] md:pb-[50px] md:pt-[50px] xl:pb-[50px] xl:pt-[50px]"
      >
        <div className="container">
          <div className="flex  xl:flex-row flex-col items-center pb-14">
            <div className="xl:h-[380px] xl:w-[500px]">
              <Image src={banner} alt="banner" className="h-full w-full" />
            </div>
            <div className="flex justify-center xl:block ">
              <div>
                <h2 className="font-sans text-5xl font-bold">
                  top smart phones
                </h2>
                <h2 className="font-sans text-3xl xl:text-5xl font-bold">
                  2022
                </h2>
                <button className="text-red-400 font-sans hover:underline">
                  Read more
                </button>
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
          {/* mobile cards */}
          {/* <div className="flex flex-col xl:flex-row item-center xl:my-20 my-5 gap-5">
            <CategoryCard
              path="upcomming"
              imgUrl=""
              name="Upcomming Smartphones"
            />
            <CategoryCard
              path="upcomming"
              imgUrl=""
              name="Latest Smartphones"
            />
            <CategoryCard
              path="upcomming"
              imgUrl=""
              name="Gaming Smartphones"
            />
            <CategoryCard
              path="upcomming"
              imgUrl=""
              name="Tranding Smartphones"
            />
          </div> */}
        </div>
        <div className="bg-gradient-to-tl mt-3 xl:mt-10 from-slate-200 to-zinc-200">
          <div className="container flex items-center justify-between">
            <div>
              <h5 className="font-sans text-xl xl:text-4xl font-bold">
                Learn about 5G and every other networks
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
        </div>
        <div className="bg-gradient-to-tl my-3 xl:my-10 bg-[#9ADCE6]">
          <div className="container flex items-center justify-between">
            <div>
              <h5 className="font-sans text-xl xl:text-4xl font-bold">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
