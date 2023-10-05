import styled from "styled-components";

const StyledCheckBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.accentColor};
    @media (min-width: 588px) {
        width: 24px;
        height: 24px;
    }
`;

function CheckBox() {
    return <StyledCheckBox />;
}

export default CheckBox;
