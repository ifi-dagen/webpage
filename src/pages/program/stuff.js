import React from "react";
import ReactDOM from "react-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

//import "./styles.css";

function App() {
  return (
    <div
      className="App"
      style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
    >
      <h1>CDTN Timeline</h1>
      <VerticalTimeline>
        {events.map(event => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={event.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
