class Paper {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.body=Bodies.ellipse(200,200,5,options);
}