/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "protein" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "in_stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'protein',
    "brand" TEXT NOT NULL,
    "made_in" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "amount_of_portion" INTEGER NOT NULL,
    "release_form" TEXT NOT NULL,

    CONSTRAINT "protein_pkey" PRIMARY KEY ("id")
);
