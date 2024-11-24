import Anchor from "./components/Anchor.astro";
import Strong from "./components/Strong.astro";
import OrderedList from "./components/List/OrderedList.astro";
import UnorderedList from "./components/List/UnorderedList.astro";
import ListItem from "./components/List/ListItem.astro";
import H1 from "./components/Typography/H1.astro";
import H2 from "./components/Typography/H2.astro";
import H3 from "./components/Typography/H3.astro";
import H4 from "./components/Typography/H4.astro";
import H5 from "./components/Typography/H5.astro";
import H6 from "./components/Typography/H6.astro";
import Paragraph from "./components/Typography/Paragraph.astro";
import EM from "./components/Typography/EM.astro";
import InlineCode from "./components/InlineCode.astro";
import Code from "./components/Code.astro";

export const MDXComponents = {
  a: Anchor,
  strong: Strong,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  em: EM,
  code: InlineCode,
  pre: Code,
};
