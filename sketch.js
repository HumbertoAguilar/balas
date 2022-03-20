var prefondo
var buton
var postfondo
var retrybuton
var fondo
var shooter
var gun 
var enemy
var barrera
var shot
var gameState=0
var shutsound

var score=0
var vidas=5
function preload(){
  shot=loadSound("sound.mp3")
sound=loadSound("intro1.mp3")
shutsound=loadSound("Record (online-voice-recorder.com) (12).mp3")
butonimg=loadImage("13n58PIC8tNdqa7cup4sc_PIC2018.png_860_preview_rev_1.png")
gunimg=loadImage("af007493-3d1b-42e8-b621-2d4503ea45c2_preview_rev_1.png")
retryimg=loadImage("restart-icon-internet-button-on-260nw-312322937_preview_rev_1.png")


}
function setup(){
  createCanvas(600,600)
  fondo=createSprite(300,400,600,800)
  shooter=createSprite(300,500,30,30)
  shooter.shapeColor="red"
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  


enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),0,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),0,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),0,50,50)
enemy6.shapeColor="green"
enemy6.visible=false
prefondo=createSprite(300,300,600,600)
buton=createSprite(300,300,40,20)
buton.addImage(butonimg)
postfondo=createSprite(300,300,600,600)
postfondo.shapeColor="blue"
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.visible=false
sound.play();
}

function draw(){
  background("black")

if(gameState===0){


if(mousePressedOver(buton)){
  gameState+=+1
}


}


 
  
 
             if(gameState===1){
               
               buton.visible=false
               enemyShot();
              sound.stop();

               prefondo.visible=false
               move();
               shoot();
  if(gunGroup.isTouching(enemy1)){
    enemy1.destroy();
    gun.destroy();
    score+=+1

  }
  if(gunGroup.isTouching(enemy2)){
    enemy2.destroy();
    gun.destroy();
    score+=+1

  }
  if(gunGroup.isTouching(enemy3)){
    enemy3.destroy();
    gun.destroy();
    score+=+1
  }
  spawnenemy();

 if(shoten.isTouching(shooter)){
   shoten.destroy();
   vidas+=-1
  }
 if(shoten2.isTouching(shooter)){
  shoten2.destroy();
  vidas+=-1


}
if(shoten3.isTouching(shooter)){
  shoten3.destroy();
  vidas+=-1

}

if(vidas===0){
  shooter.destroy
  if(vidas===0||vidas<0){
    gameState=5
  }
}
 
  
  if(score===25||score>25){

gameState+=+1
vidas=5
  }
  fill("red")
   textSize(24)
   text("SCORE: "+score,200,200)
}
              if(gameState===2){
                enemyshot2();
                move();
  enemy4.visible=true
  shoot();
  spawn2();
  if(gunGroup.isTouching(enemy1)){
    enemy1.destroy();
    gun.destroy();
    score+=+1

  }
  if(gunGroup.isTouching(enemy2)){
    enemy2.destroy();
    gun.destroy();
    score+=+1

  }
  if(gunGroup.isTouching(enemy3)){
    enemy3.destroy();
    gun.destroy();
    score+=+1
  }
  if(gunGroup.isTouching(enemy4)){
    enemy4.destroy();
    gun.destroy();
    score+=+1
  }

  if(shoten.isTouching(shooter)){
    shoten.destroy();
    vidas+=-1
   }
  if(shoten2.isTouching(shooter)){
   shoten2.destroy();
   vidas+=-1
 
 
 }
 if(shoten3.isTouching(shooter)){
   shoten3.destroy();
   vidas+=-1
 

 }
 if(shoten4.isTouching(shooter)){
  shoten4.destroy();
  vidas+=-1

}
 
 if(vidas===0){
   shooter.destroy
 }
 if(score===30||score>30){
  gameState+=+1
  enemyshot3();
  vidas=5
}
if(vidas===0||vidas<0){
  gameState=5
}
  fill("red")
  textSize(24)
  text("SCORE: "+score,200,200)
  }

  if(score===30||score>30){
    enemyshot3();
  }

        if(gameState===3){
          move();
          enemyshot3();
          enemy5.visible=true
          shoot();
spawn3();
if(gunGroup.isTouching(enemy1)){
  enemy1.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy2)){
  enemy2.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy3)){
  enemy3.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy4)){
  enemy4.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy5)){
  enemy5.destroy();
  gun.destroy();
  score+=+1
}

