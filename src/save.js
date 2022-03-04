import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { text } = attributes;
  return (
    // RichText.Content enables component to display text without editing features
    // Takes in data from edit.js RichText component
    <RichText.Content {...useBlockProps.save()} tagName="h4" value={text} />
  );
}
