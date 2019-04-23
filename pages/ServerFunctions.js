
// export async function getEvents() {
//     let response = await fetch('http://party-finder.me/app/events', {
//         method: 'GET'
//     }).then(data => {
//         return data.json();
//     });
// }

export async function getEvents() {
    let response = await fetch('http://party-finder.me/app/events', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
    });
    let json = await response.json();
    return json;
}