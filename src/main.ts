import Aurelia from 'aurelia'
import {MyApp} from './my-app'
import {MduiWebTask} from "aurelia-mdui";

Aurelia
    .register(MduiWebTask)
    .app(MyApp)
    .start();
