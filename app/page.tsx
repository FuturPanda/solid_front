"use client";
import Image from "next/image";
import { Editor } from "@tiptap/core";
import { Button } from "../components/ui/button";
import PlaygroundPage from "../components/playground";
import NavBar from "../components/navbar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { useEffect } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <PlaygroundPage />
    </main>
  );
}
