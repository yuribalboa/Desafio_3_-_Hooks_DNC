import styles from './Projects.module.css'
import p1 from './elements/p1.jpg'
import p2 from './elements/p2.jpg'
import p3 from './elements/p3.jpg'

function Projects(){
    return(
<div className={styles.projects} id="Projects">
            
            <h1>Projetos</h1>
            
            <section>
                <img src={p1}></img>
                <div>
                    <a href='https://github.com/yuribalboa/Desafio_1-Desenvolvendo_Landing_Page_DNC' target="_blank" rel="noopener noreferrer">
                    Desenvolvimento de Landing Page</a>
                    <p>O projeto de desenvolvimento de landing pages foca em criar páginas de destino que não apenas atraem visualmente, 
                        mas também são otimizadas para converter visitantes em clientes. Utilizando técnicas de design para garantir que 
                        a experiência do usuário seja intuitiva e envolvente.</p>
                </div>
            </section>

            <section className={styles.retangle}></section>

            <section>
                <img src={p3}></img>
                <div>
                    <a href='https://github.com/yuribalboa/Desafio_2_-_Consumo_de_API_DNC' target="_blank" rel="noopener noreferrer">
                    Consumo de API</a>
                    <p>O projeto de consumo de API é voltado para a integração eficiente de APIs em diversos sistemas. 
                        A abordagem garante que a comunicação entre diferentes serviços seja segura e rápida, facilitando o fluxo de dados e a funcionalidade das aplicações. 
                        Trabalhando com APIs de diversos fornecedores e ajustando as integrações para atender às especificações e necessidades do projeto.</p>
                </div>
            </section>

            <section className={styles.retangle}></section>

            <section>
                <img src={p2}></img>
                <div>
                    <a href='https://github.com/yuribalboa/Portfolio_DNC' target="_blank" rel="noopener noreferrer">
                    Criação de Portfolio</a>
                    <p>O projeto de criação de portfólio visa ajudar profissionais a apresentarem suas habilidades e trabalhos de maneira clara e atrativa. 
                        Desenvolvendo um portfólio personalizado, que combinam design com uma estrutura fácil de navegar, permitindo que o usuário destaque suas 
                        conquistas e projetos de forma eficaz.</p>
                </div>            
            </section>

            <section className={styles.retangle}></section>

        </div>
    )
}

export default Projects