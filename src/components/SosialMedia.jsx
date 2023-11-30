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
      href: "https://instagram.com/muthahhary_iqbal?igshid=MzNlNGNkZWQ4Mg==",
      icon: <FaInstagram className="cursor-pointer" aria-label="Instagram" />,
    },
    {
      id: 2,
      nameIcon: "Youtube",
      href: "https://www.linkedin.com/in/iqbal-muthahhary-muthahhary-5120b6278",
      icon: <FaYoutube className="cursor-pointer" aria-label="Youtube" />,
    },
    {
      id: 3,
      nameIcon: "Facebook",
      href: "#",
      icon: <FaFacebook className="cursor-pointer" aria-label="Facebook" />,
    },
    {
      id: 4,
      nameIcon: "Linkedin",
      href: "https://www.linkedin.com/in/iqbal-muthahhary-muthahhary-5120b6278",
      icon: <FaLinkedin className="cursor-pointer" aria-label="Linkedin" />,
    },
    {
      id: 5,
      nameIcon: "Twitter",
      href: "#",
      icon: <FaTwitter className="cursor-pointer" aria-label="Twitter" />,
    },
    {
      id: 6,
      nameIcon: "TikTok",
      href: "#",
      icon: <FaTiktok className="cursor-pointer" aria-label="Tiktok" />,
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
          <a href={list.href} className={`inline-block ${sizeIcon}`}>
            {list.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default SosialMedia;
