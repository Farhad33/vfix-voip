'use client'
import React, { useRef, useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';
import styled from 'styled-components';
// import { Data } from '../common/Data';
import { Location, Phone, Email } from './Svg'

export default function Contact () {

const Data =  {   
    contact : {
        subject: 'Contact Us Today',
        p: `We are committed to our Partners’ success.Contact us today to start building your cloud business.`,
        buttonName: 'Submit',
        name: 'Name...',
        emailmassage: 'Email...',
        telephone: 'Telephone...', 
        company: 'Company...',
        message: 'Message...',
        sent: 'Your message has been sent.',
        err: 'Your message was not sent',
        address: 'Reinvent Telecom10190 E. McKellips Rd.Scottsdale, AZ 85256',
        addresslink: '',
        phone1: 'For new partner inquiries, please call or text us at 888.704.7346',
        phone1link: '888.704.7346',
        email: 'sales@reinventtelecom.com',
        phone2: 'Reseller Support/Customer Service:Toll Free: 855.455.7346',
        phone2link: '855.455.7346'
    },
}

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
    //   emailjs.sendForm('service_znsyjev', 'template_4f1qfpu', form.current, 'A6zWxwdubwFpZ1fy0')
    //     .then((result) => {
    //         form.current.name.value = '';
    //         form.current.email.value = '';
    //         form.current.message.value = '';            
    //         console.log(result.text);
    //         setMessage(Data.contact.sent);
    //     }, (error) => {
    //         console.log(error.text);
    //         setMessage(Data.contact.err);
    //     });
    };  

  return (
    <ContactContainer>
        <h1>{Data.contact.subject}</h1>
        <p>{Data.contact.p}</p>
        <Contactdiv>
            <Shadow />
            <Contactinfo>
                {/* <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/farsangi'><Linkedin fontSize="25px"/></a> */}

                <a href="">
                    <div>
                        <Location color='red' fontSize="25px"/>
                        <div>
                            <p>{Data.contact.address}</p>
                        </div> 
                    </div>
                </a>
                <a href="">
                    <div>
                        <Phone color='red' fontSize="25px"/>
                        <div>
                            <p>{Data.contact.phone1}</p>
                        </div> 
                    </div>
                </a>
                <a href="">
                    <div>
                        <Email color='red' fontSize="25px"/>
                        <div>
                            <p>{Data.contact.email}</p>
                        </div> 
                    </div>
                </a>
                <a href="">
                    <div>
                        <Phone color='red' fontSize="25px"/>
                        <div>
                            <p>{Data.contact.phone2}</p>
                        </div> 
                    </div>
                </a>

            
            </Contactinfo>        
            <FormContainer>
                <form ref={form} onSubmit={onSubmit}>
                    <h1>{Data.contact.subject}</h1>
                    <input type="text" name="name"  placeholder={Data.contact.name} required />
                    <input type="text" name="company"  placeholder={Data.contact.company} required />
                    <input type="email" name="email" placeholder={Data.contact.email} required/>      
                    <input type="text" name="telephone" placeholder={Data.contact.telephone} required/>      
                    <textarea name="message" placeholder={Data.contact.message} rows="10" cols="50"/>    
                    <input type="submit" value="Submit" />
                    {message && <Message err={message == 'Your message was not sent'}>{message}</Message>}
                </form>
            </FormContainer>
        </Contactdiv>

    </ContactContainer>
    
  );
};


const ContactContainer = styled.div`
    max-width: 100%; 
    min-height: 743px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    /* position: absolute; */


    /* background-color: ${({theme}) => theme.BC_Home}; */
    /* h1,h2{
        margin: 30px 0px;
        color: ${({theme}) => theme.Text_Logo};

    } */
    /* @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        padding: 100px 10%;
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 899px) {
        width: 100%;
        padding: 100px 10px;
    } */
`


const Contactdiv = styled.div`
    background-color: #4C4E51;
    display: flex;
`
const FormContainer = styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: center; */
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 500px;

        input[type=text], input[type=email], textarea {
            width: 400px;
            height: 30px;
            margin-bottom: 20px;

            font-size: 16px;
            color: ${({theme}) => theme.Text_Title};
            font-weight: 600;
            background-color: ${({theme}) => theme.BC_Home};
            border-radius: 5px;
            /* padding: 10px;
            margin: 15px 0px; */
        }
        textarea {
            height:120px;
        }

        input[type=submit] {
            width: 100px;
            height: 50px;
            font-size: 16px;
            background-color: ${({theme}) => theme.BC_Home};
            color: ${({theme}) => theme.Text_Title};
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            :hover {
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;            }
            :focus {
                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            }
        }
    }
`
const Contactinfo = styled.div`

`
const Shadow = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    left: -20.36%;
    right: 64.77%;
    top: 28.73%;
    bottom: -75.93%;
    background: radial-gradient(102.35% 88.67% at 69.13% 94.51%, #4C4E51 53.1%, #686868 77.6%, #000000 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-34.53deg);
`


const Message = styled.p`
    color: ${({err}) => err ? 'red' : 'green'};
    font-size: 18px;
    margin-top: 10px;
`