import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm';

function ContactPage() {
    return (
        <div>
            <Title title={'Contact Me'}/>
            <div className="ContactPage">
                <ContactForm />
                <div>
                    <ContactItem icon={phone} text1={'906-396-5366'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'camilo.lopez@clmedia.dev'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Watertown, NY'} text2={'United States'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
