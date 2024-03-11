import {cookies} from "next/headers";
import {getIronSession} from "iron-session";
import {sessionConfig} from "@/lib/configs/session";

export const getSession = () => {
  return getIronSession<SessionData>(cookies(), {
    password: sessionConfig.password,
    cookieName: sessionConfig.cookieName,
  });
}
