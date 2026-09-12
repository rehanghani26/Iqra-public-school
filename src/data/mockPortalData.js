/**
 * @file mockPortalData.js
 * @description Centralized hardcoded response data for Iqra Public School, Motihari.
 * All images are loaded directly from local project assets (`@/asset`), avoiding external links.
 * Resembles the exact structure of Express backend `/api/v1/portal/public`.
 */

import {
  schoolLogo,
  schoolTemplate,
  directorSir,
  directorSirMain,
  prayer,
  prayer2,
  aug15,
  aug15_2,
  award,
  award2,
  award3,
  award4,
  award5,
  event,
  event2,
  hostel,
} from '@/asset';

export const iqraPublicSchoolData = {
  enabled: true,
  schoolName: 'Iqra Public School',
  affiliation: 'Affiliated to CBSE Pattern & Modern Curriculum',
  affiliationCode: 'SCH-2026-CBSE-845401',
  tagline: 'Knowledge, Character & Excellence for a Better Tomorrow',
  schoolLogo: schoolLogo,
  heroImage: schoolTemplate,
  heroSubtitle: 'At Iqra Public School Motihari, we nurture young minds with quality education, moral integrity, and modern learning tools to inspire confident future leaders.',
  admissionBadge: 'Admissions Open for Session 2026 – 2027',
  
  aboutTitle: 'About Iqra Public School',
  aboutDescription: 'Established with a vision to deliver value-based academic distinction, Iqra Public School provides a safe, disciplined, and stimulating atmosphere where every child in Motihari and East Champaran is encouraged to realize their highest potential.',
  
  // Leadership & Direction
  directorName: 'Hasan Shahid',
  directorRole: 'Director, Iqra Public School',
  directorImage: directorSir,
  directorQuote: 'Our endeavor is to enlighten minds with beneficial knowledge and deep-rooted moral values so our children can excel in modern society with dignity and purpose.',
  
  principalName: 'Dr. Zafar Iqbal',
  principalRole: 'Principal & Head of Academic Council',
  principalImage: directorSirMain,
  principalMessage: 'Education is not merely the transmission of facts, but the ignition of curiosity, compassion, and leadership in every young mind that walks through our gates.',

  // Contact Details (Authentic Motihari Location)
  contact: {
    address: 'Near Hanuman Gadhi Masjid, Nakshey Tola, Eidgah Road, Motihari, East Champaran, Bihar - 845401',
    phone: '+91 94314 26252',
    alternatePhone: '+91 99342 66252',
    email: 'info@iqrapublicschool.com',
    admissionsEmail: 'admissions@iqrapublicschool.com',
    timing: 'Monday – Thursday: 09:00 AM – 02:30 PM | Friday: 09:00 AM – 11:00 AM | Saturday: 09:00 AM – 02:00 PM',
  },

  // Social & External Links
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=100054487419314',
    youtube: 'https://www.youtube.com/@IqraPublicSchoolMotihari',
    website: 'https://www.iqrapublicschool.com',
  },

  // Verified Metrics
  metrics: [
    { label: 'Happy Students', value: '2,500+' },
    { label: 'Qualified Teachers', value: '120+' },
    { label: 'Academic Programs', value: '20+' },
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Safe & Secure Campus', value: '100%' },
  ],

  // Notice Board Announcements
  notices: [
    {
      id: 1,
      title: 'Admissions Open for Academic Session 2026-2027 (Nursery to Grade 10)',
      date: 'Sep 08, 2026',
      tag: 'Admissions',
      urgent: true,
    },
    {
      id: 2,
      title: 'Annual Science & Art Exhibition at Eidgah Road Campus',
      date: 'Sep 15, 2026',
      tag: 'Events',
      urgent: false,
    },
    {
      id: 3,
      title: 'Periodic Assessment Schedule & Parent-Teacher Counseling Session',
      date: 'Sep 22, 2026',
      tag: 'Academic',
      urgent: false,
    },
  ],

  // Core Campus Facilities
  facilities: [
    {
      title: 'Experienced Educators',
      badge: 'Dedicated Faculty',
      description: 'Caring, trained teachers providing individual mentorship and personalized support for every learner.',
      icon: 'teachers',
      image: directorSir,
      gradient: 'from-emerald-700 to-[#0b3d2e]',
      tagline: 'Passionate mentors committed to moral and scholastic growth',
    },
    {
      title: 'Smart Digital Classrooms',
      badge: 'Modern Learning',
      description: 'Well-ventilated, spacious classrooms equipped with interactive learning aids, comfortable desks, and audio-visual modules.',
      icon: 'classrooms',
      image: schoolTemplate,
      gradient: 'from-[#0b3d2e] to-teal-700',
      tagline: 'Interactive, tech-integrated, and joyful study environments',
    },
    {
      title: 'Sports & Character Building',
      badge: 'Active Campus',
      description: 'Physical education ground, competitive cricket, football, indoor games, and moral value clubs fostering sportsmanship.',
      icon: 'activities',
      image: award2,
      gradient: 'from-amber-600 to-emerald-800',
      tagline: 'Fostering physical stamina, teamwork, and ethical character',
    },
  ],

  // Extended Facilities
  extendedFacilities: [
    {
      title: 'Computer & IT Laboratory',
      desc: 'High-speed internet workstations with hands-on coding, typing, and digital literacy training.',
      icon: 'compass',
      image: event,
    },
    {
      title: 'Campus Hostel & Boarding',
      desc: 'Clean, secure, and disciplined boarding facility with healthy meals and round-the-clock wardens.',
      icon: 'shield',
      image: hostel,
    },
    {
      title: 'Safe Motihari Bus Fleet',
      desc: 'Reliable school van & bus coverage across Nakshey Tola, Chhatauni, Raja Bazar, and nearby Champaran routes.',
      icon: 'bus',
      image: schoolTemplate,
    },
    {
      title: '24/7 CCTV & Campus Safety',
      desc: 'Guarded premises with round-the-clock CCTV cameras and dedicated safety staff.',
      icon: 'shield',
      image: schoolTemplate,
    },
  ],

  // Academic Wings & Pathways
  academicWings: [
    {
      title: 'Pre-Primary Wing (Early Years)',
      grades: 'Nursery, LKG & UKG (Ages 3 – 5)',
      tag: 'Play & Discovery',
      description: 'Sensory-rich play, phonics, number songs, and creative crafts fostering joyful curiosity in young toddlers.',
      subjects: ['Early Phonics & Reading', 'Numbers & Shapes', 'Rhymes & Storytelling', 'Moral Values & Habits'],
      image: prayer,
    },
    {
      title: 'Primary School Wing',
      grades: 'Grades 1 to 5 (Ages 6 – 10)',
      tag: 'Foundations & Inquiry',
      description: 'Building strong conceptual fundamentals in languages, arithmetic, science, and cooperative classroom activities.',
      subjects: ['English & Hindi', 'Mathematics', 'Environmental Science (EVS)', 'Computer Basics', 'Moral Science & Urdu'],
      image: award4,
    },
    {
      title: 'Middle School Wing',
      grades: 'Grades 6 to 8 (Ages 11 – 13)',
      tag: 'Analytical Reasoning',
      description: 'Structured scientific experiments, mathematical problem solving, digital skills, and social sciences exploration.',
      subjects: ['General Science (Physics/Chemistry/Bio)', 'Algebra & Geometry', 'Social Studies', 'Computer Coding', 'Languages'],
      image: event,
    },
    {
      title: 'Secondary School Wing',
      grades: 'Grades 9 & 10 (Ages 14 – 16)',
      tag: 'CBSE Board Preparation',
      description: 'Rigorous CBSE board exam coaching, laboratory practicals, sample papers, and individual counseling.',
      subjects: ['CBSE Science Stream', 'Standard / Basic Mathematics', 'Social Sciences', 'Information Technology', 'English Communicative'],
      image: award,
    },
  ],

  // 3-Step Admissions Roadmap
  admissionSteps: [
    {
      step: '01',
      title: 'Submit Admission Inquiry',
      subtitle: 'Online or Campus Desk',
      description: 'Fill out our simple inquiry form online or visit our admissions office at Eidgah Road, Motihari.',
      badge: 'Step 1: Inquire',
    },
    {
      step: '02',
      title: 'Interaction & Campus Tour',
      subtitle: 'Meet Our Teachers',
      description: 'Bring your child for a friendly, supportive conversation and tour our classrooms, computer lab, and library.',
      badge: 'Step 2: Interaction',
    },
    {
      step: '03',
      title: 'Enrollment & Welcome Kit',
      subtitle: 'Join Iqra Family',
      description: 'Submit basic verification documents, obtain your student kit & booklist, and prepare for orientation day!',
      badge: 'Step 3: Admission',
    },
  ],

  // Age Criteria Table
  ageCriteria: [
    { grade: 'Nursery / Playgroup', age: '3 Years+', cutoff: 'As of March 31, 2026' },
    { grade: 'Lower KG (LKG)', age: '4 Years+', cutoff: 'As of March 31, 2026' },
    { grade: 'Upper KG (UKG)', age: '5 Years+', cutoff: 'As of March 31, 2026' },
    { grade: 'Grade 1', age: '6 Years+', cutoff: 'As of March 31, 2026' },
    { grade: 'Grades 2 to 5', age: 'Age appropriate + Previous report', cutoff: 'Subject to vacant seats' },
    { grade: 'Grades 6 to 9', age: 'Previous school TC & basic assessment', cutoff: 'Subject to vacant seats' },
  ],

  // Required Verification Documents
  documents: [
    'Child’s Official Birth Certificate (Photocopy + Original for verification)',
    'Recent passport-sized color photographs of the student (4 copies)',
    'Photographs of Parents / Guardians (2 copies each)',
    'Previous school Progress Report / Marks Card (Grade 2 upwards)',
    'Original Transfer Certificate (TC) counter-signed by authorized authority',
    'Aadhaar Card copy of student and parents',
  ],

  // Authentic Local School Gallery from `src/asset`
  galleryItems: [
    {
      id: 1,
      title: 'Iqra Public School Main Campus Facade',
      subtitle: 'Eidgah Road Campus Building with Modern Classrooms',
      category: 'campus',
      tag: 'Main Campus',
      img: schoolTemplate,
      featured: true,
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      date: 'Campus Life 2026',
    },
    {
      id: 2,
      title: 'Morning Prayer & Assembly Discipline',
      subtitle: 'Daily congregation promoting moral values and unity',
      category: 'campus',
      tag: 'Morning Assembly',
      img: prayer,
      badgeBg: 'bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]',
      date: 'Daily Assembly',
    },
    {
      id: 3,
      title: 'Annual Prize Distribution Ceremony',
      subtitle: 'Recognizing academic excellence and subject toppers',
      category: 'awards',
      tag: 'Academic Honors',
      img: award,
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      date: 'Annual Day',
    },
    {
      id: 4,
      title: 'Independence Day Celebrations (15th Aug)',
      subtitle: 'Patriotic flag hoisting and cultural parade',
      category: 'events',
      tag: 'National Days',
      img: aug15,
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      date: 'National Celebration',
    },
    {
      id: 5,
      title: 'Annual Science & Art Exhibition',
      subtitle: 'Innovative student models, robotics & science charts',
      category: 'events',
      tag: 'Innovation & STEM',
      img: event,
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
      date: 'Science Fest',
    },
    {
      id: 6,
      title: 'Campus Hostel & Boarding Facilities',
      subtitle: 'Disciplined, safe & hygienic residential facilities',
      category: 'campus',
      tag: 'Hostel Facility',
      img: hostel,
      featured: true,
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      date: 'Residential Care',
    },
    {
      id: 7,
      title: 'Sports & Athletic Trophy Presentation',
      subtitle: 'Champions of inter-school district sports meet',
      category: 'sports',
      tag: 'Sports Honors',
      img: award2,
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      date: 'Sports Meet',
    },
    {
      id: 8,
      title: 'Morning Assembly Congregation',
      subtitle: 'Spiritual grounding, pledge & character building',
      category: 'campus',
      tag: 'Discipline',
      img: prayer2,
      badgeBg: 'bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]',
      date: 'School Culture',
    },
    {
      id: 9,
      title: 'Republic Day Parade & Celebrations',
      subtitle: 'Tricolor flag hoisting ceremony and patriotic anthems',
      category: 'events',
      tag: 'National Pride',
      img: aug15_2,
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      date: '26th January',
    },
    {
      id: 10,
      title: 'Board Exam Toppers Felicitation',
      subtitle: 'Exceptional performers awarded gold medals & trophies',
      category: 'awards',
      tag: 'Excellence Roll',
      img: award3,
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      date: 'Merit Awards',
    },
    {
      id: 11,
      title: 'Student Drama & Co-Curricular Stage',
      subtitle: 'Nurturing confidence, eloquence & theatrical expression',
      category: 'events',
      tag: 'Stage & Drama',
      img: event2,
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
      date: 'Cultural Gala',
    },
    {
      id: 12,
      title: 'Junior Wing Achievers Recognition',
      subtitle: 'Early milestones, creative arts & good conduct badges',
      category: 'awards',
      tag: 'Junior Honors',
      img: award4,
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      date: 'Primary Wing',
    },
    {
      id: 13,
      title: 'Special Talent & Youth Accolades',
      subtitle: 'Celebrating all-round creativity and leadership',
      category: 'sports',
      tag: 'Special Accolades',
      img: award5,
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      date: 'Talent Fest',
    },
    {
      id: 14,
      title: 'Director Sir Mentorship & Guidance Desk',
      subtitle: 'Direct engagement with teachers, students and guardians',
      category: 'campus',
      tag: 'Leadership',
      img: directorSirMain,
      badgeBg: 'bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]',
      date: 'Executive Desk',
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: 'Where is Iqra Public School located in Motihari?',
      a: 'The school campus is situated Near Hanuman Gadhi Masjid, Nakshey Tola, along Eidgah Road in Motihari (East Champaran, Bihar - 845401), easily accessible from all key parts of the city.',
      tag: 'Location & Access',
    },
    {
      q: 'Which curriculum and board guidelines are followed?',
      a: 'We strictly adhere to CBSE syllabus norms combined with value-based education, modern IT education, languages, and extracurricular skill-building.',
      tag: 'Curriculum',
    },
    {
      q: 'What is the admission procedure for new students?',
      a: 'Parents can fill out the online admission inquiry or visit our Eidgah Road campus office. After an informal conversation and document verification, admission is confirmed.',
      tag: 'Admissions',
    },
    {
      q: 'Does Iqra Public School provide transport facilities?',
      a: 'Yes, we operate safe and monitored school vehicles covering major areas of Motihari city, Chhatauni, Raja Bazar, and adjoining localities.',
      tag: 'Transport',
    },
    {
      q: 'What are the daily school office timings?',
      a: 'The office is open Monday to Thursday from 09:00 AM to 02:30 PM, Friday from 09:00 AM to 11:00 AM, and Saturday from 09:00 AM to 02:00 PM.',
      tag: 'Timings',
    },
  ],

  // School Milestones
  milestones: [
    { year: '1998', title: 'Foundation Laid', desc: 'Established on Eidgah Road with dedicated community educators committed to value-based schooling.' },
    { year: '2008', title: 'Campus Expansion', desc: 'Inaugurated dedicated multi-story facility, science lab, and expanded classrooms.' },
    { year: '2018', title: 'Academic Excellence Award', desc: 'Felicitated for producing outstanding district board toppers in East Champaran.' },
    { year: '2026', title: 'Silver Jubilee & Beyond', desc: 'Celebrating over 25+ years of trusted service with 2,500+ successful students.' },
  ],

  // Department Contact Lines
  departments: [
    {
      title: 'Admissions & Campus Visits',
      phone: '+91 94314 26252',
      email: 'admissions@iqrapublicschool.com',
      hours: 'Mon – Sat: 9:00 AM – 2:30 PM',
      color: 'border-[#dceee3] bg-[#edf7f2]/60',
    },
    {
      title: 'Director & Management Desk',
      phone: '+91 99342 66252',
      email: 'director@iqrapublicschool.com',
      hours: 'By prior appointment',
      color: 'border-[#dceee3] bg-emerald-50/50',
    },
    {
      title: 'Transport & Route Helpline',
      phone: '+91 94314 26252',
      email: 'transport@iqrapublicschool.com',
      hours: 'School bus operating hours',
      color: 'border-emerald-200 bg-emerald-50/50',
    },
    {
      title: 'Accounts & Fee Desk',
      phone: '+91 99342 66252',
      email: 'accounts@iqrapublicschool.com',
      hours: 'Mon – Sat: 9:30 AM – 1:30 PM',
      color: 'border-amber-200 bg-amber-50/50',
    },
  ],
};

// Response envelope exactly matching Express server response format: { success: true, portal: {...}, data: {...} }
export const mockPortalData = {
  success: true,
  portal: iqraPublicSchoolData,
  data: iqraPublicSchoolData,
};

export default mockPortalData;
