class Rope{
    constructor(BodyA,BodyB,pointB){
        var options =  {
            bodyA:BodyA,
            bodyB:BodyB,
            pointB:pointB,
           

        }
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var point1 = this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        var pointB = this.pointB
        strokeWeight(2)
        stroke("white")
        line(point1.x,point1.y - 40,point2.x+pointB.x ,point2.y+pointB.y +10)
    }
}
