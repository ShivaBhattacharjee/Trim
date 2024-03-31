"use client";
import React, { useState } from "react";
import axios from "axios";
import { Clipboard, Copy, Gauge, Heart, MousePointerClick, X } from "lucide-react";
import Link from "next/link";

import ShareBtn from "@/components/ShareBtn";
import Toast from "@/utils/toast";

interface ResponseProps {
    data: {
        shortUrl: string;
        longUrl: string;
    };
}

const Page = () => {
    const [longUrl, setLongUrl] = useState<string>("");
    const [isUrlGenerated, setIsUrlGenerated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<ResponseProps | {}>({});
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleSubmit = async () => {
        let urlToShorten = longUrl;
        try {
            if (longUrl.length === 0) {
                Toast.ErrorShowToast("Please enter a valid url");
                return;
            }
            if (!longUrl.startsWith("http")) {
                urlToShorten = `https://${longUrl}`;
            }
            const urlParts = urlToShorten.split(".");
            if (urlParts.length < 2) {
                Toast.ErrorShowToast("Please enter a valid url");
                return;
            }
            setIsLoading(true);
            const req = await axios.post("/api/shorten", { url: urlToShorten });
            setResponse(req.data);
            console.log(response);
            setIsUrlGenerated(true);
            setLongUrl("");
            Toast.SuccessshowToast("Url Shortened Successfully");
        } catch (err) {
            setIsUrlGenerated(false);
            console.log(err);
            Toast.ErrorShowToast("An error occurred while shortening the url");
        } finally {
            setIsLoading(false);
        }
    };
    const copyToClipboard = async () => {
        try {
            if ("data" in response) {
                await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL || "https://trim.theshiva.xyz"}/${response.data.shortUrl || ""}`);
                setIsCopied(true);
                Toast.SuccessshowToast("URL Copied to Clipboard");
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            }
        } catch (err) {
            console.error("Failed to copy:", err);
            Toast.ErrorShowToast("Failed to copy URL to Clipboard");
        }
    };
    return (
        <section className="flex p-4 md:p-0 justify-center items-center gap-7 w-full flex-col min-h-[90vh] ">
            <h1 className=" text-4xl md:text-6xl w-full font-Montserrat   mb-3  text-center font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">Shorten Your Links</h1>
            <div className="flex items-center justify-center flex-col flex-wrap md:flex-row w-full gap-2 ">
                <input type="text" onChange={(e) => setLongUrl(e.target.value)} placeholder="Enter the url" className=" bg-transparent focus:outline-none md:w-1/2 w-full focus:border-white p-4 rounded-lg border-2 border-white/10 " />
                <button onClick={handleSubmit} className=" flex justify-center items-center gap-2 font-semibold ml-0 md:ml-5 mt-2 md:mt-0 w-full md:w-44  bg-white rounded-lg hover:border-2 hover:border-white/20 duration-200 text-black hover:text-white  hover:bg-transparent p-4">
                    <Gauge /> {isLoading ? "Shortening" : "Shorten"}
                </button>
            </div>
            {isUrlGenerated && (
                <div className="bg-blue-500 md:w-1/2 items-start relative flex flex-col gap-3  p-4 w-full font-bold rounded-lg">
                    <div className="flex justify-end w-full items-end">
                        <X onClick={() => setIsUrlGenerated(false)} />
                    </div>
                    <h1 className="text-xl md:text-2xl">
                        {process.env.NEXT_PUBLIC_APP_URL || "https://trim.theshiva.xyz"}/{(response as ResponseProps)?.data?.shortUrl || ""}
                    </h1>

                    <div className="flex gap-3 w-full justify-end items-end">
                        {isCopied ? <Copy /> : <Clipboard onClick={copyToClipboard} className=" cursor-pointer" />}
                        {(response as ResponseProps)?.data && <ShareBtn url={`${process.env.NEXT_PUBLIC_APP_URL || "https://trim.theshiva.xyz"}/${(response as ResponseProps)?.data?.shortUrl || ""}`} />}
                    </div>
                </div>
            )}
            <Link href={"/clicks"} className="flex justify-center items-center gap-3 w-full md:w-1/3 bg-transparent text-whie  font-medium border-2 border-white/20 p-4 rounded-lg" id="Btn-NumOfClicks">
                <MousePointerClick />
                Get No Of Clicks
            </Link>

            <footer className=" absolute bottom-0 left-0 right-0  w-full text-center justify-center items-start flex">
                <h1 className=" text-lg pb-4 flex gap-2 items-center">
                    Built with <Heart className=" duration-200 hover:fill-red-500" /> by{" "}
                    <a href="https://github.com/shivabhattacharjee" target="_blank" className=" underline text-blue-500 font-bold">
                        Shiva
                    </a>{" "}
                </h1>
            </footer>
        </section>
    );
};

export default Page;
