export const SPEAKER_TYPES = {
  MALE: 'Male',
  FEMALE: 'Female',
} as const;

export const LISTENER_TYPES = {
  MALE: 'Male',
  FEMALE: 'Female',
  MALE_GROUP: 'Male Group',
  FEMALE_GROUP: 'Female Group',
  MIXED_GROUP: 'Mixed Group',
} as const;

export type SpeakerType = typeof SPEAKER_TYPES[keyof typeof SPEAKER_TYPES];
export type ListenerType = typeof LISTENER_TYPES[keyof typeof LISTENER_TYPES];

export interface ConversationScenario {
  from: SpeakerType;
  to: ListenerType;
  example: string;
  translation: string;
}

export const scenarios: ConversationScenario[] = [
  {
    from: SPEAKER_TYPES.MALE,
    to: LISTENER_TYPES.MALE,
    example: 'אתה מדבר עברית ממש טוב',
    translation: 'You speak Hebrew very well'
  },
  {
    from: SPEAKER_TYPES.FEMALE,
    to: LISTENER_TYPES.MALE,
    example: 'אתה מדבר עברית ממש טוב',
    translation: 'You speak Hebrew very well'
  },
  {
    from: SPEAKER_TYPES.MALE,
    to: LISTENER_TYPES.FEMALE,
    example: 'את מדברת עברית ממש טוב',
    translation: 'You speak Hebrew very well'
  },
  {
    from: SPEAKER_TYPES.FEMALE,
    to: LISTENER_TYPES.FEMALE,
    example: 'את מדברת עברית ממש טוב',
    translation: 'You speak Hebrew very well'
  },
  {
    from: SPEAKER_TYPES.MALE,
    to: LISTENER_TYPES.MALE_GROUP,
    example: 'אתם מדברים עברית ממש טוב',
    translation: 'You all speak Hebrew very well'
  },
  {
    from: SPEAKER_TYPES.FEMALE,
    to: LISTENER_TYPES.FEMALE_GROUP,
    example: 'אתן מדברות עברית ממש טוב',
    translation: 'You all speak Hebrew very well'
  }
];