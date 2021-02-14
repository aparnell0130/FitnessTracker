# FitnessTracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tools_&_Technologies](#Tools_&_Technologies)
  - [Code](#Code)
  - [Repo_Link](#Repo_Link)
  - [Example](#Example)
  - [License](#License)
  - [Author_Info](#Author_Info)

## Description
Do you want to be able to view, create and track daily workouts? This app will allow you to log multiple exercises in a workout on a given day. You can track the name, type, weight, sets, reps, and duration of an exercise. If the exercise is a cardio exercise, you will also be able to track your distance traveled.

    Note: You will only need to do the installation once.

##  Installation
- Install Node Robo3T and MongoDb
- Download repo zip file
- Enter "npm i" in VSCode integrated terminal or GitBash/Terminal while in correct folder.
- For seed data you can enter "npm run seed" in VSCode integrated terminal or GitBash/Terminal while in correct folder.




## Usage
### After install 
1. Open VSCode integrated terminal or GitBash/Terminal
2. Path to correct folder
3. Run file by entering "node index.js" or "npm start"

## Tools_&_Technologies
- JavaScript
- Node
- MongoDb
- Robo3T
- npm packages 
    - mongoose
    - express
    - morgan

## Code
 Sum durations for workouts
```JS
ExerciseSchema.virtual('totalDuration').get(function () {
    let time = 0
    const durations = this.exercises
    for (let i = 0; i < durations.length; i++) {
        time += durations[i].duration;

    }
    return time
})

```
## Repo_Link
- [Application Live Link](https://fitnesstracker-exercises.herokuapp.com/)

## Example

![ALT TEXT](misc/img/demo.gif)

## License
- MIT License

Copyright (c) [2021] [Aaron Parnell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

## Author_Info
  Github: [aparnell0130](https://github.com/aparnell0130)  
  LinkedIn: [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)  
  Email: aparnell0130@gmail.com

[Back to top](#FitnessTracker)
