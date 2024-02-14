import { z } from "zod";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const userSchema = z.object({
  firstName: z.string().min(1, "Поле обязательно"),
  lastName: z.string().min(1, "Поле обязательно"),
  email: z.string().email({ message: "Введите корректный почтовый адрес" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать как минимум 8 символов" })
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, password } = userSchema.parse(body);

    const existingUser = await prisma.users.findUnique({
      where: {
        email: email
      }
    });

    if (existingUser) {
      return NextResponse.json(
        {
          user: null,
          message: "Аккаунт с таким почтовым адресом уже существует"
        },
        { status: 409 }
      );
    }

    const epw = await bcrypt.hash(password, 10);

    const createdUser = await prisma.users.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: epw,
        city: ""
      }
    });

    const { password: newUserPassword, ...rest } = createdUser;

    return NextResponse.json(
      { user: rest, message: "Аккаунт был создан успешно" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Произошла ошибка на сервере" },
      { status: 500 }
    );
  }
}
