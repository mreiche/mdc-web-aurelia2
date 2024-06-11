import 'mdui/mdui.css'
import 'mdui'
import { snackbar } from 'mdui'

export class MyApp {
  public _buttonMsg = ''
  public _iconButtonMsg = ''
  private _switched = true
  private _checked = true
  private readonly _selectOptions = ["A", "B", "C"]
  private _selectValue = "A"
  private _segmentedButtonValue = ["day"]
  private _snackbarMsg:string
  private _snackbarOpen:boolean
  private _collapsedItems = ["item-1"]
  private _chipSelected = false
  private _textFieldMsg = ""
  private _radioValue = "chinese"
  private _rangeSliderValue = [0, 100]
  private _selectedTab = "tab-1"
  private _dropDownOpen = false
  private _linearProgressValue = 0.5
  private _circularProgressValue = 0.5

  private _clickBtn() {
    this._buttonMsg = new Date().toISOString()
  }

  private _clickIconBtn() {
    this._iconButtonMsg = new Date().toISOString()
  }

  private _toast(msg: string) {
    this._snackbarMsg = msg
    this._snackbarOpen = true
  }

  private _randomizeLinearProgress() {
    this._linearProgressValue=Math.random()
  }

  private _randomizeCircularProgress() {
    this._circularProgressValue=Math.random()
  }

}
