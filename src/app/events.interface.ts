export interface EventModel {
    id: number;
    title: string;
    type: 'Workshop' | 'Meetup' | 'Job Fair' | 'Online';
    date: string;
    location: string;
    description: string;
  }