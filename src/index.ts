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

import {typescript} from './configs/typescript';
import {react} from './configs/react';
import {web} from './configs/web';
import {node} from './configs/node';
import {Linter} from 'eslint';

const configuration: {configs: {[key: string]: Linter.BaseConfig}} = {
  configs: {
    typescript,
    web,
    react,
    node,
  },
};

export default configuration;
