import React from 'react'
import ReactDOM from 'react-dom'
import {Textarea, Box, Flex, Provider} from 'rendition';

ReactDOM.render(
    <Provider>
        <Box>
            <Flex>
                <Textarea monospace placeholder="yaml"/>
                <Textarea monospace placeholder="json schema" />
                <Textarea monospace placeholder="ui object" />
            </Flex>
        </Box>
        <Box>
            <Flex>
                <Textarea monospace placeholder="errors" />
            </Flex>
        </Box>
    </Provider>,
    document.getElementById('root')
);
