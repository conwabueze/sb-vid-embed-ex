/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

import { Helmet } from "react-helmet";

import { Error } from "./components/Error";

/**
 * React Component
 */
export interface AAWidgetProps extends BlockAttributes {
  title: string
}

function scriptAdd() {
  const head = document.querySelector("head");
  const scriptOne = document.createElement("script");
  scriptOne.src = "https://thv.warnermedia.com/embed.js"
  document.head.appendChild(scriptOne);
  const scriptTwo = document.createElement("script");
  scriptTwo.innerHTML = 'new thvEmbedder("thv_player","bfa476a0c977ced56bd090303bf77f5f3157","","");';
  document.head.appendChild(scriptTwo);
}

export const AAWidget = ({ title }: AAWidgetProps): ReactElement => {
  return <div className="aa-widget">
    <div>
      <div>{scriptAdd()}</div>
      <div id="thv_player"></div>
    </div>
  </div>
};

