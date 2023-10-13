import styled, { css } from "styled-components";

const $TodoItem = styled.li(
    ({ theme }) => css`
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 20px 1fr 12px;
        align-items: center;
        padding: 16px 20px;
        font-size: 14px;
        letter-spacing: -0.17px;
        background-color: ${theme.secondaryBG};
        border-bottom: 1px solid ${theme.accentColor};

        &:first-child {
            border-radius: 5px 5px 0 0;
        }

        @media (width >= 588px) {
            grid-template-columns: 24px 1fr 18px;
            padding: 20px 24px 19px;
            font-size: 18px;
            letter-spacing: -0.25px;
        }
    `
);

function TodoItem({ children }) {
    return <$TodoItem draggable>{children}</$TodoItem>;
}

export default TodoItem;
