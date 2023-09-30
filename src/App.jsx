import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

const log = () => {
    alert("Clicked");
};

const Heading = styled.h1`
    color: red;
`;

const Button = styled.button`
    background-color: green;
    cursor: pointer;
`;

const lightTheme = {
    body: "lime",
};

const darkTheme = {
    body: "#171823",
};

function App() {
    const [theme, setTheme] = useState(lightTheme);

    console.log(theme);

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
                <Heading>T O D O</Heading>
                <Button onClick={changeTheme}>Click Me</Button>
            </>
        </ThemeProvider>
    );
}

export default App;
