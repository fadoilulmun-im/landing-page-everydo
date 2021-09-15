/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
const _component = useComponent("downloadbutton","/app/web/src/components/downloadbutton",{});
return eval(_component.render);
}