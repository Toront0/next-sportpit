import { NextRequest } from "next/server";

import { Prisma } from "@prisma/client/edge";

import prisma from "@/lib/db";

type ResType = {
  brands: string[];
  madeIn: MadeIn[];
};

type Brand = {
  brand: string;
};
type MadeIn = {
  madeIn: string;
};
type PrismaRes = {
  brands: Brand[];
  madeIn: MadeIn[];
};

export async function GET(req: Request) {
  const result = {} as ResType;

  const [brands, madeIn] = await prisma.$transaction<
    [Prisma.PrismaPromise<Brand[]>, Prisma.PrismaPromise<MadeIn[]>]
  >([
    prisma.$queryRaw`select distinct brand  from products where brand != '-' group by brand `,
    prisma.$queryRaw`select distinct made_in from products group by made_in `
  ]);

  const formattedBrands = brands.map((b) => b.brand);

  console.log("brands", typeof brands);

  result["brands"] = formattedBrands;
  result["madeIn"] = madeIn;

  return new Response(JSON.stringify(result));
}
