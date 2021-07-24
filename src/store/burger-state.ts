import { declareAtom } from "@reatom/core"

export const isOpenedBurgerAtom = declareAtom(
  {
    toggle: () => {},
  },
  ($, state = false /* <- don't forget to pass a default value */) => {
    $(isOpenedBurgerAtom.toggle, () => {
      state = !state
    })
    return state
  }
)
