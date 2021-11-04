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

import {Linter} from 'eslint';
import path from 'path';

export const gts = require(path.join(
  __dirname,
  '../../node_modules/gts/.eslintrc.json'
)) as unknown as Linter.BaseConfig;

// guard against multiple overrides for now
/* istanbul ignore next */
if (gts.overrides.length !== 1) {
  throw new Error('Expected gts/.eslintrc.json to have one override');
}

export const override = gts.overrides[0] as Linter.ConfigOverride;
