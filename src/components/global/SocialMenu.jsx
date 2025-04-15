import styled from "styled-components";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

const iconColors = {
  light: {
    linkedin: "#0077b5",
    github: "#000000",
    instagram: "#bc5288",
  },
  dark: {
    linkedin: "#0077b5",
    github: "#ffffff",
    instagram: "#d16d8c",
  },
};

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

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const SocialMenu = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";
  const themeColors = iconColors[theme];

  return (
    <Icons>
      <SocialIconLink
        href="https://www.linkedin.com/in/tarunbommali/"
        target="_blank"
        rel="noopener noreferrer"
        $color={themeColors.linkedin}
      >
        <FaLinkedin size={38} />
      </SocialIconLink>

      <SocialIconLink
        href="https://github.com/tarunbommali"
        target="_blank"
        rel="noopener noreferrer"
        $color={themeColors.github}
      >
        <FaGithubSquare size={38} />
      </SocialIconLink>

      <SocialIconLink
        href="https://instagram.com/disistarun"
        target="_blank"
        rel="noopener noreferrer"
        $color={themeColors.instagram}
      >
        <FaInstagram size={38} />
      </SocialIconLink>
    </Icons>
  );
};

export default SocialMenu;
