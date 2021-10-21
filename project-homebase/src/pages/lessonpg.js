import React from "react";
import LessonCard from "../props/lesson";
import lesson from "../lesson.json";

function Lessons() {
    return (
      <div>
<div className="row mar">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[0].id}
              name={lesson[0].name}
              about={lesson[0].about}
              skills={lesson[0].skills}
              image={lesson[0].image}
              active={lesson[0].active}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            {/* <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              skills={lesson[1].skills}
              image={lesson[1].image}
              active={lesson[1].active}
              repo={lesson[1].repo}
            /> */}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            {/* <LessonCard 
              id={lesson[2].id}
              name={lesson[2].name}
              about={lesson[2].about}
              skills={lesson[2].skills}
              image={lesson[2].image}
              active={lesson[2].active}
              repo={lesson[2].repo}
            /> */}
          </div>
        </div>
          <div className="row bottom mar">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              {/* <LessonCard 
                id={lesson[3].id}
                name={lesson[3].name}
                about={lesson[3].about}
                skills={lesson[3].skills}
                image={lesson[3].image}
                active={lesson[3].active}
                repo={lesson[3].repo}
              /> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              {/* <LessonCard 
                  id={lesson[5].id}
                  name={lesson[5].name}
                  about={lesson[5].about}
                  skills={lesson[5].skills}
                  image={lesson[5].image}
                  active={lesson[5].active}
                  repo={lesson[5].repo}
                /> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div>
              {/* <LessonCard 
                id={lesson[4].id}
                name={lesson[4].name}
                about={lesson[4].about}
                skills={lesson[4].skills}
                image={lesson[4].image}
                active={lesson[4].active}
                repo={lesson[4].repo}
              /> */}
              </div>
              {/* <div className="square">
                <h2 className="headers textColor">Click to see more lessons and repos on github</h2>
              <a className="btn PrimaryBtn contact mar" href="https://github.com/jbasquez?tab=repositories" target="_blank" rel="noopener noreferrer">Click Now!</a>
              </div> */}
            </div>
          </div>

      </div>
    );
  }
  
  export default Lessons;
  