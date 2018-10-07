import React from 'react'

export const star = (fill) => {
    return (
        <svg x="0px" y="0px" width="16px" height="14.9px" viewBox="0 0 16 14.9">
            <polygon fill={fill}
                     points="16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 "/>
        </svg>
    )
}