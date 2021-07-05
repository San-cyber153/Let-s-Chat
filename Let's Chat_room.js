// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQX3ykbCFvst9hi1i_1QdPDdhvyp1mOwY",
    authDomain: "let-s-chat-560b7.firebaseapp.com",
    databaseURL: "https://let-s-chat-560b7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-560b7",
    storageBucket: "let-s-chat-560b7.appspot.com",
    messagingSenderId: "986823459195",
    appId: "1:986823459195:web:aabb8d9aa0e145b7dfbdde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
       document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!" ;
       
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name); 
      window.location = "Let's Chat_page.html" ;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Let's Chat_page.html";
}
