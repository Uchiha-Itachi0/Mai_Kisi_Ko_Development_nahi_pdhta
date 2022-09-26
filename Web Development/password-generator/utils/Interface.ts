interface checkBoxInterface {
    lowercase: boolean,
    uppercase: boolean,
    numbers: boolean,
    symbols: boolean
}

interface PropsForDifficultyMeter {
    TEXT?: string;
    BORDER_LENGTH?: string;
    BORDER_COLOR?: string;
    BACKGROUND_COLOR?: string;
    DIFFICULTY_NUMBER?: number;
    checkBox?: checkBoxInterface;
    range: number;
}

export type { checkBoxInterface, PropsForDifficultyMeter }



