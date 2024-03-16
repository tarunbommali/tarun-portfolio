
import Services from "./services";
import Testimonial from "./testimonial";
import MyAccordion from "./myAccordion";

const About = () => {
  return (
    <div className="bg-[#f5f6f7]">
      <Services className="will-change-scroll" />
      <Testimonial className="will-change-scroll" />
      <MyAccordion />
    </div>
  );
};
export default About;
