import React, {ImgHTMLAttributes} from 'react'
// TODO https://stackoverflow.com/questions/47078964/create-react-app-with-react-svg-loader-without-ejecting-fails-when-trying-to-min
import arrowDown from '../../svg/arrow-chevron-down.svg'
import arrowLeft from '../../svg/arrow-chevron-left.svg'
import arrowRight from '../../svg/arrow-chevron-right.svg'
import email from '../../svg/email.svg'
import fb from '../../svg/fb.svg'
import instagram from '../../svg/instagram.svg'
import twitter from '../../svg/twitter.svg'
import logoBack from '../../svg/logo-back.svg'
import logoBottom from '../../svg/logo-bottom.svg'
import logoTop from '../../svg/logo-top.svg'
import vk from '../../svg/vk.svg'
import vkNoBg from '../../svg/vk-no-bg.svg'

const iconsMap: Record<SvgNames, any> = {
    "arrow-chevron-down": arrowDown,
    "arrow-chevron-left": arrowLeft,
    "arrow-chevron-right": arrowRight,
    email,
    fb,
    "logo-back": logoBack,
    "logo-bottom": logoBottom,
    "logo-top": logoTop,
    instagram,
    twitter,
    vk,
    "vk-no-bg": vkNoBg

}

export type IconProps = {
    name: SvgNames
} & ImgHTMLAttributes<any>

const Icon: React.FC<IconProps> = ({
                                        name,
                                        ...rest
                                    }) => {
    return <img src={iconsMap[name]} {...rest}/>
}

export default Icon
