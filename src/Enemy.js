import { Loader, Sprite, Texture, Container } from 'pixi.js'
import Rocket from './Rocket';


const enemySpeed = 2.5;
const enemyTexture = Texture.from("assets/Ship1.png");
const enemies = [];
const stage = new Container();
const rocket = new Rocket();

export default class Enemy
{
  /**
   * Init the enemies array rendered on the stage
   */
  constructor(stage) {

    //Rendering enemy every 2 seconds
    window.setInterval(() => {
      const enemy = new Sprite(enemyTexture);
      enemy.x = screen.width;
      enemy.y = Math.floor(Math.random() * screen.height);
      stage.addChild(enemy);
      enemies.push(enemy);
  }, 2000)

    
    // This array will store our enemies
    /*this.enemy = Array(8).fill().map(() => {
      // Create enemy instance
      const enemy = new Sprite();
      this.reset(enemy);

      stage.addChild(enemy);
      
      return enemy;
    });*/
  }

  /**
   * Move enemy and reset position when needed
   */
  update() {
    enemies.forEach((enemy, index, object) => {
      if (enemy.x < 0 - enemy.width) {
          object.splice(index, 1);
          stage.removeChild(enemy);
      }
      
      enemy.x -= enemySpeed;
      enemy.y = enemy.y + (Math.floor(Math.random() * 10) % 2 === 0 ? -1 : 1 * enemySpeed / 10);
  })
}

    

  /**
  
   */
  reset(element) {

    // Set texture, anchor and position
    element.texture = Loader.shared.resources["assets/Ship1.png"].texture;
    element.anchor.set(0.5, 0.5);
    element.scale.set(1, 1)
    element.position.set(window.innerWidth + (window.innerWidth * Math.random()), window.innerHeight * Math.random());

  }
}

/*app.ticker.add((delta) => {
  // If lasef hits enemy
  bullets.forEach((, bulletIndex, bulletObject) => {
      enemies.forEach((enemy, index, object) => {
          if (bullet.x >= enemy.x - 25 && bullet.x <= enemy.x + 25 && bullet.y >= enemy.y - 25 && bullet.y <= enemy.y + 25) {
              // Remove Tie Fighter
              object.splice(index, 1);
              app.stage.removeChild(enemy);
              // Remove Bullet
              bulletObject.splice(bulletIndex, 1);
              app.stage.removeChild(bullet);
              addExplosion(enemy.x, enemy.y);
          }
      })
    })
    
     //If enemy hits spaceship
      enemies.forEach((enemy) => {
        if (enemy.x >= spaceship.x - 25 && enemy.x <= spaceship.x + 25 && enemy.y >= enemy.y - 50 && enemy.y <= spaceship.y) {
            addExplosion(spaceship.x - 50, spaceship.y - 50)
            endGame();
        
        }
     })
}) */
  