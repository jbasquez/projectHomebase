import React from 'react';
import '../css/lesson.css';

function LessonCard(props) {
    return(
      <div>
        <div className="card">
          <div className="test">
          <div className="img-container">
          <a href={props.start}><img className="" alt={props.name} src={props.image} /></a>
        </div>
        <div className="content">
          <ul className="">
          <li>
              <strong className="">Unit:</strong> {props.id}
            </li>
            <li>
              <strong className="">Name:</strong> {props.name}
            </li>
            <li>
              <strong className="">About:</strong> {props.about}
            </li>
            <li>
              <strong className="">Estimated time:</strong> {props.time}
            </li>
            <li>
            <button className="button" href={props.start} target="_blank" rel="noopener noreferrer">Start</button>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    );
}
export default LessonCard;