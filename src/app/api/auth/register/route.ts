import {NextRequest, NextResponse} from "next/server";
import {AccountModel} from "@/lib/models/account.model";
import {hashSync} from "bcryptjs";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const {username, email, password} = data;
  if (!username || !email || !password) return NextResponse.json({
    error: true,
    message: "Please fill all the required fields",
  }, {
    status: 400,
  });

  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  if (!validEmail) return NextResponse.json({
    error: true,
    message:  "Invalid email",
  }, {
    status: 400,
  });

  const validUsername = /^[a-zA-Z0-9]+$/.test(username);
  if (!validUsername) return NextResponse.json({
    error: true,
    message: "Invalid username",
  }, {
    status: 400,
  });

  if (password.length < 8) return NextResponse.json({
    error: true,
    message: "Password requires at least 8 characters",
  }, {
    status: 400,
  });

  const existing = await AccountModel.findOne({
    $or: [{
      email,
    }, {
      username,
    }]
  });
  if (existing) return NextResponse.json({
    error: true,
    message: "Email or username has already been registered",
  }, {
    status: 400
  });
  const newAccount = AccountModel.create({
    username,
    email,
    password: hashSync(password, 10),
    verified: true, // TODO: email verification
  });
  return NextResponse.json({
    error: false,
    message: `You have registered successfully. Now you can login with your account`,
  });
}