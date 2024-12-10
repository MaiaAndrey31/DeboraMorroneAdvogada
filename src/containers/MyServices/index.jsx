import {
  Container,
  ContentContainer,
  ContentContainerReverse,
  ImageContainer,
  ImageContainerReverse,
  TextContainer,
  TextContainerReverse
} from './style'
import ServiceOne from '../../assets/homeschooling.jpg'
import ServiceTwo from '../../assets/School.jpg'
import Inclusion from '../../assets/Inclusao.jpg'
import Progress from '../../assets/Progress.jpg'
import Payments from '../../assets/Payments.jpg'
import LocaleSchool from '../../assets/Vagas.jpg'

import { Button } from '../../components/Button'

export default function MyServices() {
  return (
    <Container>
      <h1>Serviços</h1>
      <ContentContainer>
        <ImageContainer>
          <h5>Assessoria Jurídica em Ensino Domiciliar</h5>
          <img src={ServiceOne} alt="" />
        </ImageContainer>

        <TextContainer>
          <p>
            Eu me dedico a construir confiança e oferecer segurança jurídica às
            famílias que escolhem o ensino domiciliar. Estou aqui para orientar
            sobre as legislações vigentes e, se necessário, defender seus
            direitos em processos judiciais, garantindo que essa escolha seja
            respeitada e amparada pela lei.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainer>
      </ContentContainer>

      <ContentContainerReverse>
        <TextContainerReverse>
          <p>
            Proteger a dignidade e a segurança dos estudantes, lutando por
            justiça em casos de negligência escolar. Quando o bullying, a
            violência ou o assédio ameaçam o ambiente educacional, meu
            compromisso é estar ao lado das famílias, garantindo que esses
            jovens sejam ouvidos e protegidos.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainerReverse>
        <ImageContainerReverse>
          <h5>Responsabilidade Civil da Escola</h5>
          <img src={ServiceTwo} alt="" />
        </ImageContainerReverse>
      </ContentContainerReverse>

      <ContentContainer>
        <ImageContainer>
          <h5>Inclusão e Acessibilidade</h5>
          <img src={Inclusion} alt="" />
        </ImageContainer>

        <TextContainer>
          <p>
            Inspirado pela minha vivência com TEA, meu objetivo é transformar a
            educação em um espaço verdadeiramente inclusivo, onde cada aluno com
            deficiência possa alcançar seu potencial máximo. Acreditando no
            poder da inclusão, quero ajudar a construir um futuro mais
            acessível.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainer>
      </ContentContainer>

      <ContentContainerReverse>
        <TextContainerReverse>
          <p>
            A educação do seu filho merece ser tratada com respeito e justiça.
            Se ele foi retido sem justificativa legal, submetido a critérios de
            avaliação inadequados, ou está impedido de prosseguir apesar de um
            alto desempenho, estou aqui para ajudar.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainerReverse>
        <ImageContainerReverse>
          <h5>Progressão e Avaliação Escolar</h5>
          <img src={Progress} alt="" />
        </ImageContainerReverse>
      </ContentContainerReverse>

      <ContentContainer>
        <ImageContainer>
          <h5>Direito do Consumidor no Ambiente Escolar</h5>
          <img src={Payments} alt="" />
        </ImageContainer>

        <TextContainer>
          <p>
            Meu propósito é proteger famílias de práticas abusivas, como
            cobranças indevidas e cláusulas contratuais injustas. Meu
            compromisso é assegurar que seus direitos sejam respeitados,
            oferecendo apoio e orientação para que ninguém enfrente essas
            situações sozinho.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainer>
      </ContentContainer>
      <ContentContainerReverse>
        <TextContainerReverse>
          <p>
            Dedico-me a garantir que cada criança tenha acesso ao seu lugar de
            direito em creches e escolas públicas, honrando o compromisso com a
            educação como um direito constitucional. Cada vaga conquistada é um
            passo para um futuro mais justo e cheio de possibilidades para todas
            as crianças.
          </p>
          <Button>Enviar Mensagem</Button>
        </TextContainerReverse>
        <ImageContainerReverse>
          <h5>Busca de Vagas em Creches e Escolas Públicas</h5>
          <img src={LocaleSchool} alt="" />
        </ImageContainerReverse>
      </ContentContainerReverse>
    </Container>
  )
}
