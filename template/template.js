// template pattern
class PaperTemplate {
  parentPrint() {
    document.write("Print A4 Paper <br>");
  }

}
class ColorTemplate extends PaperTemplate {
  colorPrint() {
    super.parentPrint();
    document.write("Set the Color of A4 paper red <br>");
  }
}
// space attack classes
class Sprite {
  constructor() {
    this.x=0 //Airplane x coordinates.
    this.y=0 //airplane y coordinates.
    this.image=null;
  }
  draw(context){
    context.drawImage(this.image,this.x,this.y);
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  setX(x){
    this.x=x;
  }
  setY(y){
    this.y=y
  }
  getImage(){
    return this.image;
  }
  setImage(image){
    this.image=image;
  }

}
class MyFlane extends Sprite{

}
class EnemyFlane extends Sprite{

}
