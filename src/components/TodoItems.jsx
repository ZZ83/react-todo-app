import styled from "styled-components";

const StyledTodo = styled.li`
    display: grid;
    grid-template-columns: 20px 1fr 12px;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    letter-spacing: -0.17px;
    background-color: ${(props) => props.theme.secondaryBG};
    border-bottom: 1px solid ${(props) => props.theme.accentColor};
    &:first-child {
        border-radius: 5px 5px 0 0;
    }
    @media (min-width: 588px) {
        grid-template-columns: 24px 1fr 18px;
        padding-left: 24px;
        padding-right: 24px;
        font-size: 18px;
        letter-spacing: -0.25px;
    }
`;

function TodoItems({ children }) {
    return <StyledTodo draggable="true">{children}</StyledTodo>;
}

export default TodoItems;
