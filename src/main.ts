import Aurelia from 'aurelia'
import { MyApp } from './my-app'
import { AppTask, IContainer, IAttrMapper, NodeObserverLocator } from 'aurelia'

Aurelia
    .register(AppTask.creating(IContainer, container => {
      const attrMapper = container.get(IAttrMapper)

      // Set default way for bound properties
      attrMapper.useTwoWay((el, property) => {
        switch (el.tagName) {
          case 'MD-FILLED-TEXT-FIELD':
            return property === 'value'
          case 'MD-SWITCH':
            return property === 'selected'
          case 'MD-CHECKBOX':
            return property === 'checked'
          default:
            return false
        }
      });

      // Connect Aurelia property observer to DOM events
      // Add the custom event when you get the following error: Trying to set value for property value in dirty checker
      const valuePropertyConfig = { events: ['input', 'change'] }
      const nodeObserverLocator = container.get(NodeObserverLocator)
      nodeObserverLocator.useConfig({
        'MD-CHECKBOX': {
          checked: valuePropertyConfig
        },
        'MD-SWITCH': {
          selected: valuePropertyConfig
        },
        'MD-FILLED-TEXT-FIELD': {
          value: valuePropertyConfig
        },
      });
    }))
    .app(MyApp)
    .start();
