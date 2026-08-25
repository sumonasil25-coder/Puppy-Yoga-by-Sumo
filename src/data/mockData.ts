import { EventItem, ShelterPartner, PuppyInfo, Testimonial, BlogPost, GalleryItem, FAQItem } from '../types';

export const SHELTERS: ShelterPartner[] = [
  {
    id: 'care-blr',
    name: "Charlie's Animal Rescue Centre (CARE)",
    shortName: 'CARE Bangalore',
    city: 'Bangalore',
    logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=160&q=80',
    website: 'https://charlies-care.com',
    description: 'Premier animal rescue and trauma care center in Bangalore rehabilitating injured strays and running ethical puppy foster adoption drives since 2013.',
    adoptedCount: 148,
    featuredPuppies: ['pup-1', 'pup-2', 'pup-7'],
  },
  {
    id: 'yoda-mum',
    name: 'Youth Organization in Defence of Animals (YODA)',
    shortName: 'The YODA Mumbai',
    city: 'Mumbai',
    logo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=160&q=80',
    website: 'https://yodamumbai.org',
    description: 'Bandra-based non-profit shelter dedicated to rescuing abandoned pets and finding loving permanent homes for rescue puppies across Maharashtra.',
    adoptedCount: 112,
    featuredPuppies: ['pup-3', 'pup-4'],
  },
  {
    id: 'friendicoes-del',
    name: 'Friendicoes SECA',
    shortName: 'Friendicoes Delhi NCR',
    city: 'Delhi NCR',
    logo: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=160&q=80',
    website: 'https://friendicoes.org',
    description: 'Operating for over 40 years in Jungpura, Delhi, providing round-the-clock emergency care, mobile clinics, and lifetime adoption matchmaking.',
    adoptedCount: 95,
    featuredPuppies: ['pup-5', 'pup-6'],
  },
  {
    id: 'resq-pune',
    name: 'RESQ Wildlife & Animal Charitable Trust',
    shortName: 'RESQ Pune',
    city: 'Pune',
    logo: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=160&q=80',
    website: 'https://resqct.org',
    description: 'Pioneering animal hospital and rehabilitation sanctuary in Bavdhan, Pune, championing ethical animal therapy and pet adoption programs.',
    adoptedCount: 65,
    featuredPuppies: ['pup-8'],
  },
];

