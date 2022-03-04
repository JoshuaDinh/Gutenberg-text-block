import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
} from "@wordpress/block-editor";
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
      />
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