if(shoten5.isTouching(shooter)){
  shoten5.destroy();
  vidas+=-1

}
if(shoten6.isTouching(shooter)){
  shoten6.destroy();
  vidas+=-1

} if(shoten7.isTouching(shooter)){
  shoten7.destroy();
  vidas+=-1

} if(shoten8.isTouching(shooter)){
  shoten8.destroy();
  vidas+=-1

}
if(shoten9.isTouching(shooter)){
  shoten9.destroy();
  vidas+=-1

}
if(score===40||score>40){
  gameState+=+1
  vidas=5
}
if(vidas===0||vidas<0){
  gameState=5
}
fill("red")
   textSize(24)
   text("SCORE: "+score,200,200)
 }
 if(score===40||score>40){
enemyshot4();

 }
      if(gameState===4){
        enemyshot4();
        move();
        enemy6.visible=true
shoot();
spawn4();
if(gunGroup.isTouching(enemy1)){
  enemy1.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy2)){
  enemy2.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy3)){
  enemy3.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy4)){
  enemy4.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy5)){
  enemy5.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy6)){
  enemy6.destroy();
  gun.destroy();
  score+=+1
}
if(shoten5.isTouching(shooter)){
  shoten5.destroy();
  vidas+=-1

}
if(shoten6.isTouching(shooter)){
  shoten6.destroy();
  vidas+=-1

} if(shoten7.isTouching(shooter)){
  shoten7.destroy();
  vidas+=-1

} if(shoten8.isTouching(shooter)){
  shoten8.destroy();
  vidas+=-1

}
if(shoten9.isTouching(shooter)){
  shoten9.destroy();
  vidas+=-1

}
if(shoten10.isTouching(shooter)){
  shoten10.destroy();
  vidas+=-1

}
if(vidas===0||vidas<0){
  gameState=5
}



      }
      if(vidas===0||vidas<0){
        gameState=5
      }

          if(gameState===5){
            gun.destroy();
            enemy1.destroy();
            enemy2.destroy();
            enemy3.destroy();
            enemy4.destroy();
            enemy5.destroy();
            enemy6.destroy();
            shoten.destroy();
            shoten2.destroy();
            shoten3.destroy();
            shoten4.destroy();
            shoten5.destroy();
            shoten6.destroy();
            shoten7.destroy();
            shoten8.destroy();
            shoten9.destroy();
            shoten10.destroy();


postfondo.visible=true
retrybuton.visible=true
if(mousePressedOver(retrybuton)){
score=0
vidas=5
create();
gameState=0
sound.play();


}



          }

  drawSprites();
  
  fill("red")
  textSize(24)
  text("SCORE: "+score,20,50)
  text("VIDAS: "+vidas,300,50)
  console.log(enemy5.y)

}
 

 






function shoot(){
if(keyWentUp("space")){
gun=createSprite(shooter.x,shooter.y,3,10)
gun.addImage(gunimg)
gun.scale=.3
gun.velocityY=-18
shot.play();



}
gunGroup.add(gun)
gunGroup.lifetime=10




}

function spawnenemy(){
/*if(frameCount%20===0){
enemy=createSprite(random(50,400),0,50,50)
enemy.shapeColor="green"
enemy.velocityY=3


}
enemyGroup.add(enemy)*/
if(frameCount%200===0){
enemy1=createSprite(random(50,400),-50,50,50)
enemy1.shapeColor="green"
enemy1.velocityY=3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.shapeColor="green"
enemy2.velocityY=3

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.shapeColor="green"
enemy3.velocityY=3


}
}
function spawn2(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
enemy1.shapeColor="green"
enemy1.velocityY=3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.shapeColor="green"
enemy2.velocityY=3

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.shapeColor="green"
enemy3.velocityY=3
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.shapeColor="green"
enemy4.velocityY=3
enemy4.visible=true

}
}

