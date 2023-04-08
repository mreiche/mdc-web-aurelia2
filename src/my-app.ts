import "@material/web/button/filled-button"
import "@material/web/textfield/filled-text-field"
import "@material/web/switch/switch"
import "@material/web/checkbox/checkbox"
import "@material/web/segmentedbuttonset/outlined-segmented-button-set"
import "@material/web/segmentedbutton/outlined-segmented-button"
import "@material/web/divider/divider"
import "@material/web/iconbutton/standard-icon-button"

export class MyApp {
  public message = 'Hello World!'
  private _switched = true
  private _checked = true

  private _click() {
    this.message = "Clicked"
  }

  private _selected() {
    console.log("selected")
  }
}
