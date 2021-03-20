class Superman extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/superman.jpg");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}
