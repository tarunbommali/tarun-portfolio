import { skillsList } from "../utils/skillsData";

import { FaStar } from "react-icons/fa";
import SkillsFooter from "./skillsFooter";

import React, { Component } from "react";

export default class Skills extends Component {
  state = { activeTopic: "React" };

  onClickSkillItem = (topic) => {
    this.setState({ activeTopic: topic });
  };

  renderSkillsList() {
    return (
      <ul className="flex flex-wrap bg-white m-5 p-5 rounded-md">
        {skillsList.map(({ id, technology, icon, rating }) => (
          <button
            className=""
            onClick={() => this.onClickSkillItem(technology)}
            key={id}
          >
            <li className="flex flex-col m-5 bg-[#f3f3f3] px-5 py-2 rounded-md">
              <div className="flex ">
                {icon}
                <div className="flex justify-start items-start flex-col pl-3">
                  <p className="skill-title">{technology}</p>
                  <p className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < rating ? "text-zinc-500" : "text-zinc-800"
                          }
                        />
                      ))}
                  </p>
                </div>
              </div>
            </li>
          </button>
        ))}
      </ul>
    );
  }

  renderSkillItemConcepts() {
    const { activeTopic } = this.state;
    return (
      <div className="flex  flex-wrap bg-white m-5 p-5 rounded-md">
        {skillsList
          .filter(({ technology }) => technology === activeTopic)
          .map(({ id, technology, keyTopics }) => (
            <div key={id}>
              <h3 className="flex font-semibold m-2">{technology}</h3>
              <ul className="flex flex-wrap">
                {Object.keys(keyTopics).map((topic, index) => (
                  <li className="flex mx-2 w-[205px] py-2" key={index}>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  }

  render() {
    return (
      <>
      <div className="flex justify-center  bg-[#f4f2ee]">
        <div className="w-[80%]">
          {this.renderSkillsList()}
          {this.renderSkillItemConcepts()}
        </div>
      </div>
      <SkillsFooter />
      </>
    );
  }
}
