import React from 'react'
import '../Mainpage/card3.css'
import { HiArrowUturnLeft } from "react-icons/hi2";
import { HiArrowUturnRight } from "react-icons/hi2";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

function Card3() {
    return (
        <div className='card3'>
            <div className="section-3">
                <label htmlFor=""> Title</label>
                <div class="input-group input-group-sm mb-3">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="section-4">
                <label htmlFor=""> Content</label>
                <div className="subsec-4">
                    <ul>
                        <ol>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                            <li>Insert</li>
                            <li>Format</li>
                            <li>Tools</li>
                            <li>Table</li>
                            <li>Help</li>
                        </ol>
                        <ol>
                            <li>< HiArrowUturnLeft /></li>
                            <li><HiArrowUturnRight /></li>
                            <li><MdOutlineZoomOutMap /></li>
                            <li><AiOutlinePicture /></li>
                            <li><option value="Paragraph">Paragraph</option></li>
                            <li><BsThreeDots /></li>
                        </ol>

                    </ul>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Card3
