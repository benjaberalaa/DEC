import { DeclarationConfig } from '../models/declaration/declaration-config.interface';
import { GENERATED_CONFIGS } from './generated-declarations';

export const DECLARATIONS_CONFIG: { [key: string]: DeclarationConfig } = {
  ...GENERATED_CONFIGS
};

