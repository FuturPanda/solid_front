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
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useEffect } from "react";

const ydoc = new Y.Doc();
const provider = new HocuspocusProvider({
  url: "ws://0.0.0.0:1234",
  name: "hp2",
  document: ydoc,
  // onOpen() {
  //   // …
  // },
  // onConnect() {
  //   console.log("conected front");
  // },
  // onAuthenticated() {
  //   // …
  // },
  // onAuthenticationFailed: ({ reason }) => {
  //   // …
  // },
  // onStatus: ({ status }) => {
  //   // …
  // },
  // onMessage: ({ event, message }) => {
  //   // …
  // },
  // onOutgoingMessage: ({ message }) => {
  //   // …
  // },
  // onSynced: ({ state }) => {
  //   // …
  // },
  // onClose: ({ event }) => {
  //   // …
  // },
  // onDisconnect: ({ event }) => {
  //   // …
  // },
  // onDestroy() {
  //   // …
  // },
  // onAwarenessUpdate: ({ added, updated, removed }) => {
  //   // …
  // },
  // onAwarenessChange: ({ states }) => {
  //   // …
  // },
  // onStateless: ({ payload }) => {
  //   // ...
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
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: { name: "John Doe", color: "#ffcc00" },
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "scroll-m-20 text-2xl font-semibold tracking-tight",
        },
      }),
      ,
      Text,
    ],
    autofocus: true,
    content: "yolllllo",
    // onUpdate: ({ editor }) => {
    //   const json = editor.getJSON();
    // },
  });

  //

  // Define `tasks` as an Array
  // const tasks = provider.document.getArray("tasks");

  // Listen for changes
  // tasks.observe(() => {
  //   console.log("tasks were modified");
  // });

  // Add a new task
  // tasks.push(["buy milk"]);

  return <EditorContent editor={editor} />;
};

export default Tiptap;
