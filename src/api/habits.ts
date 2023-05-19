import dbPool from "@/app/utils/mysql.utils";

export const getHabitList = async (date: string): Promise<string[]> => {
  if (!date) return [];

  const dbConn = await dbPool.getConnection();
  const [results] = await dbConn.execute(
    `select * from habitlist where date = ?
    `,
    [date]
  );
  dbConn.release();

  return results.map((x: any) => x.habit);
};
