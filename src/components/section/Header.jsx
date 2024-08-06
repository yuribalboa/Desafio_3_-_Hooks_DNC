import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <ul>
                <li><a href="#Projects">Projetos</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Footer">Contato</a></li>
            </ul>
        </div>
    )
}

export default Header