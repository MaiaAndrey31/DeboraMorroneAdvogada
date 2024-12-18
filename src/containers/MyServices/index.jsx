import {
  Container,
  
  
} from './style'
import ServiceOne from '../../assets/homeschooling.jpg'
import ServiceTwo from '../../assets/School.jpg'
import Inclusion from '../../assets/Inclusao.jpg'
import Progress from '../../assets/Progress.jpg'
import Payments from '../../assets/Payments.jpg'
import LocaleSchool from '../../assets/Vagas.jpg'


import ContentCard from '../../components/ContentCard'
import ContentCardReverse from '../../components/ContentCard copy'
import { FlipTextDemo } from '../../components/FlipText'

export default function MyServices() {
  return (
    <Container>
      <FlipTextDemo text='Serviços' />
      <ContentCard
        title="Assessoria Jurídica em Ensino Domiciliar"
        image={[ServiceOne]}
        text="Eu me dedico a construir confiança e oferecer segurança jurídica às
            famílias que escolhem o ensino domiciliar. Estou aqui para orientar
            sobre as legislações vigentes e, se necessário, defender seus
            direitos em processos judiciais, garantindo que essa escolha seja
            respeitada e amparada pela lei."
      />

      <ContentCardReverse
        title="Responsabilidade Civil da Escola"
        image={[ServiceTwo]}
        text="Proteger a dignidade e a segurança dos estudantes, lutando por
            justiça em casos de negligência escolar. Quando o bullying, a
            violência ou o assédio ameaçam o ambiente educacional, meu
            compromisso é estar ao lado das famílias, garantindo que esses
            jovens sejam ouvidos e protegidos."
      />
      <ContentCard
        title="Inclusão e Acessibilidade"
        image={[Inclusion]}
        text="Inspirado pela minha vivência com TEA, meu objetivo é transformar a
            educação em um espaço verdadeiramente inclusivo, onde cada aluno com
            deficiência possa alcançar seu potencial máximo. Acreditando no
            poder da inclusão, quero ajudar a construir um futuro mais
            acessível."
      />
      <ContentCardReverse
        title="Progressão e Avaliação Escolar"
        image={[Progress]}
        text="A educação do seu filho merece ser tratada com respeito e justiça.
            Se ele foi retido sem justificativa legal, submetido a critérios de
            avaliação inadequados, ou está impedido de prosseguir apesar de um
            alto desempenho, estou aqui para ajudar."
      />
      <ContentCard
        title="Direito do Consumidor no Ambiente Escolar"
        image={[Payments]}
        text=" Meu propósito é proteger famílias de práticas abusivas, como
            cobranças indevidas e cláusulas contratuais injustas. Meu
            compromisso é assegurar que seus direitos sejam respeitados,
            oferecendo apoio e orientação para que ninguém enfrente essas
            situações sozinho."
      />    
      <ContentCardReverse
        title="Busca de Vagas em Creches e Escolas Públicas"
        image={[LocaleSchool]}
        text="Dedico-me a garantir que cada criança tenha acesso ao seu lugar de
            direito em creches e escolas públicas, honrando o compromisso com a
            educação como um direito constitucional. Cada vaga conquistada é um
            passo para um futuro mais justo e cheio de possibilidades para todas
            as crianças."
      />

        
      
      
    </Container>
  )
}
