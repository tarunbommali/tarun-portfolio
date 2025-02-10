import { Component } from "react";
import Heropage1 from "../components/Home/Heropage1";

class Home extends Component {
  render() {
    return (
      <div className="home-container flex  flex-col justify-center p-2 md:p-6 min-h-screen">
        {/* Main content */}
        <div className="relative flex flex-col">
          <Heropage1 />
        </div>
      </div>
    );
  }
}

export default Home;
