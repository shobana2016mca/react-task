import React from 'react'

const InputForm = (props) => {
    const { type, fontSize, placeholder } = props

    return (
        <>
            <input
                className="inputfield block p-1 w-full text-lg  bg-transparent border-2 rounded mb-4"
                type={type}
                style={{ fontSize: fontSize, borderColor: "#e6e6e6" }}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputForm
