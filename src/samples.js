
/** @namespace {Object} ax5 */

/**
 * guid
 * @member {Number} ax5.guid
 */

/**
 * ax5.guid를 구하고 증가시킵니다.
 * @method ax5.get_guid
 * @returns {Number} guid
 */

/**
 * event keyCodes
 * @member {Object} ax5.info.event_keys
 * @example
 * ```
 * {
 * 	BACKSPACE: 8, TAB: 9,
 * 	RETURN: 13, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46,
 * 	HOME: 36, END: 35, PAGEUP: 33, PAGEDOWN: 34, INSERT: 45, SPACE: 32
 * }
 * ```
 */

/**
 * Refer to this by {@link ax5}.
 * @namespace ax5.util
 */

/**
 * Object나 Array의 아이템으로 사용자 함수를 호출합니다.
 * @method ax5.util.each
 * @param {Object|Array} O
 * @param {Function} _fn
 * @example
 * ```js
 * var axf = ax5.util;
 * axf.each([0,1,2], function(){
 * 	// with this
 * });
 * axf.each({a:1, b:2}, function(){
 * 	// with this
 * });
 * ```
 */
