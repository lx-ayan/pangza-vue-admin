import { Command } from '@hufe921/canvas-editor';

export interface ChangeData {
    key: keyof Command,
    value: any
}

export type ToolBarItem = 'font-family' | 'text-align'
