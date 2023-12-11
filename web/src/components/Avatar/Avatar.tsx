import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

interface AvatarProps {
  avatar?: string
  alt?: string
  letter?: string
  icon?: string
  isSantaHatShowing?: boolean
  indicator?: 'success' | 'warning' | 'error' | null
}
const Avatar = ({
  avatar,
  alt,
  letter,
  icon,
  isSantaHatShowing,
  indicator,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {/* Imagen de avatar */}
      {avatar && (
        <img
          src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
      )}
      {/* Avatar de letra */}
      {letter && !avatar && (
        <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </div>
      )}
      {/* Avatar icono */}
      {icon && !avatar && !letter && (
        <div className="center h-18 w-18 rounded-full border-avatar border-vistaBlue bg-spanishGreen text-2xl font-bold uppercase text-white">
          <Icon id={icon} size={32} />
        </div>
      )}
      {/* Avatar con gorro de navidad */}
      {isSantaHatShowing && (
        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      )}
      {/* Avatar con indicador */}
      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
