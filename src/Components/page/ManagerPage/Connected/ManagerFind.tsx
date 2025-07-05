import { paths } from "@/config/paths/paths";
import { GET } from "@/config/request/axios/axiosInstance";
import { Fontname } from "@/SCSS/Fixed";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagerFind = () => {
  const [buttonName, setButtonName] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFindId = () => {
    const email = emailRef.current?.value;
    if (email) {
      // 아이디 찾기 로직
      console.log("아이디 찾기 요청:", email);
      GET({
        url: paths.Certification.search.path,
        params: {
          email: email,
        },
      }).then((response) => {
        if (response.data) {
          alert(`아이디는: ${response.data[0].userId} 입니다.`);
          emailRef.current!.value = "";
          navigate("/Manager/Login"); // 아이디 찾기 후 로그인 페이지로 이동
        } else {
          alert("이메일을 입력해주세요.");
        }
      });
    }
  };

  const handleFindPassword = () => {
    const id = idRef.current?.value;
    const email = emailRef.current?.value;
    if (id && email) {
      // 비밀번호 찾기 로직
      GET({
        url: paths.Certification.search.password,
        params: {
          email: email,
          id: id,
        },
      }).then((response) => {
        if (response.data) {
          alert(
            `임시 비밀번호는: ${response.data[0].password} 입니다. 꼭 비밀번호 변경을 해주세요`
          );
          idRef.current!.value = "";
          emailRef.current!.value = "";
          navigate("/Manager/Login"); // 아이디 찾기 후 로그인 페이지로 이동
        } else {
          alert("아이디와 이메일을 확인해주세요.");
        }
      });
    } else {
      alert("아이디와 이메일을 모두 입력해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Fontname>관리자 회원 정보 찾기</Fontname>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-around">
          <button
            onClick={() => setButtonName(true)}
            className="bg-white text-black p-3 border-b-2 border-transparent hover:border-blue-600"
          >
            아이디 찾기
          </button>
          <button
            onClick={() => setButtonName(false)}
            className="bg-white text-black p-3 border-b-2 border-transparent hover:border-blue-600"
          >
            비밀번호 찾기
          </button>
        </div>
        <hr className="border-t-2 border-gray-300 w-full" />
        <div className="mt-4">
          {buttonName ? (
            <div>
              <label className="block mb-2">이메일</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full p-10"
                placeholder="이메일을 입력하세요"
                ref={emailRef}
              />
              <div className="flex justify-end items-center mt-4">
                <button
                  className="bg-blue-600 text-white p-2 rounded-lg mt-2"
                  onClick={handleFindId}
                >
                  아이디 찾기
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block mb-5 mt-5">아이디</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="아이디를 입력하세요"
                ref={idRef}
              />
              <label className="block mb-5 mt-5">이메일</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="이메일을 입력하세요"
                ref={emailRef}
              />
              <div className="flex justify-center items-center mt-4">
                <button
                  className="bg-blue-600 text-white p-2 rounded-lg mt-2"
                  onClick={handleFindPassword}
                >
                  비밀번호 찾기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ManagerFind;
