import React from 'react';
import '../css/lesson.css';
import {Link } from "react-router-dom";

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
            <Link to={props.start}><button class="goButton">Lets Go! </button></Link>
          </ul>
        </div>
          </div>
        </div>
      </div>
    );
}
export default LessonCard;