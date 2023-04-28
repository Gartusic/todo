// 데이터모델을 구성하는 파일이다. 데이터의 형태를 정의한다. 

class Todo { //typescript에서의 class는 class역할 뿐만 아니라 type 정의의 역할도 함께 한다. 
    id: string;
    text: string;

    constructor(todoText:string){ //생성자. 상단의 정의된 클래스를 통해 객체를 생성
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;