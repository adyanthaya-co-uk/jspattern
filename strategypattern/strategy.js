// Strategy Pattern
class Strategy{
  calculate( a , b ){}
}
class Addition extends Strategy{
  calculate( a , b ){
    return a+b;
  }
}
class Subraction extends Strategy{
  calculate(a , b){
    return a-b;
  }
}
class Multiplication extends Strategy{
  calculate(a , b){
    return  a*b;
  }
}
class Division extends Strategy {
  calculate(a , b){
    return a/b;
  }
}
class Context{
    constructor(strategy){
      this.strategy=strategy;
    }
    calculate(a,b){
      return this.strategy.calculate(a,b);
    }
  }
