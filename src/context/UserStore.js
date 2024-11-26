import React from "react";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  // 배경색에 대한 전역 상태 관리, 새로고침 문제를 해결하기 위해 localStorage 사용
  const [color, setColor] = useState(localStorage.getItem("bgcolor") || "orage");
  // 이름 전역 상태 관리, 예) 페이지마다 ***님 환영합니다.
  const [name, setName] = useState(localStorage.getItem("name") || "이름을 입력해 주세요");
  // 배경을 변경 할때 전역상태를 관리
  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return <UserContext.Provider value={{ color, setColor, name, setName }}>{props.children}</UserContext.Provider>;
};

export default UserStore;
