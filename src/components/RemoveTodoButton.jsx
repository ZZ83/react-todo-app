import styled, { css } from "styled-components";

const $RemoveTodoButton = styled.svg(
    ({ theme }) => css`
        width: 12px;
        height: 12px;
        margin-left: auto;
        fill: ${theme.primaryColor};

        @media (width >= 588px) {
            width: 18px;
            height: 18px;
        }
    `
);

function RemoveTodoButton({ id, sort, unsortedList, setUnsortedList, displayedTodoItems, setDisplayedTodoItems }) {
    function removeTodoItem() {
        const newUnsortedList = [...unsortedList].filter((item) => item.id !== id);
        const newSortedList = [...displayedTodoItems].filter((item) => item.id !== id);
        if (sort.all === true) {
            setUnsortedList([...newUnsortedList]);
            setDisplayedTodoItems([...newUnsortedList]);
        } else {
            setUnsortedList([...newUnsortedList]);
            setDisplayedTodoItems([...newSortedList]);
        }
    }

    return (
        <$RemoveTodoButton
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            role="button"
            onClick={() => removeTodoItem()}
        >
            <path
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
        </$RemoveTodoButton>
    );
}

export default RemoveTodoButton;
