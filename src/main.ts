import {Aurelia, Registration} from 'aurelia'
import {MyApp} from './my-app'
import {MduiWebTask} from "aurelia-mdui"
import {NumberValueConverter} from "t-systems-aurelia-components/src/value-converters/number-value-converter";
import {ISanitizer} from "@aurelia/runtime-html"
import {SanitizeHtmlHtmlSanitizer} from "t-systems-aurelia-components/src/value-converters/sanitize-html-html-sanitizer";
import {PercentValueConverter} from "t-systems-aurelia-components/src/value-converters/percent-value-converter";
import 'mdui/mdui.css'
import 'mdui'

Aurelia
    .register(
        MduiWebTask,
        NumberValueConverter,
        PercentValueConverter,
        Registration.singleton(ISanitizer, SanitizeHtmlHtmlSanitizer)
    )
    .app(MyApp)
    .start();
