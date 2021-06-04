window.onload = function() {

    let ecard = document.getElementById("ecard");
    
    //Fetching the information from JSON

    var fetchinfo = fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php').then(res => res.json().then(einfo => Info(einfo)));

    function Info(eminfo) {


        //Loop through all the team members from the website

        for (i = 1; i<=Object.keys(eminfo).length; i++ ){
            
            var card = document.createElement("div");
            card.classList.add("card");    
           
            //getting the picture
            var epic = document.createElement("img");
            epic.src = `http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg`
            epic.classList.add("epic");

             //getting last name and first name and creating a class in order to style in css               
             var ename = document.createElement("div");
             ename.textContent = eminfo[i].employeefname + " " + eminfo[i].employeelname;
             ename.classList.add("ename");

            //getting the member's bio
            var ejob = document.createElement("div");
            ejob.textContent = eminfo[i].employeebio;
            ejob.classList.add("ejob");
            
            //getting a crown for the featured members
            if (eminfo[i].employeeisfeatured == "1"){
            var efeature = document.createElement("div");
            efeature.textContent= "👑";
            efeature.classList.add("featured");

            }

            // looping through the roles
            var elabel = document.createElement("div");            
            for (var k in eminfo[i].roles) {                
                var erole = document.createElement('div');
                erole.innerHTML = eminfo[i].roles[k].rolename;
                erole.style.background = eminfo[i].roles[k].rolecolor;
                erole.classList.add('elabel');
                elabel.appendChild(erole);
            }            

            //Appending to the card's member
            card.appendChild(efeature);
            card.appendChild(epic);
            card.appendChild(ename);
            card.appendChild(ejob);            
            card.appendChild(elabel);
            ecard.appendChild(card);


        }

    }



}