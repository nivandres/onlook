import React from 'react';
import jsx from 'react/jsx-runtime';
import patch from 'intl-t/patch';

process.env.NODE_ENV !== 'development' && patch(React, jsx);
