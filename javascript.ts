import js from '@eslint/js';
// eslint-disable-next-line imports/no-unresolved
import typescript_eslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import imports from 'eslint-plugin-import';

import type {
	ESLint,
	Linter,
} from 'eslint';

const javascript: (
	| {
		readonly plugins: Record<string, ESLint.Plugin>,
		readonly rules: Readonly<Linter.RulesRecord>,
	}
	| {
		name?: string,
		rules?: object,
	}
	| { ignores: string[] }
)[] = [
	js.configs.recommended,
	...typescript_eslint.configs.recommended,
	{
		plugins: {
			'@stylistic': stylistic,
			imports,
		},
		rules: {
			'@typescript-eslint/member-ordering': ['error', {
				default: {
					memberTypes: [
						'signature',
						'call-signature',
						'private-accessor',
						'#private-accessor',
						'protected-accessor',
						'public-accessor',
						'public-field',
						'protected-field',
						'private-field',
						'private-readonly-field',
						'protected-readonly-field',
						'public-readonly-field',
						'private-static-field',
						'protected-static-field',
						'public-static-field',
						'constructor',
						'public-get',
						'protected-get',
						'private-get',
						'abstract-get',
						'public-set',
						'protected-set',
						'private-set',
						'abstract-set',
						'public-static-get',
						'protected-static-get',
						'private-static-get',
						'public-static-set',
						'protected-static-set',
						'private-static-set',
						'public-method',
						'protected-method',
						'private-method',
						'public-abstract-method',
						'protected-abstract-method',
						'public-static-method',
						'protected-static-method',
						'private-static-method',
					],

					order: 'natural-case-insensitive',
				},
			}],

			'sort-imports': ['error', {
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
			}],

			'@stylistic/array-bracket-newline': ['error', 'consistent'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/array-element-newline': ['error', 'consistent'],
			'@stylistic/arrow-parens': ['error', 'always'],
			'@stylistic/arrow-spacing': ['error', {before: true, after: true}],
			'@stylistic/block-spacing': ['error', 'always'],
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/comma-spacing': ['error', {
				before: false,
				after: true,
			}],
			'@stylistic/computed-property-spacing': ['error', 'never'],
			'@stylistic/curly-newline': ['error', {consistent: true}],
			'@stylistic/dot-location': ['error', 'property'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/function-call-argument-newline': [
				'error',
				'consistent',
			],
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/generator-star-spacing': ['error', 'after'],
			'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/key-spacing': ['error', {
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			}],
			'@stylistic/linebreak-style': ['error', 'unix'],
			'@stylistic/lines-around-comment': ['error', {
				beforeBlockComment: true,
				afterBlockComment: false,
				beforeLineComment: true,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: false,
				allowClassStart: false,
				allowClassEnd: false,
				allowObjectStart: true,
				allowObjectEnd: false,
				allowArrayStart: true,
				allowArrayEnd: false,
				afterHashbangComment: true,
			}],
			'@stylistic/lines-between-class-members': ['error', 'always', {
				exceptAfterOverload: true,
			}],
			'@stylistic/max-len': ['warn', {
				code: 79,
			}],
			'@stylistic/max-statements-per-line': ['error', {max: 1}],
			'@stylistic/member-delimiter-style': ['error', {
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false,
				},
				overrides: {
					interface: {
						multiline: {
							delimiter: 'semi',
							requireLast: true,
						},
						singleline: {
							delimiter: 'semi',
							requireLast: false,
						},
					},
				},
			}],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/new-parens': ['error', 'always'],
			'@stylistic/no-confusing-arrow': ['error'],
			'@stylistic/no-extra-semi': ['error'],
			'@stylistic/no-floating-decimal': ['error'],
			'@stylistic/no-mixed-operators': ['error'],
			'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'@stylistic/no-multi-spaces': ['error'],
			'@stylistic/no-multiple-empty-lines': ['error'],
			'@stylistic/no-tabs': ['error', {allowIndentationTabs: true}],
			'@stylistic/no-trailing-spaces': ['error'],
			'@stylistic/no-whitespace-before-property': ['error'],
			'@stylistic/object-curly-newline': ['error', {
				ImportDeclaration: 'always',
				ExportDeclaration: 'always',
			}],
			'@stylistic/one-var-declaration-per-line': [
				'error',
				'initializations',
			],
			'@stylistic/operator-linebreak': ['error', 'before', {
				overrides: {
					'?': 'before',
					':': 'before',
					'&&': 'before',
					'||': 'before',
				},
			}],
			'@stylistic/padded-blocks': ['error', 'never'],
			'@stylistic/padding-line-between-statements': [
				'error',
				{blankLine: 'always', prev: '*', next: 'return'},
			],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/quotes': ['error', 'single', {
				allowTemplateLiterals: 'always',
			}],
			'@stylistic/rest-spread-spacing': ['error', 'never'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/semi-spacing': ['error', {before: false, after: true}],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/space-before-blocks': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', {
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
				catch: 'always',
			}],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/space-infix-ops': ['error', {
				int32Hint: true,
				ignoreTypes: true,
			}],
			'@stylistic/space-unary-ops': ['error'],
			'@stylistic/spaced-comment': ['error', 'always'],
			'@stylistic/switch-colon-spacing': ['error', {
				before: false,
				after: true,
			}],
			'@stylistic/template-curly-spacing': ['error', 'never'],
			'@stylistic/template-tag-spacing': ['error', 'never'],
			'@stylistic/type-annotation-spacing': ['error', {
				before: false,
				after: true,
			}],
			'@stylistic/type-generic-spacing': ['error'],
			'@stylistic/type-named-tuple-spacing': ['error'],
			'@stylistic/wrap-iife': ['error', 'inside'],
			'@stylistic/yield-star-spacing': ['error', 'after'],
			'imports/export': ['error'],
			'imports/no-deprecated': ['error'],
			'imports/no-empty-named-blocks': ['error'],
			'imports/no-extraneous-dependencies': ['error'],
			'imports/no-mutable-exports': ['error'],
			'imports/no-named-as-default': ['error'],
			'imports/no-named-as-default-member': ['error'],
			'imports/no-unused-modules': ['error'],
			'imports/no-amd': ['error'],
			'imports/no-commonjs': ['error'],
			'imports/no-import-module-exports': ['error'],
			'imports/unambiguous': ['error'],
			'imports/default': ['error'],
			'imports/enforce-node-protocol-usage': ['error', 'always'],
			'imports/named': ['error'],
			'imports/namespace': ['error'],
			'imports/no-absolute-path': ['error'],
			'imports/no-cycle': ['error'],
			'imports/no-dynamic-require': ['error'],
			'imports/no-internal-modules': ['error'],
			'imports/no-relative-packages': ['error'],
			'imports/no-relative-parent-imports': ['error'],
			'imports/no-self-import': ['error'],
			'imports/no-unresolved': ['error'],
			'imports/no-useless-path-segments': ['error'],
			'imports/no-webpack-loader-syntax': ['error'],
			'imports/consistent-type-specifier-style': ['error'],
			'imports/exports-last': ['error'],
			'imports/extensions': ['error', 'ignorePackages'],
			'imports/first': ['error'],
			'imports/group-exports': ['error'],
			'imports/newline-after-import': ['error'],
			'imports/no-anonymous-default-export': ['error'],
			'imports/no-default-export': ['error'],
			'imports/no-duplicates': ['error'],
			'imports/no-named-default': ['error'],
			'imports/no-namespace': ['error'],
			'imports/no-unassigned-import': ['error'],
			'imports/order': ['error', {
				groups: [
					'builtin',
					'external',
					'sibling',
					'parent',
				],
			}],
		},
	},
	{
		ignores: ['**/*.d.ts'],
	},
];

export {
	javascript,
};
