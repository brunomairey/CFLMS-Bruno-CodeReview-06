
// Create empty array
let arrayplace:Array<any> = [];

//Creastion of first main class with constructor method - Use of Place as location is a reserved word

class Bestlocationintheworld { // ①
   name :string; 
   code :string;
   address :string;
   image :string;
   created :string;
    // ②    
constructor(name, code, address, image, created) { 
       this.name = name;
       this.code = code;
       this.address = address;
       this.image = image;
       this.created = created;
       arrayplace.push(this);
         }

   display() {
    //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
    //https://momentjs.com/docs/#/get-set/
    let formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
       return `<div class="card-deck">
                    <div class="col mb-4">
                        <div class="card mb-4 bg-dark text-white text-center teaser hovereffect">
                            <img src="${this.image}" class="card-img-top imageheight" alt="thethingstosee">
                            <div class="card-body"><div class="heightcard">
                                <h5 class="card-title">${this.name}</h5>
                                <p class="card-text text-left">${this.code} ${this.address}</p>
                                <p class="card-text text-left" style="color:#353A40">.</p>
                                <p class="card-text text-left" style="color:#353A40">.</p>
                                <p class="card-text text-left" style="color:#353A40">.</p>
                                <div class="card-text text-left mt-2 small">Created: ${formatcreated}</div>
                            </div>
                        </div>
                    </div>
                </div>
               `;
   }
};


//Creastion of second main class Restaurent with constructor method - Use Hutte do keep the mountain spirit :)


class Hutte extends Bestlocationintheworld {
   type :string;
   phone :string;
   website :string;
 

   constructor(name, code, address, image, created, type, phone, website) {
       super(name, code, address, image, created); 
        this.type = type;
        this.phone = phone;
        this.website = website;
       
    
   }



   display() { 
     //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
    //https://momentjs.com/docs/#/get-set/
       let formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
       return  `<div class="card-deck">
                    <div class="col mb-4">
                        <div class="card mb-4 bg-dark text-white text-center teaser hovereffect">
                            <img src="${this.image}" class="card-img-top" alt="niceplacetoeat">
                            <div class="card-body"><div class="heightcard">
                                <h5 class="card-title">${this.name}</h5>
                                <p class="card-text text-left">${this.code} ${this.address}</p>
                                <p class="card-text text-left">${this.type} </p> 
                                 <p class="card-text text-left"><b>&#x260E; </b> ${this.phone}</p>
                                 <p class="card-text text-left"> <a href="${this.website}" class="btn btn-light">&#9000; Website</a></p>
                                 <p class="card-text text-left small">Created: ${formatcreated}</p>
                                
                                
                                </div></div>
                        </div>
                    </div>
                </div>
               `;
   }
};
 

//Creastion of the Events who only have a starting date. Who knows if you will come back :)


class Events extends Bestlocationintheworld {
   date :string;
   time :string;
   price :string;
 

   constructor(name, code, address, image, created, date, time, price) {
       super(name, code, address, image, created); 
        this.date = date;
        this.time = time;
        this.price = price;
       
    
   }


   display() { 
     //Use of the library moment.js to display the date in the right format. Here you can find the complete documentation 
    //https://momentjs.com/docs/#/get-set/
         let formatcreated = moment(this.created).format('DD.MM.YYYY, HH:mm');
       return  `<div class="card-deck">
                    <div class="col mb-4">
                        <div class="card h-150 mb-4 bg-dark text-white text-center teaser hovereffect">
                            <img src="${this.image}" class="card-img-top" alt="sportevents">
                            <div class="card-body"><div class="heightcard">
                                <h5 class="card-title">${this.name}</h5>
                                <p class="card-text text-left">${this.code} ${this.address}</p>
                                <p class="card-text text-left"> &#x1F4C5;  ${this.date}  &#8986; ${this.time}</p>
                                <p class="card-text text-left">price: ${this.price}</p>
                                <p class="card-text text-left" style="color:#353A40">.</p>
                                <div class="card-text text-left small">Created: ${formatcreated} </div>
                                </div></div>
                        </div>
                    </div>
                </div>
               `;
   }
};


// Here starts the place where you can fulfill the content with new Variables. Be carefull with the typo, there are 3 different classes that need different arguments

var dachsteinhutte = new Hutte ("Simonyhütte", "4830", "Hallstadt", "img/hutte_simony.jpg", "2018-03-04 19:00", "OAV", "0680 2196 374", "https://www.simonyhuette.com/home.html");
var duiseehutte = new Hutte ("Duisitzkarseehütte", "8971", "Seiterweg2, Schladming", "img/hutte_see.jpg", "2018-08-05 18:00", "Naturfreunde", "0664 9733 684", "https://www.duisitzkar.at");
var hochschwabhutte = new Hutte ("Schiestlhaus", "8621", "St. Ilgen 116, Thörl", "img/hutte_hochschwab.jpg", "2019-08-18 12:00", "OTK", "0699 1081 2199", "http://www.schiestlhaus.at/");

var dachstein = new Bestlocationintheworld ("Hoher Dachstein", "4830", "Dachstein", "img/location_dachstein.jpg", "2018-03-03 14:00");
var duisee = new Bestlocationintheworld ("Duisitzkarsee", "8971", "Schladming", "img/location_see.jpg", "2018-08-04 11:00");
var hochschwab = new Bestlocationintheworld ("Hochschwab", "8621", "Seewiesen", "img/location_hochschwab.jpg", "2019-08-18 13:00");

var crevace = new Events("Crevace Escape", "4830", "Dachstein Glacier", "img/event_crevace.jpg", "2019-05-31 12:00", "2020.12.31", "08:00", "200 €");
var backski = new Events("Backcountry Ski", "4830", "Dachstein Rumpler", "img/event_backski.jpg", "2020-05-30 11:00", "2021.01.15", "09:00", "130 €");
var alpineski = new Events("Alpine Ski", "4830", "Dachstein Kripenstein", "img/event_ski.jpg", "2020-04-29 15:00", "2021.01.16", "12:00", "80 €");

//Here ends the place to fulfill the variable

console.table(arrayplace);

// looping the elements for teaser creation 
for (let i=0; i<arrayplace.length; i++) {

document.getElementById('container1').innerHTML += arrayplace[i].display()
}

//Here starts the sort function ascending - was said ok on slack to have it on the same page, that I prefer.

document.getElementById("ascending").addEventListener("click", function (){

    document.getElementById('container1').innerHTML=""
    arrayplace.sort((a, b) => (a.created > b.created) ? 1 : -1)
    for (let i=0; i<arrayplace.length; i++) {


document.getElementById('container1').innerHTML += arrayplace[i].display()
}

})

//Here starts the sort function ascending - was said ok on slack to have it on the same page, that I prefer.

document.getElementById("descending").addEventListener("click", function (){

    document.getElementById('container1').innerHTML=""
    arrayplace.sort((a, b) => (a.created < b.created) ? 1 : -1)
    for (let i=0; i<arrayplace.length; i++) {


document.getElementById('container1').innerHTML += arrayplace[i].display()
}

})






  