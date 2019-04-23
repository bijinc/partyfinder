
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
    });
    let json = await response.json();
    return json;
}

export async function addEvent(event) {
    fetch('http://party-finder.me/app/host', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
    }).then(res => {
        //console.log(res);
    }).catch(err => {
        console.log(err);
    });
}

export async function updateProfile(user) {
    fetch('http://party-finder.me/app/edit-user/' + user.id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }).then(res => {
        //console.log(res);
    }).catch(err => {
        console.log(err);
    });
}