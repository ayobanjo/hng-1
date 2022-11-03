import React from "react";
import profile from "../../public/profile__img.svg";

function Header() {
  return (
    <header className="profile-avatar">
      <img id="profile__img" src={profile} alt="profile" />
      <img
        id="share_btn"
        src="Avatar share button.svg"
        alt="share button icon"
      />
      <h2>Annette Black</h2>
    </header>
  );
}

export default Header;
