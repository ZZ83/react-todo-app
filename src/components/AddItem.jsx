import styled from "styled-components";
import { DefautCheckBox } from "./Checkbox";

const StyledAddItem = styled.div`
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondaryBG};
    padding: 0 20px;
    display: grid;
    grid-template-columns: 20px 1fr;
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
        grid-template-columns: 24px 1fr;
    }
`;

const StyledInput = styled.input`
    border: 0;
    outline: 0;

    padding-left: 12px;

    letter-spacing: -0.17px;
    color: inherit;
    height: 48px;
    font-size: 14px;
    background-color: transparent;
    @media (min-width: 588px) {
        height: 64px;
        font-size: 18px;
        letter-spacing: -0.25px;
        padding-left: 24px;
    }
`;

function AddItem({ original, setOriginal, todo, setTodo }) {
    return (
        <StyledAddItem>
            <DefautCheckBox />
            <StyledInput
                placeholder="Create a new todo..."
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        let t = event.target.value;
                        const obj = {
                            id: crypto.randomUUID(),
                            text: t,
                            completed: false,
                        };
                        setOriginal([...original, obj]);
                        setTodo([...todo, obj]);
                        event.target.value = "";
                    }
                }}
            />
        </StyledAddItem>
    );
}

export default AddItem;
