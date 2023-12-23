import axios from 'axios'
import { NextResponse } from 'next/server'

export const ateraAPI = axios.create({
    baseURL: 'https://app.atera.com/api/v3',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '574885c4c38244d9875ec811ff469da4'
    }
})

export async function POST(request) {
    let EndUserID;
    const body = await request.json()
    const { Firstname, Lastname, Email, Phone, IsContactPerson } = body;
    const { Description, TicketType, TicketTitle } = body
    const contactInquery = await ateraAPI.get(`/contacts?searchOptions.email=${Email}`)
    if(contactInquery.data.items.length > 0) {
        EndUserID = contactInquery.data.items[0].EndUserID
    } else {
        const contactPayload = { Firstname, Lastname, Email, Phone, IsContactPerson }
        const contactResponse = await ateraAPI.post('/contacts', contactPayload)
        EndUserID = contactResponse.data.ActionID
    }
    const ticketPayload = { Description, TicketType, TicketTitle, EndUserID }
    const ticketResponse = await ateraAPI.post('/tickets', ticketPayload)
    return NextResponse.json({data: ticketResponse.data}, {status: 200})
}