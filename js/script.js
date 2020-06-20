var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create empty array
var arrayplace = [];
//Creastion of first main class with constructor method - Use of Place as location is a reserved word
var Bestlocationintheworld = /** @class */ (function () {
    // ②    
    function Bestlocationintheworld(name, code, address, image, created) {
        this.name = name;
        this.code = code;
        this.address = address;
        this.image = image;
        this.created = created;
        arrayplace.push(this);
    }
    Bestlocationintheworld.prototype.display = function () {
        //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
        //https://momentjs.com/docs/#/get-set/
        var formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
        return "<div class=\"card-deck\">\n                    <div class=\"col mb-4\">\n                        <div class=\"card mb-4 bg-dark text-white text-center teaser hovereffect\">\n                            <img src=\"" + this.image + "\" class=\"card-img-top imageheight\" alt=\"thethingstosee\">\n                            <div class=\"card-body\"><div class=\"heightcard\">\n                                <h5 class=\"card-title\">" + this.name + "</h5>\n                                <p class=\"card-text text-left\">" + this.code + " " + this.address + "</p>\n                                <p class=\"card-text text-left\" style=\"color:#353A40\">.</p>\n                                <p class=\"card-text text-left\" style=\"color:#353A40\">.</p>\n                                <p class=\"card-text text-left\" style=\"color:#353A40\">.</p>\n                                <div class=\"card-text text-left mt-2 small\">Created: " + formatcreated + "</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n               ";
    };
    return Bestlocationintheworld;
}());
;
//Creastion of second main class Restaurent with constructor method - Use Hutte do keep the mountain spirit :)
var Hutte = /** @class */ (function (_super) {
    __extends(Hutte, _super);
    function Hutte(name, code, address, image, created, type, phone, website) {
        var _this = _super.call(this, name, code, address, image, created) || this;
        _this.type = type;
        _this.phone = phone;
        _this.website = website;
        return _this;
    }
    Hutte.prototype.display = function () {
        //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
        //https://momentjs.com/docs/#/get-set/
        var formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
        return "<div class=\"card-deck\">\n                    <div class=\"col mb-4\">\n                        <div class=\"card mb-4 bg-dark text-white text-center teaser hovereffect\">\n                            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"niceplacetoeat\">\n                            <div class=\"card-body\"><div class=\"heightcard\">\n                                <h5 class=\"card-title\">" + this.name + "</h5>\n                                <p class=\"card-text text-left\">" + this.code + " " + this.address + "</p>\n                                <p class=\"card-text text-left\">" + this.type + " </p> \n                                 <p class=\"card-text text-left\"><b>&#x260E; </b> " + this.phone + "</p>\n                                 <p class=\"card-text text-left\"> <a href=\"" + this.website + "\" class=\"btn btn-light\">&#9000; Website</a></p>\n                                 <p class=\"card-text text-left small\">Created: " + formatcreated + "</p>\n                                \n                                \n                                </div></div>\n                        </div>\n                    </div>\n                </div>\n               ";
    };
    return Hutte;
}(Bestlocationintheworld));
;
//Creastion of the Events who only have a starting date. Who knows if you will come back :)
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, code, address, image, created, date, time, price) {
        var _this = _super.call(this, name, code, address, image, created) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
        //https://momentjs.com/docs/#/get-set/
        var formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
        return "<div class=\"card-deck\">\n                    <div class=\"col mb-4\">\n                        <div class=\"card h-150 mb-4 bg-dark text-white text-center teaser hovereffect\">\n                            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"sportevents\">\n                            <div class=\"card-body\"><div class=\"heightcard\">\n                                <h5 class=\"card-title\">" + this.name + "</h5>\n                                <p class=\"card-text text-left\">" + this.code + " " + this.address + "</p>\n                                <p class=\"card-text text-left\"> &#x1F4C5;  " + this.date + "  &#8986; " + this.time + "</p>\n                                <p class=\"card-text text-left\">price: " + this.price + "</p>\n                                <p class=\"card-text text-left\" style=\"color:#353A40\">.</p>\n                                <div class=\"card-text text-left small\">Created: " + formatcreated + " </div>\n                                </div></div>\n                        </div>\n                    </div>\n                </div>\n               ";
    };
    return Events;
}(Bestlocationintheworld));
;
// Here starts the place where you can fulfill the content with new Variables. Be carefull with the typo, there are 3 different classes that need different arguments
var dachstein = new Bestlocationintheworld("Hoher Dachstein", "4830", "Dachstein", "img/location_dachstein.jpg", "2018-03-03 14:00");
var duisee = new Bestlocationintheworld("Duisitzkarsee", "8971", "Schladming", "img/location_see.jpg", "2018-08-04 11:00");
var hochschwab = new Bestlocationintheworld("Hochschwab", "8621", "Seewiesen", "img/location_hochschwab.jpg", "2019-08-18 13:00");
var dachsteinhutte = new Hutte("Simonyhütte", "4830", "Hallstadt", "img/hutte_simony.jpg", "2018-03-04 19:00", "OAV", "0680 2196 374", "https://www.simonyhuette.com/home.html");
var duiseehutte = new Hutte("Duisitzkarseehütte", "8971", "Seiterweg2, Schladming", "img/hutte_see.jpg", "2018-08-05 18:00", "Naturfreunde", "0664 9733 684", "https://www.duisitzkar.at");
var hochschwabhutte = new Hutte("Schiestlhaus", "8621", "St. Ilgen 116, Thörl", "img/hutte_hochschwab.jpg", "2019-08-18 12:00", "OTK", "0699 1081 2199", "http://www.schiestlhaus.at/");
var crevace = new Events("Crevace Escape", "4830", "Dachstein Glacier", "img/event_crevace.jpg", "2019-05-31 12:00", "2020.12.31", "08:00", "200 €");
var backski = new Events("Backcountry Ski", "4830", "Dachstein Rumpler", "img/event_backski.jpg", "2020-05-30 11:00", "2021.01.15", "09:00", "130 €");
var alpineski = new Events("Alpine Ski", "4830", "Dachstein Kripenstein", "img/event_ski.jpg", "2020-04-29 15:00", "2021.01.16", "12:00", "80 €");
//Here ends the place to fulfill the variable
console.table(arrayplace);
// looping the elements for teaser creation 
for (var i = 0; i < arrayplace.length; i++) {
    document.getElementById('container1').innerHTML += arrayplace[i].display();
}
//Here starts the sort function ascending - was said ok on slack to have it on the same page, that I prefer.
document.getElementById("ascending").addEventListener("click", function () {
    document.getElementById('container1').innerHTML = "";
    arrayplace.sort(function (a, b) { return (a.created > b.created) ? 1 : -1; });
    for (var i = 0; i < arrayplace.length; i++) {
        document.getElementById('container1').innerHTML += arrayplace[i].display();
    }
});
//Here starts the sort function descending - was said ok on slack to have it on the same page, that I prefer.
document.getElementById("descending").addEventListener("click", function () {
    document.getElementById('container1').innerHTML = "";
    arrayplace.sort(function (a, b) { return (a.created < b.created) ? 1 : -1; });
    for (var i = 0; i < arrayplace.length; i++) {
        document.getElementById('container1').innerHTML += arrayplace[i].display();
    }
});
