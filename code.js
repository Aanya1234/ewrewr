var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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


var goal1=createSprite(200,28,100,20);
goal1.shapeColor=("yellow");
var goal2=createSprite(200,372,100,20);
goal2.shapeColor=("yellow");
var striker=createSprite(200,200,10,10);
striker.shapeColor="white";
var playerMallet=createSprite(200,50,50,10);
playerMallet.shapeColor="black";
var computerMallet=createSprite(200,350,50,10);
computerMallet.shapeColor="black";

var playerScore = 0;
var compScore = 0;
var gameState = "serve";

function draw() {
  background("green");
  createEdgeSprites(rightEdge,leftEdge);
  
  striker.bounceOff(topEdge);
  striker.bounceOff(bottomEdge);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  striker.bounceOff(rightEdge);
  striker.bounceOff(leftEdge);
 
  function serve() {
    striker.velocityX = 3;
    striker.velocityY = 4;
    
  }
  
  if (gameState === "serve") {
     textSize(18);
     fill("maroon");
      text("Press Space to Strike",120,180);
     if (keyDown("space")) {
       striker.velocityX = 3;
       striker.velocityY = 4;
       gameState = "play";
     }
  }
  
  if (gameState == "play") {
    computerMallet.x = striker.x;
    if (playerScore === 5  || compScore === 5 ) {
      gameState = "end";
    }
  }
  
  if (gameState == "end") {
    striker.velocityX = 0;
    striker.velocityY = 0;
    if (playerScore === 5  || compScore === 5 ) {
      gameState = "end";
       
      textSize(20);
      fill("maroon");
      text("Game Over!",200,140);
      text("Press 'a' to Restart", 150,170);
    }
    
    if (keyDown("a")) {
      gameState = "serve";
      compScore = 0;
      playerScore = 0;
    }
  }
  
   text(compScore,16,230);
   text(playerScore,17,177);
  
 if (keyDown("left")) {
   playerMallet.x=playerMallet.x-10;
  }
 if (keyDown("right")) {
    playerMallet.x=playerMallet.x+10;
  }
 if (keyDown("up")) {
    if (playerMallet.y>25) {
      
    }
    playerMallet.y=playerMallet.y-10;
  }
 if (keyDown("down")) {
    if (playerMallet.y<120) {
    }
    playerMallet.y=playerMallet.y+10;
   }
   
   computerMallet.x=striker.x;
   
   if (striker.isTouching(goal1)||striker.isTouching(goal2)) {
     if (striker.isTouching(goal1)) 
     {
       compScore=compScore+1;
     }
     if (striker.isTouching(goal2)) 
     {
       playerScore=playerScore+1;
     }
     
     reset();
     gameState="serve";
   }
  
   
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  
  function reset() {
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
  }
  
  
   
  
  drawSprites();
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
