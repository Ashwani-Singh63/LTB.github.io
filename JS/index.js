// Nav-bar Manipulation

const toggle = ()=> {
    const toggleBtn = document.getElementById("toggle-btn");
    let allClasses = toggleBtn.classList;
    if(allClasses.contains('hidden')){
        toggleBtn.classList.remove("hidden");
    }else{
        toggleBtn.classList.add("hidden");
    }
}

function sendMessage () {

    alert( " Message Sent Successfully !");

}