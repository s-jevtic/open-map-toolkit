import React from "react";
import Menu from "./Menu.js";
import { menuItems } from "./menuItems";

function MenuUi({ onToolSelect, onToolDeselect, toolId }) {
  return (
    <div id="menu-container" className="m-3 flex flex-col w-fit z-20">
      <ul>
        {menuItems.map((submenu, index) => (
          <Menu
            items={submenu}
            key={[index]}
            indices={[index]}
            onToolSelect={onToolSelect}
            selectedToolId={toolId}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuUi;
