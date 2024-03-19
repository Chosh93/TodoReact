import React, { useState } from "react";
import "../style/TodoTemplate.scss";
import TodoTemplate from "../components/TodoTemplate";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import data from "../data.json";

const Main = () => {
    const [schedules, setSchedules] = useState(data.schedules);
    console.log(schedules);
    console.log("Main 진입 후 TodoTemplate 동작");
    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList schedules={schedules} setSchedules={setSchedules}/>
        </TodoTemplate>
    )
}

export default Main;