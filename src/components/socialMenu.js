import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 18px;
  margin-top: 18px;
`;

const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 18px;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const SocialMenu = (props) => {
  return (
    <Icons>
      <SocialIconLink href="https://linkedin.com/tarunbommali" target="_blank">
        
          <FaLinkedin size={38}  className="fill-current text-[#0077b5] "/>
        
      </SocialIconLink>

      <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
        
          <FaGithub size={38} className="fill-current text-[#2b3137] " />
        
      </SocialIconLink>
      <SocialIconLink href="https://instagram.com/disistarun" target="_blank">
        
          <FaInstagram size={38}  className="fill-current text-[#bc5288] "/>
        
      </SocialIconLink>
    </Icons>
  );
};

export default SocialMenu;
