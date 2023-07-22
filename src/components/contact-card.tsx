import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { contactcard } from "@/types";

export function ContactCard(props: contactcard) {
  const Icon = Icons[props.icon || "placeholder"];
  return (
    <Card className="w-[320px] h-[180px]">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </div>
        <div className="flex justify-center rounded-md text-secondary-foreground">
          <Icon />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <Button variant="outline" className="w-full">
            {props.title} Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
