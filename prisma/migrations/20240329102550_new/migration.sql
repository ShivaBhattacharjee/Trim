-- CreateTable
CREATE TABLE "Urls" (
    "id" SERIAL NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Urls_longUrl_key" ON "Urls"("longUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Urls_shortUrl_key" ON "Urls"("shortUrl");
