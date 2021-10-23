import React from 'react';


function Unit(props) {
    return (
        <div>
        <div className="card">
          <div className="test">
        <div className="content">
          <ul className="">
          <li>
              <strong className="">Unit:</strong> {props.id}
            </li>
            <li>
              <strong className="">Name:</strong> {props.name}
            </li>
            <li>
              <strong className="">Lesson:</strong> {props.lesson}
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    );
  }

  export default Unit;