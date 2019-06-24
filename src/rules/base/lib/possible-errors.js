/**
 * @module possible-errors
 */

module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Disallow invalid hex colors.
     *
     * https://stylelint.io/user-guide/rules/color-no-invalid-hex/
     *
     * @example
     * true
     */
    "color-no-invalid-hex": true,

    // Font Family

    /**
     * Disallow duplicate font family names.
     *
     * https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
     *
     * @example
     * [true, {
     *  ignoreFontFamilyNames: [],
     * }]
     */
    "font-family-no-duplicate-names": [true, {
      ignoreFontFamilyNames: [],
    }],

    /**
     * Disallow missing generic families in lists of font family names.
     *
     * https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
     *
     * @example
     * true
     */
    "font-family-no-missing-generic-family-keyword": true,

    // Function

    /**
     * Disallow an invalid expression within calc functions.
     *
     * https://stylelint.io/user-guide/rules/function-calc-no-invalid/
     *
     * @example
     * true
     */
    "function-calc-no-invalid": true,

    /**
     * Disallow an unspaced operator within calc functions.
     *
     * https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
     *
     * @example
     * true
     */
    "function-calc-no-unspaced-operator": true,

    /**
     * Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
     *
     * https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
     *
     * @example
     * true
     */
    "function-linear-gradient-no-nonstandard-direction": true,

    // String

    /**
     * Disallow (unescaped) newlines in strings.
     *
     * https://stylelint.io/user-guide/rules/string-no-newline/
     *
     * @example
     * true
     */
    "string-no-newline": true,

    // Unit

    /**
     * Disallow unknown units.
     *
     * https://stylelint.io/user-guide/rules/unit-no-unknown/
     *
     * @example
     * [true, {
     *  ignoreUnits: [],
     *  ignoreFunctions: [],
     * }]
     */
    "unit-no-unknown": [true, {
      ignoreUnits: [],
      ignoreFunctions: [],
    }],

    // Property

    /**
     * Disallow unknown properties.
     *
     * https://stylelint.io/user-guide/rules/property-no-unknown/
     *
     * @example
     * [true, {
     *  ignoreProperties: [],
     *  checkPrefixed: false,
     * }]
     */
    "property-no-unknown": [true, {
      ignoreProperties: [],
      checkPrefixed: false,
    }],

    // Keyframe

    /**
     * Disallow !important within keyframe declarations.
     *
     * https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
     *
     * @example
     * true
     */
    "keyframe-declaration-no-important": true,

    // Declaration

    /**
     * Disallow duplicate properties within declaration blocks.
     *
     * NOTES:
     * - We sometimes use duplicate css to force dynamic values using 'auto'
     *   then a 'min-height', etc. So, ignore duplicates with different values.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
     *
     * @example
     * [true, {
     *  ignore: [],
     *  ignoreProperties: [],
     * }]
     */
    "declaration-block-no-duplicate-properties": [true, {
      ignore: [
        "consecutive-duplicates-with-different-values"
      ],
      ignoreProperties: [],
    }],

    /**
     * Disallow shorthand properties that override related longhand properties.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
     *
     * @example
     * true
     */
    "declaration-block-no-shorthand-property-overrides": true,

    // Block

    /**
     * Disallow empty blocks.
     *
     * https://stylelint.io/user-guide/rules/block-no-empty/
     *
     * @example
     * [true, {
     *  ignore: [],
     * }]
     */
    "block-no-empty": [true, {
      ignore: [],
    }],

    // Selector

    /**
     * Disallow unknown pseudo-class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
     *
     * @example
     * [true, {
     *  ignorePseudoClasses: [],
     * }]
     */
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: []
    }],

    /**
     * Disallow unknown pseudo-element selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
     *
     * @example
     * [true, {
     *  ignorePseudoElements: [],
     * }]
     */
    "selector-pseudo-element-no-unknown": [true, {
      ignorePseudoElements: [],
    }],

    /**
     * Disallow unknown type selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-type-no-unknown/
     *
     * @example
     * true
     */
    "selector-type-no-unknown": true,

    // Media Feature

    /**
     * Disallow unknown media feature names.
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
     *
     * @example
     * [true, {
     *  ignoreMediaFeatureNames: [],
     * }]
     */
    "media-feature-name-no-unknown": [true, {
      ignoreMediaFeatureNames: [],
    }],

    // At-rule

    /**
     * Disallow unknown at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-no-unknown/
     *
     * @example
     * [true, {
     *  ignoreAtRules: [],
     * }]
     */
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [],
    }],

    // Comment

    /**
     * Disallow empty comments.
     *
     * https://stylelint.io/user-guide/rules/comment-no-empty/
     *
     * @example
     * true
     */
    "comment-no-empty": true,

    // General / Sheet

    /**
     * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
     *
     * https://stylelint.io/user-guide/rules/no-descending-specificity/
     *
     * @example
     * true
     */
    "no-descending-specificity": true,

    /**
     * Disallow duplicate @import rules within a stylesheet.
     *
     * https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
     *
     * @example
     * true
     */
    "no-duplicate-at-import-rules": true,

    /**
     * Disallow duplicate selectors within a stylesheet.
     *
     * https://stylelint.io/user-guide/rules/no-duplicate-selectors/
     *
     * @example
     * [true, {
     *  disallowInList: false,
     * }]
     */
    "no-duplicate-selectors": [true, {
      disallowInList: false,
    }],

    /**
     * Disallow empty sources.
     *
     * https://stylelint.io/user-guide/rules/no-empty-source/
     *
     * @example
     * true
     */
    "no-empty-source": true,

    /**
     * Disallow extra semicolons.
     *
     * https://stylelint.io/user-guide/rules/no-extra-semicolons/
     *
     * @example
     * true
     */
    "no-extra-semicolons": true,

    /**
     * Disallow double-slash comments (//...) which are not supported by CSS and could lead to unexpected results.
     *
     * https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
     *
     * @example
     * true
     */
    "no-invalid-double-slash-comments": true,
  }
}
