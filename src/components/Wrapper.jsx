import styled from "styled-components";

const $Wrapper = styled.div`
    max-width: 588px;
    padding: 0 24px;
    margin: 0 auto;
`;

function Wrapper({ children }) {
    return <$Wrapper>{children}</$Wrapper>;
}

export default Wrapper;
