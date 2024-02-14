/*
  Warnings:

  - Added the required column `review` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "review" TEXT NOT NULL;
