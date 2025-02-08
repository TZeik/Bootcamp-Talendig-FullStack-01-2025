class Character {
    constructor(id, model, trait){
        this.id = id;
        this.model = model;
        this.trait = trait;
        this.maxhp = 100.0;
        this.maxsp = 50.0;
        this.hp = 100.0;
        this.sp = 50.0;
        this.hpRegen = 0.1;
        this.spRegen = 0.5;
        this.weapon = null;
        this.inventory = new Vector();
        this.posX = 0;
        this.posY = 0;
    }

    action(key){
        switch(key){
            case 'right':
                this.posX++;
                break;
            case 'left':
                this.posX--;
                break;
            case 'jump':
                this.posY++;
                break;
            case 'attack':
                this.attack();
                break;
            default:
                return
        }
    }

    regenerateHp(){
        while(this.hp < this.maxhp)
            this.hp += this.hpRegen;
    }

    regenerateSp(){
        while(this.sp < this.maxsp)
        this.sp += this.spRegen;
    }

    getDamage(amount){
        this.hp -= amount;
        if(this.hp <= 0)
            this.die();
    }

    castSpell(spell, cost){
        if(this.sp >= cost){
            this.sp -= cost;
            console.log("Se ha utilizado "+ spell);
        }else{
            console.log("PH insuficientes");
        }
    }

    die(){
    }

    equipWeapon(w){
        if(this.weapon != null){
            this.inventory.add(this.weapon);
        }
        this.inventory.remove(w);
        this.weapon = w;
    }

    getItem(item, quant){
        this.inventory.add(item);
        if(quant != 1)
            console.log("Se han obtenido " + quant +" "+ item +"s");
        else
            console.log("Se ha obtenido un "+ item);
    }

}

const player1 = new Character(1,5,"Warrior");
const player2 = new Character(2,3,"Marksman");
const player3 = new Character(3,8,"Mage");