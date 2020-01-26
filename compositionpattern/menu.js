class MenuItem{
  constructor(name){
    this.name=name;
    this.childMenuItems= new Array();
  }
  getName(){
    return this.name;
  }
  setName(name){
    this.name=name;
  }
  getChildMenuItems(){
    return this.childMenuItems;
  }
  add(menuitem){
    this.childMenuItems.push(menuitem);
  }
}
/// code
var root=new MenuItem("");
//life book section
var lifeBook=new MenuItem("Life Book");
root.add(lifeBook);
// books in Life book section
var childMenu01_1 = new MenuItem("Better Mind Better Life");
var childMenu01_2 = new MenuItem("Happy Strong Familia");
var childMenu01_3 = new MenuItem("Life is Not Limited ");
var childMenu01_4 = new MenuItem("Love Life Love Forever");
lifeBook.add(childMenu01_1);
lifeBook.add(childMenu01_2);
lifeBook.add(childMenu01_3);
lifeBook.add(childMenu01_4);

// programming book section
var programmingBook = new MenuItem("Programming Book");
root.add(programmingBook);

//books in Programming Books section
var childMenu02_1 = new MenuItem("Easy Learning HTML CSS");
var childMenu02_2 = new MenuItem("Easy Learning Java");
var childMenu02_3 = new MenuItem("Python 3 for Dummies");
var childMenu02_4 = new MenuItem("Javascript for Babies");
programmingBook.add(childMenu02_1);
programmingBook.add(childMenu02_2);
programmingBook.add(childMenu02_3);
programmingBook.add(childMenu02_4);
