# Button Tool

Button tool to create a Button link for the [Editor.js](https://ifmo.su/editor).

## Installation

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    button: {
      class: Button,
    },
  },
  
  ...
});
```

## Config Params

This Tool has no config params

## Output data

```json
{
    "type" : "button",
    "data" : {
      "url": "https://yoururl.com",
      "label": "Button Label",
      "targetBlank": true
    }
}
```
