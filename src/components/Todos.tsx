import React from 'react';
import Todo from '../models/todo';
import classes from './Todos.module.css';
import TodoItem from './TodoItem';

//제네릭 타입이란 '데이터 형식에 의존하지 않고, 하나의 값이 여러 다른 데이터 타입들을 가질 수 있도록 하는 방법'
//제네릭(Generic)은 클래스 내부에서 지정하는 것이 아닌 외부에서 사용자에 의해 지정되는 것을 의미한다.
// 컴파일 단계에서 잘못된 타입이 들어오는 것을 방지한다. 사용자가 타입을 각각 다르게 입력해도 그에 따른 타입으로 반환한다.
// React.FC 는 @types/react에서 제네릭 타입을 내장해놓은 것이다. 
// React.FC<> 대괄호<> 안에는 구체적인 값을 입력한다. 
const Todos: React.FC<{items:Todo[]}> = (props) => { // 미리 클래스로 정의된 Todo타입을 가져와 타입을 정의한다.
    return (
        <ul className={classes.todos}>
            {props.items.map( (item) => 
            <TodoItem key={item.id} text={item.text} />
            )}
        </ul>
    );
};

export default Todos;