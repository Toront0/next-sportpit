import EmailTemplate from "@/components/UI/EmailTemplate";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const email = searchParams.get("email") || "";

  if (email.length < 1) {
    return NextResponse.json(
      { message: "Укажите почтовый адрес" },
      { status: 400 }
    );
  }

  const r = await prisma.email_codes.findUnique({
    where: {
      email: email
    }
  });

  if (r) {
    await prisma.email_codes.delete({
      where: {
        email: email
      }
    });
  }

  const code = Math.floor(100000 + Math.random() * 900000);

  const res = await prisma.email_codes.create({
    data: {
      email: email,
      code: code
    }
  });

  if (res) {
    const { data, error } = await resend.emails.send({
      from: "slava.kiparisov@bk.ru",
      to: ["toronto9094@mail.ru"],
      subject: "Email confirmation",
      react: EmailTemplate({ firstName: "John", lastName: "Doe", code: code })
    });

    console.log("data", data);
    console.log("error", error);

    return NextResponse.json(
      { message: "Код был отправлен на вашу почту" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Произошла ошибка" }, { status: 500 });
  }
}
