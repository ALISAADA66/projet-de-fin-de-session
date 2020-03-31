var firebaseConfig = {
    apiKey: "AIzaSyBfXe_5WjZMkYUNcoQDhqG2pxl3HZmBGBY",
    authDomain: "aliproject-e276d.firebaseapp.com",
    databaseURL: "https://aliproject-e276d.firebaseio.com",
    projectId: "aliproject-e276d",
    storageBucket: "aliproject-e276d.appspot.com",
    messagingSenderId: "138328054064",
    appId: "1:138328054064:web:56a88f9fed71f78c2bd0f5",
    measurementId: "G-N8HQC39KS7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.database().ref('donnéeschantier')


    
    db.once('value',function(snapshot){
        var table = document.getElementById("tbody");
       snapshot.forEach(function(data){
           console.log(data.val());
           element = data.val();
           console.log(element);
           var tr = document.createElement("tr");
           var td = document.createElement("td");;
           td.appendChild(document.createTextNode(element['nom']));
           tr.appendChild(td);
           td = document.createElement("td");
           td.appendChild(document.createTextNode(element['region']));
           tr.appendChild(td);
           td = document.createElement("td");
           td.appendChild(document.createTextNode(element['dure']));
           tr.appendChild(td);
           td = document.createElement("td");
           
            td.appendChild(document.createTextNode(element['commencement']));
           tr.appendChild(td);
           td = document.createElement("td");
           td.appendChild(document.createTextNode(element['cout']));
           tr.appendChild(td);

           table.appendChild(tr);

       });
       
   });
