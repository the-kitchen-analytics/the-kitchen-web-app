import React from "react";
import { Image } from "semantic-ui-react";
import getAvatarPathByName from "../../../services/getAvatarPathByName";

const Avatar = ({ name }) => (
    <Image avatar src={getAvatarPathByName(name)} />
)

export default Avatar