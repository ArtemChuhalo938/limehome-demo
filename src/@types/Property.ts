import { PropertyImage } from './PropertyImage';
import { UnitGroup } from './UnitGroup';

export type Property = {
  unit_groups: UnitGroup[];
  images: PropertyImage[];
  name: string;
  distance: number;
  description: string;
  lowest_price_per_night: number;
};
