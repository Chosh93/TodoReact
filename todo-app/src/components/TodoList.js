import React from "react";
import "../style/TodoList.scss";
import "../style/TodoListItem.scss";

const TodoList = ({schedules, setSchedules}) => {
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