
import jeep  from '../../img/jeep.png';
import { Link } from 'react-router-dom';
import './home.css'
import Header from '../Header';

function Home() {
  return (
    <div className='container__home'>
      <Header/>
      <div className='container__home__text'>
        <p className='title__home'>Alugue um carro pela Easy Rent</p>
        <p className='text__home'>Na Easy Rent queremos te oferecer a melhor experiência automotiva possível.
        Desde a escolha do veículo que pretende, a nossa equipe de profissionais irá ajudá-lo a ter a melhor experiência possível. 
        <br/><br/>
        <Link className='link__text' to={'/models'}>Clique aqui e faça sua reserva!</Link></p>
      </div>
      <img src={jeep} className='img__home'/>
    </div>
  );
}

export default Home;


