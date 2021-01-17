import './styles.css';
import { ReactComponent as GitHubIcon } from './github.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://github.com/HenriqueGSena" target="_new">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/carloshenrique26/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://wwww.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;