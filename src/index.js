import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Box, Provider } from 'rendition';

ReactDOM.render(
    <Provider>
        <Box my={3} mx={['auto', 15]}>
            <Button primary emphasized>Click me</Button>
        </Box>
    </Provider>,
    document.getElementById('root')
);
