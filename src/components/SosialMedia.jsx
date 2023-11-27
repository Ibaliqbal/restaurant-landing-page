import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

function SosialMedia(props) {
  const { sizeIcon, gap } = props;
  const listsSosial = [
    {
      id: 1,
      icon: <FaInstagram className="cursor-pointer" />,
    },
    {
      id: 2,
      icon: <FaYoutube className="cursor-pointer" />,
    },
    {
      id: 3,
      icon: <FaFacebook className="cursor-pointer" />,
    },
    {
      id: 4,
      icon: <FaLinkedin className="cursor-pointer" />,
    },
    {
      id: 5,
      icon: <FaTwitter className="cursor-pointer" />,
    },
    {
      id: 6,
      icon: <FaTiktok className="cursor-pointer" />,
    },
  ];

  return (
    <div className={`flex ${gap}`}>
      {listsSosial?.map((list) => (
        <a href="#" className={`inline-block ${sizeIcon}`} key={list.id}>
          {list.icon}
        </a>
      ))}
    </div>
  );
}

export default SosialMedia;
