import React, { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdCreate } from "react-icons/md";
import "../style/TodoListItem.scss";
import cn from "classnames";
import TodoDelModal from "./TodoDelModal";
import TodoUpdModal from "./TodoUpdModal";

const TodoListItem = ( {schedule, deleteSchedule, updateschedule, onToggle}) => {
    const {id, sc, checked} = schedule;
    const [delModal, setDelModal] = useState(false);
    const [updModal, setUpdModal] = useState(false);
    const [inputUpdate, setInputdate] = useState(sc);

    const onChangeUpdate = (e) => {
        setInputdate(e.target.value);
    };

    const openDelModal = () => {
        setDelModal(true);
    };

    const openUpdModal = () => {
        setUpdModal(true);
    };

    const closeModal = () => {
        setDelModal(false);
        setUpdModal(false);
    };

    const handleDelete = (id) => {
        deleteSchedule(id);
    };

    const handleUpdate = () => {
        updateschedule(id, inputUpdate);
        closeModal();
    }

    const handleOnKeyPress = e => {
        if(e.key === 'Enter') {
            handleUpdate();
        }
    }

    return (
        <div className={"TodoListItem"}>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{sc}</div>
            </div>
            <div className="update">
                <MdCreate onClick={openUpdModal}/>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline onClick={openDelModal}/>
            </div>
            <TodoDelModal open={delModal} close={closeModal} header="삭제" confirm={() => handleDelete(id)} type="confirm">삭제 하시겠습니까?</TodoDelModal>
            <TodoUpdModal open={updModal} header="수정하기" confirm={() => handleUpdate(id, inputUpdate)} type="confirm">
                <input type="text" onChange={onChangeUpdate} placeholder={sc} onKeyUp={handleOnKeyPress}/>
            </TodoUpdModal>
        </div>
    )
}

export default TodoListItem;