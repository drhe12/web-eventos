import React from "react";
import { TiTicket } from "react-icons/ti";

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
          <Icon to="/">
            <TiTicket
              size={35}
              style={{
                marginRight: 5,
                color: "#fff",
              }}
            />
            taquiYa
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Iniciar Sesión</FormH1>
              <FormLabel htmlFor="for">Correo</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Ingresar</FormButton>
              <Text>¿Olvidaste tu contraseña?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
