import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/Users";

const Todo = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "리액트 공부하기",
      text: "리엑트의 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      name: "리액트 공부하기",
      text: "리엑트의 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
      text: text,
      done: false,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  const onChangeHandler = (id) => {
    const newUserList = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isDone: !user.isDone,
        };
      } else {
        return { ...user };
      }
    });
    setUsers(newUserList);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div> React</div>
      </div>
      <div className="add">
        <div>
          제목
          <input
            style={{
              height: "25px",
              borderRadius: "8px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            value={name}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setName(e.target.value)}
          />
          내용
          <input
            style={{ marginLeft: "10px", borderRadius: "8px", height: "25px" }}
            value={text}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 Text의 값으로 업데이트
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <CustomButton
          color="turquoise"
          width="120px"
          height="40px"
          borderRadius="8px"
          onClick={addUserHandler}
        >
          <div>추가하기</div>
        </CustomButton>
      </div>

      <div>
        <h1>Working...🔥</h1>
      </div>
      <div className="app-style">
        {users.map((user) => {
          if (!user.isDone) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
                onChangeHandler={onChangeHandler}
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <h1>Done...!🎉</h1>
      </div>
      <div className="app-style">
        {users.map((user) => {
          if (user.isDone) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
                onChangeHandler={onChangeHandler}
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Todo;
