import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  PanelColorSettings,
  ContrastChecker,
} from "@wordpress/block-editor";
import {
  ToolbarGroup,
  ToolbarButton,
  ToolbarDropdownMenu,
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  AnglePickerControl,
  ColorPicker,
  ColorPalette,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { text, alignment, backgroundColor, textColor } = attributes;

  const onChangeText = (newText) => {
    setAttributes({ text: newText });
  };

  const onChangeAlignment = (newAlignment) => {
    setAttributes({ alignment: newAlignment });
  };

  const onBackgroundColorChange = (newBackgroundColor) => {
    setAttributes({ backgroundColor: newBackgroundColor });
  };

  const onTextColorChange = (newTextColor) => {
    setAttributes({ textColor: newTextColor });
  };

  return (
    <>
      {/* Controls block styles & settings from editor */}
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings", "text-box")}
          icon="admin-appearence"
          initialOpen
          disableCustomColors={false}
          colorSettings={[
            {
              value: backgroundColor,
              onChange: onBackgroundColorChange,
              label: __("Background Color", "text-box"),
            },
            {
              value: textColor,
              onChange: onTextColorChange,
              label: __("Text Color", "text-box"),
            },
          ]}
        >
          <ContrastChecker
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
        </PanelColorSettings>
        <PanelBody
          title={__("Settings", "text-box")}
          icon="admin-appearence"
          initialOpen
        >
          <TextControl
            label="Input Label"
            value={text}
            onChange={onChangeText}
            help="help"
          />
          <TextareaControl
            label="Text area Label"
            value={text}
            onChange={onChangeText}
            help="help"
          />
          <ToggleControl
            label="Toggle Label"
            checked={true}
            onChangeComplete={(value) => console.log(value)}
          />
          <AnglePickerControl />
          <ColorPicker color={"#F03"} onChange={(v) => console.log(v)} />
          <ColorPalette
            colors={[
              { name: "red", color: "#F00" },
              { name: "black", color: "#000" },
            ]}
            value={backgroundColor}
            onChange={onBackgroundColorChange}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        {/* Value w/ onChangeAlignment control which alignment property is highlighted */}
        <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
      </BlockControls>
      {/*RichText Component allows editing on block editor takes in attributes from RichText Component*/}
      <RichText
        {...useBlockProps({
          className: `text-box-align-${alignment}`,
          style: { backgroundColor: backgroundColor, color: textColor },
        })}
        onChange={onChangeText}
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
// import { __ } from "@wordpress/i18n";
// import {
//   useBlockProps,
//   RichText,
//   BlockControls,
// } from "@wordpress/block-editor";
// import {
//   ToolbarGroup,
//   ToolbarButton,
//   ToolbarDropdownMenu,
// } from "@wordpress/components";
// import "./editor.scss";

// export default function Edit({ attributes, setAttributes }) {
//   const { text } = attributes;
//   console.log(attributes);
//   return (
//     <>
//       <BlockControls group="inline">
//         <p>Inline Controls</p>
//       </BlockControls>
//       <BlockControls group="block">
//         <p>Block Controls</p>
//       </BlockControls>
//       <BlockControls
//         controls={[
//           {
//             title: "Button 1",
//             icon: "admin-generic",
//             isActive: true,
//             onClick: () => console.log("Button 1 clicked"),
//           },
//           {
//             title: "Button 2",
//             icon: "admin-comments",
//             isActive: false,
//             onClick: () => console.log("Button 2 clicked"),
//           },
//         ]}
//       >
//         {/* Creates editing functionality for block within Wordpress */}
//         {/* Conditional rendering of controls */}
//         {text && (
//           <ToolbarGroup>
//             <ToolbarButton
//               title="Align Left"
//               icon="editor-alignleft"
//               onClick={() => console.log("Align Left")}
//             />
//             <ToolbarButton
//               title="Align Center"
//               icon="editor-aligncenter"
//               onClick={() => console.log("Align Center")}
//             />
//             <ToolbarButton
//               title="Align Right"
//               icon="editor-alignright"
//               onClick={() => console.log("Align Right")}
//             />
//             <ToolbarDropdownMenu
//               icon="arrow-down-alt2"
//               label={__("More Alignments", "text-box")}
//               controls={[
//                 {
//                   title: __("Wide", "text-box"),
//                   icon: "align-wide",
//                 },
//                 {
//                   title: __("Full", "text-box"),
//                   icon: "align-full-width",
//                 },
//               ]}
//             />
//           </ToolbarGroup>
//         )}
//       </BlockControls>
//       {/*RichText Component allows editing on block editor takes in attributes from RichText Component*/}
//       <RichText
//         {...useBlockProps()}
//         onChange={(value) => setAttributes({ text: value })}
//         value={text}
//         placeholder={__("Your Text..", "text-box")}
//         //tagName assigns element type
//         tagName="h4"
//         //Allows options for component
//         allowedFormats={["core/bold"]}
//       />
//     </>
//   );
// }
