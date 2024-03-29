"use client";
import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

import Toast from "@/utils/toast";

const Page = () => {
    const [shortid, setShortId] = useState<string>("");
    const [renderClickDiv, setRenderClickDiv] = useState<boolean>(false);
    const [loading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>({});
    const getClicks = async () => {
        try {
            if (shortid.length < 5) {
                Toast.ErrorShowToast("Enter a valid id");
                return;
            }
            setIsLoading(true);
            const res = await axios.get(`/api/getClicks?id=${shortid}`);
            setData(res.data);
            setRenderClickDiv(true);
            console.log(res.data);
        } catch (error) {
            Toast.ErrorShowToast("Unable to get information check id");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <Link href={"/"} className="flex p-4 gap-2 items-center">
                <ArrowLeft /> Back
            </Link>
            <div className="flex flex-col justify-center  p-4 mt-4 w-full ">
                <label htmlFor="id" className="relative w-full ">
                    <input type="text" onChange={(e) => setShortId(e.target.value)} className=" border-2 w-full  border-white/10 focus:outline-none focus:border-white duration-200 p-4 rounded-lg bg-transparent" />
                    <span className="absolute -top-3 font-medium  tracking-wide left-4 bg-black text-md">Enter Your ShortId</span>
                </label>
                <button onClick={getClicks} className=" bg-white md:mt-7 md:m-auto text-black lg:w-1/5 w-1/2 mt-2 text-xl font-medium justify-center  flex rounded-lg gap-4 items-center p-3 text-center">
                    {loading ? "Searching..." : "Search"} <Search />
                </button>
                {renderClickDiv ? (
                    <div className=" h-32 md:w-1/2 md:m-auto md:mt-8 flex min-h-full  items-center text-2xl font-bold text-center justify-center w-full rounded-lg bg-blue-600 mt-5">
                        <h1>Total Clicks : {data?.data || 0}</h1>
                    </div>
                ) : (
                    <div className="flex flex-col md:items-start md:justify-start gap-3 mt-7">
                        <h1 className=" mt-4 text-xl font-semibold">What is ShortId?</h1>
                        <p className=" text-md font-medium">The last 5 digit at the end of url</p>
                        <h1 className=" text-xl font-semibold">For Example :</h1>
                        <h1 className=" text-xl font-semibold">Url : trim.theshiva.xyz/xyz12</h1>
                        <p className="text-md font-medium">xyz123 is the short id</p>
                    </div>
                )}
            </div>
        </>
    );
};
export default Page;
