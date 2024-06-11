// import "@material/web/button/filled-button"
// import "@material/web/textfield/filled-text-field"
// import "@material/web/switch/switch"
// import "@material/web/checkbox/checkbox"
// // import "@material/web/segmentedbuttonset/outlined-segmented-button-set"
// // import "@material/web/segmentedbutton/outlined-segmented-button"
// import "@material/web/divider/divider"
// import "@material/web/iconbutton/filled-icon-button"
// import "@material/web/icon/icon"
// import "@material/web/select/filled-select"
// //import "@material/web/select/outlined-select"
// import "@material/web/select/select-option"
import 'mdui/mdui.css'
import 'mdui/components/button.js'
import 'mdui/components/text-field.js'
import 'mdui/components/switch.js'
import 'mdui/components/select.js'
import 'mdui/components/menu-item.js'
import 'mdui/components/checkbox.js'
import 'mdui/components/segmented-button-group.js'
import 'mdui/components/segmented-button.js'
import 'mdui/components/button-icon.js'
import '@mdui/icons/check.js'

export class MyApp {
  public message = 'Hello World!'
  private _switched = true
  private _checked = true
  private readonly _selectOptions = ["A", "B", "C"]
  private _selectValue = "A"
  private _segmentedButtonValue = ["day"]

  private _click() {
    this.message = "Clicked"
  }
}
