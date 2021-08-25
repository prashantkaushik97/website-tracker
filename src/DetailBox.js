import React, { useEffect, useState } from 'react'
import moment from "moment"

function DetailBox({ url, title, status, time }) {
    const [minutes, setMinutes] = useState();

    useEffect(() => {
        var currentTime = moment(new Date())
        var duration = moment.duration(currentTime.diff(time));
        // moment("8:32 AM", 'h:mm A').diff('hours', 2).format('h:mm A')

        setMinutes(parseInt(duration.asHours()))
    });
    return (
        <div>
            <div className='detailBox'>
                <div className='detailBox_title'>
                    <p>{title}</p>
                    <span>{url}</span>
                </div>
                <div className='detailBox__status'>
                    <p> Last updated {time} minutes ago</p>
                    <div className={status}> {status}</div>
                </div>
            </div>
            <hr className='detailBox__line' />
        </div>
    )
}

export default DetailBox
