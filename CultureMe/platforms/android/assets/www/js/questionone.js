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
};

var correctAnswer = "";
var currentQn = "";

    function data(){
        if (window.localStorage.getItem("totalQns") < window.localStorage.getItem("numQns")) {
            var item = getRandomQn();
        }
        else{
            window.location.href="results.html";
        }

        

        document.getElementById('lblQn').innerHTML = item;
    };

    function checkAnswer(){

        window.localStorage.setItem("totalQns", parseInt(window.localStorage.getItem("totalQns"))+1);
        document.getElementById("btnCheck").setAttribute('style', 'display:none;');
        document.getElementById("btnNext").setAttribute('style', 'display:block;');
    };

    function nextQuestion(){
        window.location.href="questionone.html";
        
    };

    function getRandomQn(){
        var randomNum = parseInt(Math.random()*window.localStorage.getItem("numQns"))+1;
        var item = window.localStorage.getItem(randomNum);
        var answered = window.localStorage.getItem("answered");
        var answeredlst = answered.split('|');
        var keepGoing = true;

        

        if(answered != "") {
            while(keepGoing){
                if (answeredlst.indexOf(randomNum.toString()) == -1){
                    window.localStorage.setItem("answered", window.localStorage.getItem("answered")+randomNum+"|");
                    currentQn = randomNum;
                    return item;
                }
                else{
                    randomNum = parseInt(Math.random()*window.localStorage.getItem("numQns"))+1;
                    item = window.localStorage.getItem(randomNum);
                }
            }
        }
        else{
            
            currentQn = randomNum;
            window.localStorage.setItem("answered", window.localStorage.getItem("answered")+randomNum+"|");
            return item;
        }
    }
