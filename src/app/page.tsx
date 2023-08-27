import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header'
import Mockup from '../media/img/book1.png'
import Mockup2 from '../media/img/Mockup2.jpg'
import Daiane from '../media/img/Daiane.jpeg'
import ResponsiveCarousel from '@/components/carousel'

import Image1 from '../media/socialproof/1.png';
import Image2 from '../media/socialproof/2.png';
import Image3 from '../media/socialproof/3.png';
import Image4 from '../media/socialproof/4.png';
const images = [Image1, Image2, Image3, Image4];

import E1 from '../media/examples/1.jpg'
import E2 from '../media/examples/4.jpg'
import E3 from '../media/examples/7.jpg'
import E4 from '../media/examples/8.jpg'
const examples = [E1, E2, E3, E4];



export default function Home() {
  return (
    <main className={styles.main}>

      <Header/>

      <div className={styles.container1}>
        <div className={styles.divImg}>
          <Image
            src={Mockup}
            alt='Mockup'
            fill
            sizes='(max-width: 700px) 100vw, 700px'
            priority
            className={styles.Img}
          /> 
        </div>
        <div className={styles.divText}>
          <h1>DESVENDANDO O SEGREDO: DOMINE O LASH LIFTING PARA RESULTADOS NATURAIS E LUCRATIVOS!</h1>
          <p>TRANSFORME OLHARES COM FACILIDADE! DESCUBRA AS TÉCNICAS EXCLUSIVAS DO LASH LIFTING PRO PARA CÍLIOS NATURALMENTE IRRESISTÍVEIS E LUCRATIVOS. ADQUIRA AGORA EM UMA OFERTA ESPECIAL POR TEMPO LIMITADO</p>
          <a href='#' className={styles.Link}>COMPRE AGORA</a>
          <span>De <span className={styles.price}>R$97,00</span> por apenas <span className={styles.priceDiscount}>R$37,00</span> ou 8x de R$5,27</span>
        </div>
      </div>

      <div className={styles.container2}>
        <h2>Leitores amaram este livro!</h2>
        <ResponsiveCarousel images={images}/>
        <span>Experimente você também</span>
        <a href='#' className={styles.Link}>COMPRE AGORA</a>
      </div>

      <div className={styles.container3}>
        <h3>Acesso Vitalício! <p>Você terá direito a todas as atualizações sem investir nada a mais por isso!</p></h3>
        <div className={styles.separator}></div>
        <p>Já imaginou dominar o Lash Lifting com confiança?</p>
        <span>Se você é iniciante e não possui experiência na técnica ou se você já fez cursos mas não está satisfeita com seus resultados, esse livro vai desbloquear todo seu potencial!</span>
        <ResponsiveCarousel images={examples}/>
        <a href='#' className={styles.Link}>COMPRE AGORA</a>
      </div>

      <div className={styles.container4}>
        <h4>O que você irá aprender</h4>
        <div className={styles.inner}>        
          <ul>
            <li>O segredo por trás do Lash Lifting</li>
            <li>A Tricologia dos cílios</li>
            <li>Identifique e repare diferentes tipos de danos</li>
            <li>Siga um passo a passo detalhado para um Lash Lifting impecável</li>
            <li>E muito mais...</li>
          </ul>
          <div className={styles.divImg}>
            <Image
              src={Mockup2}
              alt='Mockup'
              fill
              sizes='(max-width: 500px) 100vw, 500px'
              priority
              className={styles.Img}
            />
          </div>
        </div>
      </div>

      <div className={styles.container5}>
        <h5>Receba de bônus uma consultoria online de 30 minutos para tirar todas as suas dúvidas</h5>
      </div>

      <div className={styles.container6}>
        <h6>Conheça a sua mentora</h6>
        <div className={styles.inner}>
          <div className={styles.divImg}>        
            <Image
              src={Daiane}
              alt='Daiane'
              sizes='(max-width: 400px) 100vw, 400px'
              priority
              className={styles.ImgD}
            />
          </div>
          <div className={styles.text}>
            <p>Formada em administração, trabalhei na área por alguns anos, mas a estética ganhou meu coração e o que antes era só um hobby aos poucos foi se tornando a minha profissão.</p>
            <p>Sou apaixonada pela área da beleza e trabalho nesse ramo há 12 anos. Hoje possuo minha clínica e sou professora e mentora de diversas profissionais.</p>
            <p>Me tornei referência em entregar resultados com naturalidade pois sempre acreditei que o mais importante é ressaltar a beleza sem perder a essência e autenticidade de cada pessoa.</p>
            <p>Minha maior missão agora é ajudar VOCÊ a conquistar o sucesso nessa profissão. Vamos juntas nessa jornada!</p>
            <p className={styles.insta}>@daiane.heringer</p>
          </div>
        </div>

      </div>

      <div className={styles.container7}>
        <p>Dúvidas Frequentes</p>
        <div>
          <p>Vou receber algum produto físico na minha casa?</p>
          <span>Não. Todo o conteúdo do treinamento é 100% online. Assim que realizar a sua inscrição, você receberá seu Livro Digital e agendaremos nossa consultoria para tirar suas dúvidas.</span>
          <p>Quais são os métodos de pagamento?</p>
          <span>Você pode pagar via cartão de crédito e parcelar em até 8x. Caso opte por realizar o pagamento à vista, pode fazer via PIX ou Boleto. Ao realizar o pagamento via cartão de crédito e PIX você recebe o acesso ao Livro imediatamente. Ao realizar via boleto, você recebe o acesso assim que o boleto for compensado, o que acontece, geralmente de 1 a 3 dias úteis após o pagamento.</span>
          <p>Terei suporte?</p>
          <span>Sim. Você terá acesso ao WhatsApp da mentora.</span>
          <p>Como irá funcionar a consultoria?</p>
          <span>A consultoria de 30 minutos em lash lifting é uma oportunidade exclusiva de receber orientações personalizadas e tirar suas dúvidas com a mentora. Durante a sessão, discutiremos suas necessidades específicas, analisaremos seus desafios e forneceremos soluções práticas e eficazes para aprimorar suas habilidades. Para fazer o agendamento da consultoria, procure o suporte!</span>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <p>Daiane Heringer © Todos Direitos Reservados</p>
          <p>Cnpj: 45.377.255/0001-06</p>
          <div>
            {/* <Image
              src={Logo}
              alt='Email'
              fill
              sizes='(max-width: 66px) 100vw, 60px'
              priority
            /> */}
            <p>contato@daianeheringer.com.br</p>
          </div>
          <div>
            {/* <Image
              src={Logo}
              alt='WhatsApp'
              fill
              sizes='(max-width: 66px) 100vw, 60px'
              priority
            /> */}
            <p>(33)9-8400-6955</p>
          </div>
        </div>
        <div>
          <p>Desenvolvido por GlowUp!</p>
        </div>
      </footer>
    </main>
  )
}
