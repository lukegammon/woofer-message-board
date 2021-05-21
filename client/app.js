const form = document.querySelector("form");
const formName = document.querySelector("#form-name");
const formWoof = document.querySelector("#form-woof")
const formSubmit = document.querySelector("#form-submit");
const loadingGif = document.querySelector(".loading-gif");
const waitMsg = document.querySelector(".form-waitmsg");
const waitMsgTime = document.querySelector(".form-waitmsg-n");
const content = document.querySelector(".content");
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
    if(woofData.name != "" && woofData.woof != "") {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(woofData),
            headers: {
                'content-type' : 'application/json'
            }
            })
            getAllWoofs();
            submitTimer();
            form.reset();
    }
});

// Timer to prevent user form resubmission
const submitTimer = () => {Luke
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

function getAllWoofs() {
    content.innerHTML = "";
    loadingGif.style.display = 'block';
    fetch(API_URL)
    .then(response => response.json())
    .then(woofs => {
        woofs.reverse().forEach(woof => {
            const woofContainer = document.createElement("div");
            woofContainer.classList.add("woof-container");
            const woofContainerName = document.createElement("h2");
            const woofContainerWoof = document.createElement("p");
            woofContainerWoof.classList.add("woof-container-body");
            const woofPostedDate = document.createElement("p");
            woofPostedDate.classList.add("woof-posted-date");

            woofContainerName.innerText = woof.name;
            woofContainerWoof.innerText = woof.woof;
            woofPostedDate.innerText = new Date(woof.created);
            woofContainer.appendChild(woofContainerName);
            woofContainer.appendChild(woofContainerWoof);
            woofContainer.appendChild(woofPostedDate);
            content.appendChild(woofContainer);
        });
    }).catch(err => console.error(err));
    loadingGif.style.display = 'none';
}

loadingGif.style.display = 'block';
getAllWoofs();
