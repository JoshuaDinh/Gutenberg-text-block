import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { text, alignment, backgroundColor } = attributes;
  return (
    // RichText.Content enables component to display text without editing features
    // Takes in data from edit.js RichText component
    <RichText.Content
      {...useBlockProps.save({
        className: `text-box-align-${alignment}`,
        style: { backgroundColor: backgroundColor },
      })}
      tagName="h4"
      value={text}
    />
  );
}
