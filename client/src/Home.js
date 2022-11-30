import React, {Component} from "react";

export default class Home extends Component {
    render () {
        return (
            <div className="home-container">
              <iframe title = "Charles was here" allow = "camera" style={{width: "1200px", height: "1200px", overflow: "hidden"}}  frameBorder="0" scrolling="no" src="https://charles-philip.github.io/Fancy-Fox/"></iframe>
            </div>
            // <iframe title = "Charles was here" allow = "camera" style={{width: "1200px", height: "1200px", overflow: "hidden"}}  frameBorder="0" scrolling="no" src="https://editor.p5js.org/Charles-Philip/full/jDw8JAVyA"></iframe>
        // <iframe src={perf}></iframe>
        )
    }
}