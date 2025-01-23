import ReviewCard from '../../components/ReviewCard'
import { Container, Title, ReviewBox } from './style'

export default function Feedback() {
  return (
    <Container id="review">
      <Title>
        <h1>Depoimentos</h1>
      </Title>

      <ReviewBox>
        <ReviewCard
          className="card"
          person="Katyuscia Silva"
          score="⭐⭐⭐⭐⭐"
          review="A Dra. Debora é uma profissional excelente. O atendimento é personalizado, ela tem olhar completamente técnico ao mesmo tempo é completamente humanizado e a gente se sente em uma conversa amigável. Ela transmite confiança porque busca compreender os detalhes antes de começar a orientar. É uma profissional muito acima da média, não visa apenas a orientação jurídica, mas tem todo o cuidado com quem está sendo atendido. Eu e minha família ficamos completamente satisfeitos com o atendimento da Dra. Debora, recomendo com toda certeza."
        />
        <ReviewCard
          className="card"
          person="Reginaldo Campos"
          score="⭐⭐⭐⭐⭐"
          review="No momento que precisei ser 
          representado por um advogado, 
          tive problemas com o primeiro ao qual 
          contratei, fui obrigado a dispensar este 
          advogado por negligência e após isso 
          conheci a Dra Débora que abraçou minha 
          causa dando continuidade a ação que foi 
          movida contra mim, o processo já estava 
          em andamento e com muitos vícios e com 
          muitos prejuízos desnecessários contra 
          mim devido a negligência do outro 
          profissional, e com muito empenho, 
          profissionalismo e dedicação a Dra Débora 
          não mediu esforços para que a causa 
          pudesse andar verdade e sem prejuízo para 
          ambos os lados.
          Sou muito grato à Dra Débora pelo 
          grande feito dela para comigo."
        />
        <ReviewCard
          className="card"
          person="Simone Cristina Mukoyama (ashulla)"
          score="⭐⭐⭐⭐⭐"
          review="Minha opinião,pode confiar estou 
          com a Dr. Débora a pouco tempo e no meu 
          caso qualquer problema ou dificuldade eu 
          pergunto pra ela.
          Ela é uma excelente profissional,ela me 
          orienta e me ensina algumas coisas, sou 
          leiga a muitas coisas e se não fosse ela, 
          eu não saberia como agir,como enfrentar 
          adequadamente. As vezes tenho pena dela 
          por eu ser tão leiga.rss Ela me ensina 
          como agir em certas situações,e como se 
          eu estivesse aprendendo tudo de novo,ser 
          brasileiro é muito difícil e complicado 
          mais ainda bem que temos pessoas como 
          ela uma advogada maravilhosa ou 
          extraordinária essa é a palavra que 
          encontrei para descrever."
        />
        <ReviewCard
          className="card"
          person="Wagner Silva"
          score="⭐⭐⭐⭐⭐"
          review="Recebi uma indicação para realizar 
          uma consulta com a Advogada Débora Morrone
           e não poderia ter feito coisa melhor.
           O trabalho realizado foi excelente e não 
           me deixou dúvidas sobre seguir em uma 
           negociação ou não. Trabalho rápido, 
           claro, de qualidade e confiança."
        />
      </ReviewBox>
    </Container>
  )
}
