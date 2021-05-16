const form = document.querySelector("form");
const formName = document.querySelector("#form-name");
const formWoof = document.querySelector("#form-woof")
const formSubmit = document.querySelector("#form-submit");
const loadingGif = document.querySelector(".loading-gif");
const waitMsg = document.querySelector(".form-waitmsg");
const waitMsgTime = document.querySelector(".form-waitmsg-n");

formSubmit.addEventListener("click", (event) => {
    // Prevent default form submit
    event.preventDefault();

    // grey out form for 15 seconds
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
    console.log(formName.value, formWoof.value);
    loadingGif.style.display = 'block';
    form.reset();
})
