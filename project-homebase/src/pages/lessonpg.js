import React from "react";
import LessonCard from "../props/lesson";
import lesson from "../lesson.json";

function Lessons() {
    return (
      <div>
<div className="row mar pad">
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
              id={lesson[2].id}
              name={lesson[2].name}
              about={lesson[2].about}
              time={lesson[2].time}
              image={lesson[2].image}
              start={lesson[2].start}
              repo={lesson[2].repo}
            />
          </div>
        </div>
          <div className="row bottom mar pad">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[3].id}
              name={lesson[3].name}
              about={lesson[3].about}
              time={lesson[3].time}
              image={lesson[3].image}
              start={lesson[3].start}
              repo={lesson[3].repo}
            />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LessonCard 
              id={lesson[4].id}
              name={lesson[4].name}
              about={lesson[4].about}
              time={lesson[4].time}
              image={lesson[4].image}
              start={lesson[4].start}
              repo={lesson[4].repo}
            />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div>
              <LessonCard 
              id={lesson[5].id}
              name={lesson[5].name}
              about={lesson[5].about}
              time={lesson[5].time}
              image={lesson[5].image}
              start={lesson[5].start}
              repo={lesson[5].repo}
            />
              </div>
            </div>
          </div>

      </div>
    );
  }
  
  export default Lessons;
  