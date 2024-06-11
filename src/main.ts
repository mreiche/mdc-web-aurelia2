import Aurelia from 'aurelia'
import {MyApp} from './my-app'
import {MduiWebTask} from "./mdui-web-task";

Aurelia
    .register(MduiWebTask)
    .app(MyApp)
    .start();
