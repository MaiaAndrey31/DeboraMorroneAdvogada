import { Container, ContainerLeft, ContainerRight } from './style'

import PersonalPhoto from '../../assets/personal.jpg'
export default function WhoSession() {
  return (
    <Container>
      <ContainerLeft>
        <h2>Compromisso com a Educação e os Direitos da Sua Família</h2>
        <p>
          Como mãe de três filhos, conheço de perto as dificuldades enfrentadas
          pelas famílias. Minhas experiências, inclusive como mãe de um jovem
          com TEA e de um adolescente vítima de violência escolar, me inspiraram
          a transformar desafios em ações concretas. Com especialização em
          Direito Educacional e Processo Civil, além de atuar como mediadora e
          perita judicial, meu objetivo é simplificar questões legais complexas,
          oferecendo soluções personalizadas que atendam às necessidades de cada
          família. Empatia, descrição e resultados são meus pilares. Vamos
          caminhar juntos para garantir os direitos educacionais de sua família.
        </p>
      </ContainerLeft>
      <ContainerRight>
        <div>
          <img src={PersonalPhoto} />
        </div>
      </ContainerRight>
    </Container>
  )
}
