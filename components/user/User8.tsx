import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BoxShadow } from "../hero";

function User8() {
  return (
    <>
      <Link href={`/phones/recommended/11`}>
        <BoxShadow>
          <Image
            src={
              "https://res.cloudinary.com/dvkxbgi8y/image/upload/v1692119876/biratech/phones/rujzfhupif9wdt1i6sp4.jpg"
            }
            alt="Phone"
            height={320}
            width={250}
            unoptimized
          />
          <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center px-3 ">
            Samsung Galaxy S20 FE
          </h4>
        </BoxShadow>
      </Link>
      <Link href={`/phones/recommended/12`}>
        <BoxShadow>
          <Image
            src={
              "https://res.cloudinary.com/dvkxbgi8y/image/upload/v1692119938/biratech/phones/slajbnglzy5mcjbur973.jpg"
            }
            alt="Phone"
            height={320}
            width={250}
            unoptimized
          />
          <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
            Samsung Galaxy S20
          </h4>
        </BoxShadow>
      </Link>
      <Link href={`/phones/recommended/13`}>
        <BoxShadow>
          <Image
            src={
              "https://res.cloudinary.com/dvkxbgi8y/image/upload/v1692121711/biratech/phones/wkgf4so5htsj4sld8dv7.jpg"
            }
            alt="Phone"
            height={320}
            width={250}
            unoptimized
          />
          <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
            Redmi Note 12
          </h4>
        </BoxShadow>
      </Link>
      <Link href={`/phones/recommended/8`}>
        <BoxShadow>
          <Image
            src={
              "https://res.cloudinary.com/dvkxbgi8y/image/upload/v1692119540/biratech/phones/ebcvnukvvoi8ybt4bcux.jpg"
            }
            alt="Phone"
            height={320}
            width={250}
            unoptimized
          />
          <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
            samsung galaxy A23
          </h4>
        </BoxShadow>
      </Link>
      <Link href={`/phones/recommended/9`}>
        <BoxShadow>
          <Image
            src={
              "https://res.cloudinary.com/dvkxbgi8y/image/upload/v1692119670/biratech/phones/lo1ua5ww1d2xu5uy4xy5.jpg"
            }
            alt="Phone"
            height={320}
            width={250}
            unoptimized
          />
          <h4 className="text-2xl font-sans font-bold text-gray-900 pt-4 pb-8 text-center">
            Samsung Galaxy Note
          </h4>
        </BoxShadow>
      </Link>
    </>
  );
}

export default User8;
