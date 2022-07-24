
import './models.css';
import Header from '../Header';
import mobi from '../../img/cars/mobi.png';
import argo from '../../img/cars/argo.png';
import onix from '../../img/cars/onix.png';
import polo from '../../img/cars/polo.png';
import versa from '../../img/cars/versa.png';
import civic from '../../img/cars/civic.png';
import corolla from '../../img/cars/corolla.png';
import s10 from '../../img/cars/s10.png';



function Models() {
  return (

    
    <div className='car__models'>
      <Header/>
      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={mobi}/>
            <p>Fiat mobi</p>
            <input type='text' placeholder='Nome' name='name' required/>
            <input type='email' placeholder='Email' name='email' required/>
            <input type='date' name='date' required/>
            <button type='submit'>Enviar</button>
        </div>
      </form>
      
      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={argo}/>
          <p>Fiat Argo</p>
          <input type='text' placeholder='Nome' name='name' required/>
          <input type='email' placeholder='email'name='email' required/>
          <input type='date' name='date' required/>
          <button type='submit'>Enviar</button>
        </div>
      </form>

      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={onix}/>
          <p>Chevrolet Onix</p>
          <input type='text' placeholder='Nome' name='name' required/>
          <input type='email' placeholder='Email' name='email' required/>
          <input type='date' name='date' required/>
          <button type='submit'>Enviar</button>
        </div>
      </form>


      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
          <div className='car'>
            <img className='car__model' src={polo}/>
            <p>VolksWagen Polo</p>
            <input type='text' placeholder='Nome' name='name' required/>
            <input type='email' placeholder='Email' name='email' required/>
            <input type='date'name='date' required/>
            <button type='submit'>Enviar</button>
          </div>
      </form>


      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={versa}/>
          <p>Nissan Versa</p>
          <input type='text' placeholder='Nome' name='name' required/>
          <input type='email' placeholder='Email' name='email' required/>
          <input type='date' name='date' required/>
          <button type='submit'>Enviar</button>
        </div>
      </form>


      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={civic}/>
          <p>Honda Civic</p>
          <input type='text' placeholder='Nome' name='name' required/>
          <input type='email' placeholder='Email' name='email' required/>
          <input type='date' name='date' required/>
          <button type='submit'>Enviar</button>
        </div>
      </form>

      <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
      <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
      <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
        <div className='car'>
          <img className='car__model' src={corolla}/>
          <p>Toyota Corolla</p>
          <input type='text' placeholder='Nome' name='name' required/>
          <input type='email' placeholder='Email' name='email' required/>
          <input type='date' name='date' required/>
          <button type='submit'>Enviar</button>
        </div>
      </form>
        

        <form action='https://formsubmit.co/aguimar-junior@outlook.com' method='POST'>
        <input type="hidden" name="_autoresponse" value="Você fez uma reserva conosco, estamos aguardando sua visita!"/>
        <input type="hidden" name="_next" value='http://localhost:3000/models/thanks'/>
          <div className='car'>
            <img className='car__model' src={s10}/>
            <p>Chevrolet S-10</p>
            <input type='text' placeholder='Nome' name='name' required/>
            <input type='email' placeholder='Email' name='email' required/>
            <input type='date' name='date' required/>
            <button type='submit'>Enviar</button>
          </div>
        </form>
    

        </div>

  
  );
  
}

export default Models;
