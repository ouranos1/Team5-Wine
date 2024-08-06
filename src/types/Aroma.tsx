type AromaName =
  | "CHERRY"
  | "BERRY"
  | "OAK"
  | "VANILLA"
  | "PEPPER"
  | "BAKING"
  | "GRASS"
  | "APPLE"
  | "PEACH"
  | "CITRUS"
  | "TROPICAL"
  | "MINERAL"
  | "FLOWER"
  | "TOBACCO"
  | "EARTH"
  | "CHOCOLATE"
  | "SPICE"
  | "CARAMEL"
  | "LEATHER";

export interface Aroma {
    name : AromaName
    selected : boolean;
}