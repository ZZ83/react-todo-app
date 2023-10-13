import styled from "styled-components";

const $Logo = styled.h1`
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    letter-spacing: 8px;

    @media (width >= 588px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 16px;
    }
`;

function Logo() {
    return <$Logo>TODO</$Logo>;
}

export default Logo;
