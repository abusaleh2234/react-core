import { useState } from "react";

const Toggle = () => {
    const [isHide, setIsHide] = useState(false)
    const handleRender = () => {
        setIsHide(true)
        
    }
    const handleRenderShow = () => {
        setIsHide(false)
        
    }
    return (
        <div className="card">
            {
                isHide ? <button onClick={handleRenderShow}>Show</button> : <button onClick={handleRender}>Hide</button>
            }
            {
                !isHide && <p>Hello React Learner</p>
            }
            
        </div>
    );
};

export default Toggle;