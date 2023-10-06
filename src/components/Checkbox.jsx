import styled from "styled-components";

const StyledDefaultCheckBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.accentColor};
    @media (min-width: 588px) {
        width: 24px;
        height: 24px;
    }
`;

const StyledStateCheckBox = styled(StyledDefaultCheckBox)`
    cursor: pointer;
    &:hover {
        border: double 1px transparent;
        background-origin: border-box;
        background-clip: content-box, border-box;
        background-image: linear-gradient(${(props) => props.theme.secondaryBG}, ${(props) => props.theme.secondaryBG}),
            radial-gradient(circle at top left, #55ddff, #c058f3);
    }
`;

export function DefautCheckBox() {
    return <StyledDefaultCheckBox />;
}

export function StateCheckBox() {
    return <StyledStateCheckBox />;
}
