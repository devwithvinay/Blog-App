"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const { id } = React.use(params);

  const [data, setData] = useState(null);

  const fetchBlogData = async() => {
    const response = await axios.get("/api/blog",{
      params:{
        id:id
      }
    })
    setData(response.data)
  };
  useEffect(() => {
    fetchBlogData();
  }, [id]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-32.5 sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-185 mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-10">
        <Image
          className="border-4 border-white "
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p> {data.description} </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle , you must have a clear
          understanding of what do want to achieve. Satrt by reflection on your
          values , aspirations and long term goals.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle , you must have a clear
          understanding of what do want to achieve. Satrt by reflection on your
          values , aspirations and long term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle , you must have a clear
          understanding of what do want to achieve. Satrt by reflection on your
          values , aspirations and long term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          In conclusion, managing your lifestyle effectively requires a
          combination of self-reflection, goal setting, and consistent action.
          By following these steps, you can create a more fulfilling and
          balanced life.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article in social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
}

export default page;
