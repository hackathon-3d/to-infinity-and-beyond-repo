var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        data();
    },
    // // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listenin    g');
    //     var receivedElement = parentElement.querySelector('.received');

    //     var buttonElement = document.getElementById("btnAlert").setAttribute('style', 'display:block;');


    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');

    //     console.log('Received Event: ' + id);
    // }
};

var correctAnswer = "";
var currentQn = "";

    function data(){

        var item = getRandomQn();
        //alert(item);

        document.getElementById('lblQn').innerHTML = item;
    };

    function nextQuestion(){
        //window.localStorage.setItem("nextQn", parseInt(window.localStorage.getItem("nextQn"))+1);

        window.location.href="questionone.html";
    };

    function getRandomQn(){
        var randomNum = parseInt(Math.random()*window.localStorage.getItem("numQns"))+1;
        var item = window.localStorage.getItem(randomNum);
        var answered = window.localStorage.getItem("answered");
        var answeredlst = answered.split('|');
        alert("answeredlst" + answeredlst);
        var keepGoing = true;

        

        if(answered != "") {
            while(keepGoing){
                alert("indexOf: " + answeredlst.indexOf(randomNum));
                if (answeredlst.indexOf(randomNum.toString()) == -1){
                    window.localStorage.setItem("answered", window.localStorage.getItem("answered")+randomNum+"|");
                    currentQn = randomNum;
                    alert(currentQn);
                    return item;
                }
                else{
                    randomNum = parseInt(Math.random()*window.localStorage.getItem("numQns"))+1;
                    item = window.localStorage.getItem(randomNum);
                    alert(randomNum);
                }
            }
        }
        else{
            
            currentQn = randomNum;
            window.localStorage.setItem("answered", window.localStorage.getItem("answered")+randomNum+"|");
            alert(currentQn);
            return item;
        }
    }
