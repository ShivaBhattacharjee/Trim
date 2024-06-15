import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { connect } from "@/database/db";
import { HTTP_ERROR_CODES } from "@/enums/enum";
import Url from "@/models/url.model";
connect();
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        let { url } = reqBody;
        if (!url) {
            return NextResponse.json(
                {
                    message: "URL is required to shorten the link",
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
                {
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
            );
        }
        // Check if URL has a top-level domain (TLD)
        const urlParts = url.split(".");
        if (urlParts.length < 2) {
            return NextResponse.json(
                {
                    message: "URL is invalid",
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
                {
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
            );
        }

        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        // logic to shorten the url
        try {
            const existingUrl = await Url.findOne({ longUrl: url });

            if (existingUrl) {
                console.log("URL already exists", existingUrl);
                return NextResponse.json({
                    data: existingUrl,
                });
            }

            const newUrl = new Url({
                longUrl: url,
                shortUrl: uuidv4().substr(0, 7),
            });
            await newUrl.save();
            return NextResponse.json({
                data: newUrl,
            });
        } catch (error) {
            console.error("Error in database operations", error);
            return NextResponse.json(
                {
                    status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                    message: "Internal Server Error",
                },
                {
                    status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                },
            );
        }
    } catch (error: unknown) {
        console.error("Error in POST /api/shorten", error);
        return NextResponse.json(
            {
                status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                message: "Internal Server Error",
            },
            {
                status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
            },
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const shortUrl = searchParams.get("id") ?? "";
        if (!shortUrl) {
            return NextResponse.json(
                {
                    message: "id missing in query params",
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
                {
                    status: HTTP_ERROR_CODES.BAD_REQUEST,
                },
            );
        }
        console.log("Short URL to redirect", shortUrl);
        // logic to redirect the short URL
        try {
            const existingUrl = await Url.findOne({ shortUrl: shortUrl });
            console.log("checking for existing URL", existingUrl);
            if (existingUrl) {
                console.log("URL exists", existingUrl);
                existingUrl.clicks += 1;
                await existingUrl.save();
                return NextResponse.json({
                    data: existingUrl,
                });
            }
            console.log("URL does not exist");

            return NextResponse.json(
                {
                    status: HTTP_ERROR_CODES.NOT_FOUND,
                    message: "URL not found",
                },
                {
                    status: HTTP_ERROR_CODES.NOT_FOUND,
                },
            );
        } catch (error) {
            console.error("Error in database operations", error);
            return NextResponse.json(
                {
                    status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                    message: "Internal Server Error",
                },
                {
                    status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                },
            );
        }
    } catch (error: unknown) {
        console.error("Error in GET /api/shorten", error);
        return NextResponse.json(
            {
                status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
                message: "Internal Server Error",
            },
            {
                status: HTTP_ERROR_CODES.INTERNAL_SEVER_ERROR,
            },
        );
    }
}
