import React, { useContext } from 'react';
import classes from './Todos.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context'; //App.tsx 에 있던 state관련 함수를 분리하여 보관

//제네릭 타입이란 '데이터 형식에 의존하지 않고, 하나의 값이 여러 다른 데이터 타입들을 가질 수 있도록 하는 방법'
//제네릭(Generic)은 클래스 내부에서 지정하는 것이 아닌 외부에서 사용자에 의해 지정되는 것을 의미한다.
// 컴파일 단계에서 잘못된 타입이 들어오는 것을 방지한다. 사용자가 타입을 각각 다르게 입력해도 그에 따른 타입으로 반환한다.
// React.FC 는 @types/react에서 제네릭 타입을 내장해놓은 것이다. 
// React.FC<> 대괄호<> 안에는 구체적인 값을 입력한다. 
const Todos: React.FC = () => { // 미리 클래스로 정의된 Todo타입을 가져와 타입을 정의한다.
    const todoCtx = useContext(TodosContext); // context를 호출하여 일일히 타입정의하지 않고 간편히 타입을 사용
    
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map( (item) => 
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind('null', item.id)} /> //bind()함수를 사용하면 어떤 인스턴스를 가리킬 것인지 정확히 선택할 수 있다. 
            )}
        </ul>
    );
};

export default Todos;