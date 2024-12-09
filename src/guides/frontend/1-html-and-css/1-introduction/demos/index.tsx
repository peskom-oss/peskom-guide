import DefaultSandbox from "@/components/Sandbox";
import HelloHtmlStatic from "./HelloHtmlStatic";
import CssCombineTwoStyle from "./CssCombineTwoStyle";
import HelloWorldHtmlCss from "./HelloWorld";

const DEMOS = {
  demo1: HelloHtmlStatic,
  demo2: CssCombineTwoStyle,
  demo3: HelloWorldHtmlCss,
};

interface Props {
  demo: keyof typeof DEMOS;
}

export default function Demos(props: Props) {
  const { demo } = props;
  const fileList = DEMOS[demo];

  return <DefaultSandbox template="static" files={fileList} />;
}
