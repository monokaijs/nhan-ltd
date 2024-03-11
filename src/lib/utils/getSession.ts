import {cookies} from "next/headers";
import {getIronSession} from "iron-session";
import {sessionConfig} from "@/lib/configs/session";
import {dbService} from "@/lib/services/db.service";

export const getSession = async () => {
  await dbService.connect();
  return getIronSession<SessionData>(cookies(), {
    password: sessionConfig.password,
    cookieName: sessionConfig.cookieName,
  });
}
