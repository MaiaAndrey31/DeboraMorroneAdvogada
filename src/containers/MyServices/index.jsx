import { Container } from './style'
import ServiceOne from '../../assets/homeschooling.jpg'
import ServiceTwo from '../../assets/School.jpg'
import Inclusion from '../../assets/Inclusao.jpg'
import Progress from '../../assets/Progress.jpg'
import Payments from '../../assets/Payments.jpg'

import ContentCard from '../../components/ContentCard'
import ContentCardReverse from '../../components/ContentCard copy'

export default function MyServices() {
  return (
    <Container id="services">
      <h1>Serviços</h1>
      <ContentCard
        title="Educação Domiciliar e Ensino Personalizado"
        image={ServiceOne} // Changed from array to string
        text="Se você acredita que seu filho precisa de um ensino personalizado e considera o ensino domiciliar como uma alternativa, posso ajudar a esclarecer as questões legais e orientar para que essa escolha seja feita com o planejamento adequado e segurança jurídica."
      />

      <ContentCardReverse
        title="Responsabilidade Civil Escolar"
        image={[ServiceTwo]}
        text="Se seu filho sofreu bullying, 
        negligência ou violência dentro da escola, 
        entendo a dor e a frustração que isso traz. 
        Essas situações causam marcas profundas, 
        mas é importante saber que existem leis que 
        podem proteger crianças e adolescentes 
        nesses casos, além da possibilidade de 
        buscar a devida reparação."
      />
      <ContentCard
        title="Inclusão e Acessibilidade"
        image={[Inclusion]}
        text="Como mãe de um jovem TEA, entendo a 
        importância de garantir um ambiente escolar 
        inclusivo e acessível. Meu trabalho é ajudar
         famílias a garantir que seus filhos tenham 
         os recursos e o suporte necessários para 
         desenvolver todo o seu potencial."
      />
      <ContentCardReverse
        title="Progressão e Avaliação Escolar"
        image={[Progress]}
        text="Seja em casos de retenção 
        injusta ou na possibilidade de avanço de 
        série para estudantes que se destacam por 
        esforço ou superdotação, meu papel é orientar 
        as famílias sobre os caminhos legais para 
        garantir que cada estudante tenha oportunidades 
        de acordo com seu potencial."
      />
      <ContentCard
        title="Direito do Consumidor no Âmbito Escolar"
        image={[Payments]}
        text=" Você já se sentiu tratado de forma 
        injusta por uma instituição de ensino? 
        Cobranças indevidas, contratos abusivos e 
        falta de transparência são situações comuns 
        e que necessitam de uma solução jurídica 
        adequada."
      />
    </Container>
  )
}
