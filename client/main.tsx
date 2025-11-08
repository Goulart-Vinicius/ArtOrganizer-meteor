import {Meteor} from 'meteor/meteor';
import React from 'react';
import {createRoot} from 'react-dom/client';

import { Router } from './Router';

Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container!);
    root.render(<Router/>);
});
