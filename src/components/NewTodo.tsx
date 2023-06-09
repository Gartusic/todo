import React, { useContext } from 'react';
import { useRef } from 'react'; // useRef를 임포트하여 레퍼런스를 사용할 수 있다. 
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';
const NewTodo:React.FC = () => {

    const todosCtx = useContext(TodosContext); // 컨텍스트API 호출


    //JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.
    //리액트에서는 ref 라는 것을 사용합니다.
    const todoTextInputRef = useRef<HTMLInputElement>(null); // 초깃값을 넣어주면 ref 에러 안생김 (null)


    //리액트의 이벤트를 받기 위한 함수를 정의. 
    //Typescript에서 event의 타입을 모르기 때문에 React에서 만들어둔 interface를 전달하여 알려준다.
    // React.MouseEvent : onClick이벤트리스너를 등록하면 받게됨.
    // React.FormEvent : Form 제출 이벤트를 위해 받게됨.
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault(); //event의 타입을 정의하면 preventDefault가 자동완성에 뜬다 (preventDefault() : HTML 태그에 담긴 고유 이벤트의 기본동작을 막아준다.)
        const enteredText= todoTextInputRef.current!.value; // ! 기호를 붙여 null이 될 수 없다는 것을 확인시킨다. 즉 값을 항상 가져옴. 반대로 ? 가 붙을 시 null이 될 수 있음을 의미한다.
                                                    //현재 input에 있는 value를 가져온다.
        if(enteredText.trim().length === 0){
            //Throw an error - Todo input에 입력된 값이 없을 시 입력하라는 알러트를 호출 후 아무 작업 없이 리턴한다. 
            alert("Please enter any word.");
            return;
        }

        todosCtx.addTodo(enteredText); // input값을 argument(인수)로 넘겨준다. App.tsx에서 인수에 대한 처리를 하게된다. 
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add todo</button>

        </form>
    );
};

export default NewTodo;