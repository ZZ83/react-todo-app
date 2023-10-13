import styled, { css } from "styled-components";

const $TodoText = styled.p(
    ({ theme, $completed }) => css`
        padding-right: 12px;
        padding-left: 12px;
        font-size: 14px;
        color: ${$completed ? theme.lineThroughColor : null};
        text-decoration: ${$completed ? "line-through" : "none"};
        letter-spacing: -0.17px;

        @media (width >= 588px) {
            padding-right: 24px;
            padding-left: 24px;
            font-size: 18px;
            letter-spacing: -0.25px;
        }
    `
);

function TodoText({ completed, children }) {
    return <$TodoText $completed={completed}>{children}</$TodoText>;
}

export default TodoText;
