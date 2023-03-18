import React from 'react';
import './AlertStyles.scss';
import { TbCircleX } from "react-icons/tb";
import { TiWarningOutline } from "react-icons/ti";
import { BiErrorAlt, BiCheck } from "react-icons/bi";


function AlertComponent(props) {
    const {
        show,
        onClose,
        alert
    } = props;

    return (
        show ?
            <div className={`notification-container ${alert.type}`}>
                <div className='notification-detail'>
                    {alert.type === 'error' ? <BiErrorAlt size={30} /> : null}
                    {alert.type === 'warning' ? <TiWarningOutline size={30} /> : null}
                    {alert.type === 'success' ? <BiCheck size={30} style={{color: 'green'}}/> : null}
                    {alert.message}
                </div>
                <TbCircleX size={30} className='close-icon' onClick={onClose} />
            </div>
            : null
    )
}

export default AlertComponent
