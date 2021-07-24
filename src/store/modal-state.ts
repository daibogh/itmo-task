import { declareAtom } from "@reatom/core"

type ModalState = "thank-you" | "form" | undefined

export const modalStateAtom = declareAtom(
  {
    setModalState: (value: ModalState) => value,
  },
  (
    $,
    state = undefined as ModalState /* <- don't forget to pass a default value */
  ) => {
    $(modalStateAtom.setModalState, (modalState) => {
      state = modalState
    })
    return state
  }
)
