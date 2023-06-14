import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { v4 } from "uuid";
import {
  FaCheckSquare,
  FaCheck,
  FaTrash,
  FaSquare,
  FaPenSquare,
  FaEdit,
} from "react-icons/fa";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100%;
  width: 100%;
`;
const CenterDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  height: 400px;
  justify-content: flex-start;
  background: white;
  padding: 60px;
  color: black;
  border-radius: 4px;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
  background: whitesmoke;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;
const Button = styled.button`
  height: 20px;
`;

const PopUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margine: 0;
`;

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const itemEvent = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems((items) => [
        ...items,
        { id: v4(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  const handleUpdateItem = (
    id: string,
    {
      text,
      completed,
    }: {
      text?: string;
      completed?: boolean;
    }
  ) => {
    const updatedTodos = items.map((todo) => {
      if (todo.id === id) {
        return {
          id: id,
          text: text ?? todo.text,
          completed: completed ?? todo.completed,
        };
      }
      return todo;
    });
    setItems(updatedTodos);
  };
  const [showPop, setShowPop] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleDeleteItem = (id: string) => {
    const updatedTodos = items.filter((todo) => todo.id !== id);
    setItems(updatedTodos);
  };

  return (
    <MainDiv>
      <CenterDiv>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
          `}
        >
          <h1>Todo Manager</h1>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              width: 100%;
              padding-bottom: 1rem;
            `}
          >
            <input
              type="text"
              placeholder="Add an item....."
              onChange={itemEvent}
              css={css`
                display: flex;
                padding: 1rem;
                width: 100%;
                border-radius: 4px;
                background-color: black;
                color: white;
                align-items: flex-start;
                justify-content: flex-start;
                outline: white;
              `}
            />
            <button
              onClick={handleAddItem}
              css={css`
                margin: 0;
                padding: 0;
                display: flex;
                background: black;
                color: white;
                width: 70px;
                height: 50px;
                aspect-ratio: square;
                border-radius: 100%;
                align-items: center;
                justify-content: center;
                font-size: 20px;
              `}
            >
              +
            </button>
          </div>

          <ol
            css={css`
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              margin: 0;
              padding: 0;
            `}
          >
            {items.map((todo) => {
              return (
                <Item key={todo.id}>
                  <p>{todo.text}</p>
                  <div
                    css={css`
                      display: flex;
                      align-item: flex-end;
                      padding: 2px;
                      gap: 6px;
                    `}
                  >
                    <Button
                      onClick={() =>
                        handleUpdateItem(todo.id, {
                          completed: !todo.completed,
                        })
                      }
                      css={css`
                        background: transparent;
                        padding: 3px;
                        border: none;
                        outline: none;
                        display: flex;
                        align-item: flex-end;
                      `}
                    >
                      {!todo.completed ? (
                        <FaCheckSquare
                          css={css`
                            width: 18px;
                            display: flex;

                            align-item: center;
                            justify-content: center;
                            max-width: 100px;
                            height: 18px;
                          `}
                        />
                      ) : (
                        <FaSquare
                          css={css`
                            width: 18px;
                            display: flex;
                            align-item: center;
                            justify-content: center;
                            max-width: 100px;
                            border: 1px solid darkgray;
                            border-radius: 4px;
                            height: 18px;
                            color: gray;
                          `}
                        />
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        setCurrentTodoId(todo.id);
                        setEditText(todo.text);
                        setShowPop(true);
                      }}
                      css={css`
                        background: transparent;
                        padding: 3px;
                        border: none;
                        outline: none;
                        display: flex;
                        align-item: flex-end;
                      `}
                    >
                      {/* <FaPenSquare /> */}
                      <FaEdit
                        css={css`
                          width: 18px;
                          display: flex;

                          align-item: center;
                          justify-content: center;
                          max-width: 100px;
                          height: 18px;
                        `}
                      />
                    </Button>
                    <Button
                      onClick={() => handleDeleteItem(todo.id)}
                      css={css`
                        background: transparent;
                        padding: 3px;
                        border: none;
                        outline: none;
                        display: flex;
                        align-item: flex-end;
                      `}
                    >
                      <FaTrash
                        css={css`
                          width: 18px;
                          display: flex;

                          align-item: center;
                          justify-content: center;
                          max-width: 100px;
                          height: 18px;
                        `}
                      />
                    </Button>
                  </div>
                </Item>
              );
            })}
          </ol>
        </div>
        {showPop && (
          <PopUpWrapper>
            <div
              css={css`
                width: 200px;
                max-width: 500px;
                background: white;
                border-radius: 2px;
                padding: 2rem;
                display: flex;
                gap: 0.5rem;
                flex-direction: column;
              `}
            >
              <h2>Edit Todo</h2>
              <input
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
                css={css`
                  display: flex;
                  padding: 2px;
                  width: 200px;
                  height: 32px;
                  border-radius: 4px;
                  background-color: black;
                  color: white;
                `}
              />
              <button
                css={css`
                  width: 100%;
                `}
                onClick={() => {
                  if (currentTodoId) {
                    handleUpdateItem(currentTodoId, { text: editText });
                    setShowPop(false);
                  }
                }}
              >
                Save
              </button>
            </div>
          </PopUpWrapper>
        )}
      </CenterDiv>
    </MainDiv>
  );
};

export default AddTodo;
