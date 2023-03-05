list = []
function emailValidation(){
    stringInput = document.getElementById('inpEmail').value
    console.log(stringInput)
    specialString = ['-', '!' ,'#', '$', '%', '&', '\'', '*', '+', '-', '/', '=', '?', '^', '_',  '{', '|', '}', '~']
    for (i=0;i < specialString.length;i++){
        list[i] =  specialString[i]
    }
}
emailValidation()

function passwordValidation(){
    let firstPwd = document.getElementById('firPwd').value;
    let secondPwd = document.getElementById('secPwd').value;

    document.getElementById('submit').addEventListener('click',function _(){
        if(firstPwd == secondPwd){
            document.getElementById('showPwdMsg').innerHTML = 'password is the same'
        }else{
            document.getElementById('showPwdMsg').innerHTML = 'password is not the same, try again!'
        }
    })

}