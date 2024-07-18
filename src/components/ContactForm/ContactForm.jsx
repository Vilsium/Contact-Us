import Button from '../Button/Button'
import style from './ContactForm.module.css'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'
import image from '/images/Service 24_7-pana 1.svg'

const ContactForm = () => {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [text, setText] = useState(" ");
    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

    return (
        <section className={style.container}>
        <div className={style.contactForm}>
            <div className={style.topBtn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
            <form action="" onSubmit={onSubmit}>
                <div className={style.formControl}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className={style.formControl}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className={style.formControl}>
                    <label htmlFor="text">Text</label>
                    <textarea name='text' rows="8" />
                </div>
                <div style={{ 
                    display: "flex",
                    justifyContent: "end",
                }}>
                    <Button text="SUBMIT" />
                </div>
                <div>
                    {"Name : " + name} <br />
                    {"Email : " + email} <br />
                    {"Text : " + text}
                </div>
            </form>
        </div>
        <div className={style.contactImg}>
            <img src={image} alt="contact image" />
        </div>
        </section>
    )
}

export default ContactForm
