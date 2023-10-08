import styled, { css } from "styled-components";

const StyledButton = styled.button(
    ({ theme, $test }) => css`
        cursor: pointer;
        padding: 0;
        font-weight: ${$test ? "400" : "700"};
        color: ${theme.secondaryColor};
        &:hover {
            color: ${theme.hover};
        }
    `
);

function Button({ $test, children }) {
    return <StyledButton $test={$test}>{children}</StyledButton>;
}

export default Button;
