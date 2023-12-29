"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdSchool, MdWork } from "react-icons/md";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-full   dark:text-green-800 text-gray-300 md:px-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 text-green-800 dark:text-white border-blue-300">
            Experience
          </h1>{" "}
        </div>
        <VerticalTimeline className=" text-green-800" lineColor="blue">
          <VerticalTimelineElement
            visible
            className="dark:bg-[#0a192f] bg-[#0a192f] dark:text-green-800  verticial-timeline-element--education"
            contentStyle={{ background: "#0a192f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2012-2016"
            iconStyle={{ background: "blue", color: "silver" }}
            icon={<MdSchool />}
          >
            <h3 className="verticial-timeline-element-title  ">
              The Technological Institute of Textile and Sciences
            </h3>
            <p>B.Tech (IT)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="verticial-timeline-element--education dark:bg-[#0a192f] bg-[#0a192f] dark:text-green-800"
            contentStyle={{ background: "#0a192f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018-2019"
            iconStyle={{ background: "blue", color: "silver" }}
            icon={<MdWork />}
          >
            <h3 className="verticial-timeline-element-title">
              JRS INNOVATION JAIPUR
            </h3>
            <p>JOB AS IT INTERN</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible
            className="verticial-timeline-element--education dark:bg-[#0a192f] bg-[#0a192f] dark:text-green-800"
            contentStyle={{ background: "#0a192f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019-2020"
            iconStyle={{ background: "blue", color: "silver" }}
            icon={<MdWork />}
          >
            <h3 className="verticial-timeline-element-title">
              TECHNOGLOBE JAIPUR
            </h3>
            <p>JOB AS PYTHON INTERN</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible
            className="verticial-timeline-element--education dark:bg-[#0a192f] bg-[#0a192f] dark:text-green-800"
            contentStyle={{ background: "#0a192f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021-2022"
            iconStyle={{ background: "blue", color: "silver" }}
            icon={<MdWork />}
          >
            <h3 className="verticial-timeline-element-title">Udemy</h3>
            <p>Learning JavaScript</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible
            className="verticial-timeline-element--education dark:bg-[#0a192f] bg-[#0a192f] dark:text-green-800"
            contentStyle={{ background: "#0a192f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022-Present"
            iconStyle={{ background: "blue", color: "silver" }}
            icon={<MdWork />}
          >
            <h3 className="verticial-timeline-element-title">Upwork,Fiverr</h3>
            <p>Freelance Web Devloper</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
