import styled, { css } from "styled-components";

const StyledDefaultCheckBox = styled.div(
    ({ theme }) => css`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid ${theme.primaryColor};
        @media (min-width: 588px) {
            width: 24px;
            height: 24px;
        }
    `
);

const StyledStateCheckBox = styled(StyledDefaultCheckBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        border: ${({ $active }) => ($active ? null : "double 1px transparent")};
        background-origin: ${({ $active }) => ($active ? null : "border-box")};
        background-clip: ${({ $active }) => ($active ? null : "content-box, border-box")};
        background-image: ${({ theme, $active }) =>
            $active
                ? null
                : `linear-gradient(${theme.secondaryBG}, ${theme.secondaryBG}), linear-gradient(to bottom right, #55ddff, #c058f3)`};
    }

    border: ${({ $active }) => ($active ? "none" : null)};

    background: ${({ $active }) => ($active ? "linear-gradient(to bottom right, #55ddff, #c058f3)" : null)};
`;

export function DefautCheckBox() {
    return <StyledDefaultCheckBox />;
}

export function StateCheckBox({ index, active, toggleCompleted }) {
    if (!active) {
        return <StyledStateCheckBox $active={active} onClick={() => toggleCompleted(index)} />;
    } else {
        return (
            <StyledStateCheckBox $active={active} onClick={() => toggleCompleted(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
            </StyledStateCheckBox>
        );
    }
}

// const StyledStateCheckBox = styled(StyledDefaultCheckBox)(
//     ({ theme, $active }) => css`
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//         &:hover {
//             border: ${$active ? null : "double 1px transparent"};
//             background-origin: ${$active ? null : "border-box"};
//             background-clip: ${$active ? null : "content-box, border-box"};
//             background-image: ${!$active
//                 ? `linear-gradient(${theme.secondaryBG}, ${theme.secondaryBG}), linear-gradient(to bottom right, #55ddff, #c058f3)`
//                 : null};
//         }

//         border: ${({ $active }) => ($active ? "none" : null)};

//         background: ${({ $active }) => ($active ? "linear-gradient(to bottom right, #55ddff, #c058f3)" : null)};
//     `
// );
