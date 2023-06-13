import React from 'react'

const Button = (props) => {
    const { name, onClick, classNames, backgroundColor, textColor, borderColor } = props

    return (
        <button
            onClick={onClick}
            className={`ml-auto rounded  px-4 pb-2 pt-2.5 text-xs  leading-normal  font-medium uppercase  ${classNames}`}
            style={{ backgroundColor: backgroundColor, color: textColor, border: borderColor, height: "40px" }}
        >
            {name}
        </button>
    )
}

export default Button
