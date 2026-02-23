import React, { useState } from 'react';

const Player = () => {

    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleRuns = (run) => {
        if (run === 6) {
            setSixes( sixes + 1)
        }
        const updateRun = runs + run
        setRuns(updateRun)
    }
    const handleSingle = () => {
        const updateRun = runs + 1
        setRuns(updateRun)
    }
    const handleSix = () => {
        const updateRun = runs + 6
        const updateSixes = sixes + 1
        setSixes(updateSixes)
        setRuns(updateRun)
    }
    const handleFour = () => {
        const updateRun = runs + 4
        setRuns(updateRun)
    }
    return (
        <div>
            {
                runs > 50 && <p>You are done 50.</p>
            }
            <h1>Score: {runs}</h1>
            <h2>Sixes : {sixes}</h2>
            <button onClick={()=>handleRuns(1)}>Single</button>
            <button onClick={()=>handleRuns(4)}>Four</button>
            <button onClick={()=>handleRuns(6)}>six</button>
        </div>
    );
};

export default Player;