import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import BackgroundImage from "./components/BackgroundImage";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import TodoItems from "./components/TodoItems";

const themes = {
    lightTheme: {
        primaryBG: "#fafafa",
        secondaryBG: "#ffffff",
        primaryColor: "#494C6B",
        secondaryColor: "#9495A5",
        accentColor: "#E3E4F1",
        bg: "light",
    },
    darkTheme: {
        primaryBG: "#171823",
        secondaryBG: "#25273D",
        primaryColor: "#C8CBE7",
        secondaryColor: "#767992",
        accentColor: "#393A4B",
        bg: "dark",
    },
};

function App() {
    const [theme, setTheme] = useState(themes.lightTheme);

    const [todo, setTodo] = useState([]);

    console.log(todo);

    function addTodo(item) {
        setTodo([...item]);
    }

    function changeTheme() {
        if (theme === themes.lightTheme) {
            setTheme(themes.darkTheme);
        } else {
            setTheme(themes.lightTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BackgroundImage />
            <Wrapper>
                <Header theme={theme} changeTheme={changeTheme} />
                <AddItem todo={todo} setTodo={setTodo} />
                <TodoItems />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
