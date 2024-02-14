/*
  Warnings:

  - You are about to drop the column `relase_form` on the `carbohydrates` table. All the data in the column will be lost.
  - Added the required column `release_form` to the `carbohydrates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carbohydrates" DROP COLUMN "relase_form",
ADD COLUMN     "release_form" TEXT NOT NULL;
