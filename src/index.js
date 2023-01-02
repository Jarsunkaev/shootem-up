import { Application, Container } from 'pixi.js';
import Enemy from './Enemy';
import Player from './Player';
import Background from './Background';
import Rocket from './Rocket';

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

const stage = new Container();

let enemy;
let rocket;
let spaceship;
let background;

Loader.shared.add([
  "assets/Ship6.png",
  "assets/Ship1.png",
  "assets/laser.png",
]).load(init);

function init() {
  background = new Background(stage);
  enemy = new Enemy(stage);
  rocket = new Rocket(stage);
  spaceship = new Player(stage);

  app.renderer.render(stage);
  requestAnimationFrame(loop);
}

function loop() {
  enemy.update();
  spaceship.update();
  background.update();

  requestAnimationFrame(loop);
  app.renderer.render(stage);
}

document.body.appendChild(app.view);
