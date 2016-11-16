Selectize.define('hide-arrow', function (options) {
    options = $.extend({
    }, options);

    var self = this;
    this.setup = (function () {
        var original = self.setup;
        return function () {
            // override the item rendering method to add the button to each
            original.apply(this, arguments);

            var $wrappedInput = this.$wrapper.find(".selectize-input");

            var handleArrow = function ($inpt) {
                if ($inpt.val()) {
                    $wrappedInput.addClass("no-arrow");
                } else {
                    $wrappedInput.removeClass("no-arrow");
                }
            };

            var $input = this.$input;
            handleArrow($input);
            $input.change(function () {
                handleArrow($input);
            });
        };
    })();
});