"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { useState } from "react";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import {
  HocuspocusProvider,
  HocuspocusProviderConfiguration,
} from "@hocuspocus/provider";
import { useEffect } from "react";
const now = new Date();

const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      // ↓ your new keyboard shortcut
      "Mod-l": () => this.editor.commands.toggleBulletList(),
    };
  },
});

const provider = new HocuspocusProvider({
  url: "ws://0.0.0.0:1234",
  name: `${now.getFullYear()}${now.getMonth()}${now.getDay()}`,
  // onOpen() {
  //   console.log("onOpen");
  // },
  // onConnect() {
  //   console.log("onConnect");
  // },
  // onAuthenticated() {
  //   console.log("onAuthenticate");
  // },
  // onAuthenticationFailed: ({ reason }) => {
  //   console.log("onAuthenticateFailed " + reason);
  // },
  // onStatus: ({ status }) => {
  //   console.log("onStatus " + status);
  // },
  // onMessage: ({ event, message }) => {
  //   console.log("onMessage ");
  //   console.log(event);
  //   console.log(message);
  // },
  // onOutgoingMessage: ({ message }) => {
  //   console.log("onOutgoingMessage " + message);
  // },
  onSynced: (data) => {
    // console.log("onSync ");
    // console.log(data);
  },
  // onClose: ({ event }) => {
  //   console.log("onClose " + event);
  // },
  // onDisconnect: ({ event }) => {
  //   console.log("onDisconnect " + event);
  // },
  // onDestroy() {
  //   console.log("onDestroy");
  // },
  // onAwarenessUpdate: ({ added, updated, removed }) => {
  //   console.log("onAwarenessUpdate " + updated);
  // },
  // onAwarenessChange: ({ states }) => {
  //   console.log("onAwarenessChange " + states);
  // },
  // onStateless: ({ payload }) => {
  //   console.log("onStateless " + payload);
  //   // the provider can also send a custom message to the server: provider.sendStateless('any string payload')
  // },
});

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose lg:prose-xl min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]",
      },
    },
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      Document,
      CustomBulletList.configure({
        itemTypeName: "listItem",
        HTMLAttributes: {
          class: "my-6 ml-6 list-disc [&>li]:mt-1",
        },
      }),
      ListItem,
      Heading.configure({
        HTMLAttributes: {
          class: "tiptapheading",
        },
      }),
      Collaboration.configure({
        document: provider.document,
      }),
      // CollaborationCursor.configure({
      //   provider,
      //   user: { name: "John Doe", color: "#ffcc00" },
      // }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "leading-7 [&:not(:first-child)]:mt-1",
        },
      }),
      Text,
    ],
    autofocus: true,
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      console.log(json);
    },
  });

  return (
    <EditorContent
      editor={editor}
      onKeyDown={(e) => {
        if (e.keyCode === 9) e.preventDefault();
      }}
    />
  );
};

export default Tiptap;
