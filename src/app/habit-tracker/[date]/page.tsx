import { getHabitList } from "@/api/habits";
import AddHabitForm from "@/app/components/AddHabitForm/AddHabitForm";

type HabitTrackerDateProps = {
  params: {
    date: string;
  }
};

export default async function ({ params }: HabitTrackerDateProps) {

  const results = await getHabitList(params.date);

  console.log(results, "results")

  return (
    <main>
      <h1>List of habit</h1>
      {results.length > 0 &&
        results.map((x: any) => {
          return <h2>{x}</h2>;
        })}
      <AddHabitForm date={params.date}/>
    </main>
  );
}

