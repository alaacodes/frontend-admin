import { NextResponse } from "next/server";
import { db } from "@/lib/admin-db/db";

export async function GET() {
  try {
    const candidates = await new Promise((resolve, reject) => {
      db.query(
        "SELECT general.*, GROUP_CONCAT(skills.Skill SEPARATOR ', ') AS skills FROM general LEFT JOIN skills ON skills.Email = general.Email GROUP BY general.Email;",

        (err: any, candidates: []) => {
          if (err) {
            reject(err);
          } else {
            resolve(candidates);
          }
        }
      );
    });

    return NextResponse.json(candidates);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
