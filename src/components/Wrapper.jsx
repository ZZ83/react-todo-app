import styled from "styled-components";

const StyledWrapper = styled.div`
    padding: 0 24px;
    max-width: 588px;
    margin: 0 auto;
`;

function Wrapper({ children }) {
    return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
