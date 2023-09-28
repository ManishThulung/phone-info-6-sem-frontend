import Link from "next/link";
import React from "react";
import { BoxShadow } from "../hero";
import Image from "next/image";

function User5() {
  return (
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
  );
}

export default User5;
