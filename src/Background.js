import { Texture, TilingSprite  } from 'pixi.js'

let farTexture = Texture.from("assets/parallax/bkgd_0.png");	
let far = new TilingSprite(farTexture, 800, 600);

let midTexture = Texture.from("assets/parallax/bkgd_1.png");
let mid = new TilingSprite(midTexture, 800, 600);

let nearTexture = Texture.from("assets/parallax/bkgd_2.png");
    let near = new TilingSprite(nearTexture, 800, 600);

export default class Background 
{
  constructor(stage) {

    far.position.x = 0;
    far.position.y = 0;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    stage.addChild(far); 

    
    mid.position.x = 0;
    mid.position.y = 0;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    stage.addChild(mid);

    
    near.position.x = 0;
    near.position.y = 0;
    near.tilePosition.x = 0;
    near.tilePosition.y = 0;
    stage.addChild(near);

    
  }
  
  update() {
        far.tilePosition.x -= 0.128;
        mid.tilePosition.x -= 0.67;
        near.tilePosition.x -= 2;
    }
}

