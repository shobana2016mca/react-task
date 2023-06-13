import React from 'react'

const Span = (props) => {
    const { span, star } = props

    return (
        <div className='label'>
            <label
                style={{ color: "#212121", fontWeight: "bold" }}
            >
                {span}
            </label>

            {star && <span style={{ color: "red" }}>*</span>}
        </div>
    )
}

export default Span
