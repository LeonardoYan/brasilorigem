var tela = 0;
var xMenu = 205; var xMenu3 = 05; var yMenu1 = 277; var yMenu2 = 340;var yMenu3 = 410; var yMenu6 = 535; var xMenu10 = 180;
var xMenu1 = 85; var xMenu2 = 325; var yMenu4 = 412;
var xMenu6 = 25; var yMenu8 = 380;
var xMenu5 = 305; var yMenu7 = 447;
var xMenu7 = 50; var yMenu8 = 362; var xMenu9 = 300; var yMenu11 = 452
var xMenu8 = 45; var yMenu9 = 450; var yMenu10 = 380;
var largura = 200; var altura = 50; var largura2 = 280;
var largura1 = 60; var altura1 = 40;
var largura3 = 260;

function setup() {
  createCanvas(610, 580);
}

function preload(){
  menu = loadImage('menu.png');
  info = loadImage('info.png');
  creditos = loadImage('creditos.png');
  perdeu = loadImage('perdeu.png');
  vitoria = loadImage('vitoria.png')
  fase1 = loadImage('fase1.png');
  fase2 = loadImage('fase2.png');
  fase3 = loadImage('fase3.png');
  fase4 = loadImage('fase4.png');
  fase5 = loadImage('fase5.png');
  lvlwin = loadSound('lvlwin.wav');
  win = loadSound('win.wav');
  loss = loadSound('loss.wav');
  skip = loadSound('skip.wav');
}

function draw() {
 
  //tela de menu
 if(tela==0){
  image(menu, 0, 0)
   
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
  noStroke();
  noFill();
  rect(xMenu, yMenu1, largura, altura, 15);
  if(mouseIsPressed){
    tela=3
    skip.play()
    } 
  }
    
   if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
  noStroke();
  noFill();
  rect(xMenu, yMenu2, largura, altura, 15);
  if(mouseIsPressed){
    tela=1
    skip.play()    
    } 
  }
    
   if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){ 
  noStroke();
  noFill();
  rect(xMenu, yMenu3, largura, altura, 15);
  if(mouseIsPressed){
    tela=2
    skip.play()    
    } 
  }
  }
 
  //tela de informações
 else if(tela==1){
  image(info, 0, 0)
   
     if(mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu6 && mouseY < yMenu6 + altura){
  noStroke();
  noFill();
  rect(xMenu3, yMenu6, largura1, altura1, 15);
  if(mouseIsPressed){
    tela=0;
    skip.play()    
    } 
  }
 }
 
  //tela de creditos
 else if(tela==2){
  image(creditos, 0, 0)
   
     if(mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu6 && mouseY < yMenu6 + altura){
  noStroke();
  noFill();
  rect(xMenu3, yMenu6, largura1, altura1, 15);
  if(mouseIsPressed){
    tela=0;
    skip.play()    
    } 
  }
 }

  //tela primeira fase
 else if(tela==3){
  image(fase1, 0, 0)
     
   if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){  
  noStroke();
  noFill();
  rect(xMenu1, yMenu4, largura, altura, 15);
  if(mouseIsPressed){
    tela=4;
    loss.play()
    } 
  }
  
   if(mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){  
  noStroke();
  noFill();
  rect(xMenu2, yMenu4, largura, altura, 15);
  if(mouseIsPressed){
    tela=5;
    lvlwin.play()
    } 
  }
}
 
  //tela de derrota
 else if(tela==4){
  image(perdeu, 0, 0)
   
   if(mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu6 && mouseY < yMenu6 + altura){
  noStroke();
  noFill();
  rect(xMenu3, yMenu6, largura1, altura1, 15);
  if(mouseIsPressed){
    tela=0;
    skip.play()
    } 
  }
 }
 
  //tela segunda fase
 else if(tela==5){
  image(fase2, 0, 0)
        
   if(mouseX > xMenu6 && mouseX < xMenu6 + largura2 && mouseY > yMenu8 && mouseY < yMenu8 + altura){  
  noStroke();
  noFill();
  rect(xMenu6, yMenu8, largura2, altura, 15);
  if(mouseIsPressed){
    tela=4;
    loss.play()
    } 
  }
  
   if(mouseX > xMenu5 && mouseX < xMenu5 + largura2 && mouseY > yMenu7 && mouseY < yMenu7 + altura){  
  noStroke();
  noFill();
  rect(xMenu5, yMenu7, largura2, altura, 15);
  if(mouseIsPressed){
    tela=6;
    lvlwin.play()
    } 
  }
 } 
 
  //tela terceira fase
 else if(tela==6){
  image(fase3, 0, 0)
        
   if(mouseX > xMenu8 && mouseX < xMenu8 + largura3 && mouseY > yMenu9 && mouseY < yMenu9 + altura){  
  noStroke();
  noFill();
  rect(xMenu8, yMenu9, largura3, altura, 15);
  if(mouseIsPressed){
    tela=7;
    lvlwin.play()
    } 
  }
  
   if(mouseX > xMenu5 && mouseX < xMenu5 + largura3 && mouseY > yMenu10 && mouseY < yMenu10 + altura){  
  noStroke();
  noFill();
  rect(xMenu5, yMenu10, largura3, altura, 15);
  if(mouseIsPressed){
    tela=4;
    loss.play()
    } 
  }
 }   
 
  //tela quarta fase
 else if(tela==7){
  image(fase4, 0, 0)
     
   if(mouseX > xMenu7 && mouseX < xMenu7 + largura3 && mouseY > yMenu8 && mouseY < yMenu8 + altura){  
  noStroke();
  noFill();
  rect(xMenu7, yMenu8, largura3, altura, 15);
  if(mouseIsPressed){
    tela=8;
    lvlwin.play()
    } 
  }
  
   if(mouseX > xMenu9 && mouseX < xMenu9 + largura3 && mouseY > yMenu11 && mouseY < yMenu11 + altura){  
  noStroke();
  noFill();
  rect(xMenu9, yMenu11, largura3, altura, 15);
  if(mouseIsPressed){
    tela=4;
    loss.play()
    } 
  }
}
 
  //tela quinta fase
 else if(tela==8){
  image(fase5, 0, 0)
        
   if(mouseX > xMenu8 && mouseX < xMenu8 + largura3 && mouseY > yMenu9 && mouseY < yMenu9 + altura){  
  noStroke();
  noFill();
  rect(xMenu8, yMenu9, largura3, altura, 15);
  if(mouseIsPressed){
    tela=4;
    loss.play()
    } 
  }
  
   if(mouseX > xMenu5 && mouseX < xMenu5 + largura3 && mouseY > yMenu8 && mouseY < yMenu8 + altura){  
  noStroke();
  noFill();
  rect(xMenu5, yMenu8, largura3, altura, 15);
  if(mouseIsPressed){
    tela=9;
    win.play()
    } 
  }
 }
 
  //tela vitoria
 else if(tela==9){
   image(vitoria, 0, 0)
   
   if(mouseX > xMenu10 && mouseX < xMenu10 + largura && mouseY > yMenu6 && mouseY < yMenu6 + altura){
  noStroke();
  noFill();
  rect(xMenu10, yMenu6, largura1, altura1, 15);
  if(mouseIsPressed){
    tela=0;
    skip.play()
    } 
  }   
 }
}