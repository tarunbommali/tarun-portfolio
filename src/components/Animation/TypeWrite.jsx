
import Typewriter from 'typewriter-effect';
import { useThemeStyles } from '../../hook/useThemeStyles';

const TypewriterComponent = () => {
  const themeStyles =  useThemeStyles();

  return (
    <div className="flex">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Frontend Developer",
            "Open Source Contributor",
            "React Developer",
            "Debuggable",
          ],
          autoStart: true,
          loop: true,
          wrapperClassName: `text-[22px] md:text-[32px] font-bold ${themeStyles.typeWriterTextColor}`,
          cursorClassName: `text-[22px] md:text-[28px] ${themeStyles.typeWriterCursorColor}`, 
          delay: 100,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;