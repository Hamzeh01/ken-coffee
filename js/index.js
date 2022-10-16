const burgerIcon = document.querySelector("#burger-menu");
const rightMenu = document.querySelector("#links-menu");

// add event listener
burgerIcon.addEventListener("click", () => {
    rightMenu.classList.toggle("is-active");
});

// add switch for tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll("#tab-content > div");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => {
            item.classList.remove("is-active");
        });
        tab.classList.add("is-active");
        const target = tab.dataset.target;

        tabContent.forEach(content => {
            if (content.getAttribute("id") === target) {
                content.classList.remove("is-hidden");
            } else {
                content.classList.add("is-hidden");
            }
            
        });
    });
    
});


// modal event listener

const modalButton = document.querySelector(".modal-close");
const signUpButton = document.querySelector("#sign-up");
const modal = document.querySelector("#popup-modal");

signUpButton.addEventListener("click", ()=>{

    modal.classList.add("is-active");
});

modalButton.addEventListener("click", ()=>{

    modal.classList.remove("is-active");
});