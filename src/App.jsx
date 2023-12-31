import { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import BackgroundImage from "./components/BackgroundImage";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";
import TodoText from "./components/TodoText";
import Tracker from "./components/Tracker";
import { DynamicCheckBox } from "./components/Checkbox";
import RemoveTodoButton from "./components/RemoveTodoButton";
import { light, dark } from "./data/themes";

function App() {
    const [theme, setTheme] = useState(light);
    function changeTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    const [unsortedList, setUnsortedList] = useState([]);
    const [displayedTodoItems, setDisplayedTodoItems] = useState([]);
    function toggleCompleted(index) {
        const todoItems = [...displayedTodoItems];
        if (displayedTodoItems[index].isCompleted === false) {
            todoItems[index].isCompleted = true;
            setDisplayedTodoItems([...todoItems]);
        } else {
            todoItems[index].isCompleted = false;
            setDisplayedTodoItems([...todoItems]);
        }
    }

    const [sort, setSort] = useState({ all: true, active: false, completed: false });

    let dragStartItem;
    let dragOverItem;

    function dragStart(index) {
        dragStartItem = index;
    }

    function dragEnter(index) {
        dragOverItem = index;
    }

    function dragEnd() {
        const unsortedCopy = [...unsortedList];
        const todoItemsCopy = [...displayedTodoItems];

        const unsortedElement = unsortedCopy[dragStartItem];
        const sortedElement = todoItemsCopy[dragStartItem];

        unsortedCopy.splice(dragStartItem, 1);
        todoItemsCopy.splice(dragStartItem, 1);

        unsortedCopy.splice(dragOverItem, 0, unsortedElement);
        todoItemsCopy.splice(dragOverItem, 0, sortedElement);

        setUnsortedList(unsortedCopy);
        setDisplayedTodoItems(todoItemsCopy);
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BackgroundImage />
            <Wrapper>
                <Header theme={theme} changeTheme={changeTheme} />
                <CreateTodo
                    unsortedList={unsortedList}
                    setUnsortedList={setUnsortedList}
                    displayedTodoItems={displayedTodoItems}
                    setDisplayedTodoItems={setDisplayedTodoItems}
                />
                <ul>
                    {displayedTodoItems.map((todoItem, index) => (
                        <TodoItem
                            key={todoItem.id}
                            index={index}
                            dragStart={dragStart}
                            dragEnter={dragEnter}
                            dragEnd={dragEnd}
                        >
                            <DynamicCheckBox
                                index={index}
                                active={todoItem.isCompleted}
                                toggleCompleted={toggleCompleted}
                            />
                            <TodoText dragable="false" completed={todoItem.isCompleted}>
                                {todoItem.text}
                            </TodoText>
                            <RemoveTodoButton
                                id={todoItem.id}
                                sort={sort}
                                unsortedList={unsortedList}
                                setUnsortedList={setUnsortedList}
                                displayedTodoItems={displayedTodoItems}
                                setDisplayedTodoItems={setDisplayedTodoItems}
                            />
                        </TodoItem>
                    ))}
                </ul>
                <Tracker
                    sort={sort}
                    setSort={setSort}
                    unsortedList={unsortedList}
                    setUnsortedList={setUnsortedList}
                    setDisplayedTodoItems={setDisplayedTodoItems}
                />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
