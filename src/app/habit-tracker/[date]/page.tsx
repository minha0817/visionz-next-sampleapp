// import "server-only";
import { getHabitList } from "@/api/habits";
import { HabitDetailPage } from "./habitDetail.page";


type HabitTrackerDateProps = {
  params: {
    date: string;
  };
};

export default async function ({ params }: HabitTrackerDateProps) {
  const data = await getHabitList(params.date);

  return <HabitDetailPage date={params.date} initialHabits={data}/>
}
