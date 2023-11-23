import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
    const params = {
        query:`
        query PageQuery($uri: String!) {
         nodeByUri(uri: $uri) {
           ... on Page {
             id
             title
             blocks
             featuredImage{
               node{
                 sourceUrl
               }
             }
             seo {
               title
               metaDesc
             }
           }
           ... on Property {
             id
             title
             blocks
             seo{
               title
               metaDesc
             }
 
 
           }
         }
         acfOptionsMainMenu {
           mainMenu {
             callToActionButton {
               label
               destination{
                 ... on Page {
                   uri
                 }
               }
       
             }
             menuItems {
               menuItem {
                 destination {
                   ... on Page {
                     uri
                   }
                 }
                 label
               }
               items {
                 destination {
                   ... on Page {
                     uri
                   }
                 }
                 label
               }
             }
           }
         }
       }
           `,
           variables:{
            uri,
          }
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
             },
        body: JSON.stringify(params)
    })
    const {data} = await response.json();
    const blocks =  cleanAndTransformBlocks(data.nodeByUri.blocks);

    return blocks;
}