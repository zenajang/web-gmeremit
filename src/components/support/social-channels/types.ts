export type PanelKind = "contact" | "facebook" | "both";

export interface OpenPanel {
  id: string;
  kind: PanelKind;
}
