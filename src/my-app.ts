import "@material/web/button/filled-button"
import "@material/web/textfield/filled-text-field"
import "@material/web/switch/switch"
import "@material/web/checkbox/checkbox"
// import "@material/web/segmentedbuttonset/outlined-segmented-button-set"
// import "@material/web/segmentedbutton/outlined-segmented-button"
import "@material/web/divider/divider"
import "@material/web/iconbutton/filled-icon-button"
import "@material/web/icon/icon"
import "@material/web/select/filled-select"
//import "@material/web/select/outlined-select"
import "@material/web/select/select-option"

export class MyApp {
  public message = 'Hello World!'
  private _switched = true
  private _checked = true
  private readonly _selectOptions = ["A", "B", "C"]
  private _selectedValue:string

  private _click() {
    this.message = "Clicked"
  }

  private _selected() {
    console.log("selected")
  }

  private _selectOptionChanged($event:Event) {
    console.log("selected", this._selectedValue)
  }
}
