import React from 'react'

const Header = (props) => {
    const { header, lable, address } = props
    return (
        <div style={{ marginBottom: "24px" }}>
            <h5 style={{ fontSize: "21px", fontFamily: "bold" }} >{header}</h5>
            <label htmlFor="" style={{ fontSize: "15px" }}>{lable}</label><br />
            <label htmlFor="" style={{ color: "#999" }}>{address}</label>
        </div>
    )
}

export default Header
