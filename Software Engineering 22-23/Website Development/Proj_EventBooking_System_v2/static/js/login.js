// go to sign up page
function toSignup(){
    document.getElementById('lblToSignup').addEventListener('click', function (){
        location.href = '/signup' 
    })
}
toSignup()

function toFindPwd(){
    document.getElementById('lblFindPwd').addEventListener('click', function (){
        location.href = '/find_info'
    })
}
toFindPwd()