import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'
import Title from '../Components/Title'
import ContactForm from '../Components/ContactForm'
import {Helmet} from 'react-helmet'


function ContactPage() {
    return (
        <div>
            <Helmet>
                <title>CL Media | Contact</title>
                <meta 
                    name="description"
                    content="Send me a message"
                />
            </Helmet>
            <Title title={'Contact Me'}/>
            <div className="ContactPage">
                <ContactForm />
                <div>
                    <ContactItem icon={phone} text1={'315-775-8659'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'camilo.lopez@clmedia.dev'} title={'Email'}/>
                    <ContactItem icon={location} text1={'I Work Remote'} text2={'United States'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
