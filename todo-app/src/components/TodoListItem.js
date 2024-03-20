import React from "react";
import cn from 'classnames'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import "../style/TodoListItem.scss";

const TodoListItem = ( {schedule, deleteSchedule, onToggle}) => {
    const {id, sc, checked} = schedule;
    const handleDelete = () => {
        deleteSchedule(id);
    };

    return (
        <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{sc}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={() => handleDelete(id)}/>
      </div>
    </div>
    )
}

export default TodoListItem;