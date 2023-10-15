import {AppTask, IAttrMapper, IContainer, NodeObserverLocator} from "aurelia";

/**
 * MdcWebTask to connect elements to Aurelia2
 * @see https://docs.aurelia.io/getting-to-know-aurelia/app-tasks
 */

export const MdcWebTask = AppTask.creating(IContainer, container => {
  const attrMapper = container.get(IAttrMapper)

  // Set default way for bound properties
  attrMapper.useTwoWay((el, property) => {
    switch (el.tagName) {
      case 'MD-FILLED-TEXT-FIELD':
      case 'MD-FILLED-SELECT':
      case 'MD-OUTLINED-SELECT':
        return property === 'value'
      case 'MD-SWITCH':
        return property === 'selected'
      case 'MD-CHECKBOX':
        return property === 'checked'
      default:
        console.warn(`Not handled element event: ${el.tagName}`)
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
    'MD-FILLED-SELECT': {
      value: valuePropertyConfig
    },
    'MD-OUTLINED-SELECT': {
      value: valuePropertyConfig
    }
  });
});
