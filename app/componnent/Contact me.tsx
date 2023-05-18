import './contactMe.css'
import React from 'react';
import { BsWhatsapp } from 'react-icons/Bs';
import { AiOutlineMail } from 'react-icons/Ai';


const ContactMe = () => {

    return(
        <div className={'container'}>
            <form className={"contact-me"} action={''} >
                    <input type={"text"} placeholder={'שם מלא'} required={true} />
                    <input type={"tel"} placeholder={"טלפון"} required={true}/>
                     <input type={"email"} placeholder={"אימייל"} required={true}/>
                     <textarea placeholder={"כתבו לי "} required={true}/>
                <div>
                </div>
                <button>שלח</button>
            </form>
            <h2>צרו איתי קשר</h2>
            <div className={"social-media-contact"}>
                <div className={"contact-me-details"}>
                    <a href={"http://api.whatsapp.com/send?phone=+972526006313&" +
                        "text=היי%20לידור%20,ראיתי את האתר שלך אשמח לדבר איתך &source=&data="}>
                        זמינה גם בוואטסאפ : 052-1234-567
                    </a>
                    <BsWhatsapp size={20} className={"whatsapp-icon"}/>
                    <a href={"mailto:name@email.com"}>מוזמנים לכתוב לי : mail@mail.com</a>
                    <AiOutlineMail className={"email-icon"} size={20}/>
                </div>


            </div>

        </div>

    )
}

export default ContactMe;