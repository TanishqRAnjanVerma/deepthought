import React from 'react'
import '../Mainpage/main.css'
import tasksData from '../Data/daataa'
import { IoInformationCircle } from "react-icons/io5";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Icons from '../Icons/Icons';

const Main = () => {
    return (
        <div >
            <div className="main">
                <div className="section">
                    <div className='title'>
                        <h3> Technical Project Management</h3>
                        <button className="btn" type='button'>
                            Submit Task
                        </button>
                    </div>


                    {tasksData.tasks.map((task) => (
                        <div className='para' key={task.task_id}>
                            <h2 className='head'>{task.task_title}</h2>
                            <p className='description'>{task.task_description}</p>
                            <div className="assets-container">
                                {task.assets.map((asset) => (
                                    <div key={asset.asset_id} className="asset-card">
                                        <h3 className='title-1'>{asset.asset_title}&nbsp; <IoInformationCircle /></h3>
                                        <p className='desc'><b>Description:</b>&nbsp;{asset.asset_description}</p>
                                        {asset.asset_type === 'display_asset' && (
                                            <>
                                                {asset.asset_content_type === 'video' && (
                                                    <iframe
                                                        title={asset.asset_title}
                                                        width="560"
                                                        height="315"
                                                        src={asset.asset_content}
                                                        frameBorder="0"
                                                        allowFullScreen
                                                    ></iframe>
                                                )}

                                            </>

                                        )}

                                        {asset.asset_id === 18884 && (
                                            <>
                                                <Card1 />
                                            </>
                                        )}

                                        {asset.asset_id === 18885 && (
                                            <>
                                                <Card3 />
                                            </>
                                        )}

                                        {asset.asset_id === 18886 && (
                                            <>
                                                <Card2 />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Icons />
                

            </div>

        </div>


    )
}

export default Main
