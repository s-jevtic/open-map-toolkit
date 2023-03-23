import React from "react";
import Menu from "./Menu.js";
import { menuItems } from "./menuItems";

function MenuUi() {
  return (
    <div id="menu-container" className="m-3 flex flex-col w-fit z-20">
      <ul>
        {menuItems.map((submenu, index) => (
          <Menu
            items={submenu}
            key={[index]}
            indices={[index]}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuUi;
