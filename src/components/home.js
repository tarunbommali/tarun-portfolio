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
    const { activeQuote } = this.state;
    return (
      <div className="flex flex-col justify-around items-center  lg:flex">
        <div className="flex flex-col font-semibold order-2 ">
          <h1 className="profile-message-text py-2">hy,Hello!</h1>
          <h1 className="profile-name-text">
            I'm
            <span className="text-blue-400  text-[26px] lg:text-[62px] font-serif">
              TARUN BOMMALI
            </span>
          </h1>

          <TypewriterComponent />
          {this.renderContactAndResumeSection()}
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#666666] font-semibold leading-relaxed text-lg">
            "{activeQuote}
          </p>
          <button
            type="button"
            onClick={this.onClickGenerateButton}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95   duration-300 ..."
          >
            <div>
              <img
                src={PROFILE_IMG_URL}
                alt="profile"
                className="rounded-full  m-2 order-1 sm:w-56 h-56 md:w-65 h-65 "
              />
            </div>
          </button>
        </div>
      </div>
    );
  }

  renderContactAndResumeSection() {
    return (
      <div className="flex flex-col items-center mt-2 hover:transform: scale(0.95); lg:mt-10">
        <div className="flex">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex items-center rounded-md bg-[#3f4347] mx-3 py-2  px-5 my-15 text-white font-semibold	hover:scale(1.1);"
            href={WHATSAPP_URL}
          >
            <button className="contact-btn-link">Engage me</button>
          </a>

          <a
            target="_blank"
            className="flex items-center rounded-md bg-[#3f4347] mx-3 py-2  px-5 my-15 text-white font-semibold	"
            rel="noreferrer"
            href={RESUME_DOWNLOAD_LINK}
          >
            <button> View CV</button>
          </a>
        </div>
        <SocialMenu />
      </div>
    );
  }

  render() {
    return (
      <div className="home-container p-2 md:p-6 min-h-screen bg-[#f3f2ef]">
        <div className="flex flex-col">
          {this.renderProfileIntroductionAndImageSection()}
        </div>
      </div>
    );
  }
}

export default Home;
