import { EventModel } from "./events.interface"

export let events: EventModel[] = [
    {
        id: 1,
        title: 'Angular Workshop: Build Your First App',
        type: 'Workshop',
        date: '2025-05-12T09:00:00',
        location: 'CodeFactory, Vienna',
        description: 'In this workshop you will learn how to build a simple Angular app. Ideal for beginners!'
      },
      {
        id: 2,
        title: 'Tech Meetup: The Future of Web Development',
        type: 'Meetup',
        date: '2025-06-15T18:00:00',
        location: 'TechHub, St.Pölten',
        description: 'Discuss the latest trends in web development with experts. Snacks and networking included!'
      },
      {
        id: 3,
        title: 'Job Fair: Developers and IT experts wanted!',
        type: 'Job Fair',
        date: '2025-07-01T10:00:00',
        location: 'Vienna Messe',
        description: 'Meet companies looking for talented developers and IT experts. Apply on the spot!'
      },
      {
        id: 4,
        title: 'Online Webinar: Einführung in TypeScript',
        type: 'Online',
        date: '2025-04-30T18:00:00',
        location: 'Online',
        description: 'In this webinar you will get an introduction to TypeScript, the superset language of JavaScript. Ideal for beginners and experienced developers.'
      },
      {
        id: 5,
        title: 'React Bootcamp: Building Interactive UIs',
        type: 'Workshop',
        date: '2025-05-20T09:00:00',
        location: 'CodeFactory, Vienna',
        description: 'Learn how to create interactive UIs with React. Practice-orientated and hands-on!'
      },
      {
        id: 6,
        title: 'Meetup: UX/UI Design Trends 2025',
        type: 'Meetup',
        date: '2025-06-25T17:00:00',
        location: 'Design Studio, Graz',
        description: 'Learn more about the latest UX/UI design trends and how they influence web development.'
      }
]
