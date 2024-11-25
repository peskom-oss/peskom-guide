import DefaultSandbox from "@/components/Sandbox";
import HelloWorldStatic from "./HelloWorldStatic";

const DEMOS = {
  demo1: HelloWorldStatic,
};

interface Props {
  demo: keyof typeof DEMOS;
}

export default function Demos(props: Props) {
  const { demo } = props;
  const fileList = DEMOS[demo];

  return <DefaultSandbox template="static" files={fileList} />;
}
