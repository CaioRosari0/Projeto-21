class ground{

    constructor(x,y,l,a){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, l, a, options);
        this.l = l;
        this.a = a;
        World.add(world, this.body);
    }

    display(){
        var posição = this.body.position;
        push();
        rectMode(CENTER);
        fill("gray");
        rect(posição.x, posição.y, this.l, this.a);
        pop();
    }
}