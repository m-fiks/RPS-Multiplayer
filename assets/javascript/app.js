
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2Jdzr0A-YCFDODUzxfJ_egtALLzK43HM",
  authDomain: "rockpaperscissors-7c1da.firebaseapp.com",
  databaseURL: "https://rockpaperscissors-7c1da.firebaseio.com",
  projectId: "rockpaperscissors-7c1da",
  storageBucket: "",
  messagingSenderId: "437345357139"
};
firebase.initializeApp(config);

//player objects
let player1="";
let player2="";
let round=0;

let database = firebase.database();

database.ref().set({
    Round: 0,
    Players: 0,
  });

  database.ref("Players").set({
        player1:player1,
        player2:player2,
  });