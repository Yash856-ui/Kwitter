var firebaseConfig = {
      apiKey: "AIzaSyDqauGky9JAQiyX0Yfc20pFmCpvRjshNpw",
      authDomain: "kwitter-app-6afff.firebaseapp.com",
      databaseURL: "https://kwitter-app-6afff-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-6afff",
      storageBucket: "kwitter-app-6afff.appspot.com",
      messagingSenderId: "319092831353",
      appId: "1:319092831353:web:95a8cc6dabaa2d308dd0a8",
      measurementId: "G-2WZV9RVNYE"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Nmae - " + Room_names);
       row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"      
      });

       localStorage.setItem("room_name" , room_name);

       window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "index.html";
}