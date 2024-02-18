import { NextRequest } from "next/server";

import { Prisma } from "@prisma/client/edge";

import prisma from "@/lib/db";

type ResType = {
  brands: string[];
  made_in: string[];
  release_form: string[];
  category: string[];
  min_price: number;
  max_price: number;
  min_weight: number;
  max_weight: number;
};

type PriceRange = {
  min: number;
  max: number;
};

type Brand = {
  brand: string;
};
type MadeIn = {
  made_in: string;
};

type ReleaseForm = {
  release_form: string;
};

type Category = {
  category: string;
};

export async function GET(req: Request) {
  const result = {} as ResType;

  const [brands, made_in, release_form, category] = await prisma.$transaction<
    [
      Prisma.PrismaPromise<Brand[]>,
      Prisma.PrismaPromise<MadeIn[]>,
      Prisma.PrismaPromise<ReleaseForm[]>,
      Prisma.PrismaPromise<Category[]>
    ]
  >([
    prisma.$queryRaw`select distinct brand from products where brand != '-' group by brand`,
    prisma.$queryRaw`select distinct made_in from products where made_in != '-' group by made_in `,
    prisma.$queryRaw`select distinct release_form from products where release_form != '-' group by release_form`,
    prisma.$queryRaw`select distinct category from products where category != '-' group by category`
  ]);

  const price_range = await prisma.$queryRaw<
    PriceRange[]
  >`select min(price), max(price) from products`;

  const weight_range = await prisma.$queryRaw<
    PriceRange[]
  >`select min(weight), max(weight) from products where weight > 0`;

  const formattedBrands = brands.map((b) => b.brand);
  const formattedMadeIn = made_in.map((b) => b.made_in);
  const formattedReleaseForm = release_form.map((b) => b.release_form);
  const formattedCategory = category.map((b) => b.category);
  // const formattedPrices = price_range.map((b) => b);

  console.log("price_range", price_range);

  result["brands"] = formattedBrands;
  result["made_in"] = formattedMadeIn;
  result["release_form"] = formattedReleaseForm;
  result["category"] = formattedCategory;
  result["min_price"] = price_range[0].min;
  result["max_price"] = price_range[0].max;
  result["min_weight"] = weight_range[0].min;
  result["max_weight"] = weight_range[0].max;

  return new Response(JSON.stringify(result));
}
