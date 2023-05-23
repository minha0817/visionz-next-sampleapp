"use client";

import { useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";

type HabitDetailPageProps = {
  date: string;
  initialHabits: string[];
};

const HabitDetailPageComponent: FC<PropsWithChildren<HabitDetailPageProps>> = ({
  date,
  initialHabits,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [habits, setHabits] = useState(initialHabits);

  const saveHabit = () => {
    if (!inputRef.current) return;

    const newHabitName = inputRef.current.value.trim();
    if (!newHabitName) return;

    fetch("/api/habit", {
      method: "POST",
      body: JSON.stringify({ date, habit: newHabitName }),
    })
      .then((res: Response) => res.json())
      .then((data) => setHabits(data));
  };
  console.log('habits', habits);
  return (
    <>
      {habits.map((x) => (
        <h1 key={x}>{x}</h1>
      ))}

      <input ref={inputRef} />
      <button onClick={saveHabit}>Submit</button>
    </>
  )
};

HabitDetailPageComponent.displayName = "HabitDetailPage";
export const HabitDetailPage = HabitDetailPageComponent;
