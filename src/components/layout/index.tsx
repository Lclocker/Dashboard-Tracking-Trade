import React from "react"
import { Container, ContentContainer } from "./styles";


export default function Layout({children}: {children: any}) {
  return (
    <>
      <Container>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
};