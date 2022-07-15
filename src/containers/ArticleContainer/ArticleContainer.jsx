import React from 'react'
import ContainerSection from './section/ContainerSection'
import Aside from './aside/Aside'
import { Container } from './Article_container.style'

const ArticleContainer = () => {
  return (
    <Container>
      <ContainerSection/>
      <Aside/>
    </Container>
  )
}

export default ArticleContainer