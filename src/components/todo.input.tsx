import React, { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}


interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void
    listTodo: ITodo[]
}


const TodoInput = (props: IProps) => {
    const { addNewTodo, listTodo } = props;
    const [todo, setTodo] = useState<string>("");
    // const [idTodo, setIdTodo] = useState<number>(1);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    // function randomInteger(min: number, max: number) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }



    const handleClick = () => {
        if (todo === "") {
            alert("Your Todo is empty");
            return;
        }

        // Lấy ID cao nhất hiện tại và tăng lên 1
        const newId = listTodo.length > 0 ? Math.max(...listTodo.map(todo => todo.id)) + 1 : 1;

        addNewTodo({
            id: newId,
            title: todo,
            isComplete: false,
        });
        // setIdTodo((id) => id + 1);
        setTodo("");
    }

    const handleKeyDownEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleClick();
            setTodo("");
        }
    }

    return (
        <div>

            <div style={{ display: "flex", gap: 15, marginBottom: 20, }}>
                <input
                    type="text"
                    value={todo}
                    onChange={handleTextChange}
                    onKeyDown={handleKeyDownEnter}
                    style={{ padding: 6, flex: 1, flexShrink: 0 }}
                />
                <button onClick={handleClick}>Add todo</button>
            </div>
        </div>
    );
}

export default TodoInput;