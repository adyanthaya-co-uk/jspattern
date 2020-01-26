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
