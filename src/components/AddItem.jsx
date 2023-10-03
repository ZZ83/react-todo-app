import styled from "styled-components";

const StyledAddItem = styled.div`
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondaryBG};
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 16px;
    ::placeholder {
        color: ${(props) => props.theme.secondaryColor};
    }
    @media (min-width: 588px) {
        margin-top: 48px;
        margin-bottom: 24px;
        padding: 0 24px;
    }
`;

const StyledCheckBox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 12px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.accentColor};
    @media (min-width: 588px) {
        width: 24px;
        height: 24px;
        margin-right: 24px;
    }
`;

const StyledInput = styled.input`
    border: 0;
    outline: 0;
    width: 90%;
    letter-spacing: -0.17px;
    color: ${(props) => props.theme.primaryColor};
    height: 48px;
    font-size: 12px;
    background-color: transparent;
    @media (min-width: 588px) {
        height: 64px;
        font-size: 18px;
        letter-spacing: -0.25px;
    }
`;

function AddItem() {
    return (
        <StyledAddItem>
            <StyledCheckBox />
            <StyledInput placeholder="Create a new todo..." />
        </StyledAddItem>
    );
}

export default AddItem;
