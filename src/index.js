import React from 'react'
import ReactDOM from 'react-dom'
import {Textarea, Box, Heading, Divider, Flex, Provider} from 'rendition';

const evaluate = (event) => {
    try {
        console.log(event.target.value)
    } catch (error) {
        console.error(error)
    }
}

ReactDOM.render(
    <Provider>
        <Box>
            <Heading>Play with reconfix</Heading>
        </Box>
        <Divider/>
        <Box>
            <Flex>
                <Textarea monospace placeholder="yaml" onInput={ event => evaluate(event) }/>
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
