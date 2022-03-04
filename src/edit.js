import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
  // RichText Component allows editing on block editor
  return <RichText {...useBlockProps()} />;
}
