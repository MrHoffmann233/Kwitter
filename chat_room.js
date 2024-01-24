const firebaseConfig = {
  apiKey: "AIzaSyADiPmUPoCIzI3P0K8dRvGliAcABfJQOrc",
  authDomain: "appvamosconversar.firebaseapp.com",
  databaseURL: "https://appvamosconversar-default-rtdb.firebaseio.com",
  projectId: "appvamosconversar",
  storageBucket: "appvamosconversar.appspot.com",
  messagingSenderId: "1053220704795",
  appId: "1:1053220704795:web:9779987017779c2cfe5ebe",
  measurementId: "G-BSD2ZK7GBZ"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() 
{
    room_name = document.getElementById("room_name").value

    firebase.database().ref("/").child(room_name).update({
        purpose : "adicionando nome da sala"
      });

      localStorage.setItem("room_name", room_name)

      window.location = "chat_page.html"
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = 
  "";snapshot.forEach(function(childSnapshot) {childkey = 
  childSnapshot.key;
                    Room_name = childkey;
                    //comece a programar aqui
                    <div id="Salas">
                      redirectToRoomName() 
                      {
                        localStorage.setItem("room_name", room_name);
                        
                       window.location = "chat_page.html";

                      }
                      
                    </div>
                    //termine de programar aqui
}
  )})
}
  getData();