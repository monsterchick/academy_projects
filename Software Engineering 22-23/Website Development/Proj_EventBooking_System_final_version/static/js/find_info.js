function getEmailString(){
    document.getElementById('sendLink').addEventListener('click', function _(){
    stringInput = document.getElementById('inpEmail').value//type of string
    
    function validateEmail(stringInput){
        var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        
        for (let i=0; i < stringInput.length; i++){
            if (stringInput[i] in mailFormat){
                document.getElementById('showMsg').innerHTML = "the link was sent!"
            }else{
                document.getElementById('showMsg').innerHTML = "this is not an email format!"
            }
        }
    }
        // if(stringInput in (mailformat))
        // {
        
        // return true;
        // }
        // else
        // {
        //     document.getElementById('showMsg').innerHTML = "this is not an email format!"
        // return false;
        // }
        // }
    validateEmail()
    })
}
getEmailString()
// {
//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    
//     if(stringInput.value.match(mailformat))
//     {
//     document.getElementById('showMsg').innerHTML = "the link was sent!"
//     return true;
//     }
//     else
//     {
//         document.getElementById('showMsg').innerHTML = "this is not an email format!"
//     return false;
//     }
//     }
// validateEmail()