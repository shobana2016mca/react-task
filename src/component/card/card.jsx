import React from 'react'
import Header from './header'
import Label from './lable'
import Button from '../button/button'

const Card = (props) => {
    const {
        jobTitle,
        jobTitleLabel,
        address,
        partTime,
        experience,
        rupees,
        employes,
        icon,
        ExternalApply,
        ApplyNow
    } = props

    return (
        <div style={{ padding: "10px" }}>
            <div className='ux-ui-pamplate'>
                <div className='ux-ui-innerform flex'>
                    <img src={icon} alt="" style={{ width: "40px", marginBottom: "237px" }} />
                    <div className='ux-ui-innerform-lables' >
                        <Header header={jobTitle} lable={jobTitleLabel} address={address} />
                        <Label label={partTime} />
                        <Label label={experience} />
                        <Label label={rupees} />
                        <Label label={employes} />
                        <div style={{ marginTop: "24px" }}>
                            <Button name={ApplyNow} classNames={"me-2"} backgroundColor="#1597E4" textColor="white" />
                            <Button name={ExternalApply} backgroundColor="White" textColor="#1597E4" borderColor="1px solid #1597E4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
