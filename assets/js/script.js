document.addEventListener("DOMContentLoaded",function(){
let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('.buttons span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.textContent === "=") {
            try {
                value.textContent = eval(value.textContent);
            } catch (error) {
                value.textContent= 'Error';
            }
        } else if (this.textContent === "Clear"){
                value.textContent = "";
        } else {
            value.textContent += this.textContent;
        }
    });
}
document.addEventListener("keypress",(e)=>{
    if(e.key=='Enter')
        value.textContent = eval(value.textContent);
})

toggleBtn.onclick = function () {
    body.classList.toggle('dark');
};
});
