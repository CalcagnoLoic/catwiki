import { caracteristics, catsHero, reasons } from "./definitions";

export const cats: catsHero[] = [
  { id: "IGedC!Vaqh", src: "/img/bengal.webp", breed: "Bengal" },
  { id: "SsJxJOoN4P", src: "/img/savannah.webp", breed: "Savannah" },
  { id: "-@6.c#A3#N", src: "/img/norwest.webp", breed: "Norwest Forest Cat" },
  { id: "UO8e&9*7%n", src: "/img/selkirk.webp", breed: "Selkirk Rex" },
];

export const reasonsToHaveCats: reasons[] = [
  {
    id: "XBR&yDhNKC",
    subtitle: "1. Stress and Anxiety Reduction",
    explanation:
      "Living with a cat can have a remarkably calming effect on your body and mind. When you pet a cat, your body releases oxytocin, a hormone associated with emotional bonding. This release of oxytocin can reduce stress levels and help you feel more relaxed. The rhythmic act of stroking a cat’s fur, combined with their soothing purr, can induce a sense of tranquility and peace. Studies have shown that cat owners often experience lower levels of stress and anxiety, making cats excellent companions for those facing high-pressure environments or stressful lifestyles.",
  },
  {
    id: "Lg.?Q4k8%?",
    subtitle: "2. Companionship and Emotional Support",
    explanation:
      "Cats can provide companionship and emotional support, which are crucial for mental health. Their presence can help alleviate feelings of loneliness and isolation, especially for those living alone or experiencing social difficulties. Cats are known to form strong bonds with their owners, often following them around the house, sitting on their laps, or simply being nearby. This companionship can provide a sense of security and comfort, helping to improve overall emotional well-being.",
  },
  {
    id: "Q4fa8vsh8w",
    subtitle: "3. Lower Risk of Cardiovascular Diseases",
    explanation:
      "Owning a cat can contribute to a healthier heart. Research has shown that cat owners are less likely to die from heart attacks and other cardiovascular diseases compared to those who do not own pets. The stress-reducing effects of having a cat, such as lowered blood pressure and reduced anxiety, can contribute to better heart health. Additionally, the companionship of a cat can encourage a more relaxed lifestyle, further benefiting cardiovascular health.",
  },
  {
    id: "GPP7nK6VGb",
    subtitle: "4. Encouraging Routine and Responsibility",
    explanation:
      "Caring for a cat involves a certain level of routine and responsibility, which can be beneficial for mental health. Feeding, grooming, and playing with your cat at regular intervals can provide structure to your day. This routine can be particularly helpful for individuals struggling with mental health issues, as it promotes a sense of purpose and accountability. Moreover, the act of caring for another living being can be incredibly fulfilling and can help boost self-esteem.",
  },
  {
    id: ".DtiQi9Kjp",
    subtitle: "5. Promoting Physical Activity",
    explanation:
      "While cats are often seen as low-maintenance pets compared to dogs, they still require physical engagement and play. Playing with your cat using toys, laser pointers, or simply engaging in a game of chase can help increase your physical activity levels. This activity is beneficial not only for your cat’s health but also for your own. Regular physical activity is known to reduce stress, improve mood, and enhance overall physical health.",
  },
  {
    id: "vIPnx-6Kta",
    subtitle: "6. Enhancing Social Interaction",
    explanation:
      "Cats can also enhance your social life. Cat owners often share their experiences and stories with other cat enthusiasts, whether in person or through social media and online forums. This shared interest can lead to new friendships and social interactions, which are vital for mental health. Additionally, owning a cat can serve as a conversation starter, helping you connect with others who share a love for felines.",
  },
  {
    id: "Ys-3#XRAPb",
    subtitle: "7. Providing Therapeutic Benefits",
    explanation:
      "The therapeutic benefits of cats are increasingly recognized in settings such as hospitals, nursing homes, and therapy sessions. The presence of a cat can have a calming effect on patients, reducing anxiety and providing comfort. Therapy cats are trained to interact with people in a gentle and non-intrusive manner, offering emotional support to those in need. The mere act of petting a cat can release endorphins, the body's natural painkillers, helping to alleviate physical discomfort and emotional distress.",
  },
  {
    id: "C2Xdv*PXO-",
    subtitle: "8. Teaching Empathy and Compassion",
    explanation:
      "Cats can teach valuable lessons in empathy and compassion, especially to children. By observing and interacting with a cat, children learn to understand and respond to the needs and emotions of another living being. This experience can foster a sense of empathy, patience, and respect for animals and humans alike. Growing up with a cat can also instill a lifelong appreciation for animals and the natural world.",
  },
];

export const mostPopularCats: string[] = [
  "pers",
  "mcoo",
  "siam",
  "ragd",
  "rblu",
  "sphy",
  "birm",
  "bsho",
  "sfol",
  "abys",
];

export const catCaracteristics: caracteristics[] = [
  { name: "Temperament", data: "temperament", rating: false },
  { name: "Origin", data: "origin", rating: false },
  { name: "Life Span", data: "life_span", rating: false },
  { name: "Adaptability", data: "adaptability", rating: true },
  { name: "Affection Level", data: "affection_level", rating: true },
  { name: "Child Friendly", data: "child_friendly", rating: true },
  { name: "Grooming", data: "grooming", rating: true },
  { name: "Intelligence", data: "intelligence", rating: true },
  { name: "Health issues", data: "health_issues", rating: true },
  { name: "Social needs", data: "social_needs", rating: true },
  { name: "Stranger friendly", data: "stranger_friendly", rating: true },
];
