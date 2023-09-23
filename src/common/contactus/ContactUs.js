'use client'
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Page } from '@/app/pagestyle';
import {ContactContainer, ContactFormContainer, ContactRightSide, ContactLeftSide, Shadow, Message, ContactTitle, ContactParagraph, ContentAddress, Address, ContentPhone, Phones, ContentMail, Emails, FormTitle} from './ContactUsStyle'
import { Data } from './ContactUsData';
import Typography from '../Typography';
import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";


export default function Contact () {

  const form = useRef();
  
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);


  function onSubmit(e){
      e.preventDefault();
      emailjs.sendForm('service_znsyjev', 'template_4f1qfpu', form.current, 'A6zWxwdubwFpZ1fy0')
        .then((result) => {
            form.current.name.value = '';
            form.current.email.value = '';
            form.current.message.value = '';            
            console.log(result.text);
            setMessage(Data.contact.sent);
        }, (error) => {
            console.log(error.text);
            setMessage(Data.contact.err);
        });
    };  


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
                    <ContentAddress>
                        <FaLocationDot size={40} />
                        <Address>
                            <Typography variant='body2'>
                                {Data.contact.address}
                            </Typography>
                        </Address>
                    </ContentAddress>
                    <ContentPhone>
                        <BsTelephone size={40} />
                        <Phones>
                            <Typography variant='body2'>
                                {Data.contact.phone1}
                            </Typography>
                        </Phones>
                    </ContentPhone>
                    <ContentMail>
                        <FaRegEnvelope size={35} />
                        <Emails>
                            <Typography variant='body2'>
                                {Data.contact.email}
                            </Typography>
                        </Emails>
                    </ContentMail>
                    <ContentPhone>
                        <BsTelephone size={40} />
                        <Phones>
                            <Typography variant='body2'>
                                {Data.contact.phone2}
                            </Typography>
                        </Phones>
                    </ContentPhone>
                </ContactLeftSide>        
                <ContactRightSide>
                    <form ref={form} onSubmit={onSubmit}>
                        <FormTitle>
                            <Typography variant='h4'>
                                {Data.contact.subject}
                            </Typography>
                        </FormTitle>
                        <input type="text" name="name"  placeholder={Data.contact.name} required />
                        <input type="text" name="company"  placeholder={Data.contact.company} required />
                        <input type="email" name="email" placeholder={Data.contact.emailmassage}
                         required/>      
                        <input type="text" name="telephone" placeholder={Data.contact.telephone} required/>      
                        <textarea name="message" placeholder={Data.contact.message} rows="10" cols="50"/>    
                        <input type="submit" value="Submit" />
                        {message && <Message err={message == 'Your message was not sent' || message== 'Meldingen din ble ikke sendt'}>{message}</Message>}
                    </form>
                </ContactRightSide>
            </ContactFormContainer>
        </ContactContainer>
    </Page>
  );
};


