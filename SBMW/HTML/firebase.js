
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


    $('#submit').click(function(){
        var nom = $('#Nom').val()
        var region = $("#Region").val()
        var dure = $("#Dure").val()
        var com = $("#Com").val()
        var cou = $("#Cou").val()
        console.log(1);
       
        var newMsg = db.push();
        
        newMsg.set({
            nom:nom,
            region:region,
            dure:dure,
            commencement:com,
            cout:cou,
        })
        
        
    })
