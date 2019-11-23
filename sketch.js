let planets = [];
let t = 0;




function setup() {
  createCanvas(500, 500);  //creates canvas
  let mercuryColor = color('#B5A7A7'); //defines variable containing planet color that is run into the constructor
  let venusColor = color('#BBB7AB');
  let earthColor = color('#3644E4');
  let marsColor = color('#E27B58');
  let jupiterColor = color('#C88B3A'); 
  let saturnColor = color('#C5AB6E'); 
  let uranusColor = color('#D5FBFC'); 
  let neptuneColor = color('#212354'); 
  let plutoColor = color('#9ca6b7'); 
  

  mercury = new Planet(6, 20, 0.08, mercuryColor); //creates new planet with size, distance, orbitspeed and the color

  venus = new Planet(8, 40, 0.075, venusColor);

  earth = new Planet(11, 80, 0.07, earthColor);

  mars = new Planet(9, 100, 0.065, marsColor);

  jupiter = new Planet (15, 150, 0.059, jupiterColor);

  
  saturn = new Planet (18, 180, 0.050, saturnColor);

  uranus = new Planet (10, 200, 0.045, uranusColor)

  neptune = new Planet (10, 220, 0.04, neptuneColor);

  pluto = new Planet (7, 240, 0.03, plutoColor);



  planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]; //filling the empty array 'planets' with the all the planets, allows me to show and make all the planets orbit all at once w/o having to do it individually for each planet

  // textFont(font);
  // textSize(fontsize);
  // textAlign(CENTER, CENTER);
  
}





function draw() {
  background('#060324'); //canvas bg color
  translate(width / 2, height / 2); //positions sun
  fill('#f9d71c'); //sun color
  ellipse(0,0,20,20); //sun
  
  for (i in planets){  
    planets[i].show()
    planets[i].orbit()
  }
  
  textSize(20);
  textAlign(LEFT);
  textFont("arial");
  fill(255,255,255,t);
  text('Pluto is still a planet', 20, 20);

  if(mouseIsPressed){
    planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto]

    t = 100
  
  
  } //adds pluto and increases text opacity on click

}


