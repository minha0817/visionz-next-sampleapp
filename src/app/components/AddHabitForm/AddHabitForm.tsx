"use client";

import { useState } from "react";

type HabitProps = {
  date: string;
};

export default function AddHabitForm({ date }: HabitProps) {

  // const handleClick = (e: any) => {
  //   fetch("/api/test", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       date: date,
  //       habit: input,
  //     }),
  //   });

  //   setInput("");
  // };

  return (
    <>
      {/* <form>
        <input
          name="Add a Habit!"
          value={input}
          placeholder="Add a Habit!"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </form>
      <button onClick={(e) => handleClick(e)}>Add</button> */}
    </>
  );
}
