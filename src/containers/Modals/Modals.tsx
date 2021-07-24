import React, { useEffect, useMemo } from "react"
import { useAtom } from "@reatom/react"
import { FormModal } from "../FormModal"
import { ThankYouModal } from "../ThankYouModal"
import { modalStateAtom } from "../../store/modal-state"

const Modals: React.FC = () => {
  const [modalState] = useAtom(modalStateAtom)
  const open = useMemo(() => !!modalState, [modalState])
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])
  return (
    <>
      <FormModal />
      <ThankYouModal />
    </>
  )
}
export default Modals
