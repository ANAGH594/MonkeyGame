var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","1f17a9d4-76e4-4749-b6fe-60b49b5faf5f","0046a0bb-77a1-45be-b348-6d740011bf27","9579b6e6-e4fd-48fe-80dd-f9871461a57b","9929dbbd-4669-4dca-9047-92a7b2f36810","2d6b657d-12df-4898-a3d3-bf3a2c7aa563"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":2,"version":"quNisBnGAmebos2z0oZx4vpk5V2QVdC_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"fruit1","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"iV_llCX74qhikYrqUnIgb_KJoW2SXOot","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"fN8hAm9ugOiYdttQZDe_K2rwi5YrH7VF","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"1f17a9d4-76e4-4749-b6fe-60b49b5faf5f":{"name":"ground_grass_1","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"zwMTilGTSIHORPpZNuCW8FRmx1Lj4oWp","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/1f17a9d4-76e4-4749-b6fe-60b49b5faf5f.png"},"0046a0bb-77a1-45be-b348-6d740011bf27":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"X.9D7H1toUoNjBJuK0ydZWyrSv6Eku4H","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0046a0bb-77a1-45be-b348-6d740011bf27.png"},"9579b6e6-e4fd-48fe-80dd-f9871461a57b":{"name":"fruit2","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"9929dbbd-4669-4dca-9047-92a7b2f36810":{"name":"loser","sourceUrl":null,"frameSize":{"x":112,"y":143},"frameCount":2,"looping":true,"frameDelay":12,"version":"t5lDhwEEBdrMV6AVaALTi3uHQY5nxZx4","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":143},"rootRelativePath":"assets/9929dbbd-4669-4dca-9047-92a7b2f36810.png"},"2d6b657d-12df-4898-a3d3-bf3a2c7aa563":{"name":"dog","sourceUrl":"assets/api/v1/animation-library/gamelab/IBD9vIAmIqxUAAXlU.b47ahEhmW9qtva/category_animals/brown_dog.png","frameSize":{"x":224,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"IBD9vIAmIqxUAAXlU.b47ahEhmW9qtva","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IBD9vIAmIqxUAAXlU.b47ahEhmW9qtva/category_animals/brown_dog.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ground = createSprite(200, 350, 800, 400);
ground.setAnimation("animation_1");
ground.scale = 1;
ground.width = 800;

ground.debug = false;
ground.setCollider("rectangle", 0, 0,800, 20);
ground.x = ground.width/2;

var monkey = createSprite(55, 350, 20, 20);
monkey.setAnimation("monkey");
monkey.scale = 0.1;

var invisibleGround = createSprite(200, 380, 400, 5);
invisibleGround.visible = false;
          
var bananaGroup = createGroup();
var appleGroup = createGroup();     
var obstaclesGroup = createGroup();

var ps;        
  
var play = 1;
var end = 0;
var gameState = play;

function draw() {
  
 background("LightCyan");
  
if (gameState === play) {
  
   if (ps > 30 && ps < 40 ) {
   background("black");
   }      
  
   
   ground.velocityX = -7;
   if(ground.x < 0){
  ground.x = ground.width/2;
}
  
   if (keyDown("space") && monkey.y > 340) {
    monkey.velocityY = -12;
  }
   
  if (bananaGroup.isTouching(monkey)) {
    playSound("assets/category_collect/collect_item_bling_1.mp3");
    bananaGroup.destroyEach();
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  
  if (appleGroup.isTouching(monkey)) {
    playSound("assets/category_collect/collect_item_bling_1.mp3");
    appleGroup.destroyEach();
  }
  
   ps = Math.ceil(World.frameCount/World.frameRate);
   monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(invisibleGround);
  spawnObstacles();  
  spawnBananas();
  spawnApples();
  
  }
   
   
  fill("red");
  textSize(50);
  if(gameState === end){
    appleGroup.destroyEach();
    bananaGroup.destroyEach();
    monkey.destroy();
    obstaclesGroup.destroyEach();
    ground.velocityX = 0;
    
    text("Game Over!", 60, 200);
     
  }

   if (obstaclesGroup.isTouching(monkey)) {
    playSound( "assets/category_female_voiceover/game_over_female.mp3");
    gameState = end;
   }


   
  
  fill("green");
  textSize(21);
  text("Survival time:" + ps, 150, 40);  
  
  drawSprites();
}

function spawnObstacles() {

if (World.frameCount % 50 === 0) {
   var stone = createSprite(400, 350, 20, 20);
   stone.setAnimation("Stone");
   stone.scale = 0.16;
   stone.velocityX = -10;
   stone.lifeTime = 40;
   stone.debug = false;
   stone.setCollider("circle", 0, 0, 20);
   obstaclesGroup.add(stone);
}
}


function spawnBananas() {

if (World.frameCount % 70 === 0) {
  
  var r = randomNumber(240, 350);
  var banana = createSprite(400, r, 20, 20);
  banana.setAnimation("fruit1");
  banana.scale = 0.04;
  banana.velocityX = -8;
  banana.lifetime = 50;
  bananaGroup.add(banana);
}
}

function spawnApples() {

if (World.frameCount % 100 === 0) {
  
  var a = randomNumber(250, 350);
  var apple = createSprite(400, a, 20, 20);
  apple.setAnimation("fruit2");
  apple.scale = 0.1;
  apple.velocityX = -8;
  apple.lifetime = 50;
  appleGroup.add(apple);
}
}

  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
