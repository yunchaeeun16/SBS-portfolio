import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import "./css/reset.css";
import Main from "./Main";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ----- 메인 화면 ----- */}
          <Route path="/" element={<Main />} />

          {/* ----- 메뉴 ----- */}

          {/* -- 1. Shop -- */}
          {/* <Route path="/shop-new" element={<New />} /> */}
          {/* <Route path="/shop-best" element={<Best />} /> */}
          {/* <Route path="/shop-collab" element={<Collaboration />} /> */}

          {/* ----- Log In 로그인 ----- */}
          {/* <Route path="/log-in" element={<Login />} /> */}

          {/* ----- Join Us 회원가입 ----- */}
          {/* <Route path="/join-us" element={<Joinus />} /> */}

          {/* ----- 장바구니 ----- */}
          {/* <Route path="/cart" element={<Cart />} /> */}

          {/* ----- 검색 ----- */}
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
