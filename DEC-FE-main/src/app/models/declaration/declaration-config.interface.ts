export interface FieldConfig {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select';
  required?: boolean;
  options?: { label: string; value: any }[];
  group?: string; // To group fields in the form (e.g., 'refDonneur')
}

export interface DeclarationConfig {
  type: string;
  label: string;
  codeAnnexe: string;
  codeIAT: string;
  fields: FieldConfig[];
  tableColumns: { key: string; label: string; path?: string }[];
  apiPath: string; // Base path for this declaration's specific endpoints (e.g., 'convert' for TR-DON)
  payloadMapper: (formData: any, contextualData: any) => any;
}
