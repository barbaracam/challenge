window.onload = function() {
    
    let ename = document.getElementById("ecard");    
    let efeature = document.getElementById("efeature");
    
    var fetchinfo = fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php').then(res => res.json().then(einfo => Info(einfo)));
    // var fetchrole = fetch('http://sandbox.bittsdevelopment.com/code1/fetchroles.php').then(res => res.json().then(rol => roleInfo(rol)));

    function Info(eminfo) {
      console.log(eminfo);
        
    var i;
    

for (i = 1; i<=Object.keys(eminfo).length; i++ ){
     
    var k;
    //   for (k = 0; k<=Object.keys(eminfo.roles.rolename).length; k++ ){         

    ename.innerHTML += "<li>" + `<img src="http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg" width=20>`+" " + eminfo[i].employeefname + " " + eminfo[i].employeelname + " " + eminfo[i].employeebio +" " + eminfo[i].roles[0].rolename + "</li>";     
      
    //  }
    //   for (i = 1; i<=Object.keys(eminfo.roles).length; i++ ){
    //   elabel.innerHTML += eminfo[i].roles[i].rolename;
    //   elabel.style.background = eminfo[i].roles[i].rolecolor;
    
     
    
    


      }

    


}


  }