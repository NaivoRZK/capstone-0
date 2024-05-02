import './App.css';
import confirm from '../image/confirm.png';

export default function ConfirmForm() {
    return (
        <>
            <div className='confirmationPage'>
                <h1>Your reservation has been successfully completed</h1>
                <img src={confirm} alt='picture for confirmation reservation' />
            </div>
            <p>Thank you for trusting us for dinner.</p>
            <p>please check your email..</p>
        </>
    )
}
