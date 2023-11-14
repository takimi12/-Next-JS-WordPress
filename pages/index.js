import { gql } from "@apollo/client";
import client from "../client";
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks";
import { BlockRenderer } from "components/BlockRenderer";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { MainMenu } from "components/MainMenu";

export default function Home(props) {
console.log(props);
  return (
    <div>
      <MainMenu items={props.mainMenuItems} />
<BlockRenderer blocks={props.blocks} />
  </div>
  )
  ;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
 query PageQuery {
  nodeByUri(uri: "/") {
    ... on Page {
      id
      title
      blocks
    }
  }
  acfOptionsMainMenu {
    mainMenu {
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
  });
  const blocks =  cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
        ),
        blocks,
    },
  };
};