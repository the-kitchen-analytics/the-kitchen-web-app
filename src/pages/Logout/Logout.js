import React, { useMemo } from "react";
import { LoadableButton } from "../../components/ui/Button";

const Logout = (props) => {


    const handleLogOut = () => {
        console.debug('log out');
    }

    const defultProps = useMemo(() => ({
        fluid: true,
        negative: true,
        icon: 'sign out',
        content: 'Выйти',
        size: 'large',
        onClick: handleLogOut,
        ...props
    }), [props]);

    return (
        <LoadableButton
            {...defultProps}
        />
    )
}

export default Logout;