import React from "react";
import { interfaceTree } from "../../../../avatars/avatarCreator/avatarTree";
import AvatarOptionButton from "../../../buttons/AvatarOptionButton";
import AvatarDownloadButton from "../../../buttons/AvatarDownloadButton";

function AvatarOptionMenu() {
  const optionButtons = Object.keys(interfaceTree).map(
    (interfaceName, index) => {
      return (
        <AvatarOptionButton
          iconViewBox={
            interfaceTree[interfaceName].iconViewBox || "0 0 512 512"
          }
          key={interfaceName}
          icon={interfaceTree[interfaceName].icon}
          iconComponentIndex={interfaceTree[interfaceName].iconComponentIndex}
          iconComponentName={interfaceTree[interfaceName].iconComponentName}
          title={
            interfaceTree[interfaceName].title ||
            interfaceTree[interfaceName].colorTitle
          }
          buttonIndex={index}
        />
      );
    }
  );
  return (
    <div className=" h-full flex flex-col overflow-auto">
      <header
        className=" flex h-10 font-light pl-4 bg-singlePlayer200 sticky top-0 z-20 pr-4 "
        style={{
          fontFamily: "IBM Plex Mono",
        }}
      >
        <h1 className="flex-1 py-2 font-medium">Customize</h1>

        <AvatarDownloadButton className="sm:hidden" />
      </header>
      <div className="flex-1 flex">
        <div className="flex-1 h-fit overflow-auto grid grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 pt-4 pb-8 gap-4 px-4">
          {optionButtons}
        </div>
      </div>
    </div>
  );
}

export default AvatarOptionMenu;
