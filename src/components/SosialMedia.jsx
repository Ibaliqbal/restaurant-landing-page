import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";

function SosialMedia(props) {
  const { sizeIcon, gap } = props;
  const listsSosial = [
    {
      id: 1,
      nameIcon: "Instagram",
      icon: <FaInstagram className="cursor-pointer" />,
    },
    {
      id: 2,
      nameIcon: "Youtube",
      icon: <FaYoutube className="cursor-pointer" />,
    },
    {
      id: 3,
      nameIcon: "Facebook",
      icon: <FaFacebook className="cursor-pointer" />,
    },
    {
      id: 4,
      nameIcon: "Linkedin",
      icon: <FaLinkedin className="cursor-pointer" />,
    },
    {
      id: 5,
      nameIcon: "Twitter",
      icon: <FaTwitter className="cursor-pointer" />,
    },
    {
      id: 6,
      nameIcon: "TikTok",
      icon: <FaTiktok className="cursor-pointer" />,
    },
  ];

  return (
    <div className={`flex ${gap}`}>
      {listsSosial?.map((list) => (
        <Tooltip
          label={list.nameIcon}
          hasArrow
          arrowSize={10}
          placement="bottom"
          key={list.id}
        >
          <a href="#" className={`inline-block ${sizeIcon}`}>
            {list.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default SosialMedia;
