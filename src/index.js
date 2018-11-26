import React from 'react'
import ReactDOM from 'react-dom'
import {Textarea, Box, Heading, Divider, Flex, Provider} from 'rendition';

class Playground extends React.Component {
    constructor () {
        super();

        this.state = {
            json_schema: ''
        }
    }

    evaluate(value) {
        this.setState({json_schema: value})
    }

    render() {
        return (
            <Box>
                <Box>
                    <Heading>Play with reconfix</Heading>
                </Box>
                <Divider/>
                <Box>
                    <Flex>
                        <Textarea monospace placeholder="yaml" onInput={ event=> this.evaluate(event.target.value) }/>
                        <Textarea monospace placeholder="json schema" readOnly={true} value={this.state.json_schema}/>
                        <Textarea monospace placeholder="ui object"/>
                    </Flex>
                </Box>
                <Box>
                    <Flex>
                        <Textarea monospace placeholder="errors"/>
                    </Flex>
                </Box>
            </Box>
        )
    };
};

ReactDOM.render(
    <Provider>
        <Playground/>
    </Provider>,
    document.getElementById('root')
);
