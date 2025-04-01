import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

// tsx
const TodoList = () => {

    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]

    const [listTodo, setListTodo] = useState<ITodo[]>([]);

    const addNewTodo = (todo: ITodo) => {
        console.log(">>> check list todo: ", ...listTodo);
        setListTodo([...listTodo, todo]);
    }
    const removeATodo = (itemTodo: ITodo) => {
        setListTodo([...listTodo].filter(item => item.id !== itemTodo.id));
    }

    return (
        <div style={{
            width: "60vw",
            margin: "50px auto",
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 10
        }}>
            <div style={{
                padding: "10px 0",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                borderBottomStyle: "solid"
            }}
            >My todo list: </div>

            <br />

            <TodoInput name="Your Todo" addNewTodo={addNewTodo} listTodo={listTodo} ></TodoInput>

            <TodoData todos={listTodo} removeATodo={removeATodo}
                owner={"iFanIT"}
            // age={25} 
            // isDeveloper={true}
            >

            </TodoData>
        </div>
    );
}

export default TodoList

