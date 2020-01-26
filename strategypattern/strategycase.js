class PayStrategy{
  pay(price,elstr){}
}
class MasterCard extends PayStrategy {
  pay(price,elstr){
    document.getElementById(elstr+'').innerHTML="Pay " +price + "$ by Master Card";

  }
}
class VisaCard extends PayStrategy {
  pay(price,elstr){
    document.getElementById(elstr+'').innerHTML="Pay " +price + "$ by Visa Card";

  }
}
class PayPal extends PayStrategy {
  pay(price,elstr){
    document.getElementById(elstr+'').innerHTML="Pay " +price + "$ by PayPal";

  }
}
class PayManager{
  constructor(payStratergy){
    this.payStratergy=payStratergy;
  }
  pay(price,elstr){
    return this.payStratergy.pay(price,elstr);
  }
}
