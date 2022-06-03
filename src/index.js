import { Application, Container, Loader, Texture, TilingSprite } from 'pixi.js'
import Enemy from './Enemy';
import Player from './Player';
import Background from './Background';
import Rocket from './Rocket';

// Create new PIXI application
const app = new Application({
  width: 800,
  height: 600,
  transparent: false,
  antialias: true,
});

//Stage sizing and positioning
app.renderer.resize(800, 600);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.left = "50%";
app.renderer.view.style.top = "50%";
app.renderer.view.style.transform = "translate3d( -50%, -50%, 0 )";

// Init game container (where objects are displayed)
const stage = new Container();


// Enemy entity
let enemy;

//rocket entity
let rocket;

// Player entity
let spaceship;

//Background entity
let background;


// Load assets (empty here), and then call init function below
const loader = Loader.shared;
loader.add([
  "assets/Ship6.png",
  "assets/Ship1.png",
  "assets/laser.png",
]).load(init);

// First function called after loading assets is done
function init() {
  
    //Init background
    background = new Background(stage);

    // Init enemy 
    enemy = new Enemy(stage);

    //init rocket 

    rocket = new Rocket(stage)

    // Init player spaceship
    spaceship = new Player(stage);

  
    app.renderer.render(stage);


    requestAnimationFrame(loop);
}


// Looping function, called every frame
function loop() {

  enemy.update();
  spaceship.update();
  background.update();



  requestAnimationFrame(loop);

  app.renderer.render(stage);
}





document.body.appendChild(app.view)