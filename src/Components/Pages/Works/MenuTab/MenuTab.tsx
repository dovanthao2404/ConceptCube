import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import { dataType } from "../dataType";

import "./MenuTab.scss";


interface menuTab {
  tab: string,
  setTab: any;
}

const MenuTab: React.FC<menuTab> = ({ tab, setTab }) => {

  const [isDesktop, setIsDesktop] = useState(true);
  const dropDownMenuRef = useRef<any>();
  const dropDownControlRef = useRef<any>();

  const navigate = useNavigate();

  useEffect(() => {


    const navbarEle = document.querySelector(".nav-bar .switch-language.top") as any;

    const btnToggleEl = document.querySelector(".nav-bar .icon.top") as any;

    navbarEle.classList.add("contact");
    btnToggleEl.classList.add("contact");
    return () => {
      navbarEle.classList.remove("contact");
      btnToggleEl.classList.remove("contact");

    };
  }, []);


  const handleResize = (e: any) => {

    if (e?.currentTarget.innerWidth >= 1024 || window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else if (e?.currentTarget.innerWidth < 1024 || window.innerWidth < 1024) {
      setIsDesktop(false);
    }
  };

  const handleResizeCallback = useCallback(
    (e: any) => handleResize(e),
    [],
  );

  useEffect(() => {
    handleResize(null);
    window.addEventListener("resize", handleResizeCallback);
    return () => {
      window.removeEventListener("resize", handleResizeCallback);
    };
  }, []);


  const handleToggleDropdown = () => {
    if (dropDownMenuRef.current) {
      dropDownMenuRef.current.classList.toggle("open");
    }
  };

  const handleMouseDown = (e: any) => {
    if (!isDesktop) {
      if ((dropDownControlRef.current && dropDownControlRef.current.contains(e.target))) {
      } else {
        dropDownMenuRef.current?.classList.remove("open");
      }
    }
  };

  const mouseDownCallback = useCallback((e) => handleMouseDown(e), [isDesktop]);


  useEffect(() => {
    if (mouseDownCallback) {
      document.addEventListener("click", mouseDownCallback);
    }
    return () => {
      document.removeEventListener("click", mouseDownCallback);
    };
  }, [mouseDownCallback]);


  if (isDesktop) {
    return (
      <div className="menu-tab">
        <ul>
          {dataType.map((item) => {
            return <li onClick={() => {
              setTab(item.value);

              navigate({
                pathname: "/works",
                search: `?${createSearchParams({
                  tab: item.value
                })}`
              });

            }} className={`menu-tab-item ${tab === item.value ? "active" : ""}`} key={item.id}><span>{item.value}</span></li>;
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className='menu-tab'>
      <div className="drop-down">
        <div ref={dropDownControlRef} className="drop-down-control" onClick={handleToggleDropdown}>
          <div className="placeholder">
            {tab}
          </div>
        </div>
        <div ref={dropDownMenuRef} className="drop-down-menu">
          {dataType.map((item) => {
            return (
              <div onClick={(e) => {
                setTab(item.value);
                navigate({
                  pathname: "/works",
                  search: `?${createSearchParams({
                    tab: item.value
                  })}`
                });
              }} className={`drop-down-item ${tab === item.value ? "active" : ""}`} key={item.id}>{item.value}</div>);
          })}

        </div>
      </div>
    </div>
  );
};


export default MenuTab;