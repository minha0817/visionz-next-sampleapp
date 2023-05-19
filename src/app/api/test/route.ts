import dbPool from "@/app/utils/mysql.utils";
import { NextResponse } from "next/server";

// MINHA THIS IS THE FOLDER STRUCTURE THAT WORKS FOR REQUESTS.
// YOU NEED TO REFACTOR YOUR OTHER API FOLDER /src/api.

export async function POST(request: Request) {

  const newData = await request.json();
  const habit = newData.habit;
  const date = newData.date;
  console.log("newData", newData);
  const dbConn = await dbPool.getConnection();
  const [results] = await dbConn.execute(
    `insert into habitlist (habit, date) values (?, ?)
    `,
    [habit, date]
  );
  dbConn.release();

  return NextResponse.json({ name: "Reed Barger" });
}


