import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { username, email, password } = await request.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User Created", {
      status: 200,
    });
  } catch (err) {
    if (err?.code === 11000) {
      return new NextResponse("Duplicate", {
        status: 400,
      });
    }
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  console.log("AAA", email);

  try {
    await connect();

    const user = await User.find(email && { email });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse("Db Error", { status: 500 });
  }
};
