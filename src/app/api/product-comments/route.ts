import prisma from "@/lib/db";
import { z } from "zod";

import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 1;
  const productId = searchParams.get("id") || 1;

  const q: Prisma.commentsFindManyArgs = {
    take: 20,
    skip: +page * 20,
    where: {
      productId: +productId
    },
    include: {
      user: {
        select: {
          first_name: true,
          last_name: true,
          profile_img: true
        }
      }
    }
  };

  const [comments, count] = await prisma.$transaction([
    prisma.comments.findMany(q),
    prisma.comments.count({ where: q.where })
  ]);

  const res: any = {};

  res["reviews"] = comments;
  res["count"] = count;

  return NextResponse.json(res);
}

const commentSchema = z.object({
  userId: z.number(),
  rating: z.number(),
  review: z.string().min(1),
  productId: z.number()
});

export async function POST(req: Request) {
  const body = await req.json();

  const { productId, rating, review, userId } = commentSchema.parse(body);

  const res = await prisma.comments.create({
    data: {
      review,
      productId,
      rating,
      userId
    }
  });

  if (!res) {
    return NextResponse.json(
      { message: "Could not insert product comment" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Comment was successfully created" },
    { status: 201 }
  );
}
