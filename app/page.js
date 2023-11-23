import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";

export default async function Home () {
    const data = await getPage("/");
    return <BlockRenderer blocks={data} />
}