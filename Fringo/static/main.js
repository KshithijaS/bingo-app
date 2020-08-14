// NavBar alterations based on the page

function checkUrlStr(subStr) {
    return window.location.href.includes(subStr);
}


let secondNavBar = document.querySelector(".item-2");
let alink = secondNavBar.firstElementChild;
if(checkUrlStr("login") || checkUrlStr("signup")) {
    secondNavBar.removeChild(alink);
}
else if(checkUrlStr("choice") || checkUrlStr("invite")) {
    alink.setAttribute("href", "{% url 'profile.html' %}");
    alink.textContent = "Profile";
}
else if(checkUrlStr("myprofile")) {
    alink.setAttribute("href", "#");
    alink.textContent = "Logout";
}


// -----Invite Page-----

function createID() {
    document.getElementById("dropdown1").style.display = "block";
}

function enterID() {
    document.getElementById("dropdown2").style.display = "block";
}

// -----Profile Page-----

const tabItems = document.querySelectorAll('.tab-item');
const tabItemContent = document.querySelectorAll('.tab-content');

//Select tab content
function selectItem(e) {
    deselectTab();
    //Adding appearence to tabs
    this.classList.remove('deselected');
    this.classList.add('selected');

    //Tab content
    const selectedContent = document.getElementById(`${this.id}-content`);
    selectedContent.classList.add('show');
}

function deselectTab() {
    tabItems.forEach(item => item.classList.remove('selected'));
    tabItems.forEach(item => item.classList.add('deselected'));
    tabItemContent.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));


$(document).ready(function(){
    // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });
    });

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
            
        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}