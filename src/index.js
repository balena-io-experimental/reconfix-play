import React from 'react'
import ReactDOM from 'react-dom'
import {Textarea, Box, Provider} from 'rendition';

ReactDOM.render(
    <Provider>
        <Box>
            <Textarea monospace />
        </Box>
    </Provider>,
    document.getElementById('root')
);
