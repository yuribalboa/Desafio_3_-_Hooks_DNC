import styles from './Blog.module.css'


function Blog(){
    return(
        <div className={styles.blog} id="Blog">
            
            <h4>Blog</h4>
            
            <div className={styles.cards}>
                
                <div className={styles.card}>
                    <h1>O que é desenvolvedor full stack, o que faz, salário, habilidades e muito mais!</h1>
                    <div className={styles.info}>
                        <h3>18 Ago 2022</h3>
                        <h3>Desenvolvedor Full Stack</h3>
                    </div>
                    <h2>Um desenvolvedor full stack é um desenvolvedor de software
                        que tem a habilidade e experiência necessárias para 
                        desenvolver uma aplicação do começo ao fim, 
                        do banco de dados à interface do usuário.</h2>
                    <p> 
                        <a href='https://www.totvs.com/blog/carreiras/desenvolvedor-full-stack/' target="_blank" rel="noopener noreferrer">
                            Leia mais!
                        </a></p>
                </div>
                
                <div className={styles.card}>
                    <h1>Aprenda a criar Designs no Figma</h1>
                    <div className={styles.info}>
                        <h3>25 Ago 2023</h3>
                        <h3>Figma, User Interface (UI)</h3>
                    </div>
                    <h2>O Figma é uma ferramenta de design de UI baseada em nuvem 
                        que permite aos designers criar, colaborar e prototipar designs incríveis. 
                        Com uma ampla gama de recursos e funcionalidades, o Figma se destaca como 
                        uma das principais opções para profissionais de design.</h2>
                    <p> 
                        <a href='https://awari.com.br/aprenda-a-criar-designs-incriveis-no-figma-guia-completo-para-iniciantes/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Aprenda%20A%20Criar%20Designs%20Incr%C3%ADveis%20No%20Figma:%20Guia%20Completo%20Para%20Iniciantes' target="_blank" rel="noopener noreferrer">
                            Leia mais!
                        </a></p>
                </div>
            </div>
        </div>
    )
}

export default Blog