const form = document.querySelector("form");
const formName = document.querySelector("#form-name");
const formWoof = document.querySelector("#form-woof")
const formSubmit = document.querySelector("#form-submit");
const loadingGif = document.querySelector(".loading-gif");
const waitMsg = document.querySelector(".form-waitmsg");
const waitMsgTime = document.querySelector(".form-waitmsg-n");
const API_URL = 'http://localhost:3000/woofs';

form.addEventListener("submit", (event) => {
    // Prevent default form submit
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const woof = formData.get("woof");
    const woofData = {
        name,
        woof,
    };
    fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(woofData),
    headers: {
        'content-type' : 'application/json'
    }
    });
    submitTimer();
    loadingGif.style.display = 'block';
    form.reset();

});

// Timer to prevent user form resubmission
const submitTimer = () => {
    let count = 15;
    formSubmit.disabled = true;
    waitMsg.style.display = "block";
    waitMsgTime.textContent = count;
    // display resubmit countdown below form
    // allow form resubmit after 15 seconds
    const countdown = setInterval(() => {
        if(count === 0) {
            clearInterval(countdown);
            waitMsg.style.display = "none";
            formSubmit.disabled = false;
        }
        count--;
        waitMsgTime.textContent = count;
    }, 1000);
}
