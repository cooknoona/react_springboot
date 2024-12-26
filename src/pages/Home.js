import React, { useEffect, useState } from "react";
import AxiosApi from "../api/AxiosApi";

const Home = () => {
  const [members, setMembers] = useState("");

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await AxiosApi.memberList();
        console.log(response.data);
        setMembers(response.data);
      } catch (e) {
        alert("서버가 응답하지 않습니다. ", e);
      }
    };
    getMembers();
  }, []);
  return (
    <div>
      <h1>회원 정보 조회</h1>
      <table>
        <tr>
          <th>이름</th>
          <th>비밀번호</th>
          <th>가입일</th>
        </tr>
        {members &&
          members.map((member) => (
            <tr key={member.email}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.date}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default Home;
