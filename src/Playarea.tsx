import * as React from "react";
import { Flex, Textarea, TextareaProps } from "rendition";

function noTab(event: React.KeyboardEvent<HTMLElement>) {
  const keyCode = event.keyCode || event.which;

  if (keyCode == 9) {
    event.preventDefault();
  }
}

const Playarea = (props: TextareaProps) => (
    <Textarea
      monospace={true}
      minRows={12}
      autoRows={true}
      maxRows={16}
      onKeyDown={event => noTab(event)}
      {...props}
    />
);

export default Playarea;
