import React from 'react';

const Selector = (props)=>{
    
    return(
        <div id="svgHolder">
            
            <svg height="400" width="400">
                <line x1="0" y1="100" x2="100" y2="100" stroke-linecap="round"
                style={{stroke:'rgb(255,0,0)', strokeWidth:100}}/>
                <path d="M100,100 a1,1 0 0,0 100, 0" stroke="blue" stroke-width="64" />
            </svg>

        </div>
    )
    
}
export default Selector;