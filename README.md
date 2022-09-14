# Handlebars debugger

Simple Node.js script for viewing a handlebars template in your browser. Intended for small applications, such as mail templates, with few dependencies

## Usage
- See `config.schema.js` for the configuration you need to provide for the script.
- Create a file `config.js` with your configuration. I suggest using absolute paths for ease.
- Run `node run debug` and wait for the message `Server listening on 8888` to appear.
- Visit `localhost:8888` and see your template

## Warning
This is a VERY simple script created on the fly. It won't handle invalid paths, handlebars errors, etc at all.