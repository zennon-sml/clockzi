import React, { useEffect, useState } from "react";

function Clock(){
    const [clockState, setClockstate] = useState();
    useEffect(() =>{
        setInterval(() => {
            const date = new Date();
            setClockstate(date.toLocaleTimeString())
        }, 1000);
    }, [])
    return <div style={{fontSize: "60px", margin: "60px", position: "center"}}>{clockState}</div>
}

export default Clock;