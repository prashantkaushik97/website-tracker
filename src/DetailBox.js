import React, { useEffect, useState } from 'react'
import moment from "moment"

function DetailBox({ url, title, status, time }) {
    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            var currentTime = moment(new Date())
            var duration = moment.duration(currentTime.diff(time));
            setMinutes(parseInt(duration.asMinutes()))
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='detailBox'>
                <div className='detailBox_title'>
                    <p>{title}</p>
                    <span>{url}</span>
                </div>
                <div className='detailBox__status'>
                    <p> Last updated {minutes} minutes ago</p>
                    <div className={status}> {status}</div>
                </div>
            </div>
            <hr className='detailBox__line' />
        </div>
    )
}

export default DetailBox
