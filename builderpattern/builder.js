// builder class
class Car {
  constructor() {
    this.head="";
    this.body="";
    this.wheel="";

  }
  getHead(){
    return this.head;
  }
  setHead(head){
    this.head=head;
  }
  getBody(){
    return this.body;
  }
  setBody(body){
    this.body=body;
  }
  getWheel(){
    return this.wheel;
}
setWheel(wheel){
  this.wheel=wheel;
}
}

class Builder {
  buildHead(){}
  buildBody(){}
  buildWheel(){}
  buildPart(){}

}
class ConcreteBuilder extends Builder {
  constructor() {
    super();
    this.car=new Car();

  }
  buildHead(){
    this.car.setHead("Car Head Construction Completed !");
  }
  buildBody(){
    this.car.setBody("Car Body Construction Completed !");
  }
  buildWheel(){
      this.car.setWheel("Car Wheel construction Completed !");

  }
  buildPart(){
    return this.car;
  }
}
class Director{
  static construct(builder){
    builder.buildHead();
    builder.buildBody();
    builder.buildWheel();
    return builder.buildPart();
  }
}
