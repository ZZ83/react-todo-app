import styled, { css } from "styled-components";

const StyledButton = styled.button(
    ({ theme, $active }) => css`
        cursor: pointer;
        padding: 0;
        font-weight: 700;
        color: ${$active ? "#3A7CFD" : `${theme.secondaryColor}`};
        &:hover {
            color: ${theme.hover};
        }
    `
);

function Button({ $active, onPress, children }) {
    return (
        <StyledButton $active={$active} onClick={onPress}>
            {children}
        </StyledButton>
    );
}

export default Button;
