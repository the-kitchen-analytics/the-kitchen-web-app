import React, { useMemo } from "react";
import { LoadableButton } from "../ui/Button";
import { logout } from "../../config/firebase";
import { useUserSettings } from "../../hooks";

const CONFIRM_LOGOUT_MESSAGE = 'Вы действительно хотите выйти?';

const Logout = (props) => {

    const { settings: { controlsSize } } = useUserSettings();

    const handleLogOut = () => {
        if (window.confirm(CONFIRM_LOGOUT_MESSAGE)) {
            console.debug('log out');
            localStorage.clear();
            logout();
        }
    }

    const defultProps = useMemo(() => ({
        // fluid: true,
        negative: true,
        icon: 'sign out',
        content: 'Выйти',
        size: controlsSize,
        onClick: handleLogOut,
        ...props
    }), [props, controlsSize]);

    return (
        <LoadableButton
            {...defultProps}
        />
    )
}

export default Logout;