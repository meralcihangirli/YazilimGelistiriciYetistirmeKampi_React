import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Seçilenler">
        <Dropdown.Menu>
          <Dropdown.Item>User1</Dropdown.Item>
          <Dropdown.Item>User2</Dropdown.Item>
          <Dropdown.Item>User3</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Seçilenlere Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
