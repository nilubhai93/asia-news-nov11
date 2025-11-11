const newsData = [
  {
    id: 1,
    title: "Economy shows signs of recovery after 2025",
    summary: "Experts say the economy is stabilizing after a turbulent year, with major industries showing growth...",
    content: "The global economy is showing promising signs of recovery following the challenges of 2025. Analysts from leading financial institutions report that key sectors such as technology, manufacturing, and services are experiencing renewed growth. Unemployment rates have begun to decline, and consumer confidence is on the rise. However, experts caution that full recovery may take time, with inflation and supply chain issues still posing risks. Governments worldwide are implementing stimulus packages to support businesses and workers.",
    image: "https://picsum.photos/id/1/400/250",
    date: "Nov 10, 2025",
    category: "Business"
  },
  {
    id: 2,
    title: "AI Technology shaping the future of healthcare",
    summary: "Artificial intelligence is transforming how doctors diagnose diseases and treat patients more effectively...",
    content: "Artificial intelligence is revolutionizing the healthcare industry by enhancing diagnostic accuracy and personalizing treatment plans. AI algorithms can analyze medical images, predict patient outcomes, and assist in drug discovery. Recent advancements in machine learning have led to breakthroughs in early disease detection, particularly in cancer and cardiovascular diseases. However, ethical concerns regarding data privacy and algorithmic bias remain significant challenges. Healthcare professionals are calling for robust regulations to ensure AI is used responsibly.",
    image: "https://picsum.photos/id/2/400/250",
    date: "Nov 9, 2025",
    category: "Technology"
  },
  {
    id: 3,
    title: "Sports: India clinches victory in test match",
    summary: "In a thrilling finish, India beat Australia by 3 wickets to take a 2-1 lead in the series...",
    content: "In an exhilarating Test match at the Melbourne Cricket Ground, the Indian cricket team secured a narrow victory over Australia, winning by 3 wickets. Captain Virat Kohli's unbeaten 89 in the fourth innings proved crucial as India chased down a target of 312 runs. This win gives India a 2-1 lead in the five-match series. The match showcased exceptional performances from both sides, with Australian bowler Mitchell Starc taking 5 wickets in the first innings. The series continues to captivate cricket fans worldwide.",
    image: "https://picsum.photos/id/3/400/250",
    date: "Nov 8, 2025",
    category: "Sports"
  },
  {
    id: 4,
    title: "Climate Summit Addresses Urgent Global Issues",
    summary: "World leaders gather to discuss carbon reduction goals and sustainable development initiatives...",
    content: "The annual Climate Summit brought together leaders from over 100 countries to address pressing environmental challenges. Key discussions focused on achieving net-zero emissions by 2050 and implementing renewable energy transitions. New agreements were reached on forest conservation and biodiversity protection. Scientists presented alarming data on rising sea levels and extreme weather events. The summit concluded with pledges for increased funding for climate adaptation in developing nations.",
    image: "https://picsum.photos/id/4/400/250",
    date: "Nov 7, 2025",
    category: "Geo Politics"
  },
  {
    id: 5,
    title: "Breakthrough in Art Cinema Preservation",
    summary: "New techniques ensure classic films remain accessible for future generations...",
    content: "Film preservation experts have developed innovative digital restoration techniques that are revolutionizing the preservation of classic cinema. Using AI-powered algorithms, damaged film reels can now be restored to near-original quality. This breakthrough ensures that iconic works from directors like Akira Kurosawa and Satyajit Ray will remain accessible to future audiences. The project involves collaboration between major film archives and technology companies, with plans to make restored films available through streaming platforms.",
    image: "https://picsum.photos/id/5/400/250",
    date: "Nov 6, 2025",
    category: "Art Cinema"
  },
  {
    id: 6,
    title: "Human Rights Violations in Conflict Zones",
    summary: "International organizations report increasing concerns over civilian safety...",
    content: "Human rights watchdogs have documented numerous violations in ongoing conflict zones across multiple continents. Reports highlight the targeting of civilians, restrictions on humanitarian aid, and the use of prohibited weapons. International tribunals are investigating war crimes, with calls for accountability from global leaders. Diplomatic efforts continue to negotiate ceasefires and protect vulnerable populations. The situation underscores the urgent need for stronger international cooperation in conflict resolution.",
    image: "https://picsum.photos/id/6/400/250",
    date: "Nov 5, 2025",
    category: "Human Rights"
  },
  {
    id: 7,
    title: "Traditional Dance Forms Gain Global Recognition",
    summary: "Cultural performances bridge communities and preserve heritage...",
    content: "Traditional dance forms from various cultures are experiencing a renaissance as they gain international recognition. Festivals showcasing Bharatanatyam, Kathakali, and contemporary fusion performances are drawing global audiences. These art forms serve as bridges between communities, fostering cultural understanding and preserving intangible heritage. Educational programs are being developed to teach these dances to younger generations, ensuring their survival in an increasingly digital world.",
    image: "https://picsum.photos/id/7/400/250",
    date: "Nov 4, 2025",
    category: "Dance"
  },
  {
    id: 8,
    title: "Historical Discoveries Rewrite Ancient Narratives",
    summary: "Archaeological finds challenge long-held beliefs about early civilizations...",
    content: "Recent archaeological discoveries are reshaping our understanding of ancient civilizations. Excavations in South Asia have uncovered evidence of advanced urban planning dating back thousands of years earlier than previously thought. These findings challenge traditional narratives about the development of early societies. Advanced dating techniques and DNA analysis are providing new insights into migration patterns and cultural exchanges. Historians are collaborating with scientists to piece together a more accurate picture of human history.",
    image: "https://picsum.photos/id/8/400/250",
    date: "Nov 3, 2025",
    category: "History"
  },
  {
    id: 9,
    title: "Live Events Return with Innovative Safety Measures",
    summary: "Concerts and festivals adapt to post-pandemic realities...",
    content: "The live events industry is making a strong comeback with innovative safety protocols and enhanced digital experiences. Major music festivals are implementing contactless ticketing, enhanced ventilation systems, and real-time health monitoring. Virtual reality elements are being integrated to provide immersive experiences for remote attendees. Artists are experimenting with hybrid formats that combine in-person and online participation. The industry is projected to reach pre-pandemic levels by 2026.",
    image: "https://picsum.photos/id/9/400/250",
    date: "Nov 2, 2025",
    category: "Live Event"
  },
  {
    id: 10,
    title: "Sustainable Travel Trends Transform Tourism",
    summary: "Eco-friendly practices become standard in the travel industry...",
    content: "The tourism industry is undergoing a transformation as sustainable practices become the new standard. Travelers are increasingly choosing eco-friendly accommodations, carbon-offset flights, and community-based tourism experiences. Destinations are implementing green certifications and conservation programs. Technology is playing a key role, with apps helping travelers minimize their environmental impact. The shift towards sustainable tourism is creating new economic opportunities while protecting natural and cultural heritage.",
    image: "https://picsum.photos/id/10/400/250",
    date: "Nov 1, 2025",
    category: "Travel"
  }
];


