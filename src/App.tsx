import './App.css'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block } from "@blocknote/core";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from 'react';

function App() {
  // Stores the document JSON.
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [blocksLocal, saveBlocksLocal] = useLocalStorage("blocksLocal", "");
  // const ref = React.useRef(null);
  // React.useEffect(() => {
  //   createDrawing(ref.current, blocksLocal, saveBlocksLocal);
  // }, [blocksLocal, saveBlocksLocal]);

   // Creates a new editor instance.
   // Creates a new editor instance.
   const editor = useCreateBlockNote({
    initialContent:  JSON.parse(blocksLocal) || [{
      type: "heading",
      content: "This is a heading block",
    }],
  });

 
  return (
    <>
    <BlockNoteView editor={editor} onChange={() => {
            setBlocks(editor.document);
            saveBlocksLocal(JSON.stringify(editor.document));
          }}/>
    </>
  )
}

export default App
