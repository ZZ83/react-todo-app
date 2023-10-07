import styled from "styled-components";

const StyleTodoText = styled.p`
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    letter-spacing: -0.17px;
    @media (min-width: 588px) {
        padding-left: 24px;
        padding-right: 24px;
        font-size: 18px;
        letter-spacing: -0.25px;
    }

    text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
    color: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

function TodoText({ completed, children }) {
    return <StyleTodoText $completed={completed}>{children}</StyleTodoText>;
}

export default TodoText;