const trendingData = newsData.slice(0, 5); // First 5 news items as trending

const lifestyleData = [
  {
    id: 11,
    title: "Healthy Eating Habits for Busy Professionals",
    summary: "Discover simple ways to maintain a balanced diet amidst a hectic schedule...",
    content: "Maintaining a healthy diet can be challenging for busy professionals, but with some planning and smart choices, it's entirely possible. Start your day with a nutritious breakfast, pack healthy snacks, and opt for quick, wholesome meals. Incorporating more fruits, vegetables, and whole grains into your diet can boost energy levels and improve overall well-being.",
    image: "https://picsum.photos/id/11/400/250",
    date: "Nov 11, 2025",
    category: "Lifestyle"
  },
  {
    id: 12,
    title: "Mindfulness Meditation: A Guide for Beginners",
    summary: "Learn the basics of mindfulness meditation and its benefits for mental health...",
    content: "Mindfulness meditation involves focusing on the present moment without judgment. It can reduce stress, improve concentration, and enhance emotional regulation. Beginners should start with short sessions, using guided apps or videos. Consistent practice can lead to significant improvements in mental clarity and overall life satisfaction.",
    image: "https://picsum.photos/id/12/400/250",
    date: "Nov 10, 2025",
    category: "Lifestyle"
  },
  {
    id: 13,
    title: "Sustainable Fashion: Making Eco-Friendly Choices",
    summary: "Explore how to build a wardrobe that's kind to the planet and your wallet...",
    content: "Sustainable fashion focuses on reducing environmental impact through ethical production and consumption. Choose quality over quantity, opt for natural fibers, and support brands with transparent supply chains. Thrift shopping, upcycling, and capsule wardrobes are great ways to embrace sustainable fashion while expressing personal style.",
    image: "https://picsum.photos/id/13/400/250",
    date: "Nov 9, 2025",
    category: "Lifestyle"
  },
  {
    id: 14,
    title: "Home Workouts: Staying Fit Without a Gym",
    summary: "Effective exercises you can do at home with minimal equipment...",
    content: "Home workouts offer convenience and flexibility for maintaining fitness. Bodyweight exercises like push-ups, squats, and planks can build strength and endurance. Incorporate cardio activities such as jumping jacks or high knees for heart health. Consistency and proper form are key to achieving results and preventing injury.",
    image: "https://picsum.photos/id/14/400/250",
    date: "Nov 8, 2025",
    category: "Lifestyle"
  },
  {
    id: 15,
    title: "Digital Detox: Reconnecting with the Real World",
    summary: "Strategies to reduce screen time and improve work-life balance...",
    content: "In our digital age, taking breaks from screens is crucial for mental health. Set boundaries for device use, create phone-free zones, and engage in offline activities. Digital detoxes can improve sleep quality, reduce anxiety, and strengthen real-world relationships. Start small with short breaks and gradually build healthier habits.",
    image: "https://picsum.photos/id/15/400/250",
    date: "Nov 7, 2025",
    category: "Lifestyle"
  }
];

const shortsData = [
  {
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    title: "Back on board: Singapore's cable wakeboarders gear up for SEA Games return",
    duration: "48s"
  },
  {
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    title: "A look at Singapore Police Force’s K-9 Unit",
    duration: "1m 37s"
  },
  {
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
    title: "How does the Singapore army conduct humanitarian airdrop missions?",
    duration: "1m 17s"
  },
  {
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
    title: "Former bullies on what drove them to hurt others - and why it’s no excuse...",
    duration: "1m 29s"
  },
  {
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4",
    title: "Wicked: For Good takes over Sentosa in Singapore",
    duration: "55s"
  }
];
