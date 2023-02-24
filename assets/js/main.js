function hide() {
    let email = document.getElementById('email').value
    console.log(email);

    let hide = document.querySelector('.subscribe').classList;
    hide.add('hide');
    let show = document.querySelector('.subscribed').classList;
    show.remove('hide');
}

function show() {
    let show = document.querySelector('.subscribed').classList;
    show.add('hide');
    let hide = document.querySelector('.subscribe').classList;
    hide.remove('hide');
}