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
              time={lesson[0].time}
              image={lesson[0].image}
              start={lesson[0].start}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              time={lesson[1].time}
              image={lesson[1].image}
              start={lesson[1].start}
              repo={lesson[1].repo}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              time={lesson[1].time}
              image={lesson[1].image}
              start={lesson[1].start}
              repo={lesson[1].repo}
            />
          </div>
        </div>
          <div className="row bottom mar">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              time={lesson[1].time}
              image={lesson[1].image}
              start={lesson[1].start}
              repo={lesson[1].repo}
            />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              time={lesson[1].time}
              image={lesson[1].image}
              start={lesson[1].start}
              repo={lesson[1].repo}
            />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div>
              <LessonCard 
              id={lesson[1].id}
              name={lesson[1].name}
              about={lesson[1].about}
              time={lesson[1].time}
              image={lesson[1].image}
              start={lesson[1].start}
              repo={lesson[1].repo}
            />
              </div>
            </div>
          </div>

      </div>
    );
  }
  
  export default Lessons;
  