/*
  Warnings:

  - Added the required column `in_stock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "in_stock" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
