import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import parser from '@typescript-eslint/parser';

import {
	ESLint,
} from 'eslint';

import javascript from './eslint.config.js.mjs';
import module from './eslint.config.mjs';
import typescript from './eslint.config.ts';

import {
	javascript as javascript_direct,
	typescript as typescript_direct,
} from './index.ts';

void describe('javascript', () => {
	void it('behaves', async () => {
		await assert.doesNotReject(async () => {
			const instance = new ESLint({
				fix: false,
				overrideConfigFile: true,
				overrideConfig: javascript,
			});

			await instance.lintFiles(
				`${import.meta.dirname}/eslint.config.mjs`,
			);
		});
	});

	void it('behaves directly', async () => {
		await assert.doesNotReject(async () => {
			const instance = new ESLint({
				fix: false,
				overrideConfigFile: true,
				overrideConfig: javascript_direct,
			});

			await instance.lintFiles(
				`${import.meta.dirname}/eslint.config.mjs`,
			);
		});
	});
});

void describe('module', () => {
	void it('behaves', async () => {
		await assert.doesNotReject(async () => {
			const instance = new ESLint({
				fix: false,
				overrideConfigFile: true,
				overrideConfig: module,
			});

			await instance.lintFiles(
				`${import.meta.dirname}/eslint.config.mjs`,
			);
		});
	});
});

void describe('typescript', () => {
	void it('behaves', async () => {
		await assert.doesNotReject(async () => {
			const instance = new ESLint({
				fix: false,
				overrideConfigFile: true,
				overrideConfig: typescript,
			});

			await instance.lintFiles(
				`${import.meta.dirname}/eslint.config.ts`,
			);
		});
	});

	void it('behaves directly', async () => {
		await assert.doesNotReject(async () => {
			const instance = new ESLint({
				fix: false,
				overrideConfigFile: true,
				overrideConfig: [
					{
						languageOptions: {
							parser,
							parserOptions: {
								project: ['./tsconfig.eslint.json'],
							},
						},
					},
					...typescript_direct,
					{
						files: [
							'./**/*.ts',
						],
						ignores: [
							'./**/*.d.ts',
						],
					},
				],
			});

			await instance.lintFiles(
				`${import.meta.dirname}/eslint.config.ts`,
			);
		});
	});
});
