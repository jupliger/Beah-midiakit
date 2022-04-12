class Releases{
     constructor(){
          
          this.jimmy = createImg("./assets/releases/jimmy.png");
          this.liveset = createImg("./assets/releases/liveset-youtube.png");
          this.harddays = createImg("./assets/releases/harddays.png");
          this.setEnergia = createImg("./assets/releases/set-energia.png");
         
          this.mustachemix = createImg("./assets/releases/mustachemix.png");
          this.setaEsquerda = createImg("./assets/releases/seta-esquerda.png");
          this.setaDireita = createImg("./assets/releases/seta-direita.png");
          
         this.albumposition = -3

     }
     setElementsPosition(){
          this.setaDireita.position(1250,1150);
          this.setaEsquerda.position(20,1151);

          this.mustachemix.position(485,900);
          this.jimmy.position(85,1000);
          this.harddays.position(880,1000);
          this.liveset.position(250,950);
          this.setEnergia.position(700,950);
        
     }

     setElementsStyle(){
          this.setaDireita.class("ReleasesArrows");
          this.setaEsquerda.class("ReleasesArrows");
          this.jimmy.class("albums");
          this.harddays.class("albums");
          this.liveset.class("albums");
          this.mustachemix.class("albums");
          this.setEnergia.class("albums");
     }
     
     handleMousePressed(){
          this.setaDireita.mousePressed(() => {

          });

          this.setaEsquerda.mousePressed(() => {
               
               

          });

          this.jimmy.mousePressed(() => {
               window.open('https://open.spotify.com/album/5pbVh1vS76j40imU7lKQph', '_blank');
          });
          this.harddays.mousePressed(() => {
               window.open('https://open.spotify.com/album/5CmWmZD5ye0hLoOKr2wDPE', '_blank');
          });
          this.liveset.mousePressed(() => {
               window.open('https://www.youtube.com/watch?v=v30N59rsyMQ&ab_channel=BE%C3%81HOFICIAL', '_blank');
          });
          this.mustachemix.mousePressed(() => {
          window.open('https://soundcloud.com/mustachecrewrecords/mustache-mixes-008-beah', '_blank');
          });
          this.setEnergia.mousePressed(() => {
               window.open('https://soundcloud.com/beahoficial/live-set-radio-energia-97-fm', '_blank');
          });
     }

   

     display(){
          this.setElementsPosition();
          this.setElementsStyle();
          this.handleMousePressed();
         
     }
}