import styled, { css } from "styled-components";

const StyledButton = styled.button(
    ({ theme, $test }) => css`
        cursor: pointer;
        padding: 0;
        font-weight: 700;
        color: ${theme.secondaryColor};
        &:hover {
            color: ${theme.hover};
        }
    `
);

const StyledClearButton = styled.button(
    ({ theme }) => css`
        cursor: pointer;
        padding: 0;
        font-weight: 400;
        color: ${theme.secondaryColor};
        &:hover {
            color: ${theme.hover};
        }
    `
);

export function ClearButton({ removeCompleted, children }) {
    return (
        <StyledClearButton
            onClick={() => {
                removeCompleted();
            }}
        >
            {children}
        </StyledClearButton>
    );
}

function Button({ children }) {
    return <StyledButton>{children}</StyledButton>;
}

export default Button;
