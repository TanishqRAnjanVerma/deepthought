import React from 'react'
import '../Mainpage/card1.css'
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FiPlus } from "react-icons/fi";


function Card1() {
    return (
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Thread A
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className="subsec-1">
                                <div className="sub">
                                    <div className="sub-body">
                                        <label htmlFor="" className='label-1'>Sub Thread 1</label>
                                        <textarea name="" placeholder='Enter text here' id="" cols="10" rows="2"></textarea>
                                    </div>
                                    <div className="sub-icon">
                                        <FaLightbulb className='symbol-a' />
                                        <MdOutlineMessage className='symbol-a' />
                                        <FaLightbulb className='symbol-a' />
                                        <MdOutlineMessage className='symbol-a' />

                                    </div>
                                </div>

                                <div className="sub">
                                    <div className="sub-body">
                                        <label htmlFor="" className='label-1'>Sub Interpretation 1</label>
                                        <textarea name="" placeholder='Enter text here' id="" cols="10" rows="2"></textarea>
                                    </div>

                                    <div className="sub-down">
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Category
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Process
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="subsec-2">

                                <div className="section-card">
                                    <div className="sub-2">
                                        <div className="sub-btn">
                                            <button type="button" className="btn btn-primary btn-sm"><FiPlus /> Sub Thread</button>
                                        </div>
                                    </div>
                                    <div className="sub-body" id='sub-body-1'>
                                        <label htmlFor="" className='label-1'>Sub Thread 1</label>
                                        <textarea name="" placeholder='Enter text here' id="" cols="10" rows="2"></textarea>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>


                </div>


            </div>
        </div>
    )
}

export default Card1
