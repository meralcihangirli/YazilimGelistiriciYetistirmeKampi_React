import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://www.istockphoto.com/tr/foto%C4%9Fraf/bir-clear-night-stok-foto%C4%9Fraf-%C3%BCzerinde-full-moon-gm1182564329-332116929" />
        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="info" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
