import styled from "styled-components";

const StyledLogo = styled.h1`
    font-size: 24px;
    line-height: 20px;
    letter-spacing: 8px;
    color: #fff;
    @media (min-width: 588px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 16px;
    }
`;

function Logo() {
    return <StyledLogo>TODO</StyledLogo>;
}

export default Logo;
