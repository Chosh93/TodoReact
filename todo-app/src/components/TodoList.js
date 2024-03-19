import React, { useState } from "react";
import data from "../data.json";
import "../style/TodoList.scss";
import "../style/TodoListItem.scss";

const TodoList = () => {
    const [schedules, setSchedules] = useState(data.schedules);
    console.log(schedules);

    const delSchedule = (id) => {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
    }

    return (
        <div className="TodoList">
            <ul>
                {schedules.map((schedule) =>
                    <li className="TodoListItem" key={schedule.id}>
                        <input type="checkbox"/>
                        {schedule.sc}
                        <button>수정</button>
                        <button onClick={() => delSchedule(schedule.id)}>삭제</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default TodoList;