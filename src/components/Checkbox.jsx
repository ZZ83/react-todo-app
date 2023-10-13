import styled, { css } from "styled-components";

const $StaticCheckBox = styled.div(
    ({ theme }) => css`
        width: 20px;
        height: 20px;
        border: 1px solid ${theme.accentColor};
        border-radius: 50%;

        @media (width >= 588px) {
            width: 24px;
            height: 24px;
        }
    `
);

const $DynamicCheckBox = styled($StaticCheckBox)(
    ({ theme, $active }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: ${({ $active }) => ($active ? "linear-gradient(to bottom right, #55ddff, #c058f3)" : null)};
        border: ${({ $active }) => ($active ? "none" : null)};

        &:hover {
            background-image: ${!$active
                ? `linear-gradient(${theme.secondaryBG}, ${theme.secondaryBG}), linear-gradient(to bottom right, #55ddff, #c058f3)`
                : null};
            background-clip: ${$active ? null : "content-box, border-box"};
            background-origin: ${$active ? null : "border-box"};
            border: ${$active ? null : "double 1px transparent"};
        }
    `
);

function StaticCheckBox() {
    return <$StaticCheckBox />;
}

function DynamicCheckBox({ index, active, toggleCompleted }) {
    if (!active) {
        return <$DynamicCheckBox $active={active} onClick={() => toggleCompleted(index)} />;
    } else {
        return (
            <$DynamicCheckBox $active={active} onClick={() => toggleCompleted(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
            </$DynamicCheckBox>
        );
    }
}

export { StaticCheckBox, DynamicCheckBox };
