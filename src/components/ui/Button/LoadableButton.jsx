import _ from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "semantic-ui-react";

const LoadableButton = (props) => {

    const [isLoading, setIsLoading] = useState(props.loading ? true : false);

    useEffect(() => {
        if (_.isBoolean(props.loading) && props.loading !== isLoading) {
            setIsLoading(props.loading);
        }
    }, [isLoading, props.loading])

    const handleClick = useCallback((...args) => {
        setIsLoading(true);

        if (_.isFunction(props.onClick)) {
            props.onClick(...args)
        }
    }, [props]);

    const defaultProps = useMemo(() => ({
        ...props,
        loading: isLoading,
        disabled: props.disabled || isLoading,
        onClick: handleClick
    }), [handleClick, isLoading, props])

    return (
        <Button
            {...defaultProps}
        />
    )
}

export default LoadableButton;