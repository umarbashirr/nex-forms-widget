import { Button } from "./ui/button";

const WidgetButton = ({ text, onClick }: { text: any; onClick: any }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default WidgetButton;
