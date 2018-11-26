import React from 'react'
import ReactDOM from 'react-dom'
import {Textarea, Box, Flex, Provider} from 'rendition';

ReactDOM.render(
    <Provider>
        <Box>
            <Flex>
                <Textarea monospace />
                <Textarea monospace />
                <Textarea monospace />
            </Flex>
        </Box>
    </Provider>,
    document.getElementById('root')
);
