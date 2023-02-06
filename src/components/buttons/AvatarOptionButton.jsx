import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

function AvatarOptionButton({ icon, title, buttonIndex }) {
  const clickedButtonIndex = useSelector((state) => state.avatarSelectionMenu);
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`text-center border border-slate-500 m-2 p-1 rounded-sm shadow-sm shadow-singlePlayer850
    transition duration-200 ease-in-out
    hover:bg-slate-600 
    active:bg-singlePlayer550  active:border-slate-500
    ${
      clickedButtonIndex === buttonIndex
        ? " bg-singlePlayer500 border-singlePlayer400 hover:bg-singlePlayer400 hover:border-singlePlayer250"
        : "hover:bg-slate-600 "
    }
    `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (clickedButtonIndex === buttonIndex) {
          updateAvatarSelectionMenu(null);
          return;
        }
        updateAvatarSelectionMenu(buttonIndex);
      }}
    >
      <div className="p-1">
        <svg
          viewBox="0 0 512 512"
          version="1.1"
          id="svg64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>{React.cloneElement(icon)}</g>
        </svg>
      </div>
      <div
        className={`
        mt-2 h-wire-frame rounded-sm transition duration-200 ease-in-out
      ${
        hover
          ? clickedButtonIndex === buttonIndex
            ? "bg-singlePlayer250"
            : "bg-slate-500"
          : clickedButtonIndex === buttonIndex
          ? "bg-singlePlayer400"
          : "bg-slate-500"
      }
      `}
      ></div>
      <p className=" my-1 font-light">{title}</p>
    </button>
  );
}

export default AvatarOptionButton;