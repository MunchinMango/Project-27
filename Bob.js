    class Bob{
        constructor(x,y,r){
            var options = {
               
                restitution: 1.2,
               density: 1.6,
            }
            this.body = Bodies.circle(x,y,r,options)
            this.radius = r
            World.add(world,this.body)
        }
        display(){
            ellipseMode(RADIUS)
            fill("pink")
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        }
    }
