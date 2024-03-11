import {NextRequest, NextResponse} from "next/server";
import {AccountModel} from "@/lib/models/account.model";
import {compareSync} from "bcryptjs";
import {getSession} from "@/lib/utils/getSession";

export async function POST(res: NextRequest) {
  const session = await getSession();
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
      username: email
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
  session.loggedIn = true;
  session.account = account;
  await session.save();
  return NextResponse.json({
    error: false,
    message: `Successfully logged in`
  })
}