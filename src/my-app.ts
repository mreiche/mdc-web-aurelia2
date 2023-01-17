import "@material/web/button/filled-button";
import "@material/web/textfield/filled-text-field";
import "@material/web/switch/switch";
import "@material/web/checkbox/checkbox";

export class MyApp {
  public message = 'Hello World!'
  private _switched = true
  private _checked = true

  private _click() {
    this.message = "Clicked"
  }
}
