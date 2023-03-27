const name = document.getElementById('n1');
const email = document.getElementById('em1');
const submit = document.getElementById('submit');
const m = document.getElementById('message');

submit.addEventListener('click', (e) => {
e.preventDefault();
if (document.getElementById('n1').value === ''|| email.value===''){
    
    m.classList.add('error');
    m.innerHTML = 'Type Text !';
    
    setTimeout(() =>
    { m.innerHTML=''
    
    m.removeAttribute('class')}
    , 1000);
}
else{
    let userList = document.getElementById('user');
    let listEle = document.createElement('li');
    listEle.appendChild(document.createTextNode(`${document.getElementById('n1').value}-${email.value}`));
    userList.appendChild(listEle);


}
})
