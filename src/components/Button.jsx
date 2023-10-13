import styled, { css } from "styled-components";

const $Button = styled.button(
    ({ theme, $active }) => css`
        padding: 0;
        font-weight: 700;
        color: ${$active ? "#3A7CFD" : `${theme.secondaryColor}`};
        cursor: pointer;

        &:hover {
            color: ${theme.hover};
        }
    `
);

function Button({ $active, onPress, children }) {
    return (
        <$Button $active={$active} onClick={onPress}>
            {children}
        </$Button>
    );
}

export default Button;
