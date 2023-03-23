import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";
import { Tooltip } from "react-tooltip";

function Menu({ items, parentOrientation, indices }) {
  const orientation =
    parentOrientation === "horizontal" ? "vertical" : "horizontal";
  const iconPath = items.icon;
  const submenus = items.submenus;
  const [active, setActive] = useState(false);
  const iconContainerRef = useRef(null);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (iconContainerRef.current && !submenus) {
        setSelected(iconContainerRef.current.contains(event.target));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <li
        className={`submenu-container relative flex ${
          orientation === "horizontal" ? "flex-row" : "flex-col"
        }`}
        onMouseOver={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setActive(false);
          }, 500);
        }}
      >
        <div
          className={`menu-icon-container m-2 bg-slate-50 dark:bg-slate-900 border-slate-900 z-20 ${
            selected ? "opacity-100" : "opacity-80"
          } hover:brightness-75`}
          data-tooltip-id="menu-tooltip"
          ref={iconContainerRef}
        >
          <img
            src={iconPath}
            alt={items.name + " icon"}
            className="fill-slate-50 dark:fill-slate-900 stroke-slate-900 dark:stroke-slate-50/80"
          />
        </div>
        <span className="z-30">
          <Tooltip id="menu-tooltip" />
        </span>
        <ul
          className={`submenu-list flex ${
            orientation === "horizontal" ? "flex-row" : "flex-col"
          } ${active ? "" : "hidden"}`}
        >
          {submenus?.map((submenu, index) => {
            return (
              <Menu
                items={submenu}
                indices={[...indices, index]}
                key={[...indices, index]}
                parentOrientation={orientation}
              />
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default Menu;
