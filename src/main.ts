import Aurelia from 'aurelia'
import {MyApp} from './my-app'
import {MdcWebTask} from "./mdc-web-task";

Aurelia
    .register(MdcWebTask)
    .app(MyApp)
    .start();
