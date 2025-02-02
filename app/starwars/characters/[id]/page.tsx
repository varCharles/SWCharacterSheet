import { SWCharacterSheet } from "@/components/SWCharacterSheet";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { charactersList } from "@/utils/characterlist";

const CharacterSheetPage = async () => {
  const characterData = charactersList()[0];

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
