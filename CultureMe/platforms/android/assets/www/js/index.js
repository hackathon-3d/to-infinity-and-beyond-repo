/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
    function clicked(){

        alert("You called.");

        var ghostElement = document.getElementById("ghost").setAttribute('style', 'display:block;');

    };

    function accepted(){

        window.localStorage.setItem("1", '<h2>What language do they speak in Switzerland?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Swiss German'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Swedish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'German'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Swiss'+
                '</label>'+
                '</br>'+
             '| option1');
window.localStorage.setItem("2", '<h2>What language do they speak in Denmark?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Denmarkish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Danish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Polish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'French'+
                '</label>'+
                '</br>'+
             '| option2');
window.localStorage.setItem("3", '<h2>What are the official languages of Belgium?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'German, French, Dutch'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Flemish, Swiss, Dutch'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Catalan, Spanish,Italian'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'French,English,German'+
                '</label>'+
                '</br>'+
             '| option1');
window.localStorage.setItem("4", '<h2>What is the official language of the United States?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'English'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Spanish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'French'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'None of the above'+
                '</label>'+
                '</br>'+
             '| option4');
window.localStorage.setItem("5", '<h2>What are the official languages of Tanzania?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'English, African'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Tanzanian, Swahili'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'English, Swahili'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Tanzanian, English'+
                '</label>'+
                '</br>'+
             '| option3');
window.localStorage.setItem("6", '<h2>Which of these is a language of Canada?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Spanish'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'French'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Canadian'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Bacon'+
                '</label>'+
                '</br>'+
             '| option2');
window.localStorage.setItem("7", '<h2>Before entering a home in Japan you must?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Sacrifice a goat'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Take off your shoes'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Drink beer'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Bow'+
                '</label>'+
                '</br>'+
             '| option2');
window.localStorage.setItem("8", '<h2>A Muslim place of worship is called?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Church'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Mosque'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Synagogue'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Holy Place'+
                '</label>'+
                '</br>'+
             '| option2');
window.localStorage.setItem("9", '<h2>In British folk tradition, what day is okay for women to propose marriage to men?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'October 31'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'January 1'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'February 29'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'December 25'+
                '</label>'+
                '</br>'+
             '| option3');
window.localStorage.setItem("10", '<h2>What word derived from German describes a form of art that is a tasteless copy of an extant style of art?</h2>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option1" value="option1" />'+
                    'Lame'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option2" value="option2" />'+
                    'Kitsch'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option3" value="option3" />'+
                    'Weinerschnitzel'+
                '</label>'+
                '</br>'+
                '<label class="options">'+
                    '<input type="radio" name="optionsRadio" id="option4" value="option4" />'+
                    'Bacon'+
                '</label>'+
                '</br>'+
             '| option2');

        window.localStorage.setItem("totalQns", "0");

        window.localStorage.setItem("numQns", "5");

        window.localStorage.setItem("correctAns", "0");

        window.localStorage.setItem("answered", "");

        window.location.href="questionone.html";
    }

