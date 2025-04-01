// khi nào sử dụng interface và type?
// giả sử mình có một prop có nhiều giá trị: colors: "red" | "yellow" | "green"



// trong trường hợp này dùng type thì sẽ có lợi thế hơn: khi lm việc với các giá trị cố định (literal types)
type TColor = "red" | "yellow" | "green";
const myColorT: TColor = "green" // được gợi ý code ở đây luôn
const myColorI: IColor = { colors: "red" } // dài dòng hơn

console.log(">>> check mycolorT: ", myColorT); // kiểu dl trả về là "green" luôn
console.log(">>> check mycolorI: ", myColorI); // còn kiểu dl trả về ở đây là object {colors: "red"}

// nếu như mình dùng interface:  (chỉ sử dụng interface khi và chỉ khi chúng ta muốn làm với biến object)
interface IColor {
    // colors: "red" | "yellow" | "green"
    colors: TColor
}
// => nó bị dài dòng và không cần thiết


// đây là cách của mình tự viết nên nó hơi dài dòng 
// type todosType = {
//     id: number,
//     title: string,
//     isComplete: boolean
// }

// interface TodoDataProps {
//     todos: todosType[];
// }

// đây là cách thứ 2:
// tương tự như việc chúng ta có một [1, 2, 3] => number[]. Thì lần này tương tự với object => object[]
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
    isDeveloper: boolean;
}

type TProps = {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
    isDeveloper: boolean;
}

const TodoData = (props: TProps) => {
    const { todos, owner, age, isDeveloper } = props;
    return (
        <div>
            <h3>{`Owner: ${owner}`}</h3>
            <h3>{`Age: ${age}`}</h3>
            <h3>{`Job: ${isDeveloper}`}</h3>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <ul>
                            <li>{item.id}</li>
                            <li>{item.title}</li>
                            <li>{item.isComplete ? "true" : "false"}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoData