class Fly {
  shoot() {

  }
}
class Banshee extends Fly{
    shoot(){
      document.getElementById("result").innerHTML="Banshee fire the Laser";
    }
  }
class B747fly extends Fly{
      shoot(){
        document.getElementById("result").innerHTML="B747 fire the Missile";

      }
    }
    class A380fly extends Fly{
          shoot(){
            document.getElementById("result").innerHTML="A380 fire the Trigeminal Shot";

          }
        }

class FlyFactory{
  static create(type){
    var fly=null;
    if(type==1){
      fly=new Banshee();
    }else if(type==2){
      fly=new B747fly();
    }else if(type==3){
      fly=new A380fly();
    }
    return fly;
  }
}
// Factory pattern of shapes :

class Shape{
  constructor(x,y) {
    this.x=x;
    this.y=y;

  }
  draw(context){}

}
class Rectangle extends Shape{
  constructor(x,y,height,width){
    super(x,y);
    this.width=width;
    this.height=height;
  }
  draw(context){
    context.fillStyle="#ff0000";
    context.fillRect(this.x,this.y,this.width,this.height);
  }
}
class Square extends Shape {
  constructor(x,y,length) {
    super(x,y);
    this.length=length
  }
  draw(context){
    context.fillStyle="#00FF00";
    context.fillRect(this.x,this.y,this.length,this.length);
  }
}
class Round extends Shape {
  constructor(x,y,r) {
    super(x,y);
    this.r=r;

  }
  draw(context){
    context.fillStyle="#0000ff";
    context.beginPath();
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.fill();
  }
}
class ShapeFactory {
  static create(type){
    var shape=null;
    if(type=="Rectangle"){
      shape=new Rectangle(10,10,80,50);
    }else if(type=="Square"){
      shape=new Square(100,10,50);
    }else if(type=="Round"){
      shape=new Round(190,35,25);
    }
    return shape;
  }
}
