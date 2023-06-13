import React, { useState } from 'react'
import InputForm from '../../component/input-form/form'
import Span from '../../component/input-form/label'
import Header from '../../component/input-form/header'
import Button from '../../component/button/button'

const Form = () => {
  const [step, setStep] = useState(1)

  return (
    <div className='main-container'>
      <div className='sub-container mx-auto'>
        <div style={{ padding: "32px" }}>
          <Header step={`step ${step}`} />
          {
            step === 1 &&
            <>
              <Span star={true} span={"Job title"} />
              <InputForm type="text" fontSize={15} placeholder="ex. UX Ul Designer" />

              <Span star={true} span={"company name"} />
              <InputForm type="text" fontSize={15} placeholder="ex. Google" />

              <Span star={true} span={"Industy"} />
              <InputForm type="text" fontSize={15} placeholder="ex. Information Technology" />

              <div className='flex gap-6' >
                <div className='w-[16rem]'>
                  <Span span={"Location"} />
                  <InputForm type="text" fontSize={15} placeholder="ex. UX Ul Designer" />
                </div>
                <div className='w-[16rem]'>
                  <Span span={"Remote type"} />
                  <InputForm type="text" fontSize={15} placeholder="ex. In-office" />
                </div>
              </div>
            </>
          }

          {
            step === 2 &&
            <>
              <div className='flex gap-7' >
                <div className='w-[16rem]'>
                  <Span span={"Experience"} />
                  <InputForm type="text" fontSize={15} placeholder="Minimum" />
                </div>
                <div className='w-[16rem]  mt-6'>
                  <InputForm type="text" fontSize={15} placeholder="Maximum" />
                </div>
              </div>

              <div className='flex gap-7' >
                <div className='w-[16rem]'>
                  <Span span={"Salary"} />
                  <InputForm type="text" fontSize={15} placeholder="Minimum" />
                </div>
                <div className='w-[16rem] mt-6'>
                  <InputForm type="text" fontSize={15} placeholder="Maximum" />
                </div>
              </div>

              <Span span={"Total employee"} />
              <InputForm type="text" fontSize={15} placeholder="ex. 100" />

              <Span span={"Apply type"} />
              <div className='flex'>
                <input type="radio" className='radioButton' />
                <span placeholder="External apply" className='inputfield block p-1  text-lg  bg-transparent border-0 rounded mb-4' style={{ color: "#999" }} > Quick apply</span>

                <input type="radio" className='radioButton' style={{ marginLeft: "16px" }} />
                <span placeholder="External apply" className='inputfield block p-1  text-lg  bg-transparent border-0 rounded mb-4' style={{ color: "#999" }} >External apply</span>
              </div>
            </>
          }

          <div className='mybtn'>
            <Button
              name={step === 1 ? "Next" : "Save"}
              onClick={() => { setStep(2) }}
              backgroundColor="#1597E4"
              textColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form