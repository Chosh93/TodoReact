import React from "react";
import "../style/TodoTemplate.scss";
import TodoTemplate from "../components/TodoTemplate";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

const Main = () => {
    console.log("Main 진입 후 TodoTemplate 동작");
    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList/>
        </TodoTemplate>
    )
}

export default Main;