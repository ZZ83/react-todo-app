import styled, { css } from "styled-components";
import Button from "./Button";

const StyledTracker = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        font-size: 14px;
        color: ${theme.secondaryColor};
        justify-content: space-between;
        background-color: ${theme.secondaryBG};
        height: 53px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0 0 5px 5px;
        @media (min-width: 588px) {
            height: 64px;
            padding-left: 24px;
            padding-right: 24px;
        }
        position: relative;
    `
);

const StyledSort = styled.div(
    ({ theme }) => css`
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        position: absolute;
        margin-top: 69px;
        gap: 18px;
        background-color: ${theme.secondaryBG};
        height: 53px;
        padding: 0 20px;
        @media only screen and (min-width: 588px) {
            position: initial;
            justify-content: space-between;
            background-color: transparent;
            margin-top: 0;
            height: 64px;
            width: 166px;
            padding: 0;
        }
    `
);

function Tracker({ sort, setSort, original, setOriginal, setTodo }) {
    const all = { ...sort };
    const activeTodos = [...original].filter((item) => item.completed === false);
    const completedTodos = [...original].filter((item) => item.completed === true);

    function showAllTodos() {
        setTodo([...original]);
        all.all = true;
        all.active = false;
        all.completed = false;
        setSort({ ...all });
    }

    function showActiveTodos() {
        setTodo([...activeTodos]);
        all.all = false;
        all.active = true;
        all.completed = false;
        setSort({ ...all });
    }

    function showCompletedTodos() {
        setTodo([...completedTodos]);
        all.all = false;
        all.active = false;
        all.completed = true;
        setSort({ ...all });
    }

    function removeCompletedTodos() {
        if (all.completed === true) {
            setOriginal([...activeTodos]);
            setTodo([]);
        } else {
            setOriginal([...activeTodos]);
            setTodo([...activeTodos]);
        }
    }

    return (
        <StyledTracker>
            <span>{activeTodos.length} Items Left</span>
            <StyledSort>
                <Button $active={all.all} onPress={showAllTodos}>
                    All
                </Button>
                <Button $active={all.active} onPress={showActiveTodos}>
                    Active
                </Button>
                <Button $active={all.completed} onPress={showCompletedTodos}>
                    Completed
                </Button>
            </StyledSort>
            <Button onPress={removeCompletedTodos}>Clear Completed</Button>
        </StyledTracker>
    );
}

export default Tracker;
