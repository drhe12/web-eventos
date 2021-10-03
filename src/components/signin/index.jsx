import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./signinElements";

export const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">taquiYa</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Inicia Sesión</FormH1>
              <FormLabel htmlFor="for">Correo</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Ingresar</FormButton>
              <Text>Olvidaste tu contraseña?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
