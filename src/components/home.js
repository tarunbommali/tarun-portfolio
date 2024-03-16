// CLASS COMPONENT
import { Component } from "react";
import SocialMenu from "./socialMenu";
import TypewriterComponent from "./typewriter";
import {
  PROFILE_IMG_URL,
  QUOTES_LIST,
  WHATSAPP_URL,
  RESUME_DOWNLOAD_LINK,
} from "../utils/constants";


class Home extends Component {
  state = { activeQuote: "" };

  onClickGenerateButton = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES_LIST.length);
    this.setState({ activeQuote: QUOTES_LIST[randomIndex] });
  };
  componentDidMount() {
    this.onClickGenerateButton();
  }

  renderProfileIntroductionAndImageSection() {
    return (
      <div className="flex justify-around items-center mt-6 ">
        <div className="flex flex-col font-semibold">
          <h1 className="profile-message-text">hy,Hello!</h1>
          <h1 className="profile-name-text">
            I'm 
            <span className="text-blue-400  text-[76px] font-serif">TARUN BOMMALI</span>
          </h1>
          
          <TypewriterComponent />
        </div>
        <button
          type="button"
          onClick={this.onClickGenerateButton}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ..."
        >
          <img
            src={PROFILE_IMG_URL}
            alt="profile"
            className="rounded-full w-72 h-72  border-double border-4 border-sky-500"
          />
        </button>
      </div>
    );
  }

  renderContactAndResumeSection() {
    return (
      <div className="flex flex-col items-center mt-20 hover:transform: scale(0.95);">
        <div className="flex">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex items-center rounded-md bg-[#3f4347] mx-3 py-2  px-5 my-15 text-white font-semibold	hover:scale(1.1);"
            href={WHATSAPP_URL}
          >
            <button className="contact-btn-link">Hire Me</button>
          </a>

          <a
            target="_blank"
            className="flex items-center rounded-md bg-[#3f4347] mx-3 py-2  px-5 my-15 text-white font-semibold	"
            rel="noreferrer"
            href={RESUME_DOWNLOAD_LINK}
          >
            <button className="contact-btn-link"> Download CV</button>
          </a>
        </div>
        <SocialMenu />
      </div>
    );
  }

  render() {
    const { activeQuote } = this.state;
    return (
      <div className="home-container p-6 min-h-screen bg-[#f3f2ef]">
        <p className="text-[#666666] font-semibold leading-relaxed">
          " {activeQuote}
        </p>
        <div className="flex flex-col">
          {this.renderProfileIntroductionAndImageSection()}
          {this.renderContactAndResumeSection()}
          
        </div>
      </div>
    );
  }
}

export default Home;
