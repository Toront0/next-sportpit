import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const checkingEmail = searchParams.get("email");

  if (!checkingEmail) {
    return NextResponse.json(
      { message: "Email was not provided" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.users.findUnique({
    where: {
      email: checkingEmail
    }
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 409 }
    );
  } else {
    return NextResponse.json({ message: "All good" }, { status: 200 });
  }
}
