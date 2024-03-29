import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/database/db";
import { HTTP_ERROR_CODES } from "@/enums/enum";

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
            const existingUrl = await prisma.urls.findUnique({
                where: {
                    shortUrl: shortUrl,
                },
            });
            console.log("checking for existing URL", existingUrl);
            if (existingUrl) {
                console.log("URL exists", existingUrl);
                return NextResponse.json({
                    data: existingUrl.clicks,
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
