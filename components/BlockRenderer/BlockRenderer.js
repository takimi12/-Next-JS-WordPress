import { CallToActionButton } from "components/CallToActionButton";
import { Cover } from "components/Cover/";
import {Heading} from "components/Heading/";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

export const BlockRenderer = ({blocks}) => {
    return blocks.map((block) => {
       switch(block.name) {
        case "acf/ctabutton":{
            return (
            <CallToActionButton 
            key={block.id}
             buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
            />            
            );
        }
        case 'core/paragraph': {
            return <Paragraph 
            key={block.id} 
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={theme[block.attributes.textColor] ||
            block.attributes.style?.color?.text}
             />;
        }
        case 'core/heading': {
            return <Heading 
            key={block.id} 
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes} />;
        }
        case "core/cover": {
            return (
            <Cover key={block.id} background={block.attributes.url}
            >
            <BlockRenderer blocks={block.innerBlocks} />
            </Cover>
            )
        }
        default:{
          console.log("unkown", block);
            return null;
        }
        }
});
};
 
export default BlockRenderer;