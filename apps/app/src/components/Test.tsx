import { Button } from "ui/src/components/ui/button";

export const Test = () => {
  return (
    <div className="flex gap-2 p-3">
      <Button>hello</Button>
      <Button variant="secondary">hello</Button>
      <Button variant="outline">hello</Button>
    </div>
  );
};
