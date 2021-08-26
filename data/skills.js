const Experience = {
  LOW: "Somewhat Experienced",
  MEDIUM: "Experienced",
  HIGH: "Very Experienced"
}

const skills = [
  {
    title: 'HTML',
    subtitle: Experience.HIGH,
    tag: 4
  },
  {
    title: 'CSS/SCSS',
    subtitle: Experience.HIGH,
    tag: 4
  },
  {
    title: 'Javascript/Typescript',
    subtitle: Experience.HIGH,
    tag: 4
  },
  {
    title: 'Java',
    subtitle: Experience.HIGH,
    tag: 3
  },
  {
    title: 'Photoshop/Illustrator',
    subtitle: Experience.HIGH,
    tag: 3
  },
  {
    title: 'AngularJS',
    subtitle: Experience.MEDIUM,
    tag: 2
  },
  {
    title: 'Python',
    subtitle: Experience.MEDIUM,
    tag: 2
  },
  {
    title: 'VueJS',
    subtitle: Experience.LOW,
    tag: 1
  },
  {
    title: 'Figma/AdobeXD',
    subtitle: Experience.LOW,
    tag: 1
  },
  {
    title: 'Amazon Web Services',
    subtitle: Experience.LOW,
    tag: 1
  }
]

skills.forEach(s => s.tag += ' years');
