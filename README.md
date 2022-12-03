# AI Fit

CMPE195 Fall 2022 Senior Project

Submitted by Team 22:
- Charles Im
- Hoai An Nguyen
- Dylan Zeglinski

AI Fit is a machine learning project using computer vision to id and to score workout posture to help people with their workout goals.
This repository contains MERN part of the project. You can find the ML part [here](https://github.com/Charles-Philip/Fancy-Fox).


## Required:
1. Node (v15.5.1)
2. NPM (7.3.0) or Yarn
3. MongoDB


## Setup/install and run the project
1. Make sure MongoDB is running on your system
2. Fork the repository and clone it.
3. Open two terminal windows (one for running Server and other for the UI).
4. Start MongoDB service with sudo service mongod start.
5. To start the SERVER in one terminal `cd server`, then run `npm start`. By default it will run on port 3001.
6. In another terminal run `cd client`, then run `npm start`. By default it will run on port 3000.
7. The application will automaticaly start in your browser. If application doesn't start automatically, go to http://localhost:3000.


## Demo
You can find a video demo [here](https://drive.google.com/file/d/1h0WqROzAJGAOAKGvK5ZokO04MTSP6YuR/view?usp=share_link)
Note: the some of the timings do not correctly increment due to react's batch jobs

## Notes
- ML5 Framework over Tensorflow model
- Javascript Overhaul
- React app to allow for video input and easy target classification with ML5
- Training dataset no longer needed
- Posenet - real-time position analysis
- MERN stack


## License

    Copyright [2022] [Hoai AN Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
