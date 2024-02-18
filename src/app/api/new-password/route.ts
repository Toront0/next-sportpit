import prisma from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" })
});

export async function PATCH(req: Request) {
  const data = await req.json();

  const { email, password } = schema.parse(data);

  const epw = await bcrypt.hash(password, 10);

  const updatedUser = await prisma.users.update({
    where: {
      email: email
    },
    data: {
      password: epw
    }
  });

  if (updatedUser) {
    return NextResponse.json(
      { message: "Password was successfully changed" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Some error has occured" },
      { status: 500 }
    );
  }
}
