import React, { PropsWithChildren } from "react"
import { FontSetter } from "../../../styles/helpers/font-setter"

const FontWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <FontSetter />
    {children}
  </>
)
export default FontWrapper
