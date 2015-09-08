# nightmare-iframe

[Nightmare](https://github.com/segmentio/nightmare) plugin for Swiftly.com

### .withFrameName(iframeName, callback(nightmare))

iframeName should be an iframe name attribute (no selectors) or index number, since it uses [switchToFrame](http://phantomjs.org/api/webpage/method/switch-to-frame.html).

## Examples

```html
	<!-- for this given iframe -->
	<iframe name="iframe-name" src="/login-form" />
```

```js
	var Nightmare = require('nightmare');
	var iframe = require('nightmare-iframe');

	new Nightmare()
		.goto('https://a-domain.com')
		// ...
		.use(iframe.withFrameName('iframe-name', function(nightmare) {
			nightmare
				.wait('form#login')
				.type('input[name=username]', 'username')
				.type('input[name=password]', 'password')
				.click('button[type=submit]')
		}))
		.wait('.for-my-logged-in-indicator-or-something-else')
		// ...
		.run(function(err, nightmare){
			if (err) return console.error(err);
			console.log('Done!');
		});
```

## Thanks

Thanks to [Richard Lai](https://github.com/rclai) for [initial code](https://github.com/segmentio/nightmare/issues/203).

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) 2015 Evo Stamatov <aviolito@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
