import prisma from "@/lib/db";

import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { ResType } from "@/app/products/page";

type RequestType = {
  brands: string[];
};

// type ResType = {
//   data: any;
//   count: number;
// };

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 1;

  const data: RequestType = await req.json();

  console.log("page", page);

  let filters = "";

  if (Object.keys(data).length > 0) {
    if (data.brands.length > 0) {
      for (let i = 0; i < data.brands.length; i++) {
        if (i === 0) {
          filters = " where brand = " + `'${data.brands[i]}'`;
        } else {
          filters += " or brand = " + `'${data.brands[i]}'`;
        }
      }
    }
    const q: Prisma.productsFindManyArgs = {
      take: 30,
      skip: +page * 30,
      where: {
        OR: data.brands.map((b) => {
          return { brand: b };
        })
      }
    };

    // const res =
    //   await prisma.$queryRaw`SELECT id, title, img, price, in_stock from "protein" "${filters}"`;

    const [products, count] = await prisma.$transaction([
      prisma.products.findMany(q),
      prisma.products.count({ where: q.where })
    ]);

    const response = {} as ResType;

    response["products"] = products;
    response["count"] = count;

    return new Response(JSON.stringify(response));
  } else {
    const q: Prisma.productsFindManyArgs = {
      take: 30,
      skip: +page * 30
    };

    const [products, count] = await prisma.$transaction([
      prisma.products.findMany(q),
      prisma.products.count()
    ]);

    const response = {} as ResType;

    response["products"] = products;
    response["count"] = count;

    return new Response(JSON.stringify(response));
  }
}
