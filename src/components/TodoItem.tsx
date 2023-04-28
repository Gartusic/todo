import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodo:(event:React.MouseEvent)=>void}> = (props) => {
    //button을 클릭하여 Todo를 지우기 위해 onClick에 대한 함수를 기입함.
    //onRemoveTodo:(파라미터의 타입)=>함수가 반환하는 값의 타입
    return (
        <li className={classes.item}>
            {props.text}
            <button onClick={props.onRemoveTodo}>delete</button>
        </li>
    );
};
export default TodoItem;