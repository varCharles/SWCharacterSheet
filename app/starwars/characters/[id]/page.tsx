import { SWCharacterSheet } from "@/components/SWCharacterSheet";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { charactersList } from "@/utils/characterlist";

const CharacterSheetPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const characterData = charactersList()[id - 1];

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
