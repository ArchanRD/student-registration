let enrollments = [];

let roll = 1;
function register(){   
    let tname = document.getElementById('name').value;
    let temail = document.getElementById('email').value;
    let table = document.getElementById('table');


    let enrollCount = enrollments.filter((x)=>{
        return x.email == temail;
    })

    if(enrollCount.length == 0){
        let registration = {
            rollNo: roll,
            name: tname,
            email: temail,
        }

        enrollments.push(registration);

        //display data
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerHTML = roll;
        td2.innerHTML = tname;
        td2.innerHTML = temail;

        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        
        roll+=1;
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