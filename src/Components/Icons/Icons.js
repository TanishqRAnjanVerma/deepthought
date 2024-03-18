import React from 'react'
import '../Icons/icons.css'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";

function Icons() {
    return (
        <div>
            <div className="icon-3">
                <BsFillQuestionCircleFill className='subicon' />
                <IoIosPeople className='subicon' />
                <IoCalendarSharp className='subicon' />
            </div>
        </div>
    )
}

export default Icons
