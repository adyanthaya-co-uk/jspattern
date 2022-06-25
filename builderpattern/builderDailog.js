Class  Button(){
  construct(name,value){
    this.name=name;
    this.value=value;
  }
  getName(){
    return this.name;
  }
  getValue(){
    return this.value]
  }
  setName(nm){
    this.name=nm;
  }
  setValue(val){
    this.value=val;
  }
}
Class Dailog(){
  constructor(){
    this.message="";
    this.buttons=new Array();
  }
  getMessage(){
    return this.message;
  }
  setMessage(msg){
    this.message=msg;
  }
  getButtons(){
    return this.buttons
  }
  addButton(button){
    this.buttons.push(button);
  }
  show(){
    var dialogDiv=document.createElement("div");
    dialogDiv.setAttribute("id","dailog");
    dialogDiv.innerHTML=this.getMessage();
    dialogDiv.innerHTML+="<br><br>";
    for(var i=0; i<this.buttons.length;i++){
      var button=this.buttons[i];
      dailogDiv.innerHTML+="<input type='button' name='"+button.getName()+"' value='"+button.getValue()+"' />";
    }
    document.body.appendChild(dailogDiv);
  }
}
class Builder(){
  constructor(){
    this.dialog=new Dialog();
  }
  setMessage(message){
    this.dialog.setMessage(message);
  }
  addButton(button){
    this.dialog.addButton(button);
  }
  create(){
    return this.dialog;
  }
}
function showMessageDialog
