import React from "react";
import { Image } from "semantic-ui-react";
import { getAvatarPathByName } from "../../../utils/ui";

const Avatar = ({ name }) => (
    <Image avatar src={getAvatarPathByName(name)} />
)

export default Avatar