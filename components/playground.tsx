"use client";
import { Metadata } from "next";
import { History } from "lucide-react";

import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { Icons } from "./icons";
import { TiptapEditor } from "./ui/editor";
import { RootEditor } from "./ui/root-editor";
import Tiptap from "./Tiptap";
import type { ElasticDoc } from "@/types";

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
};

export default function PlaygroundPage({ ydoc }) {
  return (
    <>
      <div className=" h-full w-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
        </div>
        <Separator />
        <div className="flex h-full flex-col space-y-4">
          <Tiptap ydoc={ydoc} />
          {/* <Textarea
            placeholder="Write a tagline for an ice cream shop"
            className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
          /> */}
          <div className="flex items-center space-x-2">
            <Button>Submit</Button>
            <Button variant="secondary">
              <span className="sr-only">Show history</span>
              <History className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
