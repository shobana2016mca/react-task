import React from 'react'

const Label = (props) => {
    const { label } = props
    return (
        <div style={{ marginBottom: "8px" }}>
            <label style={{ color: "#212121", fontSize: "15px" }} >{label}</label>
        </div>
    )
}

export default Label

