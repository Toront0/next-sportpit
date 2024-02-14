-- CreateTable
CREATE TABLE "carbohydrates" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "in_stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'carbohydrates',
    "brand" TEXT NOT NULL,
    "made_in" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "amount_of_portion" INTEGER NOT NULL,
    "relase_form" TEXT NOT NULL,

    CONSTRAINT "carbohydrates_pkey" PRIMARY KEY ("id")
);
