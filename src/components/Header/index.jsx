import React from "react";

import logoSVG from "assets/img//logo.svg";

function Header() {
  return (
    <header className="p-4 flex justify-between w-1/2 mx-auto flex-row-reverse">
      <img src={logoSVG} alt="logo" className="w-10" />
      Saw url!
    </header>
  );
}

export default Header;
