"use client";

import { useState } from "react";

type HabitProps = {
  date: string;
  // habitList: string[];
  // setData: Dispatch<SetStateAction<{ [date: string]: string[] }>>;
};

export default function AddHabitForm({date}: HabitProps) {
  const [input, setInput] = useState("");
  console.log('date???', date);
  const handleClick = (e: any) => {
    e.preventDefault();
    fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        date: date,
        habit: input,
      }),
    });

    setInput("");
  };

  return (
    <form>
      <input
        name="Add a Habit!"
        value={input}
        placeholder="Add a Habit!"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={(e) => handleClick(e)}>Add</button>
    </form>
  );
}
