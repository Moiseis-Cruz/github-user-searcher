import { baseUrl, quantity } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${quantity}`)
    const eventos = await response.json()
    return eventos.filter(elemento => {return elemento.type === 'PushEvent' || elemento.type === 'CreateEvent'})
}

export {getEvents}