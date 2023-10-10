import styled from "styled-components";

const StyledCloseButton = styled.svg`
    width: 12px;
    height: 12px;
    fill: ${(props) => props.theme.primaryColor};
    margin-left: auto;
    @media (min-width: 588px) {
        width: 18px;
        height: 18px;
    }
`;

function CloseButton({ id, sort, original, setOriginal, todo, setTodo }) {
    function removeItem(items, id) {
        return items.filter((item) => item.id !== id);
    }

    return (
        <StyledCloseButton
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            role="button"
            onClick={() => {
                if (sort.all === true) {
                    const prev = removeItem([...original], id);
                    setOriginal([...prev]);
                    setTodo([...prev]);
                } else {
                    const prev = removeItem([...original], id);
                    const prevIt = removeItem([...todo], id);
                    setOriginal([...prev]);
                    setTodo([...prevIt]);
                }
            }}
        >
            <path
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
        </StyledCloseButton>
    );
}

export default CloseButton;
