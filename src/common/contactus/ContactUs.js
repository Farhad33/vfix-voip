'use client'
import React, { useRef, useState } from 'react'
import { Page } from '@/app/pagestyle'
import { ContactContainer, ContactFormContainer, ContactRightSide, ContactLeftSide, Shadow, Message, ContactTitle, ContactParagraph, ContentAddress, Address, ContentPhone, Phones, ContentMail, Emails, FormTitle } from './ContactUsStyle'
import { Data } from './ContactUsData'
import Typography from '../Typography'
import Image from "next/image"
import axios from 'axios'
import { Button } from '@/common/MainStyle'

export default function Contact() {
    const [message, setMessage] = useState(false)
    const form = useRef()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const contactPayload = {
            "Firstname": form.current.firstName.value,
            "Lastname": form.current.lastName.value,
            "Phone": form.current.phone.value,
            "Email" : form.current.email.value,
            "IsContactPerson": true,
            "Description": form.current.message.value,
            "TicketType": "Request",
            "TicketTitle": "Vfix MSP Website Request"
        }
        const contact = await axios.post('/api/atera', contactPayload);
        setMessage(true)
    }

    const handleInvalid = (event) => {
        event.target.setCustomValidity("Phone number must be 10 digits long.")
      };


    return (
        <Page id='contact-us'>
            <ContactContainer>
                <ContactTitle>
                    <Typography variant='h2'>
                        {Data.contact.subject}
                    </Typography>
                </ContactTitle>
                <ContactParagraph>
                    <Typography variant='body2'>
                        {Data.contact.p}
                    </Typography>
                </ContactParagraph>
                <ContactFormContainer>
                    <Shadow />
                    <ContactLeftSide>
                        <Image src={Data.contact.image} width={500} height={500} alt={Data.contact.contactALT} priority={false} />
                    </ContactLeftSide>
                    <ContactRightSide>
                        {message ? <Message>Your response has been sent. One of our representatives will contact you shortly.</Message> :
                            <form ref={form} onSubmit={handleOnSubmit}>
                                <FormTitle>
                                    <Typography variant='h4'>
                                        {Data.contact.subject}
                                    </Typography>
                                </FormTitle>
                                <input type="text" name="firstName" placeholder={Data.contact.firstName} required />
                                <input type="text" name="lastName" placeholder={Data.contact.lastName} required />
                                <input type="email" name="email" placeholder={Data.contact.email} required />
                                <input 
                                    type="text" 
                                    name="phone" 
                                    placeholder={Data.contact.phone} 
                                    required 
                                    pattern="[0-9]{10}"
                                    onInvalid={handleInvalid}
                                    maxLength={10}
                                />
                                <textarea name="message" placeholder={Data.contact.message} rows="10" cols="50" required></textarea>
                                <Button type="submit">Submit</Button>
                            </form>
                        }
                    </ContactRightSide>
                </ContactFormContainer>
            </ContactContainer>
        </Page>
    )
}