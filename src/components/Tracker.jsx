import styled, { css } from "styled-components";
import Button from "./Button";

const $Tracker = styled.div(
    ({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 53px;
        padding-right: 20px;
        padding-left: 20px;
        font-size: 14px;
        color: ${theme.secondaryColor};
        background-color: ${theme.secondaryBG};
        border-radius: 0 0 5px 5px;

        @media (width >= 588px) {
            height: 64px;
            padding-right: 24px;
            padding-left: 24px;
        }
    `
);

const $Sort = styled.div(
    ({ theme }) => css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        gap: 18px;
        justify-content: center;
        width: 100%;
        height: 53px;
        padding: 0 20px;
        margin-top: 69px;
        margin-right: auto;
        margin-left: auto;
        background-color: ${theme.secondaryBG};
        border-radius: 5px;

        @media only screen and (width >= 588px) {
            position: initial;
            justify-content: space-between;
            width: 166px;
            height: 64px;
            padding: 0;
            margin-top: 0;
            background-color: transparent;
        }
    `
);

function Tracker({ sort, setSort, unsortedList, setUnsortedList, setDisplayedTodoItems }) {
    const all = { ...sort };
    const activeTodos = [...unsortedList].filter((item) => item.isCompleted === false);
    const completedTodos = [...unsortedList].filter((item) => item.isCompleted === true);

    function showAllTodos() {
        setDisplayedTodoItems([...unsortedList]);
        all.all = true;
        all.active = false;
        all.completed = false;
        setSort({ ...all });
    }

    function showActiveTodos() {
        setDisplayedTodoItems([...activeTodos]);
        all.all = false;
        all.active = true;
        all.completed = false;
        setSort({ ...all });
    }

    function showCompletedTodos() {
        setDisplayedTodoItems([...completedTodos]);
        all.all = false;
        all.active = false;
        all.completed = true;
        setSort({ ...all });
    }

    function removeCompletedTodos() {
        if (all.completed === true) {
            setUnsortedList([...activeTodos]);
            setDisplayedTodoItems([]);
        } else {
            setUnsortedList([...activeTodos]);
            setDisplayedTodoItems([...activeTodos]);
        }
    }

    return (
        <$Tracker>
            <span>{activeTodos.length} Items Left</span>
            <$Sort>
                <Button $active={all.all} onPress={showAllTodos}>
                    All
                </Button>
                <Button $active={all.active} onPress={showActiveTodos}>
                    Active
                </Button>
                <Button $active={all.completed} onPress={showCompletedTodos}>
                    Completed
                </Button>
            </$Sort>
            <Button onPress={removeCompletedTodos}>Clear Completed</Button>
        </$Tracker>
    );
}

export default Tracker;
