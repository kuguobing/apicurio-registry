/**
 * @license
 * Copyright 2020 JBoss Inc
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

import React from 'react';
import {
    Button,
    ButtonVariant,
    Toolbar,
    ToolbarGroup,
    ToolbarItem
} from '@patternfly/react-core';
import {CogIcon} from '@patternfly/react-icons';

// TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)

export const AppToolbar = (
    <Toolbar>
        <ToolbarGroup>
            <ToolbarItem>
                <Button id="settings-cog" aria-label="Settings actions" variant={ButtonVariant.plain}>
                    <CogIcon/>
                </Button>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
);

export default AppToolbar;