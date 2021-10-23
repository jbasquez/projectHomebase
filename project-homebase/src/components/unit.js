import React from 'react';
import quiz from '../units.json';
import Unit from '../props/unit';

function Unit1() {
    return (
      <div>
        <Unit
              id={quiz[0].id}
              name={quiz[0].name}
              about={quiz[0].about}
              time={quiz[0].time}
              image={quiz[0].image}
              start={quiz[0].start}
            />
      </div>
    );
  }

  export default Unit1;