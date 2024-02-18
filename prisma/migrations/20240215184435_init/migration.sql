/*
  Warnings:

  - You are about to drop the column `productId` on the `comments` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_productId_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "productId",
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
