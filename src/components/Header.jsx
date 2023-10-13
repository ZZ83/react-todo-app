import styled from "styled-components";
import Logo from "./Logo";
import ThemeIcon from "./ThemeIcon";

const $Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;

    @media (width >= 588px) {
        margin-top: 70px;
    }
`;

function Header({ theme, changeTheme }) {
    return (
        <$Header>
            <Logo />
            <ThemeIcon theme={theme} changeTheme={changeTheme}></ThemeIcon>
        </$Header>
    );
}

export default Header;
