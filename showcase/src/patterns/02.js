import React from 'react'


const MediumClap = () => {
    return (
        <button>
            <ClapIcon/>
            <ClapCount/>
            <CountTotal/>
        </button>
    )
}
export default MediumClap

/**
SubComponents
 */

const ClapCount = ({count}) => {
    return
    <span>{count}</span>
}