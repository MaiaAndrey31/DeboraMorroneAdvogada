/* eslint-disable react/no-unescaped-entities */
import { Container, ContainerLeft, ContainerRight } from './style'

import PersonalPhoto from '../../assets/personal.jpg'
import { Button } from '../../components/Button'
export default function WhoSession() {
  return (
    <Container id="about">
      <ContainerLeft>
        <h2> "Compromisso com a Educação e os Direitos da Sua Família"</h2>
        <p>
          Sou Débora Morrone , advogada especialista em direito educacional,
          civil, infância e adolescência. A motivação para atuar nessa área veio
          da minha própria vivência como mãe de três filhos, que enfrentaram
          diferentes desafios no ambiente escolar. Hoje, atendo famílias e
          instituições de ensino, buscando garantir que cada criança tenha
          acesso a um ambiente educacional mais seguro, inclusivo e respeitoso.
        </p>
      </ContainerLeft>
      <ContainerRight>
        <div>
          <img src={PersonalPhoto} />
        </div>
        <Button>Entre em Contato</Button>
      </ContainerRight>
    </Container>
  )
}
