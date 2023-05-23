import dbPool from "@/app/utils/mysql.utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const newData = await request.json();
  const habit = newData.habit;
  const date = newData.date;

  const dbConn = await dbPool.getConnection();
  
  await dbConn.execute(
    `insert into habitlist (habit, date) values (?, ?)
    `,
    [habit, date]
  );

  await dbConn.commit();

  const [results] = await dbConn.execute(
    `select habit from habitlist where date = ?`, [date]
  );
  
  if(results instanceof Array) {
    console.log('results', results);
    return NextResponse.json(results.map((x:any) => 
      x.habit
    ));
  };

  dbConn.release();

  return NextResponse.json("");
}


