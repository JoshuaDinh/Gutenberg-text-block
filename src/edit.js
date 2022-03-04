import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { text } = attributes;
  console.log(attributes);
  // RichText Component allows editing on block editor
  return (
    <>
      <BlockControls
        controls={[
          {
            title: "Button 1",
            icon: "admin-generic",
            isActive: true,
            onClick: () => console.log("Button 1 clicked"),
          },
          {
            title: "Button 2",
            icon: "admin-comments",
            isActive: false,
            onClick: () => console.log("Button 2 clicked"),
          },
        ]}
      >
        <ToolbarGroup>
          <ToolbarButton
            title="Align Left"
            icon="editor-alignleft"
            onClick={() => console.log("Align Left")}
          />
          <ToolbarButton
            title="Align Center"
            icon="editor-aligncenter"
            onClick={() => console.log("Align Center")}
          />
          <ToolbarButton
            title="Align Right"
            icon="editor-alignright"
            onClick={() => console.log("Align Right")}
          />
        </ToolbarGroup>
      </BlockControls>
      <RichText
        {...useBlockProps()}
        onChange={(value) => setAttributes({ text: value })}
        value={text}
        placeholder={__("Your Text..", "text-box")}
        //tagName assigns element type
        tagName="h4"
        //Allows options for component
        allowedFormats={["core/bold"]}
      />
    </>
  );
}
