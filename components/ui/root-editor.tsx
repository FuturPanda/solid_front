"use client";
import * as React from "react";

import { cn } from "@/front/lib/utils";
import { TypographyH1 } from "../typography/typography";

export interface RootEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const RootEditor = React.forwardRef<HTMLTextAreaElement, RootEditorProps>(
  ({ className, ...props }, ref) => {
    const [lineValue, setLineValue] = React.useState("");
    const rootNode = document.getElementById("root-node");
    const onClick = () => {
      rootNode?.appendChild(TypographyH1);
    };
    const onChange = (e) => {
      setLineValue("e.target.value");
      console.log(e);
    };
    return (
      <div
        id="root-node"
        onClick={onClick}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      ></div>
    );
  }
);
RootEditor.displayName = "Textarea";

export { RootEditor };
