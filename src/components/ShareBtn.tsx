"use client";

interface CustomGlobalThis {
    androidShare?: ( url: string) => void;
}

declare global {
    interface Window {
        androidShare?: (url: string) => void;
    }

    const globalThis: CustomGlobalThis;
}

import React from "react";
import {Share } from "lucide-react";

import Toast from "@/utils/toast";


const ShareBtn = ({url} : {url : string}): JSX.Element => {
    const handleShareClick = async () => {
        const shareData = {
            url: url,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (globalThis.window && globalThis.window.androidShare) {
                globalThis.window.androidShare(shareData.url);
            } else {
                Toast.ErrorShowToast("Your browser does not support sharing.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
            <Share onClick={handleShareClick} className=" cursor-pointer"  />
    );
};

export default ShareBtn;