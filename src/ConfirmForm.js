import './App.css';
import confirm from './confirm.png'



export default function ConfirmForm() {
    return (
        <>
          <div className='confirmationPage'>
         
      
             <h1>Your reservation has been successfully completed</h1>
             <img  src={confirm} alt='picture for confirmation reservation'/>
             </div>

        
        </>

    )
}