let enrollments = [];

let roll = 1;
function register(){   
    let tname = document.getElementById('name').value;
    let temail = document.getElementById('email').value;


    let enrollCount = enrollments.filter((x)=>{
        return x.email == temail;
    })

    if(enrollCount.length == 0){
        let registration = {
            rollNo: roll,
            name: tname,
            email: temail,
        }

        roll+=1;
        enrollments.push(registration);

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        

    }else{
        console.log('email exists');
    }

   

    console.log(enrollments);
}

function checkEmail(){
    let temail = document.getElementById('email').value;
    
    let mainCheck = enrollments.filter((x)=>{
        return x.email == temail;
    })

    if(mainCheck.length == 0){
        // console.log();
    }else{
        console.log('Email Exists');
    }
}