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
