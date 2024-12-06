import PropTypes from "prop-types";
import "./ParentPlatformIcons.css";
import { useFilterHandlers } from "../../utils/handlers";

import {
  SiAndroid,
  SiApple,
  SiAtari,
  SiCommodore,
  SiLinux,
  SiNintendo,
  SiPlaystation,
  SiSega,
  SiWindows,
  SiXbox,
} from "react-icons/si";

import { FaAppStoreIos } from "react-icons/fa";

export const ParentPlatformIcons = ({ parentPlatforms }) => {
  const { handleParentPlatformClick } = useFilterHandlers();
  const platformIcons = {
    playstation: SiPlaystation,
    xbox: SiXbox,
    nintendo: SiNintendo,
    sega: SiSega,
    pc: SiWindows,
    mac: SiApple,
    linux: SiLinux,
    android: SiAndroid,
    ios: FaAppStoreIos,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
  };

  return (
    <div>
      {parentPlatforms.map((platform) => {
        const Icon = platformIcons[platform.platform.slug];
        return (
          <span key={platform.platform.id} className="parent-platform-icon">
            <a
              onClick={(e) =>
                handleParentPlatformClick(e, platform.platform.slug)}
            >
              <Icon />
            </a>
          </span>
        );
      })}
    </div>
  );
};

ParentPlatformIcons.propTypes = {
  parentPlatforms: PropTypes.arrayOf(PropTypes.object).isRequired,
};
