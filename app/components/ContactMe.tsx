'use client';

export default function ContactMe() {

    return (
        <div dir="rtl" className="w-11/12 mt-10 py-10 gap-8 bg-[#D9CBC6] rounded-t-2xl flex lg:flex-row max-lg:items-center flex-col-reverse justify-center">
            <form className="flex flex-col lg:w-1/2 w-4/5 items-end gap-2">
                <input className="h-10 px-2 rounded-lg w-full" type="text" placeholder='שם מלא' required />
                <input className="h-10 px-2 rounded-lg w-full" type="tel" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" placeholder="טלפון" required />
                <input className="h-10 px-2 rounded-lg w-full" type="email" placeholder="אימייל" required />
                <textarea className="h-40 p-2 rounded-lg w-full" placeholder="כתבו לי..." required />
                <button className="bg-[#7A7170] text-white text-lg rounded-lg hover:bg-[#5d5554] active:bg-[#9e9291] transition-all h-12 w-32" onClick={() => console.log('test')}>שלח</button>
            </form>
            <div className="flex flex-col gap-4 max-lg:w-4/5">
                <p className="select-none text-3xl font-extrabold">צרו איתי קשר</p>
                <span className="select-none flex-wrap flex flex-row gap-1">
                    זמינה גם בוואטסאפ:
                    <a className="flex flex-row gap-2 items-center" href={"http://api.whatsapp.com/send?phone=+972526006313&" +
                        "text=היי%20לידור%20,ראיתי את האתר שלך אשמח לדבר איתך &source=&data="}> 052-1234-567<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg></a>
                </span>
                <span className="select-none flex-wrap flex flex-row gap-1">
                    מוזמנים לכתוב לי:
                    <a className="flex flex-row gap-2 items-center" href={"mailto:email@example.com"}> mail@mail.com<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg></a>
                </span>
            </div>
        </div>

    )
}

