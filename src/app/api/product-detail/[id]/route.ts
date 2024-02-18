import { ProductDetail } from "@/app/products/[slug]/page";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);

  const res = await prisma.$queryRaw<
    ProductDetail[]
  >`Select t1.id, t1.title, t1.img,  t1.description, t1.price, t1.category, avg(coalesce(t2.rating, 0)) as avgRating from products t1 left join comments t2 on t1.id = t2.product_id where t1.id = ${+id} group by t1.id`;

  return NextResponse.json(res[0]);
}
