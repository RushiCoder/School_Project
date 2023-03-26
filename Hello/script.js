let btnBack = document.querySelector('div');

btnBack.addEventListener('click', () => {
    window.history.back();
})

let Submit = document.querySelector('button');
Submit.addEventListener('click', showMsg);

function showMsg() {
    alert("Your issue is successfully submitted");
}