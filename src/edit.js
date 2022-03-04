import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
  // RichText Component allows editing on block editor
  return (
    <RichText
      {...useBlockProps()}
      placeholder={__("Your Text..", "text-box")}
      //tagName assigns element type
      tagName="h4"
      //Allows options for component
      allowedFormats={["core/bold"]}
    />
  );
}
