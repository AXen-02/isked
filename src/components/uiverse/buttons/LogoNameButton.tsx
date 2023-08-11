import { FC } from "react";

interface LogoNameButtonProps {
  title: String;
}

const LogoNameButton: FC<LogoNameButtonProps> = ({ title }) => {
  return (
    <div>
      <button className="l-button">
        <span className="actual-text">&nbsp;{title}&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;{title}&nbsp;
        </span>
      </button>
    </div>
  );
};

export default LogoNameButton;
