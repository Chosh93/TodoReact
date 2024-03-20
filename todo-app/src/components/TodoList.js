import React from "react";
import "../style/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ schedules, deleteSchedule, onToggle }) => {
    console.log(schedules);
    return (
        <div className="TodoList">
            {schedules.map((schedule) => (
                <TodoListItem key={schedule.id} schedule={schedule} deleteSchedule={deleteSchedule} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;

