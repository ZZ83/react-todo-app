import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";
import { BackgroundImage } from "./components/BackgroundImage";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
const Button = styled.button`
    background-color: orange;
    cursor: pointer;
`;

const lightTheme = {
    body: "#ffffff",
    bg: "light",
};

const darkTheme = {
    body: "#171823",
    bg: "dark",
};

function App() {
    const [theme, setTheme] = useState(lightTheme);

    function changeTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <BackgroundImage theme={theme} />
                <Wrapper>
                    <Header theme={theme} changeTheme={changeTheme} />
                </Wrapper>
            </>
        </ThemeProvider>
    );
}

export default App;
