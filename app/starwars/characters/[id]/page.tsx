import { SWCharacterSheet } from "@/components/SWCharacterSheet";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { promises as fs } from "fs";

const CharacterSheetPage = async () => {
  const file = await fs.readFile("/characters/character1.json", "utf8");

  const characterData = await JSON.parse(file);

  return characterData ? (
    <ModalProvider>
      <DrawerProvider>
        <SWCharacterSheet characterData={characterData} />
      </DrawerProvider>
    </ModalProvider>
  ) : (
    <></>
  );
};

export default CharacterSheetPage;
