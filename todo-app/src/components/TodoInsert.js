import React, { useState } from "react";
import '../style/TodoInsert.scss';
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ insertSchedule }) => {
    const [inputSc, setInputSc] = useState("");

    const onChangeInsertData = (e) => {
        const data = e.target.value;
        setInputSc(data);
    }

    const handleClick = () => {
        insertSchedule({ id: Date.now(), sc: inputSc, checked: false });
        setInputSc("");
    }

    return (
        <form className="TodoInsert">
            <input
                type="text"
                value={inputSc}
                placeholder="할 일을 입력하세요."
                onChange={onChangeInsertData}
            />
            <button type="button" onClick={handleClick}>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;
