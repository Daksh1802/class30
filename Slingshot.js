class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingimg1=loadImage("./sprites/sling1.png");
        this.slingimg2=loadImage("./sprites/sling2.png");
        this.slingimg3=loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingimg1,200,25);
        image(this.slingimg2,170,25)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(78,36,18)
if(pointA.x<220){

            line(pointA.x-15, pointA.y, pointB.x-10, pointB.y-50);
            image(this.slingimg3,pointA.x-20,pointA.y-5,20,12)
            line(pointA.x-15, pointA.y, pointB.x+30, pointB.y-50);
        }
            else{
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y-50);
            image(this.slingimg3,pointA.x+25,pointA.y-5,12,20)
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-50);
            }
        }
        
    }
    
}