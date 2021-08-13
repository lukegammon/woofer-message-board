const form = document.querySelector("form");
const formName = document.querySelector("#form-name");
const formWoof = document.querySelector("#form-woof")
const formSubmit = document.querySelector("#form-submit");
const loadingGif = document.querySelector(".loading-gif");
const waitMsg = document.querySelector(".form-waitmsg");
const waitMsgTime = document.querySelector(".form-waitmsg-n");
const content = document.querySelector(".content__woofs");
const API_URL = 'http://localhost:3000/woofs';
console.log("linked")
form.addEventListener("submit", (event) => {
    console.log("hit")
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
const submitTimer = () => {
    let count = 0;
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
            woofContainerName.innerText = woof.name;
            const woofContainerWoof = document.createElement("p");
            woofContainerWoof.innerText = woof.woof;
            woofContainerWoof.classList.add("woof-container-body");
            const woofPostedDate = document.createElement("p");
            woofPostedDate.classList.add("woof-posted-date");
            woofPostedDate.innerText = new Date(woof.created);

            woofContainer.appendChild(woofContainerName);
            woofContainer.appendChild(woofContainerWoof);
            woofContainer.appendChild(woofPostedDate);
            content.appendChild(woofContainer);
            loadingGif.style.display = 'none';
        });
    })
    .catch(err => console.error(err));
}

getAllWoofs();
