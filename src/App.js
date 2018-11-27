import "./App.css";

import React, { Component} from "react";
import { Button, Box } from 'rendition';

class App extends Component{
    render(){
        return(
                <Box my={3} mx={['auto', 15]}>
                    <Button primary emphasized>Click me</Button>
                </Box>
        );
    }
}

export default App;
