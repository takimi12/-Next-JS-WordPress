import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover/";
import { FormspreeForm } from "components/FormspreeForm";
import { Gallery } from "components/Gallery";
import {Heading} from "components/Heading/";
import { Paragraph } from "components/Paragraph";
import { PropertyFeatures } from "components/PropertyFeatures";
import { PropertySearch } from "components/PropertySearch";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({blocks}) => {
    return blocks.map((block) => {
       switch(block.name) {
        case "core/gallery":{
            return (
                <Gallery 
                items={block.innerBlocks}
                cropImages={block.attributes.cropImages}
                columns={block.attributes.columns || 3}
                key={block.id} />
                    )
        }
        case "acf/formspreeform": {
            return <FormspreeForm 
            key={block.id}
            formId={block.attributes.data.form_id} 
            />;
        }
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
        case "core/post-title":
        case 'core/heading': {
            return <Heading 
            key={block.id} 
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes} />;
        }
        case "acf/propertyfeatures": {
            return <PropertyFeatures 
            key={block.id} 
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.hasParking}
            petFriendly={block.attributes.pet_friendly}
            />;
         
            
        }
        case "acf/propertysearch": {
            return <PropertySearch key={block.id} />;
        }
        case "core/cover": {
            return (
            <Cover key={block.id} background={block.attributes.url}
            >
            <BlockRenderer blocks={block.innerBlocks} />
            </Cover>
            )
        }
        case "core/columns": {
            return <Columns 
            key={block.id} 
            isstackOnMobile={block.attributes.stackOnMobile}>
            <BlockRenderer blocks={block.innerBlocks} />
            </Columns>
                ;
        }
        case "core/column": {
            return( 
             <Column
            key={block.id}
            width={block.attributes.width}
            >
            <BlockRenderer blocks={block.innerBlocks} />
            </Column>
            )
        }
        case "core/group": 
        case "core/block": {
            return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
        }
        case "core/image": {
            return (
                <Image 
                key={block.id} 
                src={block.attributes.url}
                height={block.attributes.height}
                width={block.attributes.width}
                alt={block.attributes.alt || ""}
                />
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