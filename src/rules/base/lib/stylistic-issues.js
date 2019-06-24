/**
 * @module stylistic-issues
 */
module.exports = {

  /**
   * @namespace
   */
  rules: {

    // Colors

    /**
     * Specify lowercase or uppercase for hex colors.
     *
     * https://stylelint.io/user-guide/rules/color-hex-case/
     *
     * @example
     * "upper"
     */
    "color-hex-case": "upper",

    /**
     * Specify short or long notation for hex colors.
     *
     * https://stylelint.io/user-guide/rules/color-hex-length/
     *
     * @example
     * "long"
     */
    "color-hex-length": "long",

    // Font Family
    /**
     * Specify whether or not quotation marks should be used around font family
     * names.
     *
     * https://stylelint.io/user-guide/rules/font-family-name-quotes/
     *
     * @example
     * "always-where-recommended"
     */
    "font-family-name-quotes": "always-where-recommended",

    // Font Weight
    /**
     * Require numeric or named (where possible) font-weight values. Also, when
     * named values are expected, require only valid names.
     *
     * https://stylelint.io/user-guide/rules/font-weight-notation/
     *
     * @example
     * ["numeric", {
     *  ignore: [],
     * }]
     */
    "font-weight-notation": ["numeric", {
      ignore: [],
    }],

    // Function
    /**
     * Require a newline or disallow whitespace after the commas of functions.
     *
     * https://stylelint.io/user-guide/rules/function-comma-newline-after/
     *
     * @example
     * "never-multi-line"
     */
    "function-comma-newline-after": "never-multi-line",

    /**
     * Require a newline or disallow whitespace before the commas of functions.
     *
     * https://stylelint.io/user-guide/rules/function-comma-newline-before/
     *
     * @example
     * "never-multi-line"
     */
    "function-comma-newline-before": "never-multi-line",

    /**
     * Require a single space or disallow whitespace after the commas of functions.
     *
     * https://stylelint.io/user-guide/rules/function-comma-space-after/
     *
     * @example
     * "always"
     */
    "function-comma-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the commas of functions.
     *
     * https://stylelint.io/user-guide/rules/function-comma-space-before/
     *
     * @example
     * "never"
     */
    "function-comma-space-before": "never",

    /**
     * Limit the number of adjacent empty lines within functions.
     *
     * https://stylelint.io/user-guide/rules/function-max-empty-lines/
     *
     * @example
     * 0
     */
    "function-max-empty-lines": 0,

    /**
     * Specify lowercase or uppercase for function names.
     *
     * https://stylelint.io/user-guide/rules/function-name-case/
     *
     * @example
     * ["lower", {
     *  ignoreFunctions: [],
     * }]
     */
    "function-name-case": ["lower", {
      ignoreFunctions: [],
    }],

    /**
     * Require a newline or disallow whitespace on the inside of the parentheses of functions.
     *
     * https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
     *
     * @example
     * "never-multi-line"
     */
    "function-parentheses-newline-inside": "never-multi-line",

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses of functions.
     *
     * https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
     *
     * @example
     * "never"
     */
    "function-parentheses-space-inside": "never",

    /**
     * Require or disallow quotes for urls.
     *
     * https://stylelint.io/user-guide/rules/function-url-quotes/
     *
     * @example
     * ["always", {
     *  except: ["empty"],
     * }]
     */
    "function-url-quotes": ["always", {
      except: ["empty"],
    }],

    /**
     * Require or disallow whitespace after functions.
     *
     * https://stylelint.io/user-guide/rules/function-whitespace-after/
     *
     * @example
     * "always"
     */
    "function-whitespace-after": "always",

    // Number
    /**
     * Require or disallow a leading zero for fractional numbers less than 1.
     *
     * https://stylelint.io/user-guide/rules/number-leading-zero/
     *
     * @example
     * "always"
     */
    "number-leading-zero": "always",

    /**
     * Disallow trailing zeros in numbers.
     *
     * https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
     *
     * @example
     * true
     */
    "number-no-trailing-zeros": true,

    // String
    /**
     * Specify single or double quotes around strings.
     *
     * https://stylelint.io/user-guide/rules/string-quotes/
     *
     * @example
     * ["double", {
     *  avoidEscape: true,
     * }]
     */
    "string-quotes": ["double", {
      avoidEscape: true,
    }],

    // Length
    /**
     * Disallow units for zero lengths.
     *
     * https://stylelint.io/user-guide/rules/length-zero-no-unit/
     *
     * @example
     * true
     */
    "length-zero-no-unit": true,

    // Unit
    /**
     * Specify lowercase or uppercase for units.
     *
     * https://stylelint.io/user-guide/rules/unit-case/
     *
     * @example
     * "lower"
     */
    "unit-case": "lower",

    // Value
    /**
     * Specify lowercase or uppercase for keywords values.
     *
     * https://stylelint.io/user-guide/rules/value-keyword-case/
     *
     * @example
     * ["lower", {
     *  ignoreKeywords: [],
     *  ignoreProperties: [],
     * }]
     */
    "value-keyword-case": ["lower", {
      ignoreKeywords: [],
      ignoreProperties: [],
    }],

    // Value List
    /**
     * Require a newline or disallow whitespace after the commas of value lists.
     *
     * https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
     *
     * @example
     * "never-multi-line",
     */
    "value-list-comma-newline-after": "never-multi-line",

    /**
     * Require a newline or disallow whitespace before the commas of value lists.
     *
     * https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
     *
     * @example
     * "never-multi-line"
     */
    "value-list-comma-newline-before": "never-multi-line",

    /**
     * Require a single space or disallow whitespace after the commas of value lists.
     *
     * https://stylelint.io/user-guide/rules/value-list-comma-space-after/
     *
     * @example
     * "always"
     */
    "value-list-comma-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the commas of value lists.
     *
     * https://stylelint.io/user-guide/rules/value-list-comma-space-before/
     *
     * @example
     * "never"
     */
    "value-list-comma-space-before": "never",

    /**
     * Limit the number of adjacent empty lines within value lists.
     *
     * https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
     *
     * @example
     * 0
     */
    "value-list-max-empty-lines": 0,

    // Custom Property
    /**
     * Require or disallow an empty line before custom properties (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
     *
     * @example
     * ["never", {
     *  except: [],
     *  ignore: [],
     * }]
     */
    "custom-property-empty-line-before": ["never", {
      except: [],
      ignore: [],
    }],

    /**
     * Specify lowercase or uppercase for properties.
     *
     * https://stylelint.io/user-guide/rules/property-case/
     *
     * @example
     * "lower"
     */
    "property-case": "lower",

    // Declaration

    /**
     * Require a single space or disallow whitespace after the bang of declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-bang-space-after/
     *
     * @example
     * "never"
     */
    "declaration-bang-space-after": "never",

    /**
     * Require a single space or disallow whitespace before the bang of declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-bang-space-before/
     *
     * @example
     * "always"
     */
    "declaration-bang-space-before": "always",

    /**
     * Require a newline or disallow whitespace after the colon of declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-colon-newline-after/
     *
     * @example
     * "always-multi-line"
     */
    "declaration-colon-newline-after": "always-multi-line",

    /**
     * Require a single space or disallow whitespace after the colon of declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-colon-space-after/
     *
     * @example
     * "always"
     */
    "declaration-colon-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the colon of declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-colon-space-before/
     *
     * @example
     * "never"
     */
    "declaration-colon-space-before": "never",

    /**
     * Require or disallow an empty line before declarations.
     *
     * https://stylelint.io/user-guide/rules/declaration-empty-line-before/
     *
     * @example
     * ["never", {
     *  except: [],
     *  ignore: [],
     * }]
     */
    "declaration-empty-line-before": ["never", {
      except: [],
      ignore: [],
    }],

    // Declaration Block

    /**
     * Require a newline or disallow whitespace after the semicolons of declaration blocks.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
     *
     * @example
     * "always"
     */
    "declaration-block-semicolon-newline-after": "always-multi-line",

    /**
     * Require a newline or disallow whitespace before the semicolons of declaration blocks.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
     *
     * @example
     * "never-multi-line"
     */
    "declaration-block-semicolon-newline-before": "never-multi-line",

    /**
     * Require a single space or disallow whitespace after the semicolons of declaration blocks.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
     *
     * @example
     * null
     */
    "declaration-block-semicolon-space-after": null,

    /**
     * Require a single space or disallow whitespace before the semicolons of declaration blocks.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
     *
     * @example
     * "never"
     */
    "declaration-block-semicolon-space-before": "never",

    /**
     * Require or disallow a trailing semicolon within declaration blocks.
     *
     * https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
     *
     * @example
     * "always"
     */
    "declaration-block-trailing-semicolon": "always",

    // Block

    /**
     * Require or disallow an empty line before the closing brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
     *
     * @example
     * "never"
     */
    "block-closing-brace-empty-line-before": "never",

    /**
     * Require a newline or disallow whitespace after the closing brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
     *
     * @example
     * "always"
     */
    "block-closing-brace-newline-after": ["always", {
      ignoreAtRules: [],
    }],

    /**
     * Require a newline or disallow whitespace before the closing brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
     *
     * @example
     * "always"
     */
    "block-closing-brace-newline-before": "always-multi-line",

    /**
     * Require a single space or disallow whitespace after the closing brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-closing-brace-space-after/
     *
     * @example
     * "never"
     */
    "block-closing-brace-space-after": null,

    /**
     * Require a single space or disallow whitespace before the closing brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
     *
     * @example
     * "never"
     */
    "block-closing-brace-space-before": null,

    /**
     * Require a newline after the opening brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
     *
     * @example
     * "always"
     */
    "block-opening-brace-newline-after": "always",

    /**
     * @description Require a newline or disallow whitespace before the opening brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/
     *
     * @example
     * null
     */
    "block-opening-brace-newline-before": null,

    /**
     * Require a single space or disallow whitespace after the opening brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
     *
     * @example
     * null
     */
    "block-opening-brace-space-after": null,

    /**
     * Require a single space or disallow whitespace before the opening brace of blocks.
     *
     * https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
     *
     * @example
     * null
     */
    "block-opening-brace-space-before": null,

    /**
     * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
     *
     * @example
     * "never"
     */
    "selector-attribute-brackets-space-inside": "never",

    /**
     * Require a single space or disallow whitespace after operators within attribute selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
     *
     * @example
     * "never"
     */
    "selector-attribute-operator-space-after": "never",

    /**
     * Require a single space or disallow whitespace before operators within attribute selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
     *
     * @example
     * "never"
     */
    "selector-attribute-operator-space-before": "never",

    /**
     * Require or disallow quotes for attribute values.
     *
     * https://stylelint.io/user-guide/rules/selector-attribute-quotes/
     *
     * @example
     * "always"
     */
    "selector-attribute-quotes": "always",

    /**
     * Require a single space or disallow whitespace after the combinators of selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-combinator-space-after/
     *
     * @example
     * "always"
     */
    "selector-combinator-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the combinators of selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-combinator-space-before/
     *
     * @example
     * "always"
     */
    "selector-combinator-space-before": "always",

    /**
     * Disallow non-space characters for descendant combinators of selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
     *
     * @example
     * true
     */
    "selector-descendant-combinator-no-non-space": true,

    /**
     * Specify lowercase or uppercase for pseudo-class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
     *
     * @example
     * "lower"
     */
    "selector-pseudo-class-case": "lower",

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
     *
     * @example
     * "never"
     */
    "selector-pseudo-class-parentheses-space-inside": "never",

    /**
     * Specify lowercase or uppercase for pseudo-element selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
     *
     * @example
     * "lower"
     */
    "selector-pseudo-element-case": "lower",

    /**
     * Specify single or double colon notation for applicable pseudo-elements.
     *
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
     *
     * @example
     * "double"
     */
    "selector-pseudo-element-colon-notation": "double",

    /**
     * Specify lowercase or uppercase for type selectors.
     *
     * https://stylelint.io/user-guide/rules/selector-type-case/
     *
     * @example
     * "lower"
     */
    "selector-type-case": "lower",

    /**
     * Require a newline or disallow whitespace after the commas of selector lists.
     *
     * https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
     *
     * @example
     * "always-multi-line"
     */
    "selector-list-comma-newline-after": "always-multi-line",

    /**
     * Require a newline or disallow whitespace before the commas of selector lists.
     *
     * https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
     *
     * @example
     * "never-multi-line"
     */
    "selector-list-comma-newline-before": "never-multi-line",

    /**
     * Require a single space or disallow whitespace after the commas of selector lists.
     *
     * https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
     *
     * @example
     * "always"
     */
    "selector-list-comma-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the commas of selector lists.
     *
     * https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
     *
     * @example
     * "never"
     */
    "selector-list-comma-space-before": "never",

    // Rule
    /**
     * Require or disallow an empty line before rules.
     *
     * https://stylelint.io/user-guide/rules/rule-empty-line-before/
     *
     * @example
     * ["always", {
     *  except: ["inside-block"],
     *  ignore: [],
     * }]
     */
    "rule-empty-line-before": ["always", {
      except: ["inside-block"],
      ignore: []
    }],

    // Media Feature
    /**
     * Require a single space or disallow whitespace after the colon in media features.
     *
     * https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
     *
     * @example
     * "always"
     */
    "media-feature-colon-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the colon in media
     * features (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
     *
     * @example
     * "never"
     */
    "media-feature-colon-space-before": "never",

    /**
     * Specify lowercase or uppercase for media feature names (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/media-feature-name-case/
     *
     * @example
     * "lower"
     */
    "media-feature-name-case": "lower",

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
     *
     * @example
     * "never"
     */
    "media-feature-parentheses-space-inside": "never",

    /**
     * Require a single space or disallow whitespace after the range operator in media features (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
     *
     * @example
     * "never"
     */
    "media-feature-range-operator-space-after": "never",

    /**
     * Require a single space or disallow whitespace before the range operator in media features (Autofixable)
     *
     * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
     *
     * @example
     * "never"
     */
    "media-feature-range-operator-space-before": "never",

    // Media Query List
    /**
     * Require a newline or disallow whitespace after the commas of media query lists.
     *
     * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
     *
     * @example
     * "always"
     */
    "media-query-list-comma-newline-after": "always",

    /**
     * Require a newline or disallow whitespace before the commas of media query lists.
     *
     * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
     *
     * @example
     * "never-multi-line"
     */
    "media-query-list-comma-newline-before": "never-multi-line",

    /**
     * Require a single space or disallow whitespace after the commas of media query lists.
     *
     * https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
     *
     * @example
     * "always"
     */
    "media-query-list-comma-space-after": "always",

    /**
     * Require a single space or disallow whitespace before the commas of media query lists.
     *
     * https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
     *
     * @example
     * "never"
     */
    "media-query-list-comma-space-before": "never",

    // At-rule
    /**
     * Require or disallow an empty line before at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
     *
     * @example
     * ["never", {
     *  except: [],
     *  ignore: [],
     * }]
     */
    "at-rule-empty-line-before": ["never", {
      except: [],
      ignore: [],
    }],

    /**
     * Specify lowercase or uppercase for at-rules names.
     *
     * https://stylelint.io/user-guide/rules/at-rule-name-case/
     *
     * @example
     * "lower"
     */
    "at-rule-name-case": "lower",

    /**
     * Require a newline after at-rule names.
     *
     * https://stylelint.io/user-guide/rules/at-rule-name-newline-after/
     *
     * @example
     * "always-multi-line"
     */
    "at-rule-name-newline-after": "always-multi-line",

    /**
     * Require a single space after at-rule names.
     *
     * https://stylelint.io/user-guide/rules/at-rule-name-space-after/
     *
     * @example
     * "always"
     */
    "at-rule-name-space-after": "always",

    /**
     * Require a newline after the semicolon of at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
     *
     * @example
     * "always"
     */
    "at-rule-semicolon-newline-after": "always",

    /**
     * Require a single space or disallow whitespace before the semicolons of at-rules.
     *
     * https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/
     *
     * @example
     * "never"
     */
    "at-rule-semicolon-space-before": "never",

    // Comment
    /**
     * Require or disallow an empty line before comments (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/comment-empty-line-before/
     *
     * @example
     * "never"
     */
    "comment-empty-line-before": "never",

    /**
     * Require or disallow whitespace on the inside of comment markers (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/comment-whitespace-inside/
     *
     * @example
     * "never"
     */
    "comment-whitespace-inside": "never",

    // General/Sheet
    /**
     * Specify indentation (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/indentation/
     *
     * @example
     * [2, {
     *  baseIndentLevel: 2,
     *  indentInsideParens: "twice",
     *  indentInsideParens: true,
     *  indentClosingBrace: false,
     *  except: [],
     *  ignore: [],
     * }]
     */
    "indentation": [2, {
      baseIndentLevel: 2,
      indentInsideParens: "twice",
      indentClosingBrace: false,
      except: [],
      ignore: [],
    }],

    /**
     * Specify unix or windows linebreaks (Autofixable).
     *
     * https://stylelint.io/user-guide/rules/linebreaks/
     *
     * @example
     * "unix"
     */
    "linebreaks": "unix",

    /**
     * Limit the number of adjacent empty lines.
     *
     * https://stylelint.io/user-guide/rules/max-empty-lines/
     *
     * @example
     * [1, {
     *  ignore: [],
     * }]
     */
    "max-empty-lines": [1, {
      ignore: [],
    }],

    /**
     * Limit the length of a line.
     *
     * https://stylelint.io/user-guide/rules/max-line-length/
     *
     * @example
     * [40, {
     *  ignore: [],
     *  ignorePattern: "",
     * }]
     */
    "max-line-length": [40, {
      ignore: [],
      ignorePattern: "",
    }],

    /**
     * Disallow end-of-line whitespace.
     *
     * https://stylelint.io/user-guide/rules/no-eol-whitespace/
     *
     * @example
     * true
     */
    "no-eol-whitespace": true,

    /**
     * Disallow missing end-of-source newlines.
     *
     * https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
     *
     * @example
     * true
     */
    "no-missing-end-of-source-newline": true,

    /**
     * Disallow empty first lines.
     *
     * https://stylelint.io/user-guide/rules/no-empty-first-line/
     *
     * @example
     * true
     */
    "no-empty-first-line": true,
  }
}
