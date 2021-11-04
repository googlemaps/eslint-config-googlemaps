/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import config from './index';

test('config should not change without update to test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "configs": Object {
        "node": Object {
          "env": Object {
            "node": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:node/recommended",
            "prettier",
            "plugin:jest/recommended",
          ],
          "overrides": Array [
            Object {
              "extends": Array [
                "plugin:@typescript-eslint/recommended",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "parserOptions": Object {
                "ecmaVersion": 2018,
                "sourceType": "module",
              },
              "rules": Object {
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-warning-comments": "off",
                "no-dupe-class-members": "off",
                "node/no-empty-function": "off",
                "node/no-missing-import": "off",
                "node/no-missing-require": "off",
                "node/no-unsupported-features/es-syntax": "off",
                "node/shebang": "off",
                "require-atomic-updates": "off",
              },
            },
          ],
          "plugins": Array [
            "node",
            "prettier",
            "jest",
          ],
          "rules": Object {
            "block-scoped-var": "error",
            "eol-last": "error",
            "eqeqeq": "error",
            "no-restricted-properties": Array [
              "error",
              Object {
                "object": "describe",
                "property": "only",
              },
              Object {
                "object": "it",
                "property": "only",
              },
            ],
            "no-trailing-spaces": "error",
            "no-var": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prettier/prettier": "error",
            "quotes": Array [
              "warn",
              "single",
              Object {
                "avoidEscape": true,
              },
            ],
          },
        },
        "react": Object {
          "env": Object {
            "browser": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:node/recommended",
            "prettier",
            "plugin:jest/recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
          ],
          "globals": Object {
            "google": "readonly",
          },
          "overrides": Array [
            Object {
              "extends": Array [
                "plugin:@typescript-eslint/recommended",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "parserOptions": Object {
                "ecmaVersion": 2018,
                "sourceType": "module",
              },
              "rules": Object {
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-warning-comments": "off",
                "no-dupe-class-members": "off",
                "require-atomic-updates": "off",
              },
            },
          ],
          "plugins": Array [
            "node",
            "prettier",
            "jest",
            "react",
            "react-hooks",
          ],
          "rules": Object {
            "block-scoped-var": "error",
            "eol-last": "error",
            "eqeqeq": "error",
            "no-restricted-properties": Array [
              "error",
              Object {
                "object": "describe",
                "property": "only",
              },
              Object {
                "object": "it",
                "property": "only",
              },
            ],
            "no-trailing-spaces": "error",
            "no-var": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prettier/prettier": "error",
            "quotes": Array [
              "warn",
              "single",
              Object {
                "avoidEscape": true,
              },
            ],
          },
        },
        "typescript": Object {
          "extends": Array [
            "eslint:recommended",
            "plugin:node/recommended",
            "prettier",
            "plugin:jest/recommended",
          ],
          "overrides": Array [
            Object {
              "extends": Array [
                "plugin:@typescript-eslint/recommended",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "parserOptions": Object {
                "ecmaVersion": 2018,
                "sourceType": "module",
              },
              "rules": Object {
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-warning-comments": "off",
                "no-dupe-class-members": "off",
                "require-atomic-updates": "off",
              },
            },
          ],
          "plugins": Array [
            "node",
            "prettier",
            "jest",
          ],
          "rules": Object {
            "block-scoped-var": "error",
            "eol-last": "error",
            "eqeqeq": "error",
            "no-restricted-properties": Array [
              "error",
              Object {
                "object": "describe",
                "property": "only",
              },
              Object {
                "object": "it",
                "property": "only",
              },
            ],
            "no-trailing-spaces": "error",
            "no-var": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prettier/prettier": "error",
            "quotes": Array [
              "warn",
              "single",
              Object {
                "avoidEscape": true,
              },
            ],
          },
        },
        "web": Object {
          "env": Object {
            "browser": true,
          },
          "extends": Array [
            "eslint:recommended",
            "plugin:node/recommended",
            "prettier",
            "plugin:jest/recommended",
          ],
          "globals": Object {
            "google": "readonly",
          },
          "overrides": Array [
            Object {
              "extends": Array [
                "plugin:@typescript-eslint/recommended",
              ],
              "files": Array [
                "**/*.ts",
                "**/*.tsx",
              ],
              "parser": "@typescript-eslint/parser",
              "parserOptions": Object {
                "ecmaVersion": 2018,
                "sourceType": "module",
              },
              "rules": Object {
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-warning-comments": "off",
                "no-dupe-class-members": "off",
                "require-atomic-updates": "off",
              },
            },
          ],
          "plugins": Array [
            "node",
            "prettier",
            "jest",
          ],
          "rules": Object {
            "block-scoped-var": "error",
            "eol-last": "error",
            "eqeqeq": "error",
            "no-restricted-properties": Array [
              "error",
              Object {
                "object": "describe",
                "property": "only",
              },
              Object {
                "object": "it",
                "property": "only",
              },
            ],
            "no-trailing-spaces": "error",
            "no-var": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prettier/prettier": "error",
            "quotes": Array [
              "warn",
              "single",
              Object {
                "avoidEscape": true,
              },
            ],
          },
        },
      },
    }
  `);
});
