// singleton
class Singleton {
  static instance=null;
  static getInstance(){
    if(Singleton.instance==null){
      //there is only one instance hence, initialise a new object
      Singleton.instance=new Singleton();
    }
  }
}
//Singleton Logon example

class Dialog {
  static instance =null;
  static showDialog(){
    if(Dialog.instance==null){
      var dialogDiv=document.createElement("div");
      dialogDiv.setAttribute("id","login");
      dialogDiv.innerHTML="Username:<input type='text' id='username'/>";
      dialogDiv.innerHTML+="<br><br>";
      dialogDiv.innerHTML+="Password:<input type='password' id='password'/>";
      dialogDiv.innerHTML+="<br><br>";
      dialogDiv.innerHTML+="<input type='button'  value='Submit'/>";
      document.body.appendChild(dialogDiv);
      Dialog.instance = new Dialog();
    }
    return Dialog.instance;
  }
};
