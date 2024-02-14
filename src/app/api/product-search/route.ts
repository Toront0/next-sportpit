import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const searchQuery = searchParams.get("q") || "";

  const page = searchParams.get("page") || 1;

  const q: Prisma.productsFindManyArgs = {
    take: 30,
    skip: +page * 30,
    where: {
      title: {
        contains: searchQuery
      }
    }
  };

  const [products, count] = await prisma.$transaction([
    prisma.products.findMany(q),
    prisma.products.count({ where: q.where })
  ]);

  return NextResponse.json({ products, count }, { status: 200 });
}
