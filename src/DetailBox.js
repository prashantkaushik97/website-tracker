import React, { useEffect, useState } from 'react'

function DetailBox({ url, title, status }) {
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        if (minutes >= 0) {
            setTimeout(() => setMinutes(minutes + 1), 60000);
        } else {
            setMinutes('BOOOOM!');
        }
    });
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
