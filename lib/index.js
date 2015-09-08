var debug = require('debug')('nightmare-iframe');

// Thanks to Richard Lai (https://github.com/rclai) for initial code.
// see: https://github.com/segmentio/nightmare/issues/203

function backToParentFrame(nightmare) {
    debug('.backToParentFrame()');
    nightmare.page.switchToParentFrame();
}

// `iframeName` is either an index number or the iframe's name
// no class names or ids unfortunately
exports.withFrameName = function(iframeName, fn) {
    return function(nightmare) {
        debug('.withFrame():' + iframeName);
        nightmare.page.switchToFrame(iframeName);
        var cache = nightmare.queue;
        nightmare.queue = [];
        fn(nightmare);
        nightmare.queue = nightmare.queue.concat(cache);
        nightmare.use(backToParentFrame)
    }
};
