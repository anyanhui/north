/**
    @fileOverview
        $.localStorage

        读操作
            $.localStorage('key1')

        写操作
            $.localStorage('key1', 'value1')

        删除操作
            $.removeLocalStorage('key1')
 */
(function ($) {
    /**
        当浏览器支持localStorage时，使用window.localStorage.getItem(key)，
        否则使用$.cookie(key)。
        @param {String} key
        @returns {String} value
     */
    function _get(key) {
        if (key) {
            if (window.localStorage) {
                return window.localStorage.getItem(key);
            }
            else {
                return $.cookie(key);
            }
        }
        else {
            return null;
        }
    }

    /**
        当浏览器支持localStorage时，使用window.localStorage.setItem(key, value)，
        否则使用$.cookie(key, value)。
        @param {String} key
        @param {String} value
     */
    function _set(key, value) {
        if (key && value) {
            if (window.localStorage) {
                window.localStorage.setItem(key, value);
            }
            else {
                $.cookie(key, value);
            }
        }

        return null;
    }

    /**
        当浏览器支持localStorage时，使用window.localStorage.removeItem(key)，
        否则使用$.removeCookie(key)。
        @param {String} key
     */
    function _remove(key) {
        if (key) {
            if (window.localStorage) {
                window.localStorage.removeItem(key);
            }
            else {
                $.removeCookie(key);
            }
        }

        return null;
    }




    /**
        读/写localStorage
        @param {String} key
        @param {String} value

        如果只有一个参数时：
            @returns {String} 当前key对应的value
        否则
            @returns {Object} null
     */
    $.localStorage = $.localstorage = function () {
        var key, value;

        if (arguments.length === 0) {
            return null;
        }
        else if (arguments.length === 1) {
            key = arguments[0];
        }
        else {
            key = arguments[0];
            value = arguments[1];
        }

        if (value) {
            return _set(key, value);
        }
        else {
            return _get(key);
        }
    };

    /**
        删除localStorage
        @param {String} key
     */
    $.removeLocalStorage = $.removelocalstorage = function (key) {
        return _remove(key);
    };
})(jQuery);



