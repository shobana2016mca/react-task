import React from 'react'

const Header = (props) => {
    const { step } = props
    return (
        <div style={{
            display: "flex", marginTop: 0,
            marginBottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
        }} >
            <div style={{
                marginTop: 0,
                marginBottom: 24,
                marginRight: "auto",
                fontWeight: "bold"
                , fontSize: "20px"
            }}>Create a job </div>
            <div style={{
                marginTop: 0,
                marginBottom: 24,
                marginLeft: "auto",
                fontWeight: "bold",
                fontSize: "17px"
            }}>{step}</div>
        </div >
    )
}

export default Header
