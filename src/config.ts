export const config = {
    SPONSOR_FORM_URL: process.env.NEXT_PUBLIC_SPONSOR_FORM_URL ?? null,
    TICKETS_ENABLED: Boolean(Number(process.env.NEXT_PUBLIC_TICKETS_ENABLED ?? 1)),
    REGISTRATION_OPEN: process.env.NEXT_PUBLIC_REGISTRATION_OPEN ?? null,
    PARTICIPANT_INTEREST_FORM_URL: process.env.NEXT_PUBLIC_PARTICIPANT_INTEREST_FORM_URL ?? null,
    CONFERENCE_DAYS: {
      day1: new Date('2025-06-14T08:00:00+05:30'),
      day2: new Date('2025-06-15T08:00:00+05:30'),
      datesLabel: 'June 14 - 15, 2025',
    },
  };