function spawn3(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
enemy1.shapeColor="green"
enemy1.velocityY=3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.shapeColor="green"
enemy2.velocityY=3

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.shapeColor="green"
enemy3.velocityY=3
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.shapeColor="green"
enemy4.velocityY=3
enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.shapeColor="green"
enemy5.velocityY=3
enemy5.visible=true
}



}
function spawn4(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
enemy1.shapeColor="green"
enemy1.velocityY=3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.shapeColor="green"
enemy2.velocityY=3

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.shapeColor="green"
enemy3.velocityY=3
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.shapeColor="green"
enemy4.velocityY=3
enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.shapeColor="green"
enemy5.velocityY=3
enemy5.visible=true

enemy6=createSprite(random(50,400),-50,50,50)
enemy6.shapeColor="green"
enemy6.velocityY=3
enemy6.visible=true
}
}

function move(){
  if(keyCode===LEFT_ARROW){
    shooter.x+=-5
  }
  if(keyCode===RIGHT_ARROW){
    shooter.x+=+5
  }
}

function create(){

//nuevo
fondo=createSprite(300,400,600,800)
shooter=createSprite(300,500,30,30)
shooter.shapeColor="red"
gunGroup= new Group();
gun=createSprite(700,shooter.y,20,20)



enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),0,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),0,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),0,50,50)
enemy6.shapeColor="green"
enemy6.visible=false
prefondo=createSprite(300,300,600,600)
buton=createSprite(300,300,40,20)
buton.addImage(butonimg)
postfondo=createSprite(300,300,600,600)
postfondo.shapeColor="blue"
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.visible=false

}
function enemyShot(){
  if(enemy1.y<170){
  if(frameCount%80===0){

shoten=createSprite(enemy1.x,enemy1.y,5,10)
shoten.velocityY=20
shoten.shapeColor="red"

  }
  if(frameCount%80===0){

    shoten2=createSprite(enemy2.x,enemy2.y,5,10)
    shoten2.velocityY=20
    shoten2.shapeColor="red"

    
      }
}
if(frameCount%80===0){

  shoten3=createSprite(enemy3.x,enemy3.y,5,10)
  shoten3.velocityY=20
  shoten3.shapeColor="red"

}
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}
    }
    function enemyshot2(){

      if(enemy1.y<100){
        if(frameCount%40===0){
      
      shoten=createSprite(enemy1.x,enemy1.y,5,10)
      shoten.velocityY=20
      shoten.shapeColor="red"
      
        }
        if(frameCount%40===0){
      
          shoten2=createSprite(enemy2.x,enemy2.y,5,10)
          shoten2.velocityY=20
          shoten2.shapeColor="red"
          
            }
      }
      if(frameCount%40===0){
      
        shoten3=createSprite(enemy3.x,enemy3.y,5,10)
        shoten3.velocityY=20
        shoten3.shapeColor="red"


      }
      if(frameCount%40===0){
      
        shoten4=createSprite(enemy4.x,enemy4.y,5,10)
        shoten4.velocityY=20
        shoten4.shapeColor="red"
      }
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}

    }


    function enemyshot3(){

      if(enemy5.y<200){
        if(frameCount%80===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=20
      shoten5.shapeColor="red"
      
        }
        if(frameCount%80===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=20
          shoten6.shapeColor="red"
          
            }
      }
      if(frameCount%80===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=20
        shoten7.shapeColor="red"


      }
      if(frameCount%80===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=20
        shoten8.shapeColor="red"
      }
      if(frameCount%80===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=20
        shoten9.shapeColor="red"
      }
if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();

}

    }

    function enemyshot4(){
      if(enemy5.y<200){
        if(frameCount%80===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=20
      shoten5.shapeColor="red"
      
        }
        if(frameCount%80===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=20
          shoten6.shapeColor="red"
          
            }
      }
      if(frameCount%80===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=20
        shoten7.shapeColor="red"


      }
      if(frameCount%80===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=20
        shoten8.shapeColor="red"
      }
      if(frameCount%80===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=20
        shoten9.shapeColor="red"
      }
      if(frameCount%80===0){

        shoten10=createSprite(enemy6.x,enemy6.y,5,10)
        shoten10.velocityY=20
        shoten10.shapeColor="red"
      }


if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();

}



    }