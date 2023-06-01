'use client';

import {useState} from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactMe() {
    const [fullName , setFullName] = useState('')
    const [tel , setTel] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')


    const sendEmail = (e:any) => {

        const data: {} = {
            fullName: fullName,
            email: email,
            tel: tel,
            message: message
        }
        e.preventDefault()

        console.log(data)
        if (!fullName || !tel || !message || !email) {
            toast.error('אחד מהשדות לא מלאים או לא מולאו כראוי')
        } else {
            // @ts-ignore
            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, data, process.env.NEXT_PUBLIC_PUBLIC_KEY)
                .then((result) => {
                    toast.success("תודה , ניצור איתך קשר בהקדם ", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                }, (error) => {
                    console.log(error.text);
                });

        }
    };

    return (
        <div dir="rtl" className="w-11/12 mt-10 py-10 gap-8 bg-[#D9CBC6] rounded-t-2xl flex lg:flex-row max-lg:items-center flex-col-reverse justify-center">
            <ToastContainer/>
            <form className="flex flex-col lg:w-1/2 w-4/5 items-end gap-2" >
                <input className="h-10 px-2 rounded-lg w-full" type="text" placeholder='שם מלא' name={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <input className="h-10 px-2 rounded-lg w-full" type="tel" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" name={tel} placeholder="טלפון" onChange={(e) => setTel(e.target.value)} required />
                <input className="h-10 px-2 rounded-lg w-full" type="email" placeholder="אימייל" name={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea className="h-40 p-2 rounded-lg w-full" placeholder="כתבו לי..." name={message} onChange={(e)=> setMessage(e.target.value)} required />
                <button className="bg-[#7A7170] text-white text-lg rounded-lg hover:bg-[#5d5554] active:bg-[#9e9291] transition-all h-12 w-32" onClick={sendEmail} type="submit"  >שלח</button>
            </form>
            <div className="flex flex-col gap-4 max-lg:w-4/5">
                <p className="select-none text-3xl font-extrabold">צרו איתי קשר</p>
                <span className="select-none flex-wrap flex flex-row gap-1">
                    זמינה גם בוואטסאפ:
                    <a className="flex flex-row gap-2 items-center" href={"http://api.whatsapp.com/send?phone=+972526006313&" +
                        "text=היי%20לידור%20,ראיתי את האתר שלך אשמח לדבר" +
                        " איתך &source=&data="}> 050-6887-710
                        <svg className={'animate-trans-right'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg></a>
                </span>
                <span className="select-none flex-wrap flex flex-row gap-1">
                    מוזמנים לכתוב לי:
                    <a className="flex flex-row gap-2 items-center"> sefi0501@gmail.com<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg></a>
                </span>
            </div>
        </div>

    )
}