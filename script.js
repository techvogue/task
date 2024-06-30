
document.getElementById('signInButton').addEventListener('click', function() {
    const profilePic = document.getElementById('profilepic');
    const signup = document.getElementById('signup');
    const recommended= document.getElementById('rec')
    recommended.classList.remove('d-none')
    recommended.classList.add('d-block')
 
   
    profilePic.classList.remove('d-none');
    profilePic.classList.add('d-block');
    signup.classList.remove('d-block');
    signup.classList.add('d-none');
  
});

document.getElementById('logout').addEventListener('click', function() {
    const profilePic = document.getElementById('profilepic');
    const signup = document.getElementById('signup');
    
    const recommended= document.getElementById('rec')
    recommended.classList.remove('d-block')
    recommended.classList.add('d-none')

        profilePic.classList.remove('d-block');
        profilePic.classList.add('d-none');
        signup.classList.remove('d-none');
        signup.classList.add('d-block'); 
  
});


document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var toggleImage = document.getElementById('toggleImage');

    toggleButton.addEventListener('click', function () {
        if (toggleImage.src.endsWith('images/icons/Join Group.png')) {
            toggleImage.src = '';
        } else {
            toggleImage.src = 'images/icons/Join Group.png';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var toggleImage = document.getElementById('toggleImage');
    toggleButton.addEventListener('click', function () {
        var currentState = toggleButton.getAttribute('data-state');
        if (currentState === 'join') {
            toggleImage.src = 'images/icons/Leave Group.png';
            toggleButton.setAttribute('data-state', 'leave');
        } else {
            toggleImage.src = 'images/icons/Join Group.png';     
            toggleButton.setAttribute('data-state', 'join');
        }
    });
});



    var joinLeaveButton = document.getElementById('joinLeaveButton');
    var joinLeaveIcon = document.getElementById('joinLeaveIcon');
    var joinLeaveText = document.getElementById('joinLeaveText');

    joinLeaveButton.addEventListener('click', function () {
        if (joinLeaveText.textContent.trim() === 'Join Group') {
            joinLeaveText.textContent = 'Leave Group';
            joinLeaveButton.classList.remove('btn-primary');
            joinLeaveIcon.src = 'images/icons/outline-exit_to_app-24px.png'; 
            joinLeaveIcon.alt = 'Leave group';
        } 
        else {
            joinLeaveText.textContent = 'Join Group';
            joinLeaveIcon.src = 'images/baseline-group_add-24px.png';
            joinLeaveIcon.alt = 'Join group';
            joinLeaveButton.classList.add('btn-primary');
            
        }
    });



 
    function togglePassword(id) {
        const passwordInput = document.getElementById(id);
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
    
    }
    









