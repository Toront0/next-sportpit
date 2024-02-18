import prisma from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { ResType } from "@/app/products/page";

import { z } from "zod";

const productsSchema = z.number().array();

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);

  const searchQuery = searchParams.get("category") || "";

  const data = await req.json();

  const ids = productsSchema.parse(data);

  let q =
    "select t1.id, title, img, price, in_stock, category, brand, made_in, weight, amount_of_portion, release_form, avg(coalesce(t2.rating, 0)), count(t2.*) from products t1 left join comments t2 on t1.id = t2.product_id where ";

  for (let i = 0; i < ids.length; i++) {
    if (i === 0) {
      if (i === ids.length - 1) {
        q += "t1.id = " + ids[i] + " group by t1.id";
        continue;
      } else {
        q += " t1.id = " + ids[i];
        continue;
      }
    }

    if (i === ids.length - 1) {
      q += " or t1.id = " + ids[i] + " group by t1.id";
      continue;
    }

    q += " or t1.id = " + ids[i];
  }

  //   const res = await prisma.$queryRaw()

  //   const res =
  //     await prisma.$queryRaw`select id, title, img, price, in_stock, category, brand, made_in, weight, amount_of_portion, release_form from products where category = 'carbohydrates'`;

  const res = await prisma.$queryRawUnsafe(q);

  const r = JSON.parse(
    JSON.stringify(
      res,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  );

  return NextResponse.json(r);
}
