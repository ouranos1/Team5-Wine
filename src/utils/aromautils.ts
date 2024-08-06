import { Aroma } from "@/types/Aroma";

export const Aromas: Aroma[] = [
  { name: "CHERRY", selected: false },
  { name: "BERRY", selected: false },
  { name: "OAK", selected: false },
  { name: "VANILLA", selected: false },
  { name: "PEPPER", selected: false },
  { name: "BAKING", selected: false },
  { name: "GRASS", selected: false },
  { name: "APPLE", selected: false },
  { name: "PEACH", selected: false },
  { name: "CITRUS", selected: false },
  { name: "TROPICAL", selected: false },
  { name: "MINERAL", selected: false },
  { name: "FLOWER", selected: false },
  { name: "TOBACCO", selected: false },
  { name: "EARTH", selected: false },
  { name: "CHOCOLATE", selected: false },
  { name: "SPICE", selected: false },
  { name: "CARAMEL", selected: false },
  { name: "LEATHER", selected: false },
];

// Aroma 선택 상태를 토글하는 함수
export function toggleAromaSelection(aroma: Aroma): void {
  aroma.selected = !aroma.selected;
}