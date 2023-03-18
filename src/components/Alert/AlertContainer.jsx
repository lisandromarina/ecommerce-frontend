import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlertComponent from './AlertComponent';

function AlertContainer() {
    const alerts = useSelector(state => state.notification.alerts);
    const [alert, setAlert] = useState({ type: "", message: "" });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (alerts?.length > 0) {
            setAlert(alerts[alerts.length - 1]);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }, [alerts]);

    const onClose = () => {
        setShow(false);
    };

    return (
        <AlertComponent
            onClose={onClose}
            show={show}
            alert={alert}
        />
    )
}

export default AlertContainer;
