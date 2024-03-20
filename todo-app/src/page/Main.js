import React, { useState, useCallback } from "react";
import "../style/TodoTemplate.scss";
import TodoTemplate from "../components/TodoTemplate";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

const Main = () => {
    const [schedules, setSchedules] = useState([]);

    const insertSchedule = (schedule) => {
        setSchedules([...schedules, schedule]);
    }

    const deleteSchedule = (id) => {
        const deletedSchedules = schedules.filter(schedule => schedule.id !== id);
        setSchedules(deletedSchedules);
    }

    const onToggle = useCallback(
        (id) => {
            setSchedules(
                schedules.map((schedule) =>
                schedule.id === id ? { ...schedule, checked: !schedule.checked } : schedule,
            ),
          );
        },
        [setSchedules],
      );

    return (
        <TodoTemplate>
            <TodoInsert insertSchedule={insertSchedule}/>
            <TodoList schedules={schedules} deleteSchedule={deleteSchedule} onToggle={onToggle}/>
        </TodoTemplate>
    )
}

export default Main;