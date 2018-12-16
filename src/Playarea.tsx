import * as React from "react";
import { Textarea, TextareaProps } from "rendition";

const Playarea = (props: TextareaProps) => (
  <Textarea
    monospace={true}
    minRows={12}
    autoRows={true}
    maxRows={16}
    {...props}
  />
);

export default Playarea;
