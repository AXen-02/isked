import { FC } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

interface AlertDemoProps {
  title: String;
  description?: String | null;
  variant?: "destructive" | "default" | null;
}

const AlertDemo: FC<AlertDemoProps> = ({ title, description, variant }) => {
  return (
    <Alert variant={variant}>
      <RocketIcon className="h-6 w-6" />
      <AlertTitle className="ml-2">{title}</AlertTitle>
      <AlertDescription className="ml-2">{description}</AlertDescription>
    </Alert>
  );
};

export default AlertDemo;
