class Joueur{
    constructor(id){
        this.id = id;
        this.node = document.querySelector(this.id);
        this.y = 400;
        this.velocity = 2;
        this.speed = 0;

        this.node.onclick = () => {
            this.speed = -20;
        }
    }
    tick(){
        this.speed += this.velocity;
        this.y += this.speed;

        this.node.style.top = this.y + "px";

        if(this.y > 400){
            this.y = 400;
            this.speed = 0;
        }
    }
}
class Cloud{
    constructor(id){
        this.id = id;
        this.node = document.querySelector(this.id);
        this.top = Math.floor(Math.random() * (250 - 100) + 100);
        this.left = 94; // POURCENTAGE
    }
    tick(){
        this.node.style.top = this.top + "px";
        this.node.style.left = this.left + "%";
    }

}
// class Obst{
//     constructor(id){
//         this.id = id;
//         this.node = document.querySelector(this.id);
//     }

// }

let joueur = new Joueur("#DINO");
let spritesheetCLOUDS = [];
let spritesheetOBST = [];
let spriteSize = 3;

for(let i = 0; i < spriteSize; i++){
    spritesheetCLOUDS[i] = new Cloud("#CLOUD" + (i + 1));
}

// for(let i = 0; i < spriteSize; i++){
//     spritesheetOBST[i] = new Obst("#OBST" + (i + 1));
// }

const tick = () => {

    joueur.tick()

    for(let i = 0; i < spritesheetCLOUDS.length; i++){
        spritesheetCLOUDS[i].tick();
    }
    requestAnimationFrame(tick)
}
tick();