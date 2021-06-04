# Elle Logger 

[![npm version](https://badge.fury.io/js/elle-logger.svg)](https://badge.fury.io/js/elle-logger)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.paypal.me/LuigiElle)

Simple & Customizable colored logger written in Typescript

## Usage

Import the library inside the file where you want to log: 

``` js
import { ElleLogger } from 'elle-logger';
```

Declare the logger variable and, if you want, pass a configuration object.

``` js
private readonly logger = new ElleLogger({
        context: 'AppController',
        date: {
            useDate: true,
            dateFormat: 'YYYY-MM-DD HH:mm:ss'
        },
        logConfiguration: {
            error: {
                background: 'red' // or use hex code
                color: '#000'
            }
        }
    })
```

Enjoy.

## Credits 
- [![LuigiElleBalotta](https://github.com/LuigiElleBalotta)](https://github.com/LuigiElleBalotta)
