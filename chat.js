// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



