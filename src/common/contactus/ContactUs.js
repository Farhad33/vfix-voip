'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Page } from '@/app/pagestyle'
import { ContactContainer, ContactFormContainer, ContactRightSide, ContactLeftSide, Shadow, Message, ContactTitle, ContactParagraph, ContentAddress, Address, ContentPhone, Phones, ContentMail, Emails, FormTitle } from './ContactUsStyle'
import { Data } from './ContactUsData'
import Typography from '../Typography'
import Image from "next/image"
import axios from 'axios'

export default function Contact() {

    const form = useRef()

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('')
            }, 4000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [message])


    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const contactPayload = {
            "Firstname": form.current.firstName.value,
            "Lastname": form.current.lastName.value,
            "Phone": form.current.phone.value,
            "Email" : form.current.email.value,
            "IsContactPerson": true
        }
        console.log('contactPayload => ', contactPayload);
        // const contact = await ateraAPI.post('/contacts', contactPayload)
        const contact = await axios.post('/api/atera', contactPayload);
        console.log('front contact => ', contact)
    }


    return (
        <Page>
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
                        <Image src={Data.contact.image} width={500} height={500} alt={Data.contact.contactALT} />
                    </ContactLeftSide>
                    <ContactRightSide>
                        <form ref={form} onSubmit={handleOnSubmit}>
                            <FormTitle>
                                <Typography variant='h4'>
                                    {Data.contact.subject}
                                </Typography>
                            </FormTitle>
                            <input type="text" name="firstName" placeholder={Data.contact.firstName} required />
                            <input type="text" name="lastName" placeholder={Data.contact.lastName} required />
                            <input type="email" name="email" placeholder={Data.contact.email} required />
                            <input type="text" name="phone" placeholder={Data.contact.phone} required />
                            <textarea name="message" placeholder={Data.contact.message} rows="10" cols="50" />
                            <input type="submit" name="button" />
                            {message && <Message err={message == 'Your message was not sent' || message == 'Meldingen din ble ikke sendt'}>{message}</Message>}
                        </form>
                    </ContactRightSide>
                </ContactFormContainer>
            </ContactContainer>
        </Page>
    )
}