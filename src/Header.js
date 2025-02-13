import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./img/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" height="80px" width="80px" />
        </Link>
      </div>
      <div className="gnb">
        <ul className="menu-bar">
          <li className="top-menu">
            <p>Shop</p>
            <div className="sub-nav">
              <ul className="shop-menu-column">
                <li>
                  <Link to="/shop-new" className="sub-menu">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/shop-best" className="sub-menu">
                    Best
                  </Link>
                </li>
                <li>
                  <Link to="/shop-collab" className="sub-menu">
                    Collaboration
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/shop-case" className="sub-menu">
                    폰&무선이어폰 케이스
                  </Link>
                </li>
                <li>
                  <Link to="/shop-acc" className="sub-menu">
                    스마트톡
                  </Link>
                </li>
                <li>
                  <Link to="/shop-battery" className="sub-menu">
                    보조배터리
                  </Link>
                </li>
                <li>
                  <Link to="/shop-keyring" className="sub-menu">
                    키링
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/shop-umbrella" className="sub-menu">
                    우산&양산
                  </Link>
                </li>
                <li>
                  <Link to="/shop-travel" className="sub-menu">
                    여행용품
                  </Link>
                </li>
                <li>
                  <Link to="/shop-fabric" className="sub-menu">
                    패브릭
                  </Link>
                </li>
                <li>
                  <Link to="/shop-acrylic" className="sub-menu">
                    유리&아크릴
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/shop-sticker" className="sub-menu">
                    스티커
                  </Link>
                </li>
                <li>
                  <Link to="/shop-collectbook" className="sub-menu">
                    콜렉트 북
                  </Link>
                </li>
                <li>
                  <Link to="/shop-calendar" className="sub-menu">
                    캘린더
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="top-menu">
            <p>Good-bye Item</p>
            <div className="sub-nav">
              <ul className="shop-menu-column">
                <li>
                  <Link to="/bye-2014" className="sub-menu">
                    2014
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2015" className="sub-menu">
                    2015
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2016" className="sub-menu">
                    2016
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/bye-2017" className="sub-menu">
                    2017
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2018" className="sub-menu">
                    2018
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2019" className="sub-menu">
                    2019
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/bye-2020" className="sub-menu">
                    2020
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2021" className="sub-menu">
                    2021
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2022" className="sub-menu">
                    2022
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <Link to="/bye-2023" className="sub-menu">
                    2023
                  </Link>
                </li>
                <li>
                  <Link to="/bye-2024" className="sub-menu">
                    2024
                  </Link>
                </li>
                <li>
                  <Link to="/bye-before" className="sub-menu">
                    Before 2014
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="top-menu">
            <p>Off-line</p>
            <div className="offline-wrap">
              <ul className="shop-menu-column">
                <li>
                  <Link to="/off-popup" className="sub-menu">
                    POP-UP
                  </Link>
                </li>
                <li>
                  <Link to="/off-store" className="sub-menu">
                    Store
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="top-menu">
            <p>Community</p>
            <div className="community-wrap">
              <ul className="shop-menu-column">
                <li>
                  <Link to="/community-notice" className="sub-menu">
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link to="/community-share" className="sub-menu">
                    배경화면 공유
                  </Link>
                </li>
                <li>
                  <Link to="/community-qna" className="sub-menu">
                    Q&A
                  </Link>
                </li>
              </ul>
              <ul className="shop-menu-column">
                <li>
                  <a
                    href="https://www.instagram.com/bloomingtalestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="sub-menu"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/bloomingtale?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    className="sub-menu"
                  >
                    X(Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="right-menu">
        <div className="right-sub login">
          <Link to="/log-in">Log In</Link>
        </div>
        <div className="right-sub joinus">
          <Link to="/join-us">Join Us</Link>
        </div>
        <div className="right-sub-icon cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
        <div className="right-sub-icon search">
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
