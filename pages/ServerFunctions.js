
export async function getEvents() {
    let response = await fetch('https://localhost:8080/events', {
        method: 'GET'
    });
    let json = await response.json();
    return json;
}