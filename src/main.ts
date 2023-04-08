import Aurelia from 'aurelia'
import { MyApp } from './my-app'
import {MdcWebTask} from "./mdc-web-task";

const mdcWebTask = MdcWebTask

Aurelia
    .register(MdcWebTask)
    .app(MyApp)
    .start();
