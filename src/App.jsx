import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";
import { BackgroundImage } from "./components/BackgroundImage";

const Heading = styled.h1`
    color: aqua;
`;

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

                <Heading>T O D O</Heading>
                <Button onClick={changeTheme}>Click Me</Button>
            </>
        </ThemeProvider>
    );
}

export default App;
