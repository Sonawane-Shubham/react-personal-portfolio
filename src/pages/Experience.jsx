import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            New High School Kingaon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aurangabd, Maharashtra
          </h4>
          <p>SSC [ 78.60% ]</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Prabhat High School Nidhona
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Aurangabd, Maharashtra
          </h4>

          <p> HSC Science [ 72% ]</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government Polytechnic Aurangabad
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aurangabd, Maharashtra
          </h4>
          <p>Diplom In Information Technology [ 82.06% ]</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            People's Education Society College Of Engineering Aurangabad
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aurangabad, Maharashtra
          </h4>
          <p>B.Tech In Computer Science And Engineering [ CGPA : 8.58 ]</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
