import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useThemeStyles } from "../../hook/useThemeStyles";

// Styled Components
const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 18px;
  margin-top: 18px;
`;

const SocialIconLink = styled.a`
  margin-right: 18px;
  display: flex;
  align-items: center;
  color: ${({ $color }) => $color};
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
  transition: transform 0.2s ease;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const SocialMenu = () => {
  const themeStyles = useThemeStyles();
  const { iconColors } = themeStyles;

  const List = [
    {
      name: "LinkedIn",
      id: 1,
      icon: <FaLinkedin size={38} />,
      link: "https://www.linkedin.com/in/tarunbommali/",
      color: iconColors.linkedin,
    },
    {
      name: "GitHub",
      id: 2,
      icon: <FaGithub size={38} />,
      link: "https://github.com/tarunbommali",
      color: iconColors.github,
    },
    {
      name: "Instagram",
      id: 3,
      icon: <FaInstagram size={38} />,
      link: "https://instagram.com/disistarun",
      color: iconColors.instagram,
    },
  ];

  return (
    <Icons>
      {List.map(({ id, link, icon, color, name }) => (
        <SocialIconLink
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          $color={color}
          aria-label={name}
        >
          {icon}
        </SocialIconLink>
      ))}
    </Icons>
  );
};

export default SocialMenu;
