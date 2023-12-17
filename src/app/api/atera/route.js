import { ateraAPI } from '@/lib/api'
import { NextResponse } from 'next/server'

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