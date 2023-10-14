import styled from "styled-components";
import { StaticCheckBox } from "./Checkbox";

const $CreateTodo = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    padding: 0 20px;
    margin-top: 40px;
    margin-bottom: 16px;
    background-color: ${(props) => props.theme.secondaryBG};

    ::placeholder {
        color: ${(props) => props.theme.secondaryColor};
    }

    @media (width >= 588px) {
        grid-template-columns: 24px 1fr;
        padding: 0 24px;
        margin-top: 48px;
        margin-bottom: 24px;
    }
`;

const $Input = styled.input`
    height: 48px;
    padding-left: 12px;
    font-size: 14px;
    color: inherit;
    letter-spacing: -0.17px;
    background-color: transparent;
    border: 0;
    outline: 0;

    @media (width >= 588px) {
        height: 64px;
        padding-left: 24px;
        font-size: 18px;
        letter-spacing: -0.25px;
    }
`;

function CreateTodo({ unsortedList, setUnsortedList, displayedTodoItems, setDisplayedTodoItems }) {
    function addTodoItem(event) {
        if (event.key === "Enter") {
            const todoItem = {
                id: crypto.randomUUID(),
                text: event.target.value,
                isCompleted: false,
            };
            setUnsortedList([...unsortedList, todoItem]);
            setDisplayedTodoItems([...displayedTodoItems, todoItem]);
            event.target.value = "";
        }
    }

    return (
        <$CreateTodo>
            <StaticCheckBox />
            <$Input onKeyDown={(event) => addTodoItem(event)} placeholder="Create a new todo..." />
        </$CreateTodo>
    );
}

export default CreateTodo;
