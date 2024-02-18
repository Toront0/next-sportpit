import prisma from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { ProductItemPreviewType, ResType } from "@/app/products/page";

import { z } from "zod";

type RequestType = {
  brands: string[];
};

// type ResType = {
//   data: any;
//   count: number;
// };

const FilterRes = z.object({
  brands: z
    .string()
    .array()
    .optional()
    .transform((v) => v ?? []),
  made_in: z
    .string()
    .array()
    .optional()
    .transform((v) => v ?? []),
  category: z
    .string()
    .array()
    .optional()
    .transform((v) => v ?? []),
  release_form: z
    .string()
    .array()
    .optional()
    .transform((v) => v ?? [])
});

type CountRes = {
  count: number;
};

type Count = {
  count: CountRes;
};

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 1;

  const data: RequestType = await req.json();

  const { brands, made_in, category, release_form } = FilterRes.parse(data);

  console.log("page", page);
  const q = "select id, title, img, price from products";

  let filters = "";

  if (brands.length > 0) {
    for (let i = 0; i < brands.length; i++) {
      if (i === 0) {
        filters += " where brand = " + `'${brands[i]}'`;
      } else {
        filters += " or brand = " + `'${brands[i]}'`;
      }
    }
  }

  if (made_in.length > 0) {
    for (let i = 0; i < made_in.length; i++) {
      if (i === 0) {
        if (brands.length > 0) {
          filters += " and made_in = " + `'${made_in[i]}'`;
        } else {
          filters += " where made_in = " + `'${made_in[i]}'`;
        }
      } else {
        filters += " or made_in = " + `'${made_in[i]}'`;
      }
    }
  }

  if (category.length > 0) {
    for (let i = 0; i < category.length; i++) {
      if (i === 0) {
        if (brands.length > 0 || made_in.length > 0) {
          filters += " and category = " + `'${category[i]}'`;
        } else {
          filters += " where category = " + `'${category[i]}'`;
        }
      } else {
        filters += " or category = " + `'${category[i]}'`;
      }
    }
  }

  if (release_form.length > 0) {
    for (let i = 0; i < release_form.length; i++) {
      if (i === 0) {
        if (brands.length > 0 || made_in.length > 0 || category.length > 0) {
          filters += " and release_form = " + `'${release_form[i]}'`;
        } else {
          filters += " where release_form = " + `'${release_form[i]}'`;
        }
      } else {
        filters += " or release_form = " + `'${release_form[i]}'`;
      }
    }
  }

  const c = "select count(*) from products" + filters;

  const count = await prisma.$queryRawUnsafe<CountRes[]>(c);

  filters += " limit 30 offset " + +page * 30;

  console.log("q + filters", q + filters);

  const res = await prisma.$queryRawUnsafe<ProductItemPreviewType[]>(
    q + filters
  );

  const response = {} as ResType;

  console.log("count", count);
  count[0].count;

  response["products"] = res;
  response["count"] =
    typeof count[0].count === "bigint"
      ? Number(count[0].count)
      : count[0].count;

  return NextResponse.json(response);
}
