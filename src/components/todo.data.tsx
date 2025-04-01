import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    removeATodo: (value: ITodo) => void;
}



const TodoData = (props: IProps) => {

    const { todos, owner = "unknown", removeATodo } = props;
    return (
        <div>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() =>
                                removeATodo({ id: item.id, title: item.title, isComplete: item.isComplete })}
                            >Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoData