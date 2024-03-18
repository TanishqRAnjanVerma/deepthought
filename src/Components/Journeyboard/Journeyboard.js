import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import '../Journeyboard/journeyboard.css';
import Data from '../JourneyBoardData/Data';
import Hiddendata from '../Journeyboardhiddendata/Hiddendata';



function Journeyboard() {
  const [expanded, setExpanded] = useState(false);

  const toggleJourneyboard = () => {
    console.log(expanded)
    setExpanded(!expanded);

  }
  console.log(expanded)
  return (
    <div className={expanded ? 'journeyboard expanded' : 'journeyboard'}>
      <div className='container'>
        <span>Journey Board</span>

        <button onClick={toggleJourneyboard} className='expdbtn'>
          {expanded ? <BsFillArrowLeftCircleFill className='right-left' /> : <BsFillArrowRightCircleFill className='right-left' />}
        </button>
        {expanded === true ? <Data /> : <Hiddendata />}

      </div>
    </div>
  );
}

export default Journeyboard;
