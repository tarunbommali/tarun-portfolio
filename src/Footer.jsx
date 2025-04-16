import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { CERTIFICATE_AND_CERTIFICATION } from "./utils/document";
import { useThemeStyles } from "./hook/useThemeStyles";

// Styled component for icons
const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const Footer = () => {
  const themeStyles = useThemeStyles(); // hook call to get styles
  const { iconColors, footerBG, textColor } = themeStyles;

  return (
    <footer className={`footer ${footerBG} ${textColor} p-6 md:p-10`}>
      {/* Popular Coding Questions */}
      <nav>
        <h6 className="footer-title">Solved Popular Coding Questions</h6>
        <a target="_blank" className="link link-hover">Longest common subsequence</a>
        <a target="_blank" className="link link-hover">Reverse linked list</a>
        <a target="_blank" className="link link-hover">Kth smallest element</a>
        <a target="_blank" className="link link-hover">Reverse words in a string</a>
      </nav>

      {/* Certifications */}
      <nav>
        <h6 className="footer-title">Certifications</h6>
        {CERTIFICATE_AND_CERTIFICATION.map((cert, index) => (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a key={index} target="_blank" href={cert.link} className="flex link link-hover">
            {cert.title}
          </a>
        ))}
      </nav>

      {/* Social Links */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <SocialIconLink href="https://www.linkedin.com/in/tarunbommali/" target="_blank">
            <FaLinkedin size={28} style={{ color: iconColors.linkedin }} />
          </SocialIconLink>

          <SocialIconLink href="https://instagram.com/disistarun" target="_blank">
            <FaInstagram size={28} style={{ color: iconColors.instagram }} />
          </SocialIconLink>
        </div>

        {/* Coding Profiles */}
        <h6 className="footer-title mt-4">Coding Profiles</h6>
        <div className="grid grid-flow-col gap-4">
          <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
            <FaGithub size={28} style={{ color: iconColors.github }} />
          </SocialIconLink>

          <SocialIconLink href="https://www.hackerrank.com/tarunbommali" target="_blank">
            <FaHackerrank size={28} style={{ color: iconColors.hackerrank }} />
          </SocialIconLink>

          <SocialIconLink href="https://leetcode.com/tarunbommali" target="_blank">
            <TbBrandLeetcode size={28} style={{ color: iconColors.leetcode }} />
          </SocialIconLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
