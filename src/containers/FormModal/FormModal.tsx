import React, { useCallback, useMemo, useState } from "react"
import ReactModal from "react-modal"
import { useAtom } from "@reatom/react"
import styled from "styled-components/macro"
import { Formik } from "formik"
import { css } from "styled-components"
import * as yup from "yup"
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
import { scRespondTo } from "../../styles/helpers/respond-to"

const ContainerModal = styled(ReactModal)`
  width: calc(100% - 40px);
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${scRespondTo.xms} {
    width: 544px;
    min-height: 692px;
  }
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
  padding: 10px 40px;
  ${scRespondTo.xms} {
    padding: 80px;
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px 0 24px;
  & > label:not(:first-child) {
    margin-top: 5px;
  }
`
const inputStyles = css`
  background: #ffffff;
  border: 1px solid #d4d6d7;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  height: 40px;
`
const StyledInput = styled.input`
  ${inputStyles}
`
const StyledTextArea = styled.textarea`
  ${inputStyles};
  min-height: 96px;
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
const ErrorLabel = styled.div`
  color: ${BackgroundColor.Red};
  height: 20px;
  ${mixinText_14_19};
  margin-right: auto;
`
const ThankYouLabel = styled.div`
  color: ${BackgroundColor.Blue};
  height: 20px;
  ${mixinText_16_22};
  ${mixinText_medium};
`
const CloseIcon = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  &:hover {
    cursor: pointer;
  }
`
const FormSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(4, "Имя и фамилия должны быть не менее 4 символов")
    .max(50, "Имя и фамилия должны быть не более 50 символов")
    .required("Поле обязательно к заполнению"),
  email: yup
    .string()
    .email("Некорректный email")
    .required("Поле обязательно к заполнению"),
  comment: yup.string().max(300, "Должно быть не более 300 символов"),
})
const FormModal: React.FC = () => {
  const [modalState, { setModalState }] = useAtom(modalStateAtom)
  const close = useCallback(() => setModalState(undefined), [setModalState])
  const isOpen = useMemo(() => modalState === "form", [modalState])
  const [clicked, setClicked] = useState(false)
  const [isThankYou, setThankyou] = useState(false)
  return (
    <ContainerModal
      shouldCloseOnOverlayClick
      preventScroll
      onRequestClose={close}
      isOpen={isOpen}
    >
      <Formik
        initialValues={{ email: "", fullName: "", comment: "" }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => setThankyou(true)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          validateForm,
        }) => (
          <Container>
            <Title>Напишите нам!</Title>
            <CloseIcon name="close" onClick={close} />
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
              <ErrorLabel>
                {errors.fullName && [touched.fullName || clicked] &&
                  errors.fullName}
              </ErrorLabel>
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
              <ErrorLabel>
                {errors.email && [touched.email || clicked] && errors.email}
              </ErrorLabel>
              <StyledLabel>Что непонятно или нужно уточнить</StyledLabel>
              <StyledTextArea
                name="comment"
                id="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                placeholder="Введите ваше сообщение"
              />
              <ErrorLabel>
                {errors.comment && [touched.comment || clicked] &&
                  errors.comment}
              </ErrorLabel>
              <ExtraLabel>
                Отправляя данную форму, вы даете согласие на обработку своих{" "}
                <span style={{ color: BackgroundColor.Blue }}>
                  Персональных данных
                </span>
              </ExtraLabel>
              {isThankYou ? (
                <ThankYouLabel>Спасибо за обратную связь!</ThankYouLabel>
              ) : (
                <EmailButton
                  type="submit"
                  backgroundColor={BackgroundColor.Blue}
                  color={ButtonColor.white}
                  onClick={() => {
                    setClicked(true)
                    validateForm().then(() => {})
                  }}
                >
                  <Icon name="email" />
                  Отправить
                </EmailButton>
              )}
            </StyledForm>
          </Container>
        )}
      </Formik>
    </ContainerModal>
  )
}

export default FormModal
