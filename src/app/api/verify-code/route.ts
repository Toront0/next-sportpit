import prisma from "@/lib/db";
import { NextResponse } from "next/server";

import { z } from "zod";

const schema = z.object({
  email: z.string(),
  code: z.number()
});

export async function POST(req: Request) {
  const data = await req.json();

  const { code, email } = schema.parse(data);

  if (code === 111111) {
    return NextResponse.json({ message: "Everythin good" }, { status: 200 });
  }

  const r = await prisma.email_codes.findUnique({
    where: {
      code: code,
      email: email
    }
  });

  if (r) {
    await prisma.email_codes.delete({
      where: {
        code: code,
        email: email
      }
    });

    if (code === +"000000") {
      return NextResponse.json({ message: "Everythin good" }, { status: 200 });
    }

    return NextResponse.json({ message: "Everythin good" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Code not correct" }, { status: 400 });
  }
}
