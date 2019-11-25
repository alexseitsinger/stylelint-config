module.exports = {
  rules: {
    // Color
    /**
     * Require (where possible) or disallow named colors.
     *
     * https://stylelint.io/user-guide/rules/color-named/
     *
     * @example
     * ["never", {
     *  ignore: [],
     *  ignoreProperties: [],
     * }]
     */
    "color-named": ["never", {
      ignore: [],
      ignoreProperties: [],
    }],

    /**
     * Disallow hex colors.
     *
     * https://stylelint.io/user-guide/rules/color-no-hex/
     *
     * @example
     * null
     */
    "color-no-hex": null,

    // Function

    /**
     * Specify a blacklist of disallowed functions.
     *
     * https://stylelint.io/user-guide/rules/function-blacklist/
     *
     * @example
     * []
     */
    "function-blacklist": [],

    /**
     * Disallow scheme-relative urls.
     *
     * https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
     *
     * @example
     * true
     */
    "function-url-no-scheme-relative": true,

    /**
     * Specify a blacklist of disallowed URL schemes.
     *
     * https://stylelint.io/user-guide/rules/function-url-scheme-blacklist/
     *
     * @example
     * []
     */
    "function-url-scheme-blacklist": [],

    /**
     * Specify a whitelist of allowed URL schemes.
     *
     * https://stylelint.io/user-guide/rules/function-url-scheme-whitelist/
     *
     * @example
     * []
     */
    "function-url-scheme-whitelist": [],

    /**
     * Specify a whitelist of allowed functions.
     *
     * https://stylelint.io/user-guide/rules/function-whitelist/
     *
     * @example
     * []
     */
    "function-whitelist": [],

    // Keyframes

    /**
     * Specify a pattern for keyframe names.
     *
     *  https://stylelint.io/user-guide/rules/keyframes-name-pattern/
     *
     * @example
     * ".+-.+"
     */
    "keyframes-name-pattern": ".+-.+",

    // Number

    /**
     * Limit the number of decimal places allowed in numbers.
     *
     * https://stylelint.io/user-guide/rules/number-max-precision/
     *
     * @example
     * [3, {
     *   ignoreUnits: [],
     * }]
     */
    "number-max-precision": [3, {
      ignoreUnits: [],
    }],

    // Time

    /**
     * Specify the minimum number of milliseconds for time values.
     *
     * https://stylelint.io/user-guide/rules/time-min-milliseconds/
     *
     * @example
     * 2
     */
    "time-min-milliseconds": 2,

    // Unit

    /**
     * Specify a blacklist of disallowed units.
     *
     * https://stylelint.io/user-guide/rules/unit-blacklist/
     *
     * @example
     * [[], {
     *  ignoreProperties: [],
     *  ignoreMediaFeatureNames: {
     *    unit: [],
     *  }
     * }]
     */
    "unit-blacklist": [[], {
      ignoreProperties: [],
      ignoreMediaFeatureNames: {
        unit: [],
      },
    }],

    /**
     * Specify a whitelist of allowed units.
     *
     * https://stylelint.io/user-guide/rules/unit-whitelist/
     *
     * @example
     * [["px", "em", "rem", "%", "vh", "vw"], {
     *  ignoreProperties: {
     *    unit: [],
     *  }
     * }]
     */
    "unit-whitelist": [["px", "em", "rem", "%", "vh", "vw"], {
      ignoreProperties: {
        unit: [],
      },
    }],

    // Shorthand Property

    /**
     * Disallow redundant values in shorthand properties.
     *
     * https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
     *
     * @example
     * true
     */
    "shorthand-property-no-redundant-values": true,

    // Value

    /**
     * Disallow vendor prefixes for values.
     *
     * https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
     *
     * @example
     * [true, {
     *  ignoreValues: [],
     * }]
     */
    "value-no-vendor-prefix": [true, {
      ignoreValues: [],
    }],

    // Custom Property

    /**
     * Specify a pattern for custom properties.
     *
     * https://stylelint.io/user-guide/rules/custom-property-pattern/
     *
     * @example
     * ""
     */
    "custom-property-pattern": "",

    // Property

    /**
     * Specify a blacklist of disallowed properties.
     *
     * https://stylelint.io/user-guide/rules/property-blacklist/
     *
     * @example
     * []
     */
    "property-blacklist": [],

    /**
     * Disallow vendor prefixes for properties.
     *
     * https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
     *
     * @example
     * [true, {
     *  ignoreProperties: [],
     * }]
     */
    "property-no-vendor-prefix": [true, {
      ignoreProperties: [],
    }],

    /**
     * Specify a whitelist of allowed properties.
     *
     * https://stylelint.io/user-guide/rules/property-whitelist/
     *
     * @example
     * [
     * "margin",
     * "margin-left",
     * "margin-right""
     * "margin-top",
     * "margin-bottom",
     * "padding",
     * "padding-left",
     * "padding-right",
     * "padding-top",
     * "padding-bottom",
     * "width",
     * "min-width",
     * "max-width",
     * "height",
     * "min-height",
     * "max-height",
     * "font",
     * "font-weight",
     * "font-style",
     * "font-family",
     * "font-size",
     * "text-transform",
     * "text-shadow",
     * "text-align",
     * "color",
     * "justify-content",
     * "align-items",
     * "flex",
     * "flex-direction",
     * "display",
     * "float",
     * "z-index",
     * "box-shadow",
     * "box-sizing",
     * "border-radius",
     * "position",
     * "left",
     * "right",
     * "top",
     * "bottom",
     * "vertical-align",
     * "line-height",
     * "border",
     * "border-left",
     * "border-right",
     * "border-top",
     * "border-bottom",
     * "background",
     * "background-color",
     * "background-image",
     * "background-size",
     * "background-position",
     * "background-repeat",
     * "overflow",
     * "overflow-x",
     * "overflow-y",
     * "-styled-mixin[0-9]+",
     * "white-space",
     * "text-overflow",
     * "word-wrap",
     * ]
     */
    "property-whitelist": [
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font",
      "font-weight",
      "font-style",
      "font-family",
      "font-size",
      "text-transform",
      "text-shadow",
      "text-align",
      "color",
      "justify-content",
      "align-items",
      "flex",
      "flex-direction",
      "display",
      "float",
      "z-index",
      "box-shadow",
      "box-sizing",
      "border-radius",
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "vertical-align",
      "line-height",
      "border",
      "border-left",
      "border-right",
      "border-top",
      "border-bottom",
      "background",
      "background-color",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",
      "overflow",
      "overflow-x",
      "overflow-y",
      "word-wrap",
      "text-overflow",
      "white-space",
      "/-styled-mixin[0-9]+",
    ],

    // Declaration

    /**
     * Disallow longhand properties that can be combined into one shorthand property.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
     *
     * @example
     * [true, {
     *  ignoreShorthands: [],
     * }]
     */
    "declaration-block-no-redundant-longhand-properties": [true, {
      ignoreShorthands: [],
    }],

    /**
     * Disallow !important within declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-no-important/
     *
     * @example
     * true
     */
    "declaration-no-important": true,

    /**
     * Specify a blacklist of disallowed property and unit pairs within declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist/
     *
     * @example
     * {}
     */
    "declaration-property-unit-blacklist": {
      //"unprefixed-proprety-name": [],
    },

    /**
     * Specify a whitelist of allowed property and unit pairs within declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist/
     *
     * @example
     *{}
     */
    "declaration-property-unit-whitelist": {
      //"unprefixed-property-name": [],
    },

    /**
     * Specify a blacklist of disallowed property and value pairs within declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/
     *
     * @example
     * {}
     */
    "declaration-property-value-blacklist": {
      //"unprefixed-property-name": [],
    },

    /**
     * Specify a whitelist of allowed property and value pairs within declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-property-value-whitelist/
     *
     * @example
     * {}
     */
    "declaration-property-value-whitelist": {
      //"unprefixed-property-name": [],
    },

    // Declaration Block

    /**
     * Limit the number of declarations within a single-line declaration block.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
     *
     * @example
     * 10
     */
    "declaration-block-single-line-max-declarations": 10,

    // Selector

    /**
     * Specify a blacklist of disallowed attribute operators.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist/
     *
     * @example
     * []
     */
    "selector-attribute-operator-blacklist": [],

    /**
     * Specify a whitelist of allowed attribute operators.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist/
     *
     * @example
     * []
     */
    "selector-attribute-operator-whitelist": [],

    /**
     * Specify a pattern for class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-class-pattern/
     *
     * @example
     * ["", {
     *  resolveNestedSelectors: false,
     * }]
     */
    "selector-class-pattern": ["", {
      resolveNestedSelectors: false,
    }],

    /**
     * Specify a blacklist of disallowed combinators.
     *
     * https://stylelint.io/user-guide/rules/selector-combinator-blacklist/
     *
     * @example
     * []
     */
    "selector-combinator-blacklist": [],

    /**
     * Specify a whitelist of allowed combinators.
     *
     * https://stylelint.io/user-guide/rules/selector-combinator-whitelist/
     *
     * @example
     * []
     */
    "selector-combinator-whitelist": [],

    /**
     * Specify a pattern for ID selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-id-pattern/
     *
     * @example
     * ""
     */
    "selector-id-pattern": "",

    /**
     * Limit the number of attribute selectors in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-attribute/
     *
     * @example
     * [1, {
     *  ignoreAttributes: [],
     * }]
     */
    "selector-max-attribute": [1, {
      ignoreAttributes: [],
    }],

    /**
     * Limit the number of classes in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-class/
     *
     * @example
     * 10
     */
    "selector-max-class": 10,

    /**
     * Limit the number of combinators in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-combinators/
     *
     * @example
     * 10
     */
    "selector-max-combinators": 10,

    /**
     * Limit the number of compound selectors in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
     *
     * @example
     * 10
     */
    "selector-max-compound-selectors": 10,

    /**
     * Limit the number of adjacent empty lines within selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-max-empty-lines/
     *
     * @example
     * 0
     */
    "selector-max-empty-lines": 0,

    /**
     * Limit the number of ID selectors in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-id/
     *
     * @example
     * 10
     */
    "selector-max-id": 10,

    /**
     * Limit the number of pseudo-classes in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
     *
     * @example
     * 10
     */
    "selector-max-pseudo-class": 10,

    /**
     * Limit the specificity of selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-max-specificity/
     *
     * @example
     * null
     */
    "selector-max-specificity": null,

    /**
     * Limit the number of type selectors in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-type/
     *
     * @example
     * [10, {
     *  ignore: [],
     *  ignoreTypes: [],
     * }]
     */
    "selector-max-type": [10, {
      ignore: [],
      ignoreTypes: [],
    }],

    /**
     * Limit the number of universal selectors in a selector.
     *
     * https://stylelint.io/user-guide/rules/selector-max-universal/
     *
     * @example
     * 1
     */
    "selector-max-universal": 1,

    /**
     * Specify a pattern for the selectors of rules nested within rules.
     *
     * https://stylelint.io/user-guide/rules/selector-nested-pattern/
     *
     * @example
     * "(?:(?:(?:&:)|(?:& > ))?(?:(?:[a-z-]+)|(?:\${[a-zA-Z]+}),?))+"
     */
    "selector-nested-pattern": "(?:(?:(?:&:)|(?:& > ))?(?:(?:[a-z-]+)|(?:\${[a-zA-Z]+}),?))+",

    /**
     * Disallow qualifying a selector by type.
     *
     * https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
     *
     * @example
     * [true, {
     *  ignore: [],
     * }]
     */
    "selector-no-qualifying-type": [true, {
      ignore: [],
    }],

    /**
     * Disallow vendor prefixes for selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
     *
     * @example
     * [true, {
     *  ignoreSelectors: [],
     * }]
     */
    "selector-no-vendor-prefix": [true, {
      ignoreSelectors: [],
    }],

    /**
     * Specify a blacklist of disallowed pseudo-class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist/
     *
     * @example
     * []
     */
    "selector-pseudo-class-blacklist": [],

    /**
     * Specify a whitelist of allowed pseudo-class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist/
     *
     * @example
     * [
     * "hover",
     * "focus",
     * "focus-within",
     * "active",
     * "has",
     * "disabled",
     * "first-of-type",
     * "last-of-type",
     * "nth-of-type",
     * "nth-last-of-type",
     * "only-of-type",
     * "placeholder-shown",
     * "required",
     * "root",
     * "target",
     * "visited",
     * "link",
     * "any-link",
     * "not",
     * "invalid",
     * "out-of-range",
     * "empty",
     * "enabled",
     * "default",
     * "checked",
     * "in-range",
     * "lang",
     * ]
     */
    "selector-pseudo-class-whitelist": [
      "hover",
      "focus",
      "focus-within",
      "active",
      "has",
      "disabled",
      "first-of-type",
      "last-of-type",
      "nth-of-type",
      "nth-last-of-type",
      "only-of-type",
      "placeholder-shown",
      "required",
      "root",
      "target",
      "visited",
      "link",
      "any-link",
      "not",
      "invalid",
      "out-of-range",
      "empty",
      "enabled",
      "default",
      "checked",
      "in-range",
      "lang",
    ],

    /**
     * Specify a blacklist of disallowed pseudo-element selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist/
     *
     * @example
     * []
     */
    "selector-pseudo-element-blacklist": [],

    /**
     * Specify a whitelist of allowed pseudo-element selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist/
     *
     * @example
     * []
     */
    "selector-pseudo-element-whitelist": [],

    // Media Feature

    /**
     * Specify a blacklist of disallowed media feature names.
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-blacklist/
     *
     * @example
     * []
     */
    "media-feature-name-blacklist": [],

    /**
     * Disallow vendor prefixes for media feature names.
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
     *
     * @example
     * true
     */
    "media-feature-name-no-vendor-prefix": true,

    /**
     * Specify a whitelist of allowed media feature name and value pairs.
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist/
     *
     * @example
     * {}
     */
    "media-feature-name-value-whitelist": {
      //"unprefixed-media-feature-name": [],
    },

    /**
     * Specify a whitelist of allowed media feature names.
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-whitelist/
     *
     * @example
     * []
     */
    "media-feature-name-whitelist": [],

    // Custom Media

    /**
     * Specify a pattern for custom media query names.
     *
     * https://stylelint.io/user-guide/rules/custom-media-pattern/
     *
     * @example
     * ".+-.+"
     */
    "custom-media-pattern": ".+-.+",

    // At-rule

    /**
     * Specify a blacklist of disallowed at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-blacklist/
     *
     * @example
     * []
     */
    "at-rule-blacklist": [],

    /**
     * Disallow vendor prefixes for at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
     *
     * @example
     * true
     */
    "at-rule-no-vendor-prefix": true,

    /**
     * Specify a requirelist of properties for an at-rule.
     *
     * https://stylelint.io/user-guide/rules/at-rule-property-requirelist/
     *
     * @example
     * {}
     */
    "at-rule-property-requirelist": {
      //"at-rule-name": [],
    },

    /**
     * Specify a whitelist of allowed at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-whitelist/
     *
     * @example
     * []
     */
    "at-rule-whitelist": [],

    // Comment

    /**
     * Specify a blacklist of disallowed words within comments.
     *
     * https://stylelint.io/user-guide/rules/comment-word-blacklist/
     *
     * @example
     * []
     */
    "comment-word-blacklist": [],

    // General / Sheet

    /**
     * Limit the depth of nesting.
     *
     * https://stylelint.io/user-guide/rules/max-nesting-depth/
     *
     * @example
     * [10, {
     *  ignore: [],
     *  ignoreAtRules: [],
     * }
     */
    "max-nesting-depth": [10, {
      ignore: [
        //"blockless-at-rules",
        //"pseudo-classes",
      ],
      ignoreAtRules: [],
    }],

    /**
     * Disallow unknown animations.
     *
     * https://stylelint.io/user-guide/rules/no-unknown-animations/
     *
     * @example
     * true
     */
    "no-unknown-animations": true,
  }
}
