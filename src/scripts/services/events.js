import { baseUrl, quantity } from "../variables.js";

// async function getEvents(userName) {
//     const response = await fetch(`${baseUrl}/${userName}/events`)
//     const events = await response.json()
//     return events.filter(elements => {return elements.type === 'PushEvent' || elements.type === 'CreateEvent'}).slice(0, quantity)
// }

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${quantity}`)
    return await response.json()
}

export {getEvents}