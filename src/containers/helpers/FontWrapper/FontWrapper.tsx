import React, {PropsWithChildren} from "react";
import {FontSetter} from '../../../styles/helpers/font-setter'
const FontWrapper: React.FC<PropsWithChildren<{}>> = ({children}) => {
    return <>
        <FontSetter />
        {children}
    </>
}
export default FontWrapper
