import { Link } from 'react-router-dom';
import './thanks.css'

const Thanks = () =>{
    return(
        <div className='conteiner'>
            <div className='container__thanks'>
                <h1>Recebemos suas informações e estamos te aguardando!</h1>
                <br/>
                <h1>Obrigado!</h1>
                <Link to='/'>Volte para o nosso site!</Link>
            </div>
        </div>
    )
}

export default Thanks;