
export async function getEvents() {
    let response = await fetch('https://party-finder.me/app/events', {
        method: 'GET'
    });
    let json = await response.json();
    return json;
}