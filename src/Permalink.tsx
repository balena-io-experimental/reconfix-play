import * as React from "react";
import {Component} from "react";
import {Box, Flex, Link, Textarea} from 'rendition';

interface PermalinkProps {
	text?: string;
}

class Permalink extends Component<PermalinkProps, any> {

	constructor(props: PermalinkProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<Box>
				<Link href={this.getPermalink()}>
					permalink
				</Link>
			</Box>
		)
	}

	getPermalink() {
		try {
			return '?yaml=' + encodeURIComponent(this.props.text)
		} catch (e) {
			console.log(e)
		}
	}

}

export default Permalink;