export const PUPPIES: PuppyInfo[] = [
  {
    id: 'pup-1',
    name: 'Milo & Mocha (Twins)',
    ageWeeks: 10,
    breed: 'Indie Hound Mix',
    temperament: 'Playful, snuggly, loves lap naps during Savasana',
    shelterId: 'care-blr',
    shelterName: 'CARE Bangalore',
    photo: 'https://images.unsplash.com/photo-1591160674255-fc8b9f79d568?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Rescued with their mother from a construction site in Sarjapur. Fully vaccinated, dewormed, and microchipped. Extremely gentle with beginners.',
    city: 'Bangalore',
  },
  {
    id: 'pup-2',
    name: 'Biscuit',
    ageWeeks: 12,
    breed: 'Golden-Indie Cross',
    temperament: 'Curious explorer, affectionate, treats shoe laces as toys',
    shelterId: 'care-blr',
    shelterName: 'CARE Bangalore',
    photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Fostered in a family home with two cats. Very socialized, loves tummy rubs during child pose and loves gentle kisses.',
    city: 'Bangalore',
  },
  {
    id: 'pup-3',
    name: 'Coco',
    ageWeeks: 9,
    breed: 'Beagle-Indie Mix',
    temperament: 'Energetic zoomies followed by 20-minute deep sleeps',
    shelterId: 'yoda-mum',
    shelterName: 'The YODA Mumbai',
    photo: 'https://images.unsplash.com/photo-1530281700549-e82e7bf09b5c?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Adoption In Progress',
    story: 'Found abandoned outside Pali Hill clinic. Coco is a natural yogi who perches on yoga blocks like a miniature king.',
    city: 'Mumbai',
  },
  {
    id: 'pup-4',
    name: 'Leo',
    ageWeeks: 11,
    breed: 'Labrador Indie Mix',
    temperament: 'Gentle giant in training, tail-wagger, loves everyone',
    shelterId: 'yoda-mum',
    shelterName: 'The YODA Mumbai',
    photo: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Healthy, playful, and loves giving wet nose boops while you hold Downward Dog.',
    city: 'Mumbai',
  },
  {
    id: 'pup-5',
    name: 'Simba',
    ageWeeks: 10,
    breed: 'Fluffy Indie Pup',
    temperament: 'Calm, soft cuddle-bug, purrs like a kitten when held',
    shelterId: 'friendicoes-del',
    shelterName: 'Friendicoes Delhi NCR',
    photo: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Rescued in South Extension during winter storms. Blossomed into a cuddly dream pup under foster care.',
    city: 'Delhi NCR',
  },
  {
    id: 'pup-6',
    name: 'Hazel',
    ageWeeks: 12,
    breed: 'Dachshund Indie Cross',
    temperament: 'Alert, comical, curls up inside folded yoga blankets',
    shelterId: 'friendicoes-del',
    shelterName: 'Friendicoes Delhi NCR',
    photo: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Hazel will steal your water bottle cap and trade it for unlimited belly rubs.',
    city: 'Delhi NCR',
  },
  {
    id: 'pup-7',
    name: 'Chai',
    ageWeeks: 9,
    breed: 'Caramel Indie Pup',
    temperament: 'Sweet, quiet observer, sits quietly next to your mat',
    shelterId: 'care-blr',
    shelterName: 'CARE Bangalore',
    photo: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Chai loves resting his chin on your ankles while you do seated forward folds.',
    city: 'Bangalore',
  },
  {
    id: 'pup-8',
    name: 'Ollie',
    ageWeeks: 10,
    breed: 'Terrier Indie Mix',
    temperament: 'Bouncy, cheerful, loves puppy socialization games',
    shelterId: 'resq-pune',
    shelterName: 'RESQ Pune',
    photo: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80',
    adoptionStatus: 'Available',
    story: 'Rescued near Pune University. Very obedient and loves human touch.',
    city: 'Pune',
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'event-blr-01',
    title: 'Puppy Yoga & Pawsome Cuddles — Indiranagar',
    city: 'Bangalore',
    locality: 'Indiranagar, 100ft Road',
    venueName: 'The Bohemian Sanctuary Studio',
    venueAddress: '428, 2nd Floor, 12th Main, HAL 2nd Stage, Indiranagar, Bangalore 560038',
    date: 'Saturday, 14 Jun 2025',
    rawDate: '2025-06-14',
    time: '9:00 AM - 10:15 AM',
    price: 1500,
    originalPrice: 1800,
    totalSeats: 20,
    availableSeats: 4,
    type: 'Weekend Morning',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Priya Reddy',
    instructorTitle: 'E-RYT 500 Yoga Acharya & Pet Therapy Advocate',
    instructorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[0],
    puppyCount: 6,
    puppyAgeRange: '9 to 12 weeks',
    description: 'Experience pure serotonin! Begin with 40 minutes of gentle, beginner-friendly Hatha-Vinyasa yoga, followed by 35 minutes of unstructured puppy cuddle time, playful photo opportunities, and adoption Q&A with CARE shelter volunteers.',
    schedule: [
      { time: '08:45 AM', activity: 'Arrival & Sanitization', details: 'Check-in, footwear removal, hands and mat sanitization with pet-safe organic spray.' },
      { time: '09:00 AM', activity: 'Gentle Yoga Flow', details: '40 min restorative stretch & breathwork led by Priya. Pups roam freely around mats.' },
      { time: '09:40 AM', activity: 'Snuggle & Play Time', details: '35 min pure cuddle fest! Feed healthy organic treats, capture photos, and bond.' },
      { time: '10:15 AM', activity: 'Adoption Desk & Chai', details: 'Hot herbal tea + direct adoption inquiries with CARE team.' }
    ],
    includes: [
      'Premium sanitized eco-cork yoga mat provided',
      'Free high-res digital photos from our event photographer',
      'Complimentary herbal iced tea & wellness snacks',
      '₹250 direct donation contribution to CARE shelter medical fund',
      'Puppy cuddle certificate & sticker pack'
    ],
    whatToBring: [
      'Comfortable stretchable workout or yoga wear',
      'Water bottle (refills provided)',
      'An open heart ready for endless puppy kisses!'
    ],
    isFeatured: true,
    featuredPuppies: [PUPPIES[0], PUPPIES[1], PUPPIES[6]],
  },
  {
    id: 'event-mum-01',
    title: 'Sunset Flow & Golden Snuggles — Bandra West',
    city: 'Mumbai',
    locality: 'Bandra West, Pali Hill',
    venueName: 'The Glasshouse Wellness Attic',
    venueAddress: '14/B Perry Cross Road, Near Carter Road, Bandra West, Mumbai 400050',
    date: 'Sunday, 15 Jun 2025',
    rawDate: '2025-06-15',
    time: '5:00 PM - 6:15 PM',
    price: 1650,
    originalPrice: 2000,
    totalSeats: 22,
    availableSeats: 3,
    type: 'Sunset Flow',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Aarav Mehta',
    instructorTitle: 'Ashtanga Yoga Specialist & Animal Welfare Volunteer',
    instructorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[1],
    puppyCount: 7,
    puppyAgeRange: '8 to 11 weeks',
    description: 'Golden hour in Mumbai! Relax after a hectic week with gentle sunset stretching while rescued puppies from The YODA play between your mats. Features ambient acoustic tunes and sunset skyline vibes.',
    schedule: [
      { time: '04:45 PM', activity: 'Registration & Welcome', details: 'Check-in, meet the resident veterinarian and shelter handlers.' },
      { time: '05:00 PM', activity: 'Sunset Slow Flow', details: '40 mins of gentle somatic releases and hip openers with puppies roaming around.' },
      { time: '05:40 PM', activity: 'Puppy Socialization & Photos', details: '35 mins cuddle time, belly rubs, polaroid photo souvenirs.' },
      { time: '06:15 PM', activity: 'Sunset Juice & Adoption Meet', details: 'Fresh cold-pressed juices and meet the adoptable litter.' }
    ],
    includes: [
      'Lululemon/Manduka yoga mats prepared on-site',
      'Instant Polaroid keepsake photo with your favorite pup',
      'Cold-pressed juice from Raw Pressery',
      'Direct shelter support donation token',
      '10% off next booking coupon'
    ],
    whatToBring: [
      'Light athletic wear',
      'Camera / smartphone with full charge'
    ],
    isFeatured: true,
    featuredPuppies: [PUPPIES[2], PUPPIES[3]],
  },
  {
    id: 'event-del-01',
    title: 'Hauz Khas Green Sanctuary Puppy Flow',
    city: 'Delhi NCR',
    locality: 'Hauz Khas Village',
    venueName: 'The Lakeview Glasshouse Studio',
    venueAddress: 'Gate 3, Deer Park Road, Hauz Khas Village, New Delhi 110016',
    date: 'Saturday, 21 Jun 2025 (International Yoga Day Special)',
    rawDate: '2025-06-21',
    time: '8:30 AM - 9:45 AM',
    price: 1500,
    originalPrice: 1800,
    totalSeats: 25,
    availableSeats: 0,
    isSoldOut: true,
    type: 'Weekend Morning',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Kavita Chawla',
    instructorTitle: 'Yin Yoga Master & Certified Canine Behaviorist',
    instructorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[2],
    puppyCount: 8,
    puppyAgeRange: '9 to 14 weeks',
    description: 'Celebrate International Yoga Day in Delhi surrounded by lush green foliage and 8 adorable rescued puppies from Friendicoes. High demand session — join our waitlist for instant slot releases!',
    schedule: [
      { time: '08:15 AM', activity: 'Lakeview Check-in', details: 'Welcome herbal elixir and pet-safe hand wash.' },
      { time: '08:30 AM', activity: 'Heart-Opening Asanas', details: 'Beginner flow designed for relaxation and laughter.' },
      { time: '09:10 AM', activity: 'Puppy Snuggle Hour', details: 'Interactive play, cuddle circles, and photo shoots.' },
      { time: '09:45 AM', activity: 'Friendicoes Adoption Drive', details: 'Meet the shelter caregivers and learn how to foster or adopt.' }
    ],
    includes: [
      'Sanitized premium yoga mat & bolster',
      'Professional candid action shots emailed post-event',
      'Special International Yoga Day gift hamper',
      'Donation certificate from Friendicoes SECA'
    ],
    whatToBring: [
      'Comfortable clothing',
      'Valid photo ID for check-in'
    ],
    isFeatured: true,
    featuredPuppies: [PUPPIES[4], PUPPIES[5]],
  },
  {
    id: 'event-blr-02',
    title: 'Koramangala Sunday Chill & Puppy Therapy',
    city: 'Bangalore',
    locality: 'Koramangala, 5th Block',
    venueName: 'The Zen Attic Rooftop Garden',
    venueAddress: '88, Jyoti Nivas College Road, 5th Block, Koramangala, Bangalore 560095',
    date: 'Sunday, 22 Jun 2025',
    rawDate: '2025-06-22',
    time: '10:30 AM - 11:45 AM',
    price: 1450,
    originalPrice: 1750,
    totalSeats: 18,
    availableSeats: 7,
    type: 'Puppy Cuddle Special',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Rohan Deshmukh',
    instructorTitle: 'Vinyasa Flow Instructor & Animal Foster Dad',
    instructorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[0],
    puppyCount: 5,
    puppyAgeRange: '10 to 14 weeks',
    description: 'Designed specifically for tech professionals, students, and stressed city dwellers looking for dopamine and serotonin boost. 45% yoga, 55% puppy snuggling!',
    schedule: [
      { time: '10:15 AM', activity: 'Rooftop Check-in', details: 'Check in with cooling coconut water.' },
      { time: '10:30 AM', activity: 'Stress-Busting Gentle Stretch', details: 'Focus on neck, shoulders, and lower back tension release.' },
      { time: '11:10 AM', activity: 'Puppy Love & Photo Moments', details: 'Tummy rubs, puppy races across mats, Instagram reel creation.' },
      { time: '11:45 AM', activity: 'Community Networking & Pups', details: 'Connect with fellow pet lovers in Bangalore.' }
    ],
    includes: [
      'Eco-friendly mat setup',
      'Fresh tender coconut water',
      'Digital photo album access',
      'Direct shelter contribution'
    ],
    whatToBring: ['Comfortable gym wear or leggings'],
    featuredPuppies: [PUPPIES[0], PUPPIES[1]],
  },
  {
    id: 'event-pune-01',
    title: 'Koregaon Park Serene Morning Puppy Yoga',
    city: 'Pune',
    locality: 'Koregaon Park, Lane 6',
    venueName: 'The Banyan Tree Wellness Villa',
    venueAddress: 'Plot 32, North Main Road, Koregaon Park, Pune 411001',
    date: 'Saturday, 28 Jun 2025',
    rawDate: '2025-06-28',
    time: '9:00 AM - 10:15 AM',
    price: 1350,
    originalPrice: 1600,
    totalSeats: 16,
    availableSeats: 5,
    type: 'Beginner Gentle',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Tanvi Joshi',
    instructorTitle: 'Restorative Yoga Therapist',
    instructorPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[3],
    puppyCount: 5,
    puppyAgeRange: '8 to 12 weeks',
    description: 'Set amidst the lush greenery of Koregaon Park, join RESQ Pune for an uplifting morning of calming yoga postures and curious, loving shelter puppies.',
    schedule: [
      { time: '08:45 AM', activity: 'Arrival & Tea', details: 'Warm lemongrass tea & mat allotment.' },
      { time: '09:00 AM', activity: 'Gentle Pranayama & Stretch', details: 'Relaxing breathwork and gentle spinal twists.' },
      { time: '09:40 AM', activity: 'Playtime & Cuddle Circle', details: 'Meet each puppy, learn their rescue stories, endless selfies.' },
      { time: '10:15 AM', activity: 'Adoption Guidance Desk', details: 'RESQ team answers queries on adoption & fostering in Pune.' }
    ],
    includes: [
      'Studio yoga mat and props',
      'Artisanal herbal tea',
      'RESQ charity donor badge',
      'Professional photo gallery'
    ],
    whatToBring: ['Loose comfy attire'],
    featuredPuppies: [PUPPIES[7]],
  },
  {
    id: 'event-hyd-01',
    title: 'Jubilee Hills Weekend Paws & Prana',
    city: 'Hyderabad',
    locality: 'Jubilee Hills, Road No. 36',
    venueName: 'The Loft Studio & Green Terrace',
    venueAddress: 'Level 3, Road No 36, Near Peddamma Temple, Jubilee Hills, Hyderabad 500033',
    date: 'Sunday, 29 Jun 2025',
    rawDate: '2025-06-29',
    time: '9:30 AM - 10:45 AM',
    price: 1400,
    originalPrice: 1700,
    totalSeats: 20,
    availableSeats: 6,
    type: 'Weekend Morning',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Sneha Reddy',
    instructorTitle: 'Certified Hatha Yoga Guru & Animal Rescuer',
    instructorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[0],
    puppyCount: 6,
    puppyAgeRange: '10 to 14 weeks',
    description: 'Hyderabad pet lovers rejoice! Spend your Sunday morning flowing through easy sun salutations while little furry companions scamper and snooze across your mat.',
    schedule: [
      { time: '09:15 AM', activity: 'Registration & Refreshment', details: 'Check-in and pet socialization briefing.' },
      { time: '09:30 AM', activity: 'Sunny Morning Yoga Flow', details: 'Full body restorative yoga designed for all flexibility levels.' },
      { time: '10:10 AM', activity: 'Puppy Cuddle Hour', details: 'Unwind with puppy kisses, treats, and team photos.' },
      { time: '10:45 AM', activity: 'Adoption Corner', details: 'Connect with foster parents and adoption counselors.' }
    ],
    includes: ['Yoga mats provided', 'Hydration bar & fruit bowls', 'Digital photos link', 'Puppy love guaranteed'],
    whatToBring: ['Comfortable clothing'],
    featuredPuppies: [PUPPIES[0], PUPPIES[6]],
  },
  {
    id: 'event-goa-01',
    title: 'Assagao Tropical Garden Puppy Retreat',
    city: 'Goa',
    locality: 'Assagao, North Goa',
    venueName: 'The Palm Grove Shala',
    venueAddress: 'Badem Road, Near Gunpowder, Assagao, Goa 403507',
    date: 'Saturday, 05 Jul 2025',
    rawDate: '2025-07-05',
    time: '8:30 AM - 9:45 AM',
    price: 1600,
    originalPrice: 1900,
    totalSeats: 16,
    availableSeats: 2,
    type: 'Weekend Morning',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Nandini Sen',
    instructorTitle: 'Sound Healing & Vinyasa Specialist',
    instructorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    shelterPartner: SHELTERS[0],
    puppyCount: 5,
    puppyAgeRange: '8 to 12 weeks',
    description: 'Open air tropical yoga shala with gentle breeze, birds chirping, sound bowls, and rescued Goa beach puppies seeking forever homes.',
    schedule: [
      { time: '08:15 AM', activity: 'Tropical Welcome', details: 'Fresh tender coconut & registration.' },
      { time: '08:30 AM', activity: 'Open-Air Yoga & Sound Bowls', details: 'Vinyasa flow combined with gentle Tibetan singing bowls.' },
      { time: '09:10 AM', activity: 'Playful Snuggles & Beach Pups', details: 'Pet and bond with healthy rescued pups.' },
      { time: '09:45 AM', activity: 'Fruit Breakfast & Adoption Connect', details: 'Tropical fruit platters and adoption counseling.' }
    ],
    includes: ['Artisan cork mat', 'Fresh tender coconut', 'Sound bath inclusion', 'Charity donation pass'],
    whatToBring: ['Breathable cotton or linen clothes'],
    featuredPuppies: [PUPPIES[1]],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Nisha Sharma',
    role: 'Marketing Manager, Bangalore',
    city: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Literally the best 75 minutes of my year! I walked in with intense work burnout and walked out smiling so hard my cheeks ached. And best of all, we ended up adopting little Biscuit two weeks later!',
    eventAttended: 'Puppy Yoga at Indiranagar, Bangalore',
    date: 'May 2025',
    adoptedPuppy: 'Biscuit (Adopted!)',
    photoWithPup: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-2',
    name: 'Rahul Kapoor & Simran',
    role: 'Couple / Tech Founders, Mumbai',
    city: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Booked this as a surprise Sunday date for my girlfriend in Bandra. We both could not stop laughing. The puppies are so well-cared for, the vet on site made us feel completely safe, and the instructor was fantastic.',
    eventAttended: 'Sunset Flow at Bandra West',
    date: 'April 2025',
    photoWithPup: 'https://images.unsplash.com/photo-1530281700549-e82e7bf09b5c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-3',
    name: 'Dr. Meera Iyer',
    role: 'Veterinary Physician & Animal Advocate',
    city: 'Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'As a veterinarian, I scrutinized their animal welfare protocol before attending. I was genuinely impressed: strict vaccination checks, 30-minute play caps for litters, no forceful lifting, and 100% ethical shelter collaboration.',
    eventAttended: 'Hauz Khas Green Sanctuary Flow',
    date: 'March 2025'
  },
  {
    id: 't-4',
    name: 'Priya Singh',
    role: 'People Ops Lead at SaaS Startup',
    city: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'We booked a private corporate team session for 18 engineers after a hectic product launch. The vibe shift was instantaneous. Team morale skyrocketed, and two teammates ended up fostering puppies!',
    eventAttended: 'Corporate Team Wellness Session',
    date: 'May 2025'
  },
  {
    id: 't-5',
    name: 'Ananya Patel',
    role: 'Architecture Student, Pune',
    city: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'I suffer from mild social anxiety. The energy here was so soft, non-judgmental, and cozy. Doing warrior poses while a puppy takes a nap against your ankle is pure healing magic.',
    eventAttended: 'Koregaon Park Serene Morning',
    date: 'May 2025'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Reasons Why Puppy Yoga is India\'s Fast-Growing Wellness Ritual',
    slug: 'reasons-to-try-puppy-yoga-today',
    excerpt: 'Discover why combining gentle mindfulness with puppy socialization creates the ultimate antidote to modern urban stress and screen fatigue.',
    category: 'Wellness',
    readTime: '4 min read',
    date: 'June 02, 2025',
    author: {
      name: 'Priya Reddy',
      role: 'Head Yoga Director & Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
    tags: ['Mindfulness', 'Stress Relief', 'Puppies', 'Urban Life'],
    keyTakeaways: [
      'Physical touch with puppies triggers an immediate surge in oxytocin and dopamine.',
      'Gentle stretching relaxes tight myofascial tension built up during 40+ hours of desk sitting.',
      'Puppies gain critical early human socialization that reduces behavioral fear as adults.',
      'Over 60% of attendees report sustained calm moods for up to 72 hours post-session.'
    ],
    content: `
Modern city life in metropolitan hubs like Bangalore, Mumbai, and Delhi often revolves around artificial light, relentless deadlines, traffic gridlocks, and digital overwhelm. Traditional yoga provides a profound somatic release, but when you introduce playful, loving shelter puppies into the sanctuary, something miraculous happens: the rigid seriousness of formal workouts dissolves into pure, authentic laughter.

### 1. Instant Neurological Shift
When you stroke a puppy during child's pose or while resting in Savasana, your brain reduces cortisol (the primary stress hormone) within mere minutes. Simultaneously, neurochemicals like oxytocin and serotonin flood your bloodstream, inducing what psychologists call "biophilic resonance" — the innate sense of peace humans feel in compassionate connection with nature and animals.

### 2. Zero Ego, Maximum Joy
In many commercial fitness studios, people feel self-conscious about their posture or flexibility. At Puppy Yoga Events, performance anxiety vanishes immediately. Nobody cares if your heel touches the mat in Downward Dog when there's a 10-week-old Indie pup rolling over your shoelaces!

### 3. Helping Rescued Puppies Socialize Safely
For shelter puppies between 8 and 14 weeks of age, ethical positive human socialization is vital. When pups experience calm, gentle humans in a controlled, sterile, vet-supervised environment, they learn to trust people and develop confidence, drastically increasing their lifelong adoption success.

### 4. Supporting Ethical Shelters
Every single ticket booked directly funds medical trauma care, foster milk supplements, and sterilization drives at partner shelters including CARE Bangalore, The YODA Mumbai, and Friendicoes Delhi.
    `
  },
  {
    id: 'blog-2',
    title: 'The Science of Canine Therapy: How Yoga with Puppies Lowers Anxiety',
    slug: 'science-behind-animal-assisted-therapy-yoga',
    excerpt: 'Clinical research from Harvard and Oxford reveals the exact biochemical pathways activated when mindfulness meets animal interaction.',
    category: 'Mental Health',
    readTime: '6 min read',
    date: 'May 24, 2025',
    author: {
      name: 'Dr. Meera Iyer',
      role: 'Veterinary Advisor & Animal Behaviorist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    tags: ['Mental Health', 'Anxiety Relief', 'Science', 'Therapy'],
    keyTakeaways: [
      'Heart rate variability (HRV) improves by 28% during animal-assisted yoga sessions.',
      'Blood pressure readings drop significantly compared to solo meditation sessions.',
      'Tactile animal grounding interrupts negative rumination cycles common in generalized anxiety.'
    ],
    content: `
Animal-assisted wellness (AAW) is no longer just a heartwarming trend — it is a clinically documented modality backed by decades of neurobiological research. 

When humans practice slow, diaphragmatic Ujjayi breathing alongside tranquil animals, the parasympathetic nervous system (the "rest and digest" branch of the autonomic nervous system) activates with astonishing velocity.

### The Mirror Neuron Phenomenon
Puppies live strictly in the present moment. They harbor no retrospective regrets about yesterday and no anticipatory dread about tomorrow. Through mirror neurons, humans unconsciously synchronize with the uninhibited, joyful presence of the animals around them.

### Tactile Grounding in Panic & Anxiety
For individuals coping with anxiety disorders or chronic burnout, physical grounding techniques are essential. Holding a soft, warm puppy against your chest provides deep pressure stimulation similar to a weighted blanket, immediately dampening amygdala hyperactivity.
    `
  },
  {
    id: 'blog-3',
    title: 'Adoption Diaries: How Bella Found Her Forever Home on a Yoga Mat',
    slug: 'adoption-story-bella-indiranagar-session',
    excerpt: 'Read the heartwarming story of an abandoned puppy from Bangalore who stole an architect\'s heart between two Sun Salutations.',
    category: 'Adoption',
    readTime: '5 min read',
    date: 'May 15, 2025',
    author: {
      name: 'Rohan Deshmukh',
      role: 'Community Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80',
    tags: ['Adoption Story', 'Rescue', 'Bangalore', 'Happy Tails'],
    keyTakeaways: [
      'Over 420 shelter puppies have found permanent loving families through our events.',
      'Attending a session allows potential adopters to observe puppy temperament in person.',
      'Our partner shelters follow thorough home-check protocols to ensure safe adoptions.'
    ],
    content: `
It was a rainy Saturday morning at our Indiranagar studio in Bangalore. Among the six puppies brought by CARE Bangalore was a tiny tri-color Indie pup named Bella, who had been found shivering in a storm drain two weeks prior.

Rohit, a 29-year-old landscape architect, had booked the session on a whim after his sister sent him our Instagram link.

### The Connection
During the seated meditation, Bella wobbled over, circled twice, and curled up directly on Rohit's crossed feet. For the remaining 40 minutes, whenever Rohit moved into gentle poses, Bella stayed glued by his side, occasionally offering sleepy yawns.

"I had thought about getting a dog for years," Rohit recounted later. "Seeing how calm and trusting she was right here on the mat made it undeniable. She picked me."

Today, Bella is a vibrant, healthy 8-month-old companion who goes on weekend hikes in Nandi Hills!
    `
  },
  {
    id: 'blog-4',
    title: '5 Gentle Yoga Poses That Puppies Absolutely Love to Join',
    slug: '5-yoga-poses-puppies-love-to-join',
    excerpt: 'From Balasana to Savasana, here are the top relaxing postures that make for the coziest puppy cuddle moments.',
    category: 'Yoga Tips',
    readTime: '3 min read',
    date: 'April 28, 2025',
    author: {
      name: 'Kavita Chawla',
      role: 'Senior Yoga Teacher',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    tags: ['Yoga Poses', 'Beginner Yoga', 'Puppy Play', 'Stretching'],
    keyTakeaways: [
      'Child\'s Pose (Balasana) creates a low, safe platform puppies love to climb over.',
      'Cat-Cow Pose engages curious puppies who follow gentle spinal movement.',
      'Corpse Pose (Savasana) is universally loved by puppies as the ultimate nap invitation!'
    ],
    content: `
When teaching puppy yoga, sequence design requires a delicate balance: providing genuine somatic benefits to the practitioner while maintaining an open, low-to-the-ground posture that ensures total puppy safety.

### 1. Extended Child's Pose (Balasana)
Lowering your chest toward the mat creates a gentle back ramp. Puppies often take this opportunity to rest their paws on your shoulders or sneak under your arms for nose boops.

### 2. Butterfly Pose (Baddha Konasana)
Sitting with soles together creates a natural diamond cradle between your shins — an irresistible nest for sleepy 10-week-old pups to curl into!

### 3. Gentle Cat-Cow (Marjaryasana-Bitilasana)
On all fours, eye contact with the floor allows you to watch the puppies explore around your mat while loosening cervical and lumbar spine stiffness.

### 4. Legs-Up-The-Wall (Viparita Karani)
Restorative posture par excellence. Pups will usually sit across your belly or snuggle against your hips as you drain tension from your calves.

### 5. Deep Rest (Savasana)
The undisputed highlight. Lying completely flat on your back is an open invitation for puppies to pile up on your chest for the coziest meditation of your life!
    `
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Savasana Snuggles in Indiranagar',
    city: 'Bangalore',
    date: 'May 2025',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    category: 'Cuddle Moments',
    caption: 'When Savasana turns into a 3-puppy cuddle pile! Pure peace.',
    likes: 342,
  },
  {
    id: 'g-2',
    title: 'Downward Dog with Biscuit',
    city: 'Bangalore',
    date: 'May 2025',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    category: 'Yoga Poses',
    caption: 'Biscuit inspecting proper alignment during morning flow.',
    likes: 518,
  },
  {
    id: 'g-3',
    title: 'Bandra Sunset Rooftop Bliss',
    city: 'Mumbai',
    date: 'April 2025',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    category: 'Yoga Poses',
    caption: 'Golden hour stretches with The YODA rescue litter.',
    likes: 429,
  },
  {
    id: 'g-4',
    title: 'Adoption Day Celebration!',
    city: 'Delhi NCR',
    date: 'April 2025',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    category: 'Adoption Days',
    caption: 'Sweet Coco and his new human family signing adoption paperwork.',
    likes: 681,
  },
  {
    id: 'g-5',
    title: 'Resident Vet Health Check',
    city: 'Bangalore',
    date: 'May 2025',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    category: 'BTS & Vet Care',
    caption: 'Pre-session health checkup & hydration check with Dr. Meera.',
    likes: 290,
  },
  {
    id: 'g-6',
    title: 'Double Pup Nap in Child\'s Pose',
    city: 'Pune',
    date: 'May 2025',
    imageUrl: 'https://images.unsplash.com/photo-1591160674255-fc8b9f79d568?auto=format&fit=crop&w=800&q=80',
    category: 'Cuddle Moments',
    caption: 'Two sleepy twins claiming the mat during restorative hold.',
    likes: 574,
  },
  {
    id: 'g-7',
    title: 'International Yoga Day Preview',
    city: 'Delhi NCR',
    date: 'June 2025',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    category: 'Yoga Poses',
    caption: 'Deer Park view, green foliage, and cheerful puppy smiles.',
    likes: 388,
  },
  {
    id: 'g-8',
    title: 'Goa Palm Grove Flow',
    city: 'Goa',
    date: 'April 2025',
    imageUrl: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=800&q=80',
    category: 'Cuddle Moments',
    caption: 'Assagao morning breeze and rescue pups discovering grass.',
    likes: 462,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Puppy Welfare',
    question: 'Where do the puppies come from and are they ethically cared for?',
    answer: 'All puppies at our events come exclusively from certified, verified non-profit animal rescue shelters (like CARE Bangalore, The YODA Mumbai, Friendicoes Delhi, and RESQ Pune). We never source from commercial breeders. Puppies are vaccinated, dewormed, vet-checked on-site, and participating specifically for early positive human socialization to facilitate forever adoptions.'
  },
  {
    id: 'faq-2',
    category: 'Puppy Welfare',
    question: 'How do you prevent puppies from getting stressed or exhausted?',
    answer: 'We enforce a strict 0-Stress Animal Charter: puppies only participate for a maximum of 30-40 minutes per day with constant fresh water, clean resting crates, and direct supervision by dedicated shelter caregivers and our on-site veterinarian. Attendees are instructed never to forcefully pick up or wake sleeping puppies.'
  },
  {
    id: 'faq-3',
    category: 'Booking & Pricing',
    question: 'What is included in the ticket price?',
    answer: 'Your ticket includes full access to the 75-minute session (40 min gentle yoga + 35 min dedicated cuddle & photo time), premium sanitized yoga mat and props, high-resolution digital event photos sent via email, herbal refreshments, and a direct donation contribution of ₹250 to our partner shelter\'s emergency medical fund.'
  },
  {
    id: 'faq-4',
    category: 'Yoga & Experience',
    question: 'I am a complete beginner who has never done yoga. Can I attend?',
    answer: 'Absolutely! 70% of our attendees have never attended a yoga studio before. Our yoga flow is ultra gentle, slow, and focused on relaxation, stretching, and laughing. You can pause or just sit and cuddle the puppies at any point.'
  },
  {
    id: 'faq-5',
    category: 'Adoption & Shelters',
    question: 'Can I adopt one of the puppies I meet during the session?',
    answer: 'Yes! That is our primary mission. Shelter adoption counselors and foster coordinators are present at every event. If you connect with a pup, you can submit an adoption application immediately. The shelter will conduct standard home verification and foster handover protocols.'
  },
  {
    id: 'faq-6',
    category: 'Yoga & Experience',
    question: 'Can I bring my own pet dog to the session?',
    answer: 'To ensure the health and biological safety of our young, foster-stage shelter puppies (who are developing their immunity in sterile groups), outside pets are not permitted inside the session room.'
  },
  {
    id: 'faq-7',
    category: 'Booking & Pricing',
    question: 'What is your cancellation and reschedule policy?',
    answer: 'You can cancel or reschedule your ticket up to 48 hours before the scheduled event time for a 100% credit voucher or full refund. Within 48 hours, tickets can be transferred to a friend or converted into a shelter donation tax receipt.'
  },
  {
    id: 'faq-8',
    category: 'Yoga & Experience',
    question: 'What safety and hygiene measures are in place?',
    answer: "All attendees must sanitize their hands upon arrival. Mats and floor surfaces are disinfected with organic, non-toxic, veterinary-grade pet-safe sanitizer before and after every session. We also have dedicated 'puppy relief zones' and attendants who immediately clean any little accidents!"
  },
  {
    id: 'faq-9',
    category: 'Booking & Pricing',
    question: 'Do you host private sessions for corporate teams or birthdays?',
    answer: 'Yes! We frequently host customized corporate wellness retreats, birthday celebrations, and date night sessions for groups of 10 to 30 people. Contact us via our Corporate page or WhatsApp to book a private date.'
  },
  {
    id: 'faq-10',
    category: 'Puppy Welfare',
    question: 'What age are the puppies?',
    answer: 'Puppies are typically between 8 to 16 weeks of age, after receiving their core veterinarian vaccinations and clearance for group socialization.'
  }
];

export const IMPACT_STATS = {
  puppiesAdopted: 428,
  happyYogis: 8940,
  shelterFundsRaisedINR: '₹14,20,000+',
  soldOutEvents: 194,
  partnerShelters: 12,
  citiesActive: 6,
  averageRating: 4.95,
};
