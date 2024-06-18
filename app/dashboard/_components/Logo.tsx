import LogoImg from "../../../public/Logo.svg";
import LeftImage from "../../../public/plane.png";
import "./sidebar.css";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="flex">
        <div className="logo-container">
          <img className="left-image" src={LeftImage.src} />
        </div>
        <div className="logo-content">
          <div className="image-container">
            <img src={LogoImg.src} alt="Lock" className="logo-image" />
          </div>
          <div className="logo-text">
            <h2 className="logo-subtext1">Talents2Germany</h2>
            <p className="logo-subtext2">BUILDING THE FUTURE!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
