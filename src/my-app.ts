import {NumberValueConverter} from "t-systems-aurelia-components/src/value-converters/number-value-converter";
import {inject} from "aurelia";
import { setTheme} from 'mdui';
import {Theme} from "mdui/internal/theme";

type Time = {
    value: string,
    label: string
}

@inject(NumberValueConverter)
export class MyApp {
    public _buttonMsg = ''
    public _iconButtonMsg = ''
    private _switched = true
    private _checked = true
    private readonly _selectOptions = ["dark", "light", "auto"]
    private _selectValue: Theme = "auto"
    private readonly _segmentedButtonOptions: Time[] = [
        {value: "day", label: "Day"},
        {value: "week", label: "Week"},
        {value: "month", label: "Month"},
    ]
    private _segmentedButtonValue = this._segmentedButtonOptions[0].value
    private _snackbarMsg: string
    private _snackbarOpen: boolean
    private _collapsedItems = ["item-1"]
    private _chipSelected = false
    private _textFieldMsg = ""
    private _radioValue = "chinese"
    private _rangeSliderValue = [0, 100]
    private _selectedTab = "tab-1"
    private _dropDownOpen = false
    private _linearProgressValue = 0.5
    private _circularProgressValue = 0.5

    constructor(
        numberValueConverter: NumberValueConverter
    ) {
        numberValueConverter.setLocale("en")
    }

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
        this._linearProgressValue = Math.random()
    }

    private _randomizeCircularProgress() {
        this._circularProgressValue = Math.random()
    }

    private _randomizeDay() {
        const rand = Math.round(Math.random() * 100)
        this._segmentedButtonOptions[0].value = "value:" + rand
        this._segmentedButtonOptions[0].label = "label:" + rand
    }

    private _changeTheme($event: Event) {
        setTheme(this._selectValue)
    }
}
