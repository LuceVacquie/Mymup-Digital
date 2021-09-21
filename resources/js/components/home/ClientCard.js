import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const ClientCard = ({ name, id, img }) => {
    const [isHovered, setIsHovered] = useState(false);
    const history = useHistory();
    return (
        <div
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className=""
        >
            <div className="relative">
                <button onClick = {() => history.push(id)}>
                    <img src={img} className="h-full w-full" />
                    <div 
                    className="absolute inset-0" 
                    style={{background: isHovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.75)'}}
                    />
                    
                    <div className="text-center absolute w-full top-3/4">
                        <h3
                            className="text-center text-2xl"
                            style={{ color: isHovered ? "#38373C" : "#87868a" }}
                        >
                            {name}
                        </h3>
                    </div>
                </button>
                
            </div>
        </div>
    );
};

export default ClientCard;
