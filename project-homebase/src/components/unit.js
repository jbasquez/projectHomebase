import React from 'react';
import quiz from '../units.json';
import Unit from '../props/unit';

function Unit1() {
    return (
      <div>
        <Unit
              id={quiz[0].id}
              name={quiz[0].name}
              lesson={quiz[0].lesson}
            />
      </div>
    );
  }

  export default Unit1;