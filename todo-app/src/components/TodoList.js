import React from "react";
import "../style/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ schedules, deleteSchedule, updateschedule, onToggle }) => {
    return (
        <div className="TodoList">
            {schedules.map((schedule) => (
                <TodoListItem key={schedule.id} schedule={schedule} updateschedule={updateschedule} deleteSchedule={deleteSchedule} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;

