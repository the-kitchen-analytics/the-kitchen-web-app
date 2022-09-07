import christian from '../images/avatar/christian.jpeg';
import elliot from '../images/avatar/elliot.jpeg';
import jenny from '../images/avatar/jenny.jpeg';
import justen from '../images/avatar/justen.jpeg';
import matt from '../images/avatar/matt.jpeg';
import stevie from '../images/avatar/stevie.jpeg';

const AVATARS = Object.freeze({
    christian,
    elliot,
    jenny,
    justen,
    matt,
    stevie
});

const getAvatarPathByName = (name) => AVATARS[name];
export default getAvatarPathByName;