import React from 'react';

function LessonCard(props) {
    return(
      <div className="card">
        <div className="img-container">
          <a href={props.active}><img className="" alt={props.name} src={props.image} /></a>
        </div>
        <div className="content">
          <ul className="">
            <li>
              <strong className="">Name:</strong> {props.name}
            </li>
            <li>
              <strong className="">About:</strong> {props.about}
            </li>
            <li>
              <strong className="">Estimated time:</strong> {props.time}
            </li>
              <a className="btn" href={props.active} target="_blank" rel="noopener noreferrer">Demo</a>
          </ul>
        </div>
      </div>
    );
}
export default LessonCard;