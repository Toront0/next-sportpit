-- CreateTable
CREATE TABLE "email_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "email_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_codes_userId_key" ON "email_codes"("userId");

-- AddForeignKey
ALTER TABLE "email_codes" ADD CONSTRAINT "email_codes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
