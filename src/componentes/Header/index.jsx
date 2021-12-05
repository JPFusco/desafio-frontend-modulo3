import './style.scss';
import logo from '../../assets/logoDindin.svg';

export default function Header() {
    return (
        <header className="container-header">
            <div>
                <img src={logo} alt="Logo da Dindin" />
                <h1>Dindin</h1>
            </div>
        </header>
    )
}