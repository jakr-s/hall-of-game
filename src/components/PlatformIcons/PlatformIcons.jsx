import PropTypes from "prop-types";
import "./PlatformIcons.css";
import { useFilterHandlers } from "../../utils/handlers";

import {
  SiAndroid,
  SiApple,
  SiAtari,
  SiCommodore,
  SiLinux,
  SiNintendo,
  SiNintendo3Ds,
  SiNintendogamecube,
  SiNintendoswitch,
  SiPlaystation,
  SiPlaystation2,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita,
  SiSega,
  SiWii,
  SiWiiu,
  SiWindows,
  // SiPlaystationportable,
  SiXbox,
} from "react-icons/si";

import { FaAppStoreIos } from "react-icons/fa";

export const PlatformIcons = ({ platforms }) => {
  const { handlePlatformClick } = useFilterHandlers();
  const platformIcons = {
    playstation1: SiPlaystation,
    playstation2: SiPlaystation2,
    playstation3: SiPlaystation3,
    playstation4: SiPlaystation4,
    playstation5: SiPlaystation5,
    "ps-vita": SiPlaystationvita,
    // psp: SiPlaystationportable,
    "xbox-old": SiXbox,
    nes: SiNintendo,
    "nintendo-ds": SiNintendo3Ds,
    gamecube: SiNintendogamecube,
    "nintendo-switch": SiNintendoswitch,
    wii: SiWii,
    "wii-u": SiWiiu,
    "sega-master-system": SiSega,
    "commodore-amiga": SiCommodore,
    macos: SiApple,
    linux: SiLinux,
    pc: SiWindows,
    android: SiAndroid,
    ios: FaAppStoreIos,
  };

  const fallbackPlatformIcons = {
    atari: SiAtari,
    sega: SiSega,
    xbox: SiXbox,
  };

  const renderPlatformIcon = (platform) => {
    const { slug } = platform;
    if (platformIcons[slug]) {
      const IconComponent = platformIcons[slug];
      return (
        <div
          onClick={(e) => handlePlatformClick(e, slug)}
          className="platform-icon"
        >
          <IconComponent />
        </div>
      );
    }
    const parentKey = Object.keys(fallbackPlatformIcons).find((key) =>
      slug.includes(key)
    );
    if (parentKey) {
      const FallbackIcon = fallbackPlatformIcons[parentKey];
      const platformSuffix = slug.replace(`${parentKey}-`, "").toUpperCase();
      return (
        <div
          onClick={(e) => handlePlatformClick(e, parentKey)}
          className="platform-icon"
        >
          <FallbackIcon />
          <span>{platformSuffix}</span>
        </div>
      );
    }
    return <span>{slug.toUpperCase()}</span>;
  };
  return (
    <div className="platform-icons-container">
      {platforms.map((platform) => (
        <div key={platform.slug}>
          {renderPlatformIcon(platform)}
        </div>
      ))}
    </div>
  );
};

PlatformIcons.propTypes = {
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
