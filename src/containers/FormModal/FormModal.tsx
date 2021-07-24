import React, { useCallback, useMemo } from "react"
import ReactModal from "react-modal"
import { useAtom } from "@reatom/react"
import styled from "styled-components/macro"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { modalStateAtom } from "../../store/modal-state"
import {
  mixinText_14_19,
  mixinText_14_24,
  mixinText_16_22,
  mixinText_32_38,
  mixinText_bold,
  mixinText_medium,
  mixinText_normal,
} from "../../styles/mixins/typography"
import { BackgroundColor } from "../../styles/colors"
import { ButtonColor } from "../../components/Button/Button"
import { Icon } from "../../components/Icon"
import { Button } from "../../components/Button"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
const ContainerModal = styled(ReactModal)`
  width: 544px;
  min-height: 692px;
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
ReactModal.setAppElement("#root")
// @ts-ignore
ReactModal.defaultStyles.overlay.backgroundColor = "rgba(35, 36, 115, 0.5)"
const Title = styled.div`
  ${mixinText_32_38};
  ${mixinText_bold};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px 0 24px;
  & > label:not(:first-child) {
    margin-top: 24px;
  }
`
const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #d4d6d7;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  height: 40px;
`
const StyledLabel = styled.label`
  ${mixinText_medium};
  ${mixinText_14_24};
  margin-right: auto;
`
const EmailButton = styled(Button)`
  margin-top: 32px;
  padding: 9px 24px;
  width: 161px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  ${mixinText_16_22};
`
const ExtraLabel = styled.div`
  margin-top: 24px;
  ${mixinText_14_19};
  ${mixinText_normal};
`
const FormModal: React.FC = () => {
  const [modalState, { setModalState }] = useAtom(modalStateAtom)
  const close = useCallback(() => setModalState(undefined), [setModalState])
  const isOpen = useMemo(() => modalState === "form", [modalState])
  return (
    <ContainerModal
      shouldCloseOnOverlayClick
      preventScroll
      onRequestClose={close}
      isOpen={isOpen}
      style={customStyles}
    >
      <Formik
        initialValues={{ email: "", fullName: "", comment: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Container>
            <Title>Напишите нам!</Title>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                Ваши фамилия и имя <span style={{ color: "red" }}>*</span>
              </StyledLabel>
              <StyledInput
                type="text"
                name="fullName"
                id="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                placeholder="Введите ваше имя"
              />
              {errors.fullName && touched.fullName && errors.fullName}
              <StyledLabel>
                Электронная почта <span style={{ color: "red" }}>*</span>
              </StyledLabel>

              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="primer@itmo.ru"
              />
              {errors.email && touched.email && errors.email}
              <StyledLabel>Что непонятно или нужно уточнить</StyledLabel>
              <StyledInput
                type="text"
                name="comment"
                id="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                placeholder="Введите ваше сообщение"
              />
              {errors.comment && touched.comment && errors.comment}
              <ExtraLabel>
                Отправляя данную форму, вы даете согласие на обработку своих{" "}
                <span style={{ color: BackgroundColor.Blue }}>
                  Персональных данных
                </span>
              </ExtraLabel>
              <EmailButton
                backgroundColor={BackgroundColor.Blue}
                color={ButtonColor.white}
              >
                <Icon name="email" />
                Отправить
              </EmailButton>
            </StyledForm>
          </Container>
        )}
      </Formik>
    </ContainerModal>
  )
}

export default FormModal
