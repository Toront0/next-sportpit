/*
  Warnings:

  - You are about to drop the column `userId` on the `email_codes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `email_codes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `email_codes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "email_codes" DROP CONSTRAINT "email_codes_userId_fkey";

-- DropIndex
DROP INDEX "email_codes_userId_key";

-- AlterTable
ALTER TABLE "email_codes" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "email_codes_email_key" ON "email_codes"("email");
