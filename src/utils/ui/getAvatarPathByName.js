import christian from '../../assets/images/avatar/christian.jpeg'
import elliot from '../../assets/images/avatar/elliot.jpeg'
import jenny from '../../assets/images/avatar/jenny.jpeg'
import justen from '../../assets/images/avatar/justen.jpeg'
import matt from '../../assets/images/avatar/matt.jpeg'
import stevie from '../../assets/images/avatar/stevie.jpeg'

const AVATARS = Object.freeze({
  christian,
  elliot,
  jenny,
  justen,
  matt,
  stevie
})

const getAvatarPathByName = (name) => AVATARS[name]
export default getAvatarPathByName