import {NextRequest, NextResponse} from "next/server";
import {AccountModel} from "@/lib/models/account.model";
import {compareSync} from "bcryptjs";

export async function POST(res: NextRequest) {
  const body = await res.json();
  const {email, password} = body;
  if (!email || !password) return NextResponse.json({
    error: true,
    message: `You must enter a username or email and password`,
  }, {
    status: 400,
  });
  const account = await AccountModel.findOne({
    $or: [{
      email
    }, {
      email: email
    }]
  });
  if (!account) return NextResponse.json({
    error: true,
    message: "Invalid username or email"
  });
  if (!compareSync(password, account.password)) return NextResponse.json({
    error: true,
    message: "Invalid password",
  });
  return NextResponse.json({
    error: false,
    message: `Successfully logged in`
  })
}