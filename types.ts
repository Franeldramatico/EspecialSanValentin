export enum GameScreenState {
  INTRO = 'INTRO',
  NAME_INPUT = 'NAME_INPUT',
  GAME_LOOP = 'GAME_LOOP',
  ENDING = 'ENDING'
}

export enum SoobinEmotion {
  PROUD = 'proud',
  SHY = 'shy',
  HANDSOME = 'handsome',
  DISAPPOINTED = 'disappointed',
  SARCASTIC = 'sarcastic',
  CONFUSED = 'confused',
  ANGRY = 'angry',
  HAPPY = 'happy',
  FAKE_INDIFFERENCE = 'fake_indifference',
  SURPRISED = 'surprised',
  BLUSHED = 'blushed',
  SUPER_FURIOUS = 'super_furious',
  NEUTRAL = 'neutral',
  SAD_BUT_GRATEFUL = 'sad_but_grateful'
}

export interface Choice {
  text: string;
  nextStepId: string;
}

export interface GameStepData {
  id: string;
  narrative?: string;
  dialogue: string;
  emotion: SoobinEmotion;
  choices: Choice[];
  isEnding: boolean;
  endingTitle?: string;
}