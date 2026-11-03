/**
 * NITE CREW — Cyber-Rave 1v1 Entry Partner Platform
 * 31 Mumbai Bars & Clubs with Authentic Interior Photos, In-App Coordination Chat, Demo Visual QR Pass
 */

const NITECREW_STORAGE_KEY = 'nitecrew_active_user';
const NITECREW_PASS_KEY = 'nitecrew_active_pass';
const NITECREW_CHAT_KEY = 'nitecrew_chat_messages';

// 31 TOP MUMBAI CLUBS & BARS WITH REAL PHOTOS & METRICS
const MUMBAI_CLUBS = [
    // Bandra & Khar
    {
        id: 1,
        name: "Bastian At The Top",
        area: "Dadar / Bandra West",
        zone: "bandra",
        tag: "48th Floor Rooftop Luxury",
        genre: "COMMERCIAL & HIP-HOP",
        stagFee: "₹4,000",
        stagFeeNum: 4000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "Vikram K. (V-Nightlife)",
        promoterCutoff: "6:30 PM",
        meetupSpot: "Ground Floor Valet Lobby",
        photo: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
        dressCode: "Smart Chic / Closed Shoes for Men",
        musicVibe: "Top 40, Commercial Hip-Hop & Deep House",
        description: "Mumbai's most coveted 48th floor rooftop offering panoramic Arabian Sea & city skyline views with celebrity crowds."
    },
    {
        id: 2,
        name: "145 Bandra",
        area: "Turner Road, Bandra West",
        zone: "bandra",
        tag: "High Energy Social Bar",
        genre: "POP, COMMERCIAL & RETRO",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 6,
        promoter: "Aniket S. (Suburbs Vibe)",
        promoterCutoff: "7:30 PM",
        meetupSpot: "Outside 145 Main Entrance",
        photo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Casuals",
        musicVibe: "Retro Pop, 2000s Hits & Commercial EDM",
        description: "Packed weekend social hub famous for gin cocktails, freakshakes, and high-octane singalong party tracks."
    },
    {
        id: 3,
        name: "The Daily All Day",
        area: "SV Road, Bandra West",
        zone: "bandra",
        tag: "Craft Cocktails & House",
        genre: "DEEP HOUSE & INDIE TECH",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 4,
        promoter: "Rhea M. (Daily Sessions)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "Courtyard Outside The Daily",
        photo: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
        dressCode: "Elevated Casual",
        musicVibe: "Melodic Techno, Minimal House & Funk",
        description: "An intimate cocktail sanctuary with craft mixology, vinyl listening vibes, and a packed late-night dancefloor."
    },
    {
        id: 4,
        name: "House of Nomad",
        area: "Taj Lands End, Bandra West",
        zone: "bandra",
        tag: "Ultra Luxury Lounge",
        genre: "AFRO HOUSE & MELODIC",
        stagFee: "₹3,500",
        stagFeeNum: 3500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 2,
        promoter: "Karan B. (Taj VIP)",
        promoterCutoff: "6:00 PM",
        meetupSpot: "Taj Lands End Hotel Porch",
        photo: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
        dressCode: "Glamorous / Formals & Blazers",
        musicVibe: "Afro House, Progressive & Downtempo",
        description: "Nestled inside Taj Lands End, this opulent lounge draws Mumbai's elite with world-class international guest DJs."
    },
    {
        id: 5,
        name: "Escobar",
        area: "Linking Road, Bandra West",
        zone: "bandra",
        tag: "Iconic Longest Bar",
        genre: "COMMERCIAL & LATIN",
        stagFee: "₹3,000",
        stagFeeNum: 3000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 5,
        promoter: "Sunny D. (Bandra Nights)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "Escobar Elevator Foyer",
        photo: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=900&q=80",
        dressCode: "Club Chic",
        musicVibe: "R&B, Latin Pop & Commercial Dance",
        description: "Legendary rooftop terrace featuring Mumbai's longest open-air bar counter and pulsing weekend parties."
    },
    {
        id: 6,
        name: "Torii Mumbai",
        area: "Pali Hill, Bandra West",
        zone: "bandra",
        tag: "Gauri Khan Glamour Venue",
        genre: "LOUNGE HOUSE & DISCO",
        stagFee: "₹3,500",
        stagFeeNum: 3500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "Pooja V. (Elite Circle)",
        promoterCutoff: "6:30 PM",
        meetupSpot: "Torii Valet Drop-off",
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        dressCode: "High Glamour",
        musicVibe: "Nu-Disco, Deep House & Chill Lounge",
        description: "Designed by Gauri Khan, this lush Asian restaurant transforms into a high-octane VIP party den by midnight."
    },
    {
        id: 7,
        name: "Khar Social",
        area: "Rohan Plaza, Khar West",
        zone: "bandra",
        tag: "Gig Space & Craft Cocktails",
        genre: "INDIE & HIP-HOP",
        stagFee: "₹1,500",
        stagFeeNum: 1500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 8,
        promoter: "Social Guestlist Team",
        promoterCutoff: "8:00 PM",
        meetupSpot: "Khar Social Entrance Steps",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=80",
        dressCode: "Casual / Streetwear",
        musicVibe: "Indian Hip-Hop, Trap & Commercial",
        description: "A staple in Mumbai's youth subculture with live gigs, underground rap cyphers, and famous LIITs."
    },
    {
        id: 8,
        name: "TAP Resto Bar",
        area: "Link Corner, Bandra West",
        zone: "bandra",
        tag: "Sports Lounge & Dancefloor",
        genre: "BOLLYWOOD COMMERCIAL",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 7,
        promoter: "Mayur P. (Tap Nights)",
        promoterCutoff: "7:30 PM",
        meetupSpot: "Link Square Mall Gate",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Casual",
        musicVibe: "Bollywood EDM & Commercial Anthems",
        description: "Massive dance floor with dynamic lighting and chart-topping Bollywood club hits that run late."
    },

    // Lower Parel & Worli
    {
        id: 9,
        name: "antiSOCIAL",
        area: "Mathuradas Mill, Lower Parel",
        zone: "lower-parel",
        tag: "Underground Culture Bunker",
        genre: "TECHNO & BASS",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 6,
        promoter: "DJ Aryan & Crew",
        promoterCutoff: "6:00 PM",
        meetupSpot: "Blue Tokai Courtyard Outside",
        photo: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=900&q=80",
        dressCode: "All-Black / Rave Ready",
        musicVibe: "Industrial Techno, Drum & Bass, Dubstep",
        description: "Mumbai's premier underground warehouse bunker equipped with state-of-the-art Funktion-One sound."
    },
    {
        id: 10,
        name: "Diablo Mumbai",
        area: "Victoria House, Worli",
        zone: "lower-parel",
        tag: "Gothic High-Energy Bar",
        genre: "DEEP HOUSE & TECHNO",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 4,
        promoter: "Prateek S. (Curated Nights)",
        promoterCutoff: "6:45 PM",
        meetupSpot: "Victoria House Front Lawn",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Sharp & Chic",
        musicVibe: "Progressive Techno & Dark House",
        description: "Dramatic gothic gargoyles, velvet drapes, and high-energy electronic music in an opulent Worli mansion setting."
    },
    {
        id: 11,
        name: "Epitome",
        area: "Mathuradas Mill, Lower Parel",
        zone: "lower-parel",
        tag: "Luxury Vegetarian Club",
        genre: "BOLLYWOOD RAVE",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 5,
        promoter: "Gaurav J. (Mill District)",
        promoterCutoff: "6:30 PM",
        meetupSpot: "Compound Starbucks Entrance",
        photo: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Smart",
        musicVibe: "High Energy Bollywood Tech & Punjabi Pop",
        description: "Packed weekends with laser shows, cryo guns, and Bollywood dance anthems."
    },
    {
        id: 12,
        name: "AER Rooftop Bar",
        area: "Four Seasons Hotel, Worli",
        zone: "lower-parel",
        tag: "34th Floor Open-Air Skyline",
        genre: "SUNSET HOUSE & DISCO",
        stagFee: "₹4,500",
        stagFeeNum: 4500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 2,
        promoter: "Four Seasons Guestlist Desk",
        promoterCutoff: "6:00 PM",
        meetupSpot: "Four Seasons Hotel Lobby",
        photo: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
        dressCode: "Ultra Glam / Smart Formals",
        musicVibe: "Melodic House, Sunset Beats & Disco",
        description: "The crown jewel of Mumbai rooftops. 34 floors up with unhindered 360-degree views of the sea."
    },
    {
        id: 13,
        name: "Lord of the Drinks",
        area: "Trade View, Lower Parel",
        zone: "lower-parel",
        tag: "Massive 200ft Long Bar",
        genre: "COMMERCIAL & BOLLYWOOD",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 8,
        promoter: "Kabir N. (LOD Mumbai)",
        promoterCutoff: "7:15 PM",
        meetupSpot: "Trade View Central Atrium",
        photo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
        dressCode: "Smart Casual",
        musicVibe: "Chartbusters & Commercial Dance",
        description: "Boasting Asia's longest bar counter, immense chandeliers, and packed party crowds."
    },
    {
        id: 14,
        name: "Toit Brewery",
        area: "Senapati Bapat Marg, Lower Parel",
        zone: "lower-parel",
        tag: "Iconic Craft Taproom",
        genre: "CLASSIC ROCK & INDIE",
        stagFee: "₹1,500",
        stagFeeNum: 1500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 9,
        promoter: "Toit Host Desk",
        promoterCutoff: "8:00 PM",
        meetupSpot: "Toit Mills Entrance Gate",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=80",
        dressCode: "Casual",
        musicVibe: "Alternative Rock, Indie & Acoustic",
        description: "Sprawling microbrewery serving iconic fresh ales, wood-fired sourdough pizzas, and lively banter."
    },
    {
        id: 15,
        name: "145 The Mill",
        area: "Mathuradas Mill, Lower Parel",
        zone: "lower-parel",
        tag: "Buzzing Mill Party Pad",
        genre: "POP & COMMERCIAL EDM",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 6,
        promoter: "Rishi T. (145 Collective)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "145 Mill Entrance Steps",
        photo: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Smart",
        musicVibe: "Commercial Dance, Pop Mashups",
        description: "Central party hub in the heart of Lower Parel with pool tables, neon signage, and energetic DJ sets."
    },
    {
        id: 16,
        name: "Slink & Bardot",
        area: "Thadani House, Worli Village",
        zone: "lower-parel",
        tag: "Chic French Cocktail Den",
        genre: "FRENCH HOUSE & JAZZ",
        stagFee: "₹3,000",
        stagFeeNum: 3000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "Slink Concierge",
        promoterCutoff: "6:30 PM",
        meetupSpot: "Worli Village Lane Entrance",
        photo: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
        dressCode: "Sophisticated Glam",
        musicVibe: "Nu-Jazz, French Deep House",
        description: "Hidden in Worli village, this romantic speakeasy serves experimental culinary cocktails."
    },
    {
        id: 17,
        name: "Luna",
        area: "The St. Regis, Lower Parel",
        zone: "lower-parel",
        tag: "37th Floor High Luxury Club",
        genre: "MELODIC & PROGRESSIVE",
        stagFee: "₹4,000",
        stagFeeNum: 4000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 2,
        promoter: "St. Regis Platinum Pass",
        promoterCutoff: "6:00 PM",
        meetupSpot: "St. Regis Ground Floor Valet",
        photo: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
        dressCode: "Formal / Black Tie Optional",
        musicVibe: "Progressive Electronic & Deep Melodic",
        description: "Perched atop the St. Regis, Luna combines 5-star hospitality with an exclusive late-night nightclub."
    },
    {
        id: 18,
        name: "Playboy Mansion Club",
        area: "Birla Centurion, Worli",
        zone: "lower-parel",
        tag: "High Energy Superclub",
        genre: "BIG ROOM EDM & BASS",
        stagFee: "₹3,500",
        stagFeeNum: 3500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 4,
        promoter: "Sahil Z. (Playboy PR)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "Birla Centurion Front Gate",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Club Glamour",
        musicVibe: "EDM Festival Hits, Big Room",
        description: "Massive multi-level superclub featuring international headliner sets and VIP bottle service."
    },

    // Juhu, Santacruz & BKC
    {
        id: 19,
        name: "Toy Room Mumbai",
        area: "Grand Hyatt, Santacruz / BKC",
        zone: "juhu-bkc",
        tag: "Frank The Teddy International Club",
        genre: "EDM & HIP-HOP",
        stagFee: "₹3,500",
        stagFeeNum: 3500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 5,
        promoter: "Sameer D. (NightRider)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "Grand Hyatt Main Lobby Porch",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "High Fashion / Club Wear",
        musicVibe: "Commercial Hip-Hop, R&B & Trap",
        description: "The world-famous London nightclub brand in Mumbai with its naughty teddy mascot Frank and graffiti walls."
    },
    {
        id: 20,
        name: "One8 Commune Juhu",
        area: "Kishore Kumar Bungalow, Juhu",
        zone: "juhu-bkc",
        tag: "Virat Kohli's Beachside Bar",
        genre: "POP & COMMERCIAL",
        stagFee: "₹3,000",
        stagFeeNum: 3000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 5,
        promoter: "One8 Events Team",
        promoterCutoff: "7:15 PM",
        meetupSpot: "Kishore Kumar House Gate",
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        dressCode: "Smart Casual",
        musicVibe: "Acoustic Pop & Commercial Dance",
        description: "Located at the historic Kishore Kumar bungalow, blending coastal aesthetics with celebrity crowds."
    },
    {
        id: 21,
        name: "Mirage Beach Lounge",
        area: "Juhu Tara Road, Juhu",
        zone: "juhu-bkc",
        tag: "Sunset Beach Club Vibe",
        genre: "AFRO HOUSE & LATIN",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 6,
        promoter: "Aaliyah P. (Juhu Vibes)",
        promoterCutoff: "7:00 PM",
        meetupSpot: "Juhu Hotel Entrance",
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        dressCode: "Resort Chic",
        musicVibe: "Afro House, Organic House & Latin",
        description: "Outdoor beach lounge catching Arabian Sea breezes with cocktails and tribal house beats."
    },
    {
        id: 22,
        name: "True Tramm Trunk",
        area: "Juhu Tara Road, Juhu",
        zone: "juhu-bkc",
        tag: "Bollywood Nights & Gulp Cocktails",
        genre: "BOLLYWOOD DANCE",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 7,
        promoter: "TTT Juhu Nights",
        promoterCutoff: "7:45 PM",
        meetupSpot: "TTT Juhu Front Lawn",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Casual",
        musicVibe: "Bollywood Retro & Commercial Remixes",
        description: "Famous for cocktail gulps in bespoke bottles and energetic Saturday Bollywood dance sessions."
    },
    {
        id: 23,
        name: "Bar Stock Exchange BKC",
        area: "Parinee Crescenzo, BKC",
        zone: "juhu-bkc",
        tag: "Dynamic Drink Pricing Pub",
        genre: "COMMERCIAL POP",
        stagFee: "₹1,500",
        stagFeeNum: 1500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 10,
        promoter: "TBSE Host Desk",
        promoterCutoff: "8:00 PM",
        meetupSpot: "Parinee Crescenzo Glass Lobby",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=80",
        dressCode: "Casuals",
        musicVibe: "Pop, Commercial & Classic Hits",
        description: "BKC's corporate crowd after-work playground where drink prices trade like stock markets."
    },
    {
        id: 24,
        name: "Doolally Taproom Khar",
        area: "Park Corner, Khar / Juhu Link",
        zone: "juhu-bkc",
        tag: "Legendary Craft Ciders & Ales",
        genre: "INDIE & LO-FI",
        stagFee: "₹1,500",
        stagFeeNum: 1500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 9,
        promoter: "Doolally Community",
        promoterCutoff: "8:30 PM",
        meetupSpot: "Doolally Porch Beside Costa",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=80",
        dressCode: "Comfy Casual",
        musicVibe: "Lo-Fi, Indie & Acoustic",
        description: "Pet-friendly, board-game loaded craft microbrewery serving Apple Cider and Belgian Wit."
    },

    // Andheri West & East
    {
        id: 25,
        name: "Dragonfly Experience",
        area: "The Orb, Andheri East",
        zone: "andheri",
        tag: "Priyank Sukhija Sensory Club",
        genre: "BOLLYWOOD TECH & EDM",
        stagFee: "₹3,000",
        stagFeeNum: 3000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "Karan M. (Bombay Buzz)",
        promoterCutoff: "7:15 PM",
        meetupSpot: "The Orb Central Courtyard",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Club Chic",
        musicVibe: "Bollywood EDM, Punjabi Tech",
        description: "Opulent dragonflies hanging from vaulted ceilings with booming sound and celebrity appearances."
    },
    {
        id: 26,
        name: "Barrel & Co.",
        area: "New Link Road, Andheri West",
        zone: "andheri",
        tag: "Industrial Brewery & Dancefloor",
        genre: "RETRO & COMMERCIAL",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 5,
        promoter: "Rishi T. (Suburbs Network)",
        promoterCutoff: "7:45 PM",
        meetupSpot: "Star Bazaar Parking Entry",
        photo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
        dressCode: "Party Smart",
        musicVibe: "Retro Classics & Commercial House",
        description: "Vast industrial timber & steel decor with in-house brewed beers and a high-voltage dance floor."
    },
    {
        id: 27,
        name: "Bombay Cocktail Bar",
        area: "Deluxe House, Andheri West",
        zone: "andheri",
        tag: "High Glamour Cocktail Club",
        genre: "BOLLYWOOD & HIP-HOP",
        stagFee: "₹2,500",
        stagFeeNum: 2500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 4,
        promoter: "BCB Promoter Desk",
        promoterCutoff: "7:30 PM",
        meetupSpot: "Deluxe House Lobby",
        photo: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
        dressCode: "Glamorous",
        musicVibe: "Bollywood Commercial & Hip-Hop",
        description: "Dramatic neoclassical chandeliers and high-energy music make this an Andheri nightlife landmark."
    },
    {
        id: 28,
        name: "Mitron",
        area: "Crystal Point, Andheri West",
        zone: "andheri",
        tag: "Bustling Party & Rooftop",
        genre: "BOLLYWOOD TECH",
        stagFee: "₹2,000",
        stagFeeNum: 2000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 8,
        promoter: "Mitron Guestlist PR",
        promoterCutoff: "8:00 PM",
        meetupSpot: "Crystal Point Mall Escalator",
        photo: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
        dressCode: "Casual Smart",
        musicVibe: "Commercial & Bollywood Remixes",
        description: "Spacious outdoor and indoor seating with buzzing suburban crowds and weekend DJ sets."
    },
    {
        id: 29,
        name: "Opa Kipos",
        area: "Saki Naka, Andheri East",
        zone: "andheri",
        tag: "Greek Plate Smashing Party",
        genre: "GREEK HOUSE & COMMERCIAL",
        stagFee: "₹3,500",
        stagFeeNum: 3500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "Opa Entertainment Team",
        promoterCutoff: "6:45 PM",
        meetupSpot: "Hotel Peninsula Grand Foyer",
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        dressCode: "White / Mediterranean Chic",
        musicVibe: "Greek Pop, Mediterranean Beats & House",
        description: "Bougainvillea-draped taverna vibe with traditional plate-smashing rituals turning into wild parties."
    },

    // South Bombay (Colaba & Marine Drive)
    {
        id: 30,
        name: "Dome InterContinental",
        area: "Marine Drive, Churchgate",
        zone: "sobo",
        tag: "Rooftop Stargazing & Cocktails",
        genre: "SUNSET LOUNGE HOUSE",
        stagFee: "₹4,000",
        stagFeeNum: 4000,
        coupleFee: "FREE (₹0)",
        spotsLeft: 3,
        promoter: "InterContinental VIP Host",
        promoterCutoff: "6:15 PM",
        meetupSpot: "Hotel Marine Drive Lobby Entrance",
        photo: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
        dressCode: "Smart Elegant",
        musicVibe: "Deep Lounge & Sunset Ambient",
        description: "White canopies overlooking the Queen's Necklace on Marine Drive with starlit skyline views."
    },
    {
        id: 31,
        name: "Colaba Social",
        area: "Apollo Bunder, Colaba",
        zone: "sobo",
        tag: "Heritage Lane Party Spot",
        genre: "INDIE POP & RETRO",
        stagFee: "₹1,500",
        stagFeeNum: 1500,
        coupleFee: "FREE (₹0)",
        spotsLeft: 7,
        promoter: "Social South Guestlist",
        promoterCutoff: "8:00 PM",
        meetupSpot: "Taj Mahal Palace Colaba Lane",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=80",
        dressCode: "Casual",
        musicVibe: "Classic Rock, Pop & Indie",
        description: "The very first Social in India, tucked behind the iconic Taj Mahal Palace in Colaba."
    }
];

// ==========================================================================
// CANDIDATES POOL (Semi-Blind 1v1 Matching with Algorithm Attributes)
// ==========================================================================
const CANDIDATE_PROFILES_GIRLS = [
    {
        id: "g1",
        name: "Zoya M.",
        age: 22,
        area: "Lower Parel",
        gender: "female",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        vibeTag: "👑 VIP Regular",
        bio: "Architect & design nerd. Big on underground melodic techno, espresso martinis, and spontaneous midnight food runs. Usually at antiSOCIAL or Toy Room.",
        karma: 156,
        punctuality: "100%",
        nightsOut: 12,
        clubPreference: "Toy Room Mumbai",
        clubKey: "toyroom",
        eventDetails: "Saturday · Toy Room Mumbai",
        socialStyle: "Outgoing & High Energy",
        budget: "₹1,500–₹2,500",
        goingOutStyle: "Club & Dancefloor",
        musicTaste: ["TECHNO", "MELODIC HOUSE"],
        targetArrival: "10:30 PM",
        intentProtocol: "1 Free Welcome Drink",
        verifiedId: true,
        verifiedMethod: "DigiLocker Govt ID",
        icebreaker: {
            q: "What's your biggest nightlife red flag?",
            a: "People who complain about the music volume inside a rave 💀"
        }
    },
    {
        id: "g2",
        name: "Riya S.",
        age: 24,
        area: "Bandra West",
        gender: "female",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        vibeTag: "🦋 Social Butterfly",
        bio: "Copywriter & live music fanatic. Give me indie acoustics or deep house over cheesy remixes any day. Love chilling in small groups before heading in.",
        karma: 128,
        punctuality: "99%",
        nightsOut: 8,
        clubPreference: "Bastian At The Top",
        clubKey: "bastian",
        eventDetails: "Tonight · Bastian At The Top",
        socialStyle: "Balanced · Small groups",
        budget: "₹1,000–₹1,500",
        goingOutStyle: "Craft Cocktails & Live Gigs",
        musicTaste: ["COMMERCIAL", "HIP-HOP", "DEEP HOUSE"],
        targetArrival: "10:15 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "Aadhaar KYC Checked",
        icebreaker: {
            q: "What's our rule the moment we walk past the bouncer?",
            a: "Head straight to the bar, grab our drinks, then go to our own squad tables! 🥂"
        }
    },
    {
        id: "g3",
        name: "Ananya P.",
        age: 23,
        area: "Juhu",
        gender: "female",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
        vibeTag: "⚡ The Hype",
        bio: "Product designer by day, singalong Bollywood & commercial party queen by night. Big believer in 3 AM Ayub's rolls and zero drama.",
        karma: 112,
        punctuality: "97%",
        nightsOut: 6,
        clubPreference: "One8 Commune",
        clubKey: "one8",
        eventDetails: "Tonight · One8 Commune",
        socialStyle: "High Energy & Spontaneous",
        budget: "₹1,500–₹2,000",
        goingOutStyle: "Social Club & Singalongs",
        musicTaste: ["COMMERCIAL", "POP", "BOLLYWOOD"],
        targetArrival: "10:45 PM",
        intentProtocol: "Squad Table Hangout",
        verifiedId: true,
        verifiedMethod: "DigiLocker Govt ID",
        icebreaker: {
            q: "Go-to pre-drink track?",
            a: "AP Dhillon x Any hard-hitting Boris Brejcha drop!"
        }
    },
    {
        id: "g4",
        name: "Tanvi K.",
        age: 25,
        area: "Worli",
        gender: "female",
        photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        vibeTag: "♟️ The Strategist",
        bio: "Strategy consultant. Into rooftop sundowners, craft gin cocktails, and curated dinner-to-dance transitions with a low-key squad.",
        karma: 142,
        punctuality: "98%",
        nightsOut: 10,
        clubPreference: "AER Rooftop",
        clubKey: "aer",
        eventDetails: "Tonight · AER Rooftop",
        socialStyle: "Relaxed & Low-key",
        budget: "₹2,000+",
        goingOutStyle: "Rooftops & Speakeasies",
        musicTaste: ["DEEP HOUSE", "MELODIC TECHNO"],
        targetArrival: "10:15 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "Govt DL Verified",
        icebreaker: {
            q: "Post-club hunger fix in Mumbai?",
            a: "Ayub's or Bademiya roll at 3:30 AM non-negotiable!"
        }
    },
    {
        id: "g5",
        name: "Meera D.",
        age: 22,
        area: "Khar West",
        gender: "female",
        photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
        vibeTag: "🎧 Sound Purist",
        bio: "Film student & vinyl collector. Always scouting Mumbai's best sound systems, underground producers, and intimate warehouse sets.",
        karma: 118,
        punctuality: "99%",
        nightsOut: 7,
        clubPreference: "antiSOCIAL",
        clubKey: "antisocial",
        eventDetails: "Friday · antiSOCIAL",
        socialStyle: "Chill & Music-first",
        budget: "Under ₹1,000",
        goingOutStyle: "Underground Sessions",
        musicTaste: ["UNDERGROUND", "TECHNO", "FUNK"],
        targetArrival: "10:30 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "Aadhaar Checked",
        icebreaker: {
            q: "First gig you ever went to?",
            a: "Nucleya at NSCI Dome back when bass music ruled Mumbai!"
        }
    }
];

const CANDIDATE_PROFILES_GUYS = [
    {
        id: "m1",
        name: "Aarav K.",
        age: 24,
        area: "Bandra West",
        gender: "male",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        vibeTag: "🎸 Indie Live Explorer",
        bio: "Brand strategist & amateur bassist. Into live music gigs, indie sets, and exploring hidden speakeasies. Always 10 mins early.",
        karma: 130,
        punctuality: "100%",
        nightsOut: 11,
        clubPreference: "Bastian At The Top",
        clubKey: "bastian",
        eventDetails: "Tonight · Bastian At The Top",
        socialStyle: "Balanced · Small groups",
        budget: "₹1,500–₹2,000",
        goingOutStyle: "Live Gigs & Speakeasies",
        musicTaste: ["LIVE MUSIC", "INDIE", "COMMERCIAL"],
        targetArrival: "10:15 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "DigiLocker Govt ID",
        icebreaker: {
            q: "Ideal night out kickoff?",
            a: "Cold brew tonic at a café, catching the opener set by 9:30 PM."
        }
    },
    {
        id: "m2",
        name: "Rohan V.",
        age: 24,
        area: "Bandra West",
        gender: "male",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        vibeTag: "⚡ The Hype",
        bio: "UI engineer. Love discovering new food spots and catching high-energy DJ sets with cool people. Strictly respect boundaries and good vibes.",
        karma: 120,
        punctuality: "100%",
        nightsOut: 9,
        clubPreference: "Bastian At The Top",
        clubKey: "bastian",
        eventDetails: "Tonight · Bastian At The Top",
        socialStyle: "Balanced",
        budget: "₹1,000–₹1,500",
        goingOutStyle: "High Energy Social Bar",
        musicTaste: ["COMMERCIAL", "HIP-HOP"],
        targetArrival: "10:15 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "Aadhaar KYC Checked",
        icebreaker: {
            q: "What's the plan once we walk inside?",
            a: "I have my college boys at table 4, just need safe entry! Drinks on me for helping bypass stag 🙌"
        }
    },
    {
        id: "m3",
        name: "Kabir M.",
        age: 25,
        area: "Lower Parel",
        gender: "male",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        vibeTag: "♟️ The Strategist",
        bio: "Fintech builder. Huge fan of Boris Brejcha & melodic techno. Looking for a high-energy squad to catch the weekend set without awkwardness.",
        karma: 135,
        punctuality: "99%",
        nightsOut: 11,
        clubPreference: "Toy Room Mumbai",
        clubKey: "toyroom",
        eventDetails: "Tonight · Toy Room Mumbai",
        socialStyle: "Outgoing & Focused",
        budget: "₹2,000+",
        goingOutStyle: "Club & Rave",
        musicTaste: ["MELODIC TECHNO", "HOUSE"],
        targetArrival: "10:30 PM",
        intentProtocol: "1 Free Welcome Drink",
        verifiedId: true,
        verifiedMethod: "Govt DL Verified",
        icebreaker: {
            q: "Do we hang out all night?",
            a: "Nope! Strictly door-only partner or grab one drink. Mutual respect, 5-minute meetup, then party solo."
        }
    },
    {
        id: "m4",
        name: "Dev S.",
        age: 26,
        area: "Andheri West",
        gender: "male",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        vibeTag: "📷 Creative Producer",
        bio: "Creative producer. Always down for underground sets at antiSOCIAL or rooftop sundowners with an easygoing, music-first crowd.",
        karma: 110,
        punctuality: "98%",
        nightsOut: 6,
        clubPreference: "antiSOCIAL",
        clubKey: "antisocial",
        eventDetails: "Saturday · antiSOCIAL",
        socialStyle: "Relaxed & Low-key",
        budget: "₹1,000–₹1,500",
        goingOutStyle: "Underground Venues",
        musicTaste: ["UNDERGROUND", "TECHNO", "SYNTHWAVE"],
        targetArrival: "11:00 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "DigiLocker Govt ID",
        icebreaker: {
            q: "Meetup spot preference?",
            a: "Right in front of Blue Tokai coffee shop. In well-lit public area."
        }
    },
    {
        id: "m5",
        name: "Neil R.",
        age: 23,
        area: "Santacruz",
        gender: "male",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        vibeTag: "🎮 Digital Creator",
        bio: "Game developer & karaoke enthusiast. Big fan of retro 2000s singalongs, neon aesthetics, and friendly social mixer energy.",
        karma: 105,
        punctuality: "99%",
        nightsOut: 5,
        clubPreference: "145 Bandra",
        clubKey: "bandra145",
        eventDetails: "Tonight · 145 Bandra",
        socialStyle: "Energetic & Friendly",
        budget: "₹1,000–₹1,500",
        goingOutStyle: "Social Mixers & Singalongs",
        musicTaste: ["POP", "RETRO", "COMMERCIAL"],
        targetArrival: "10:15 PM",
        intentProtocol: "Door-Only & Split",
        verifiedId: true,
        verifiedMethod: "Aadhaar Checked",
        icebreaker: {
            q: "Best singalong track?",
            a: "Viva La Vida or any 2010s Calvin Harris anthem with the whole floor screaming lyrics!"
        }
    }
];

// ==========================================================================
// SQUADMATCH 1.0 (4–6 Person Formed Groups around Mumbai Events)
// ==========================================================================
const SQUADS_DATA = [
    {
        id: "squad-1",
        name: "Bandra Techno Collective",
        event: "Saturday Night · Bastian At The Top",
        venue: "Bastian At The Top",
        area: "Bandra West",
        capacity: 4,
        leastMiseryScore: 84,
        avgCompatibility: 91,
        vibe: "Melodic Techno & Rooftop",
        budget: "₹1,500–₹2,000",
        meetupSpot: "Blue Tokai Coffee, Bandra (9:30 PM)",
        channelId: "chan-squad-1",
        currentMembers: [
            {
                name: "Aarav K.",
                age: 24,
                area: "Bandra West",
                role: "Brand Strategist & Indie Bassist",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                bio: "Into live music gigs, indie sets, and exploring hidden speakeasies. Always 10 mins early.",
                interests: ["Melodic Techno", "Speakeasies", "Live Bass", "Cold Brews"],
                karma: "130 KP",
                punctuality: "100%",
                nightsOut: 11,
                socialStyle: "Balanced · Small groups"
            },
            {
                name: "Zoya M.",
                age: 22,
                area: "Lower Parel",
                role: "Architect & Techno Lover",
                photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
                bio: "Big on underground melodic techno, espresso martinis, and spontaneous midnight food runs.",
                interests: ["Techno", "Art & Design", "Espresso Martinis", "Raves"],
                karma: "156 KP",
                punctuality: "100%",
                nightsOut: 12,
                socialStyle: "Outgoing & High Energy"
            },
            {
                name: "Kabir M.",
                age: 25,
                area: "Lower Parel",
                role: "Fintech Builder & DJ Enthusiast",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
                bio: "Huge fan of Boris Brejcha & melodic techno. Looking for a high-energy squad without awkwardness.",
                interests: ["Boris Brejcha", "Fitness", "Deep House", "Table Sharing"],
                karma: "135 KP",
                punctuality: "99%",
                nightsOut: 11,
                socialStyle: "Outgoing & Focused"
            }
        ]
    },
    {
        id: "squad-2",
        name: "Lower Parel Live & Sound Crew",
        event: "Friday Rave · antiSOCIAL",
        venue: "antiSOCIAL",
        area: "Lower Parel",
        capacity: 6,
        leastMiseryScore: 88,
        avgCompatibility: 93,
        vibe: "Underground & Synthwave",
        budget: "₹1,000–₹1,500",
        meetupSpot: "Todi Mill Entrance Gate (10:00 PM)",
        channelId: "chan-lower-parel",
        currentMembers: [
            {
                name: "Meera D.",
                age: 22,
                area: "Khar West",
                role: "Film Student & Vinyl Purist",
                photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
                bio: "Always scouting Mumbai's best sound systems, underground producers, and intimate warehouse sets.",
                interests: ["Vinyl Sets", "Synthwave", "Warehouse Gigs", "Funk"],
                karma: "118 KP",
                punctuality: "99%",
                nightsOut: 7,
                socialStyle: "Chill & Music-first"
            },
            {
                name: "Dev S.",
                age: 26,
                area: "Andheri West",
                role: "Creative Producer",
                photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
                bio: "Always down for underground sets at antiSOCIAL or rooftop sundowners with an easygoing crowd.",
                interests: ["Underground Techno", "Analog Photography", "Craft Beer"],
                karma: "110 KP",
                punctuality: "98%",
                nightsOut: 6,
                socialStyle: "Relaxed & Low-key"
            },
            {
                name: "Riya S.",
                age: 24,
                area: "Bandra West",
                role: "Copywriter & Live Music Fan",
                photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                bio: "Give me indie acoustics or deep house over cheesy remixes any day. Love small chill groups.",
                interests: ["Deep House", "Indie Acoustics", "Craft Cocktails"],
                karma: "128 KP",
                punctuality: "99%",
                nightsOut: 8,
                socialStyle: "Balanced · Small groups"
            },
            {
                name: "Rohan V.",
                age: 24,
                area: "Bandra West",
                role: "UI Engineer & Night Explorer",
                photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
                bio: "Love discovering new food spots and catching high-energy DJ sets with cool people.",
                interests: ["Commercial", "Hip-Hop", "Midnight Food", "House"],
                karma: "120 KP",
                punctuality: "100%",
                nightsOut: 9,
                socialStyle: "Balanced"
            }
        ]
    },
    {
        id: "squad-3",
        name: "👑 NITE GIRLS Saturday Circle",
        event: "Tonight · Toy Room Mumbai",
        venue: "Toy Room Mumbai",
        area: "BKC / Santacruz",
        capacity: 4,
        leastMiseryScore: 92,
        avgCompatibility: 96,
        vibe: "Women-First Night Out · VIP Lounge",
        budget: "₹1,500–₹2,500",
        meetupSpot: "Grand Hyatt BKC Main Lobby (10:15 PM)",
        channelId: "chan-nite-girls",
        currentMembers: [
            {
                name: "Zoya M.",
                age: 22,
                area: "Lower Parel",
                role: "Architect & VIP Regular",
                photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
                bio: "Big on underground melodic techno, espresso martinis, and safe VIP group entries.",
                interests: ["VIP Lounge", "Techno", "Cocktails"],
                karma: "156 KP",
                punctuality: "100%",
                nightsOut: 12,
                socialStyle: "Outgoing & High Energy"
            },
            {
                name: "Ananya P.",
                age: 23,
                area: "Juhu",
                role: "Product Designer",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
                bio: "Product designer by day, singalong party queen by night. Believer in zero drama.",
                interests: ["Commercial Pop", "Bollywood Hits", "Late-night Roll"],
                karma: "112 KP",
                punctuality: "97%",
                nightsOut: 6,
                socialStyle: "High Energy"
            },
            {
                name: "Tanvi K.",
                age: 25,
                area: "Worli",
                role: "Strategy Consultant",
                photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
                bio: "Into rooftop sundowners, craft gin cocktails, and curated dinner-to-dance transitions.",
                interests: ["Rooftop Sundowners", "Craft Gin", "Melodic"],
                karma: "142 KP",
                punctuality: "98%",
                nightsOut: 10,
                socialStyle: "Relaxed & Low-key"
            }
        ]
    },
    {
        id: "squad-4",
        name: "Suburbs Singalong & Cocktails",
        event: "Tonight · 145 Bandra",
        venue: "145 Bandra",
        area: "Bandra West",
        capacity: 4,
        leastMiseryScore: 85,
        avgCompatibility: 90,
        vibe: "Retro Pop & Social Drinks",
        budget: "₹1,000–₹1,500",
        meetupSpot: "Outside 145 Main Entrance (9:45 PM)",
        channelId: "chan-squad-1",
        currentMembers: [
            {
                name: "Neil R.",
                age: 23,
                area: "Santacruz",
                role: "Digital Creator & Karaoke Fan",
                photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
                bio: "Big fan of retro 2000s singalongs, neon aesthetics, and friendly social mixer energy.",
                interests: ["Retro Pop", "Singalongs", "Social Games"],
                karma: "105 KP",
                punctuality: "99%",
                nightsOut: 5,
                socialStyle: "Energetic & Friendly"
            },
            {
                name: "Ananya P.",
                age: 23,
                area: "Juhu",
                role: "Product Designer",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
                bio: "Singalong Bollywood & commercial party lover. Always down for weekend fun.",
                interests: ["Pop Hits", "Singalongs", "Cocktails"],
                karma: "112 KP",
                punctuality: "97%",
                nightsOut: 6,
                socialStyle: "High Energy"
            },
            {
                name: "Riya S.",
                age: 24,
                area: "Bandra West",
                role: "Copywriter & Live Music Fan",
                photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                bio: "Love chilling in small groups before heading in. Chill music vibes only.",
                interests: ["Deep House", "Pop", "Bandra Cafes"],
                karma: "128 KP",
                punctuality: "99%",
                nightsOut: 8,
                socialStyle: "Balanced"
            }
        ]
    }
];

const CHANNELS_DATA = [
    {
        id: "chan-squad-1",
        name: "👥 Bandra Techno Collective",
        subtitle: "3 Members · Bastian At The Top Tonight",
        badge: "SQUAD (3/4)",
        badgeClass: "tag-neon-lime",
        members: [
            { name: "Aarav K.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
            { name: "Zoya M.", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" },
            { name: "Kabir M.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
        ],
        messages: [
            { sender: "Aarav K.", isMe: false, photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", text: "Hey squad! Guestlist is locked under Aarav for 10 PM. Anyone reaching early for coffee?", time: "8:45 PM" },
            { sender: "Zoya M.", isMe: false, photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", text: "I'll be at Blue Tokai Bandra by 9:30. Let's walk together from there!", time: "8:52 PM" },
            { sender: "Kabir M.", isMe: false, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", text: "Perfect, grabbing a cab from Lower Parel now. See you both at 9:45.", time: "9:05 PM" }
        ]
    },
    {
        id: "chan-1v1-zoya",
        name: "⚡ 1v1 Coordination: Zoya M.",
        subtitle: "Masked Partner Coordination · Toy Room Mumbai",
        badge: "PAIR MATCH",
        badgeClass: "tag-neon-pink",
        members: [
            { name: "Zoya M.", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" },
            { name: "You (Rohan)", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80" }
        ],
        messages: [
            { sender: "System", isMe: false, photo: "", isSystem: true, text: "🎉 Mutual Opt-In Confirmed! Both names added to promoter Vikram K.'s guestlist for Toy Room Mumbai.", time: "9:10 PM" },
            { sender: "Zoya M.", isMe: false, photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", text: "Hey Rohan! Let's meet right outside the main lobby valet counter at 10:15 PM sharp.", time: "9:12 PM" },
            { sender: "You", isMe: true, photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80", text: "Sounds great Zoya! I'll be wearing a dark jacket & sneakers. Reaching by 10:10 PM.", time: "9:14 PM" },
            { sender: "Zoya M.", isMe: false, photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", text: "Perfect! Once past the bouncer, we can grab our welcome drink and split to our own tables 🥂", time: "9:16 PM" }
        ]
    },
    {
        id: "chan-nite-girls",
        name: "👑 NITE GIRLS Community Circle",
        subtitle: "Women-First Safe Space · Mumbai Nightlife",
        badge: "NITE GIRLS",
        badgeClass: "tag-neon-purple",
        members: [
            { name: "Tanvi K.", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" },
            { name: "Ananya P.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
            { name: "Zoya M.", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" }
        ],
        messages: [
            { sender: "Tanvi K.", isMe: false, photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", text: "PSA for anyone heading to Lower Parel tonight: Valet line is fast near gate 3!", time: "8:20 PM" },
            { sender: "Ananya P.", isMe: false, photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", text: "Thanks Tanvi! How is the security crowd at Toy Room on Fridays?", time: "8:32 PM" },
            { sender: "Zoya M.", isMe: false, photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", text: "Bouncers are super respectful and polite with NITE CREW passes. No waiting!", time: "8:41 PM" }
        ]
    },
    {
        id: "chan-lower-parel",
        name: "👥 Lower Parel Sound Crew",
        subtitle: "4 Members · antiSOCIAL Friday Rave",
        badge: "SQUAD (4/6)",
        badgeClass: "tag-neon-lime",
        members: [
            { name: "Meera D.", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80" },
            { name: "Dev S.", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
            { name: "Riya S.", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
            { name: "Rohan V.", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80" }
        ],
        messages: [
            { sender: "Dev S.", isMe: false, photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", text: "Tonight's DJ set starts at 10:30 PM. Who is down for quick beers before entering?", time: "7:40 PM" },
            { sender: "Meera D.", isMe: false, photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80", text: "Count me in! Doolally Taproom right across Todi Mills?", time: "7:55 PM" }
        ]
    }
];

// ==========================================================================
// 1V1 GIRL-GUY PAIRING ALGORITHM ENGINE (5 FACTORS)
// ==========================================================================
function calculatePairSynergy(userPrefs, cand) {
    let score = 0;
    const chips = [];

    // 1. Venue Alignment (30%)
    const userClubKey = (userPrefs.club || 'bastian').toLowerCase();
    const candClubKey = (cand.clubKey || '').toLowerCase();
    if (candClubKey === userClubKey || cand.clubPreference.toLowerCase().includes(userClubKey)) {
        score += 30;
        chips.push({ icon: '📍', label: 'Venue Match', text: cand.clubPreference + ' (Exact Match)' });
    } else {
        score += 20;
        chips.push({ icon: '📍', label: 'Nearby Zone', text: cand.area });
    }

    // 2. Sound & Music Resonance (25%)
    const userMusic = (userPrefs.music || 'COMMERCIAL & HIP-HOP').toUpperCase();
    const candMusic = cand.musicTaste || ['COMMERCIAL', 'HIP-HOP'];
    const hasOverlap = candMusic.some(m => userMusic.includes(m));
    if (hasOverlap) {
        score += 25;
        chips.push({ icon: '🎵', label: 'Sound Sync', text: '100% Genre (' + candMusic.join('/') + ')' });
    } else {
        score += 16;
        chips.push({ icon: '🎵', label: 'Sound Vibe', text: candMusic.join('/') });
    }

    // 3. Party Intent Protocol (25%)
    const userIntent = userPrefs.intent || 'Door-Only & Split';
    const candIntent = cand.intentProtocol || 'Door-Only & Split';
    if (userIntent === candIntent) {
        score += 25;
        chips.push({ icon: '🎯', label: 'Intent Sync', text: candIntent });
    } else {
        score += 15;
        chips.push({ icon: '🎯', label: 'Flexible Intent', text: candIntent });
    }

    // 4. Arrival Window (10%)
    const userArrival = userPrefs.arrival || '10:15 PM';
    const candArrival = cand.targetArrival || '10:15 PM';
    if (userArrival === candArrival) {
        score += 10;
        chips.push({ icon: '⏰', label: 'Arrival Window', text: 'Synced for ' + candArrival });
    } else {
        score += 7;
        chips.push({ icon: '⏰', label: 'Arrival Window', text: 'Target ' + candArrival });
    }

    // 5. Reliability Karma & KYC (10%)
    const punct = parseInt(cand.punctuality) || 99;
    if (punct >= 98) {
        score += 10;
        chips.push({ icon: '🛡️', label: 'Reliability', text: punct + '% On-Time · ' + cand.verifiedMethod });
    } else {
        score += 8;
        chips.push({ icon: '🛡️', label: 'Reliability', text: punct + '% On-Time · Verified' });
    }

    return {
        totalScore: Math.min(score, 99),
        chips: chips
    };
}


class NiteCrewApp {
    constructor() {
        this.currentUser = null;
        this.activePass = null;
        this.currentPerspective = 'male'; // 'male' or 'female'
        this.currentCandidateIndex = 0;
        this.selectedFilterZone = 'all';
        this.selectedArenaClub = 'bastian';
        this.chatMessages = [];
        this.activeChatChannel = 'chan-squad-1';
        this.showAllClubs = false;
        this.userPreferences = {
            club: 'bastian',
            music: 'COMMERCIAL & HIP-HOP',
            intent: 'Door-Only & Split',
            arrival: '10:15 PM'
        };
        this.init();
    }

    updateAlgoPreference(key, value) {
        this.userPreferences[key] = value;
        this.showToast('Algorithm updated: ' + key.toUpperCase() + ' → ' + value);
        this.renderCandidateCard();
    }

    init() {
        this.loadStoredUser();
        this.loadStoredPass();
        this.loadChatMessages();
        this.renderClubsDirectory();
        this.renderDashboardClubs();
        this.initGoogleClient();
        this.renderSquads();
        this.renderCandidateCard();
        this.renderIncomingRequests();
        this.renderChatHub();
        this.updatePerspectiveUI();
    }

    // Storage
    loadStoredUser() {
        const stored = localStorage.getItem(NITECREW_STORAGE_KEY);
        if (stored) {
            try {
                this.currentUser = JSON.parse(stored);
                if (!this.currentUser.avatar || this.currentUser.avatar.includes('dicebear')) {
                    this.currentUser.avatar = this.currentUser.gender === 'female' 
                        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
                        : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80';
                }
                this.currentPerspective = this.currentUser.gender || 'male';
                this.updateNavState(true);
            } catch (e) {
                console.error("Failed to parse user", e);
            }
        } else {
            this.currentUser = null;
            this.updateNavState(false);
        }
    }

    loadStoredPass() {
        const stored = localStorage.getItem(NITECREW_PASS_KEY);
        if (stored) {
            try {
                this.activePass = JSON.parse(stored);
                this.updatePassCount();
            } catch (e) {
                console.error("Failed to parse pass", e);
            }
        }
    }

    loadChatMessages() {
        const stored = localStorage.getItem(NITECREW_CHAT_KEY);
        if (stored) {
            try {
                this.chatMessages = JSON.parse(stored);
            } catch (e) {
                this.chatMessages = [];
            }
        } else {
            this.chatMessages = [
                { sender: "partner", text: "Hey! Confirmed for Bastian tonight. See you at the lobby valet at 10:15 PM?", time: "6:45 PM" },
                { sender: "me", text: "Yes perfect! Wearing a black jacket. Let's meet right outside Starbucks.", time: "6:48 PM" }
            ];
        }
    }

    savePass(pass) {
        this.activePass = pass;
        localStorage.setItem(NITECREW_PASS_KEY, JSON.stringify(pass));
        this.updatePassCount();
        this.renderActivePassView();
    }

    saveChatMessages() {
        localStorage.setItem(NITECREW_CHAT_KEY, JSON.stringify(this.chatMessages));
    }

    updatePassCount() {
        const badge = document.getElementById('activePassCount');
        if (badge) {
            badge.textContent = this.activePass ? '1' : '0';
        }
    }

    // Role / Perspective Switcher (Guy vs Girl)
    setPerspective(role) {
        this.currentPerspective = role;
        if (role === 'female') {
            this.currentUser = {
                name: "Riya Sharma",
                firstName: "Riya",
                email: "riya.sharma@gmail.com",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
                gender: "female",
                vibe: "🦋 Social Butterfly",
                karma: 140,
                verified: true
            };
        } else {
            this.currentUser = {
                name: "Rohan Verma",
                firstName: "Rohan",
                email: "rohan.verma@gmail.com",
                avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
                gender: "male",
                vibe: "⚡ The Hype",
                karma: 120,
                verified: true
            };
        }
        this.updateNavState(true);
        this.updatePerspectiveUI();
        this.renderCandidateCard();
        this.renderIncomingRequests();
        this.showToast(`Switched view to ${this.currentUser.name} (${role.toUpperCase()})`);
    }

    updatePerspectiveUI() {
        const isGirl = this.currentPerspective === 'female';
        
        const guyBtn = document.getElementById('btnRoleGuy');
        const girlBtn = document.getElementById('btnRoleGirl');
        if (guyBtn && girlBtn) {
            guyBtn.classList.toggle('active', !isGirl);
            girlBtn.classList.toggle('active', isGirl);
        }

        const deckTitle = document.getElementById('deckPerspectiveTitle');
        if (deckTitle) {
            deckTitle.textContent = isGirl 
                ? "Verified Men Requesting Entry Partner" 
                : "Verified Women Active for 1v1 Entry";
        }

        const roleBanner = document.getElementById('roleActionBanner');
        if (roleBanner) {
            roleBanner.innerHTML = isGirl
                ? `<div class="role-alert-box alert-pink">
                    <strong>👑 You are in complete control (Girl View):</strong>
                    Men cannot message you or see contact details until YOU approve their request. Tap "Accept & Lock Pass" to guarantee your couple guestlist.
                   </div>`
                : `<div class="role-alert-box alert-lime">
                    <strong>⚡ Send Request to Verified Partners (Guy View):</strong>
                    Select a verified partner below and tap "Request Pair". Once she accepts, the mutual couple pass is generated and the private coordination chat unlocks.
                   </div>`;
        }
    }

    // Google Sign-In
    initGoogleClient() {
        if (typeof google === 'undefined') return;
        if (window.google && google.accounts && google.accounts.id) {
            try {
                google.accounts.id.initialize({
                    client_id: "928374928374-nitecrew-mumbai-demo.apps.googleusercontent.com",
                    callback: (resp) => this.handleGoogleCredential(resp)
                });
            } catch (err) {
                console.log("GSI demo client ready", err);
            }
        }
    }

    handleGoogleCredential(response) {
        this.currentUser = {
            name: "Rohan Verma",
            firstName: "Rohan",
            email: "rohan.verma@gmail.com",
            avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rohan",
            gender: "male",
            vibe: "⚡ The Hype",
            karma: 120,
            verified: true,
            provider: "google"
        };
        localStorage.setItem(NITECREW_STORAGE_KEY, JSON.stringify(this.currentUser));
        this.updateNavState(true);
        this.closeAuthModal();
        this.showToast("Signed in with Google! Welcome Rohan ⚡");
        this.showDashboard();
    }

    handleDemoGoogleLogin() {
        this.handleGoogleCredential();
    }

    handleEmailAuth(event) {
        event.preventDefault();
        const name = document.getElementById('authUserName').value.trim();
        const email = document.getElementById('authUserEmail').value.trim();
        const gender = document.getElementById('authUserGender').value;
        const vibe = document.getElementById('authUserVibe').value;

        this.currentUser = {
            name: name,
            firstName: name.split(' ')[0],
            email: email,
            avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
            gender: gender,
            vibe: vibe,
            karma: 110,
            verified: true,
            provider: "email"
        };
        this.currentPerspective = gender;
        localStorage.setItem(NITECREW_STORAGE_KEY, JSON.stringify(this.currentUser));
        this.updateNavState(true);
        this.updatePerspectiveUI();
        this.closeAuthModal();
        this.showToast(`Welcome ${this.currentUser.firstName}! ID Verification Completed.`);
        this.showDashboard();
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem(NITECREW_STORAGE_KEY);
        this.updateNavState(false);
        this.closeUserMenu();
        this.showLanding();
        this.showToast("Signed out. See you next weekend! 🌙");
    }

    updateNavState(isLoggedIn) {
        const loggedOutEl = document.getElementById('loggedOutNav');
        const loggedInEl = document.getElementById('loggedInNav');

        if (isLoggedIn && this.currentUser) {
            loggedOutEl.classList.add('hidden');
            loggedInEl.classList.remove('hidden');

            document.getElementById('navUserName').textContent = this.currentUser.firstName;
            document.getElementById('navUserAvatar').src = this.currentUser.avatar;
            document.getElementById('dropdownFullName').textContent = this.currentUser.name;
            document.getElementById('dropdownEmail').textContent = this.currentUser.email;
            document.getElementById('userKarmaVal').textContent = `${this.currentUser.karma} KP`;
        } else {
            loggedOutEl.classList.remove('hidden');
            loggedInEl.classList.add('hidden');
        }
    }

    toggleUserMenu() {
        const menu = document.getElementById('userDropdown');
        menu.classList.toggle('hidden');
    }

    closeUserMenu() {
        const menu = document.getElementById('userDropdown');
        if (menu) menu.classList.add('hidden');
    }

    // Views
    showLanding(e) {
        if (e) e.preventDefault();
        document.getElementById('landingView').classList.add('view-active');
        document.getElementById('landingView').classList.remove('hidden');
        document.getElementById('dashboardView').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showDashboard() {
        document.getElementById('landingView').classList.remove('view-active');
        document.getElementById('landingView').classList.add('hidden');
        document.getElementById('dashboardView').classList.remove('hidden');
        
        document.getElementById('dashGreetingName').textContent = this.currentUser ? this.currentUser.firstName : "Rohan";
        if (this.activePass) {
            this.renderActivePassView();
            this.renderChatWindow();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    scrollToSection(id) {
        if (document.getElementById('landingView').classList.contains('hidden')) {
            this.showLanding();
        }
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }

    openAuthModal(type) {
        document.getElementById('authModal').classList.remove('hidden');
    }

    closeAuthModal() {
        document.getElementById('authModal').classList.add('hidden');
    }

    showToast(msg) {
        const toast = document.getElementById('toastNotification');
        const toastMsg = document.getElementById('toastMessage');
        toastMsg.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3500);
    }

    toggleShowAllClubs() {
        this.showAllClubs = !this.showAllClubs;
        this.renderClubsDirectory();
        this.renderDashboardClubs();
    }

    // Render Curated 3-6 Spotlight Mumbai Clubs + Expandable All Venues
    renderClubsDirectory() {
        const container = document.getElementById('clubsGrid');
        if (!container) return;

        const filtered = this.selectedFilterZone === 'all' 
            ? MUMBAI_CLUBS 
            : MUMBAI_CLUBS.filter(c => c.zone === this.selectedFilterZone);

        const visibleClubs = this.showAllClubs ? filtered : filtered.slice(0, 6);

        let html = visibleClubs.map(club => `
            <div class="club-card-brutal" data-club-id="${club.id}">
                <div class="club-card-banner" style="background-image: url('${club.photo}');" onclick="app.openClubDetailModal(${club.id})">
                    <div class="banner-top-tags">
                        <span class="tag-genre">🎵 ${club.genre}</span>
                        <span class="tag-spots-left" style="background: rgba(0,0,0,0.7); color: var(--neon-lime);">📍 ${club.zone.toUpperCase().replace('-', ' ')}</span>
                    </div>
                    <div class="banner-bottom-info">
                        <h3 class="club-card-title">${club.name}</h3>
                        <span class="club-card-area">📍 ${club.area} · ${club.tag}</span>
                    </div>
                </div>

                <div class="club-card-body">
                    <p style="font-size: 13px; color: var(--text-silver); line-height: 1.5; margin-bottom: 12px; min-height: 40px;">
                        ${club.description}
                    </p>

                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); border-top: 1px solid var(--border-glass); padding-top: 10px; margin-bottom: 14px;">
                        <span>👔 ${club.dressCode.split('/')[0]}</span>
                        <span>📍 ${club.meetupSpot.split('(')[0]}</span>
                    </div>

                    <button class="btn-neo-club-action" onclick="app.openClubDetailModal(${club.id})">
                        <span>EXPLORE VENUE & SQUADS</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        `).join('');

        if (filtered.length > 6) {
            if (!this.showAllClubs) {
                html += `
                    <div class="expand-more-clubs-banner" onclick="app.toggleShowAllClubs()">
                        <div class="expand-circle-icon">⚡</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 800; font-size: 16px; color: #fff;">+ ${filtered.length - 6} More Mumbai Venues in this Area</div>
                            <div style="font-size: 12px; color: var(--text-silver);">Curated for tonight's verified guestlists & entry pairs</div>
                        </div>
                        <button class="btn-expand-pill">View All ${filtered.length} Venues ↓</button>
                    </div>
                `;
            } else {
                html += `
                    <div class="expand-more-clubs-banner" onclick="app.toggleShowAllClubs()">
                        <div class="expand-circle-icon">▲</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 800; font-size: 16px; color: #fff;">Showing all ${filtered.length} Venues in this Area</div>
                            <div style="font-size: 12px; color: var(--text-silver);">Click to collapse back to top 6 spotlight venues</div>
                        </div>
                        <button class="btn-expand-pill">Show Top 6 Spotlight ↑</button>
                    </div>
                `;
            }
        }

        container.innerHTML = html;

        const countSpan = document.getElementById('clubsTotalCount');
        if (countSpan) countSpan.textContent = `(${filtered.length} Venues)`;
    }

    filterClubs(zone, btnEl) {
        this.selectedFilterZone = zone;
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        if (btnEl) btnEl.classList.add('active');
        this.renderClubsDirectory();
    }

    // Interactive Club Detail Modal (Real Bar Graphics, Specs & Similar Venues)
    openClubDetailModal(clubId) {
        const club = MUMBAI_CLUBS.find(c => c.id === clubId) || MUMBAI_CLUBS[0];
        const modal = document.getElementById('clubDetailModal');
        if (!modal) return;

        if (document.getElementById('modalClubName')) document.getElementById('modalClubName').textContent = club.name;
        if (document.getElementById('modalClubArea')) document.getElementById('modalClubArea').textContent = `📍 ${club.area} · ${club.tag}`;
        if (document.getElementById('modalClubHero')) document.getElementById('modalClubHero').style.backgroundImage = `url('${club.photo}')`;
        if (document.getElementById('modalClubDesc')) document.getElementById('modalClubDesc').textContent = club.description;
        if (document.getElementById('modalClubGenre')) document.getElementById('modalClubGenre').textContent = club.genre;
        if (document.getElementById('modalClubDress')) document.getElementById('modalClubDress').textContent = club.dressCode;
        if (document.getElementById('modalClubVibe')) document.getElementById('modalClubVibe').textContent = club.musicVibe.split(',')[0];
        if (document.getElementById('modalClubCutoff')) document.getElementById('modalClubCutoff').textContent = `${club.promoterCutoff || '10:00 PM'} Cut-off`;
        if (document.getElementById('modalClubMeetup')) document.getElementById('modalClubMeetup').textContent = club.meetupSpot;
        if (document.getElementById('modalClubStag')) document.getElementById('modalClubStag').textContent = club.stagFee;

        // Populate Similar Area Venues
        const similarBox = document.getElementById('modalSimilarVenuesBox');
        if (similarBox) {
            const similarClubs = MUMBAI_CLUBS.filter(c => c.id !== club.id && c.zone === club.zone).slice(0, 3);
            if (similarClubs.length > 0) {
                similarBox.innerHTML = `
                    <div class="similar-venues-title">SIMILAR VENUES IN ${club.zone.toUpperCase()}</div>
                    <div class="similar-venues-grid">
                        ${similarClubs.map(sc => `
                            <div class="similar-venue-card" onclick="app.openClubDetailModal(${sc.id})">
                                <div class="similar-venue-img" style="background-image: url('${sc.photo}');"></div>
                                <div class="similar-venue-info">
                                    <div class="similar-venue-name">${sc.name}</div>
                                    <div class="similar-venue-meta">📍 ${sc.area} · 🎵 ${sc.genre}</div>
                                    <div class="similar-venue-price">
                                        <span class="stag-strike">${sc.stagFee}</span>
                                        <span class="pair-free">FREE 1v1 PAIR</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                similarBox.innerHTML = '';
            }
        }

        // Set action button target
        const btnPair = document.getElementById('btnModalPairClub');
        btnPair.onclick = () => {
            this.closeClubDetailModal();
            this.quickTryPairing(club.id);
        };

        modal.classList.remove('hidden');
    }

    closeClubDetailModal() {
        const modal = document.getElementById('clubDetailModal');
        if (modal) modal.classList.add('hidden');
    }

    renderDashboardClubs() {
        const container = document.getElementById('dashClubsGrid');
        if (!container) return;

        const visibleClubs = this.showAllClubs ? MUMBAI_CLUBS : MUMBAI_CLUBS.slice(0, 6);

        let html = visibleClubs.map(club => `
            <div class="club-card-brutal" data-club-id="${club.id}">
                <div class="club-card-banner" style="background-image: url('${club.photo}');" onclick="app.openClubDetailModal(${club.id})">
                    <div class="banner-top-tags">
                        <span class="tag-genre">🎵 ${club.genre}</span>
                        <span class="tag-spots-left" style="background: rgba(0,0,0,0.7); color: var(--neon-lime);">📍 ${club.zone.toUpperCase().replace('-', ' ')}</span>
                    </div>
                    <div class="banner-bottom-info">
                        <h3 class="club-card-title">${club.name}</h3>
                        <span class="club-card-area">📍 ${club.area} · ${club.tag}</span>
                    </div>
                </div>

                <div class="club-card-body">
                    <p style="font-size: 13px; color: var(--text-silver); line-height: 1.5; margin-bottom: 12px; min-height: 40px;">
                        ${club.description}
                    </p>

                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); border-top: 1px solid var(--border-glass); padding-top: 10px; margin-bottom: 14px;">
                        <span>👔 ${club.dressCode.split('/')[0]}</span>
                        <span>📍 ${club.meetupSpot.split('(')[0]}</span>
                    </div>

                    <button class="btn-neo-club-action" onclick="app.openClubDetailModal(${club.id})">
                        <span>EXPLORE VENUE & SQUADS</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        `).join('');

        if (MUMBAI_CLUBS.length > 6) {
            if (!this.showAllClubs) {
                html += `
                    <div class="expand-more-clubs-banner" onclick="app.toggleShowAllClubs()">
                        <div class="expand-circle-icon">⚡</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 800; font-size: 15px; color: #fff;">+ ${MUMBAI_CLUBS.length - 6} More Mumbai Venues</div>
                            <div style="font-size: 11px; color: var(--text-silver);">Tap to browse all 31 verified clubs & pubs</div>
                        </div>
                        <button class="btn-expand-pill">View All (${MUMBAI_CLUBS.length}) ↓</button>
                    </div>
                `;
            } else {
                html += `
                    <div class="expand-more-clubs-banner" onclick="app.toggleShowAllClubs()">
                        <div class="expand-circle-icon">▲</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 800; font-size: 15px; color: #fff;">Showing all ${MUMBAI_CLUBS.length} Venues</div>
                            <div style="font-size: 11px; color: var(--text-silver);">Tap to collapse back to top 6 spotlight</div>
                        </div>
                        <button class="btn-expand-pill">Collapse Top 6 ↑</button>
                    </div>
                `;
            }
        }

        container.innerHTML = html;
    }

    // ==========================================================================
    // SQUADMATCH 1.0 (4–6 Person Groups)
    // ==========================================================================
    renderSquads() {
        const grid = document.getElementById('squadsGrid');
        const landingGrid = document.getElementById('landingSquadsGrid');
        if (!grid && !landingGrid) return;

        const ringColors = ['ring-lime', 'ring-pink', 'ring-purple', 'ring-cyan', 'ring-yellow'];

        const html = SQUADS_DATA.map(sq => {
            const memberCount = sq.members.length;
            const spotsRemaining = Math.max(0, sq.spotsTotal - memberCount);

            const memberSeatsHtml = sq.members.map((m, idx) => {
                const colorClass = ringColors[idx % ringColors.length];
                const isHost = (idx === 0);
                return `
                    <div class="tf-member-seat" title="${m.name} (${m.role})">
                        <div class="tf-avatar-ring ${colorClass}">
                            ${isHost ? '<div class="speaking-dot-bubble" title="Squad Host"></div>' : ''}
                            <img src="${m.avatar}" class="tf-avatar-img" alt="${m.name}" />
                        </div>
                        <span class="tf-member-name">${m.name.split(' ')[0]}</span>
                        <span class="tf-member-role ${isHost ? 'role-host' : ''}">${isHost ? 'Host 👑' : m.role.split(' ')[0]}</span>
                    </div>
                `;
            }).join('');

            let openSlotsHtml = '';
            for (let i = 0; i < spotsRemaining; i++) {
                openSlotsHtml += `
                    <div class="tf-member-seat seat-open" title="Open Slot — Click to Join">
                        <div class="tf-avatar-ring ring-dashed">
                            <span class="tf-plus">+</span>
                        </div>
                        <span class="tf-member-name">Open</span>
                        <span class="tf-member-role role-open">Join</span>
                    </div>
                `;
            }

            return `
                <div class="talkflow-squad-card ${sq.tag.includes('GIRLS') ? 'girls-circle-card' : ''}" onclick="app.openSquadDetailModal(${sq.id})">
                    <div class="tf-card-top">
                        <span class="tf-category-tag ${sq.tag.includes('GIRLS') ? 'tag-purple' : ''}">${sq.tag}</span>
                        <span class="tf-live-badge">
                            <span class="pulse-dot"></span>
                            ${memberCount}/${sq.spotsTotal} SPOTS
                        </span>
                    </div>

                    <h3 class="tf-squad-title">${sq.title}</h3>
                    <div class="tf-venue-row">
                        <span class="tf-venue-icon">📍</span>
                        <strong>${sq.dayTime} · ${sq.venue}</strong>
                    </div>

                    <div class="tf-specs-row">
                        <span>🎵 ${sq.musicVibe.split(',')[0]}</span>
                        <span class="tf-spend-pill">${sq.targetSpend}</span>
                    </div>

                    <div class="tf-members-grid">
                        ${memberSeatsHtml}
                        ${openSlotsHtml}
                    </div>

                    <div class="tf-least-misery-bar">
                        <span class="tf-lm-icon">⚖️</span>
                        <div class="tf-lm-text">
                            <strong>Least-Misery Match: ${sq.leastMiseryScore}%</strong>
                            <small>Meetup: ${sq.meetupPoint.split('(')[0]}</small>
                        </div>
                    </div>

                    <button class="btn-tf-join" onclick="event.stopPropagation(); app.openSquadDetailModal(${sq.id})">
                        <span>VIEW SQUAD & MEMBERS (${spotsRemaining} SPOTS LEFT)</span>
                        <span>⚡</span>
                    </button>
                </div>
            `;
        }).join('');

        if (grid) grid.innerHTML = html;
        if (landingGrid) landingGrid.innerHTML = html;
    }

    
    renderCandidateCard() {
        const area = document.getElementById('candidateDeckArea');
        if (!area) return;

        const pool = this.currentPerspective === 'female' ? CANDIDATE_PROFILES_GUYS : CANDIDATE_PROFILES_GIRLS;

        if (this.currentCandidateIndex >= pool.length) {
            area.innerHTML = `
                <div class="candidate-card-brutal text-center" style="padding: 40px 20px;">
                    <div style="font-size: 42px; margin-bottom: 12px;">⚡</div>
                    <h3 style="font-family: var(--font-heading); font-size: 22px;">You've Viewed All Matching Members!</h3>
                    <p style="color: var(--text-silver); font-size: 13px; margin: 10px 0 20px;">
                        More verified users are locking their Friday & Saturday plans.
                    </p>
                    <button class="btn-neo-huge btn-lime" onclick="app.resetCandidateDeck()">
                        <span>Refresh Deck</span>
                    </button>
                </div>
            `;
            return;
        }

        const cand = pool[this.currentCandidateIndex];
        const isGirl = this.currentPerspective === 'female';
        const synergy = calculatePairSynergy(this.userPreferences, cand);

        area.innerHTML = `
            <!-- Live Algorithm Preference Tuner -->
            <div class="algo-tuning-panel">
                <div class="tuning-header">
                    <span class="tuning-title">⚙️ <span>ALGORITHM WEIGHT TUNER</span></span>
                    <span class="pixel-tag tag-neon-lime" style="font-size: 8px;">LIVE RE-SCORING</span>
                </div>
                <div class="tuning-controls-grid">
                    <div class="t-control-col">
                        <label>SOUND / VIBE</label>
                        <select onchange="app.updateAlgoPreference('music', this.value)">
                            <option value="COMMERCIAL & HIP-HOP" ${this.userPreferences.music === 'COMMERCIAL & HIP-HOP' ? 'selected' : ''}>Commercial & Hip-Hop</option>
                            <option value="DEEP HOUSE & TECHNO" ${this.userPreferences.music === 'DEEP HOUSE & TECHNO' ? 'selected' : ''}>Techno & Underground</option>
                            <option value="POP & BOLLYWOOD" ${this.userPreferences.music === 'POP & BOLLYWOOD' ? 'selected' : ''}>Pop & Bollywood Singalong</option>
                        </select>
                    </div>
                    <div class="t-control-col">
                        <label>DOOR PROTOCOL</label>
                        <select onchange="app.updateAlgoPreference('intent', this.value)">
                            <option value="Door-Only & Split" ${this.userPreferences.intent === 'Door-Only & Split' ? 'selected' : ''}>Strict Door-Only & Split</option>
                            <option value="1 Free Welcome Drink" ${this.userPreferences.intent === '1 Free Welcome Drink' ? 'selected' : ''}>Grab 1 Free Welcome Drink</option>
                            <option value="Squad Table Hangout" ${this.userPreferences.intent === 'Squad Table Hangout' ? 'selected' : ''}>Merge Squad Table</option>
                        </select>
                    </div>
                    <div class="t-control-col">
                        <label>ARRIVAL WINDOW</label>
                        <select onchange="app.updateAlgoPreference('arrival', this.value)">
                            <option value="10:15 PM" ${this.userPreferences.arrival === '10:15 PM' ? 'selected' : ''}>10:15 PM (Early Gate)</option>
                            <option value="10:30 PM" ${this.userPreferences.arrival === '10:30 PM' ? 'selected' : ''}>10:30 PM (Peak Entry)</option>
                            <option value="11:00 PM" ${this.userPreferences.arrival === '11:00 PM' ? 'selected' : ''}>11:00 PM (Late Wave)</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Candidate Profile Card with Modern Circular Graphics & Portrait Frame -->
            <div class="candidate-card-brutal">
                <!-- Event Context Banner -->
                <div class="cand-event-target-banner">
                    <span class="cand-event-badge"><span>📍</span> EVENT CONTEXT</span>
                    <span class="cand-event-venue-name">${cand.eventDetails || cand.clubPreference}</span>
                </div>

                <!-- Real Photo Header with Gradient, Circular Story Ring & Floating Circular Synergy Gauge -->
                <div class="cand-photo-header" style="background-image: url('${cand.photo}');">
                    <div class="cand-photo-gradient-overlay"></div>
                    <div class="cand-photo-top-badges">
                        <span class="circular-status-pill">
                            <span class="live-pulse-dot"></span>
                            <span>100% ID VERIFIED</span>
                        </span>
                        <span class="circular-status-pill" style="border-color: var(--neon-pink); color: #fff;">
                            <span>🔥</span> Looking for Tonight
                        </span>
                    </div>

                    <!-- Circular Synergy Gauge (SVG Dial) -->
                    <div class="circular-synergy-meter">
                        <svg class="circle-dial-svg" viewBox="0 0 76 76">
                            <circle class="circle-bg" cx="38" cy="38" r="32"></circle>
                            <circle class="circle-progress" cx="38" cy="38" r="32" style="stroke-dashoffset: ${201 - (201 * synergy.totalScore / 100)};"></circle>
                        </svg>
                        <div class="circle-dial-inner">
                            <span class="circle-val">${synergy.totalScore}%</span>
                            <span class="circle-sub">MATCH</span>
                        </div>
                    </div>

                    <div class="cand-profile-identity">
                        <div class="cand-avatar-wrap">
                            <img src="${cand.photo}" alt="${cand.name}">
                        </div>
                        <div class="cand-identity-text">
                            <div class="cand-display-name">
                                <span>${cand.name}</span>
                                <span class="verified-check" title="Verified Member">✓</span>
                            </div>
                            <span class="cand-loc-age">${cand.age} yrs · ${cand.area}</span>
                        </div>
                    </div>
                </div>

                <div class="cand-card-body">
                    <!-- Authentic Bio Quote -->
                    <div class="cand-bio-quote">
                        <p>"${cand.bio}"</p>
                    </div>

                    <!-- Lifestyle & Social Energy Tags -->
                    <div class="cand-lifestyle-grid">
                        <span class="lifestyle-pill pink-highlight"><strong>Vibe:</strong> ${cand.vibeTag}</span>
                        <span class="lifestyle-pill purple-highlight"><strong>Energy:</strong> ${cand.socialStyle}</span>
                        <span class="lifestyle-pill"><strong>Sound:</strong> ${cand.musicTaste.join(', ')}</span>
                        <span class="lifestyle-pill"><strong>Spend:</strong> ${cand.budget}</span>
                    </div>

                    <!-- Synergy Match Banner & Factor Chips -->
                    <div class="match-synergy-banner">
                        <div class="synergy-title">
                            <span>🔥</span>
                            <span>${synergy.totalScore}% MATCH SYNERGY</span>
                        </div>
                        <span class="synergy-score-tag">MUTUAL CONSENT MATCH</span>
                    </div>

                    <div class="synergy-chips-grid">
                        ${synergy.chips.map(chip => `
                            <div class="s-chip">
                                <span>${chip.icon}</span>
                                <span><strong>${chip.label}:</strong> ${chip.text}</span>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Icebreaker Card -->
                    <div class="cand-bio-quote" style="border-left-color: var(--neon-lime); background: rgba(204,255,0,0.04); margin-bottom: 16px;">
                        <span style="font-family: var(--font-pixel); font-size: 8px; color: var(--neon-lime); display: block; margin-bottom: 4px;">DOOR EXPECTATION / ICEBREAKER</span>
                        <strong style="font-size: 13px; color: #fff; display: block; margin-bottom: 2px;">"${cand.icebreaker.q}"</strong>
                        <span style="font-size: 12.5px; color: var(--text-silver);">"${cand.icebreaker.a}"</span>
                    </div>

                    <!-- Punctuality Stats -->
                    <div class="cand-stats-grid">
                        <div class="c-stat-cell">
                            <span class="c-stat-label">ON-TIME</span>
                            <span class="c-stat-val text-green">${cand.punctuality}</span>
                        </div>
                        <div class="c-stat-cell">
                            <span class="c-stat-label">COMMUNITY KARMA</span>
                            <span class="c-stat-val">${cand.karma} KP</span>
                        </div>
                        <div class="c-stat-cell">
                            <span class="c-stat-label">ATTENDED</span>
                            <span class="c-stat-val">${cand.nightsOut} Nights</span>
                        </div>
                    </div>

                    <!-- Action Buttons with Circular Quick Pass -->
                    <div class="cand-actions-circular-row">
                        <button class="btn-circle-pass" onclick="app.skipCandidate()" title="Pass / Next Member">
                            ✕
                        </button>
                        <button class="btn-pair-swipe" onclick="app.confirmPairWithCandidate('${cand.id}')">
                            <span>${isGirl ? 'ACCEPT & CONFIRM SQUAD PASS 🎟️' : 'EXPRESS INTEREST & INTRODUCE ⚡'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }


    renderIncomingRequests() {
        const tray = document.getElementById('incomingRequestsTray');
        if (!tray) return;

        if (this.currentPerspective === 'female') {
            tray.innerHTML = `
                <div class="incoming-req-box">
                    <div class="req-head">
                        <span class="req-badge">1 PENDING PAIR REQUEST</span>
                        <span class="req-time">5 mins ago</span>
                    </div>
                    <div class="req-body">
                        <div class="req-avatar-circle">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" alt="Rohan V.">
                            <span class="req-circle-check">✓</span>
                        </div>
                        <div class="req-info">
                            <strong style="font-size: 15px; color: #fff;">Rohan V. (24) · Bandra West</strong>
                            <p style="margin: 4px 0; color: var(--text-silver); font-size: 13px;">Requested 1v1 pair for <b style="color: #fff;">Bastian At The Top</b> tonight.</p>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; align-items: center;">
                                <span class="circular-status-pill" style="border-color: var(--neon-lime); padding: 4px 10px; font-size: 10px;">
                                    <span class="live-pulse-dot"></span>
                                    <span>98% SYNERGY</span>
                                </span>
                                <span style="color: var(--neon-lime); font-size: 11px; font-weight: 700;">✓ 100% On-Time · 120 KP · DigiLocker KYC</span>
                            </div>
                        </div>
                    </div>
                    <div class="req-actions">
                        <button class="btn-req-decline" onclick="app.showToast('Request declined')">Decline</button>
                        <button class="btn-req-accept" onclick="app.confirmPairWithCandidate('m1')">Review & Confirm Guestlist ⚡</button>
                    </div>
                </div>
            `;
        } else {
            tray.innerHTML = `
                <div class="incoming-req-box empty">
                    <p style="font-size: 13px; color: var(--text-silver);">
                        You are viewing as a guy. When you tap "Request 1v1 Pair", the female partner reviews your compatibility score, punctuality rating, and accepts.
                    </p>
                </div>
            `;
        }
    }

    skipCandidate() {
        this.currentCandidateIndex++;
        this.renderCandidateCard();
    }

    resetCandidateDeck() {
        this.currentCandidateIndex = 0;
        this.renderCandidateCard();
    }

    // Confirmation & Digital Pass Generation
    confirmPairWithCandidate(candId) {
        const isGirl = this.currentPerspective === 'female';
        const pool = isGirl ? CANDIDATE_PROFILES_GUYS : CANDIDATE_PROFILES_GIRLS;
        const candidate = pool.find(c => c.id === candId) || pool[0];
        const selectedClub = MUMBAI_CLUBS.find(c => c.name.toLowerCase().includes(this.selectedArenaClub)) || MUMBAI_CLUBS[0];

        const newPass = {
            id: `NK-MUM-${Math.floor(1000 + Math.random() * 9000)}`,
            clubName: selectedClub.name,
            clubArea: selectedClub.area,
            meetupSpot: selectedClub.meetupSpot,
            stagSaved: selectedClub.stagFee,
            cutOff: selectedClub.promoterCutoff,
            promoter: selectedClub.promoter,
            user1: {
                name: this.currentUser.name,
                gender: this.currentUser.gender,
                vibe: this.currentUser.vibe || "⚡ The Hype",
                photo: this.currentUser.avatar
            },
            user2: {
                name: candidate.name,
                gender: candidate.gender,
                vibe: candidate.vibeTag,
                photo: candidate.photo
            },
            status: "GUESTLIST CONFIRMED",
            timeCreated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            verifiedAtDoor: false
        };

        this.savePass(newPass);

        this.chatMessages.push({
            sender: "system",
            text: `🎉 Pair Confirmed! Both names added to ${selectedClub.promoter}'s guestlist for ${selectedClub.name}. Show pass at door.`,
            time: "Just now"
        });
        this.saveChatMessages();

        const celebRow = document.getElementById('celebUsersRow');
        if (celebRow) {
            celebRow.innerHTML = `
                <div class="avatar-pair-bubble male-bubble">
                    <img src="${this.currentUser.avatar}" alt="${this.currentUser.firstName}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 2px solid var(--neon-lime);">
                    <span class="name-sub">${this.currentUser.firstName}</span>
                </div>
                <div class="pair-spark-icon">⚡</div>
                <div class="avatar-pair-bubble female-bubble">
                    <img src="${candidate.photo}" alt="${candidate.name}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 2px solid var(--neon-pink);">
                    <span class="name-sub">${candidate.name}</span>
                </div>
            `;
        }

        document.getElementById('pairSuccessModal').classList.remove('hidden');
    }

    closePairSuccessModal() {
        document.getElementById('pairSuccessModal').classList.add('hidden');
    }

    openChatDirectly() {
        this.showDashboard();
        const tabs = document.querySelectorAll('.dash-tab');
        if (tabs && tabs[2]) {
            this.switchDashTab('chat-coord', tabs[2]);
        }
    }

    viewConfirmedPass() {
        this.closePairSuccessModal();
        this.showDashboard();
        const tabBtn = document.querySelectorAll('.dash-tab')[2];
        this.switchDashTab('my-pass', tabBtn);
    }

    openChatFromModal() {
        this.closePairSuccessModal();
        this.showDashboard();
        const tabBtn = document.querySelectorAll('.dash-tab')[3];
        this.switchDashTab('chat-coord', tabBtn);
    }

    // ==========================================================================
    // DEDICATED SQUAD & COMMUNITY CHAT HUB ENGINE
    // ==========================================================================
    renderChatHub() {
        const sidebar = document.getElementById('chatChannelsList');
        const activeHeader = document.getElementById('activeChannelHeader');
        const messagesArea = document.getElementById('chatMessagesScroll');
        if (!sidebar || !messagesArea) return;

        // Render sidebar channels
        sidebar.innerHTML = CHANNELS_DATA.map(ch => {
            const isActive = ch.id === this.activeChatChannel;
            const lastMsg = ch.messages[ch.messages.length - 1];
            return `
                <div class="channel-card-item ${isActive ? 'active' : ''}" onclick="app.selectChatChannel('${ch.id}')">
                    <div class="chan-avatar">${ch.badge.includes('GIRLS') ? '👑' : ch.badge.includes('PAIR') ? '⚡' : '👥'}</div>
                    <div class="chan-meta">
                        <div class="chan-title-row">
                            <span class="chan-name">${ch.name}</span>
                            <span class="chan-time">${lastMsg ? lastMsg.time : ''}</span>
                        </div>
                        <div class="chan-snippet">${lastMsg ? (lastMsg.isMe ? 'You: ' : '') + lastMsg.text : ''}</div>
                        <span class="pixel-tag ${ch.badgeClass}" style="font-size: 7px; margin-top: 4px;">${ch.badge}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Render Active Channel Header & Messages
        const activeChan = CHANNELS_DATA.find(c => c.id === this.activeChatChannel) || CHANNELS_DATA[0];
        if (activeHeader) {
            activeHeader.innerHTML = `
                <div class="active-chan-info">
                    <h3>${activeChan.name}</h3>
                    <span>${activeChan.subtitle}</span>
                </div>
                <div class="active-chan-members">
                    ${activeChan.members.map(m => `
                        <img src="${m.photo}" alt="${m.name}" title="${m.name}" class="mini-member-avatar">
                    `).join('')}
                    <span class="chat-privacy-pill" style="margin-left: 10px;">🔒 PRIVATE IN-APP</span>
                </div>
            `;
        }

        messagesArea.innerHTML = activeChan.messages.map(m => {
            if (m.isSystem) {
                return `
                    <div style="background: rgba(204, 255, 0, 0.1); border: 1px solid var(--neon-lime); border-radius: 8px; padding: 10px; text-align: center; font-size: 12px; color: var(--neon-lime);">
                        ${m.text}
                    </div>
                `;
            }
            return `
                <div class="chat-msg-row ${m.isMe ? 'me' : ''}">
                    ${m.photo ? `<img src="${m.photo}" alt="${m.sender}" class="msg-sender-photo">` : ''}
                    <div class="msg-bubble-box">
                        <span class="msg-author-name">${m.sender}</span>
                        <div class="msg-body-text">${m.text}</div>
                        <span class="msg-timestamp">${m.time}</span>
                    </div>
                </div>
            `;
        }).join('');

        messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    selectChatChannel(chanId) {
        this.activeChatChannel = chanId;
        this.renderChatHub();
    }

    sendActiveChatMessage(e) {
        if (e) e.preventDefault();
        const input = document.getElementById('chatMainInput');
        if (!input || !input.value.trim()) return;
        const text = input.value.trim();
        input.value = '';

        const activeChan = CHANNELS_DATA.find(c => c.id === this.activeChatChannel) || CHANNELS_DATA[0];
        const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        activeChan.messages.push({
            sender: "You",
            isMe: true,
            photo: (this.currentUser && this.currentUser.photo) ? this.currentUser.photo : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
            text: text,
            time: nowTime
        });

        this.renderChatHub();

        // Simulated intelligent partner / squad reply after 1.2s
        setTimeout(() => {
            const replies = [
                "Got it! See you at the landmark point 🙌",
                "Sounds like a plan! Valet desk is right near the north gate.",
                "Awesome, see you in 10 mins! Excited for tonight's set ⚡",
                "Perfect! We are walking towards security together now 🥂"
            ];
            const randReply = replies[Math.floor(Math.random() * replies.length)];
            const otherMember = activeChan.members.find(m => !m.name.includes('You')) || activeChan.members[0];

            activeChan.messages.push({
                sender: otherMember.name,
                isMe: false,
                photo: otherMember.photo,
                text: randReply,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            this.renderChatHub();
        }, 1200);
    }

    sendQuickChat(text) {
        const input = document.getElementById('chatMainInput');
        if (input) input.value = text;
        this.sendActiveChatMessage();
    }

    sendUserChatMessage(e) {
        this.sendActiveChatMessage(e);
    }


    // Demo QR Pass Modal (Direct Live Preview)
    openDemoPassModal() {
        const modal = document.getElementById('demoPassModal');
        if (modal) modal.classList.remove('hidden');
    }

    closeDemoPassModal() {
        const modal = document.getElementById('demoPassModal');
        if (modal) modal.classList.add('hidden');
    }

    // Digital Ticket Pass View on Dashboard
    renderActivePassView() {
        const board = document.getElementById('digitalTicketBoard');
        if (!board) return;

        if (!this.activePass) {
            board.innerHTML = `
                <div class="candidate-card-brutal text-center" style="padding: 48px;">
                    <div style="font-size: 54px; margin-bottom: 16px;">🎟️</div>
                    <h3 style="font-family: var(--font-heading); font-size: 24px;">No Active Couple Pass Yet</h3>
                    <p style="color: var(--text-silver); font-size: 14px; margin: 12px 0 24px 0;">
                        Head over to the 1v1 Matching Arena to pair up with a verified partner and save ₹2,000–₹4,000 on stag fees.
                    </p>
                    <button class="btn-neo-huge btn-lime" onclick="app.switchDashTab('pair-feed', document.querySelector('.dash-tab'))">
                        <span>Find 1v1 Partner Now</span>
                        <span>⚡</span>
                    </button>
                </div>
            `;
            return;
        }

        const pass = this.activePass;
        board.innerHTML = `
            <div class="demo-ticket-card" style="margin: 0 auto;">
                <div class="ticket-hologram-strip"></div>
                
                <div class="ticket-body-content">
                    <div class="ticket-top-row">
                        <div>
                            <span style="font-family: var(--font-pixel); font-size: 7px; color: var(--neon-lime);">COUPLE ENTRY PASS</span>
                            <h3>${pass.clubName}</h3>
                            <p style="font-size: 12px; color: var(--text-muted);">📍 ${pass.clubArea} · Promoter: ${pass.promoter}</p>
                        </div>
                        <span class="ticket-verified-stamp">GUESTLIST APPROVED</span>
                    </div>

                    <div class="ticket-pair-grid">
                        <div class="t-member">
                            <span style="font-size: 9px; color: var(--text-muted); font-weight: 700;">PARTNER 1</span>
                            <strong>${pass.user1.name}</strong>
                            <small>${pass.user1.vibe}</small>
                        </div>
                        <div style="font-size: 20px; color: var(--neon-lime);">⚡</div>
                        <div class="t-member text-right">
                            <span style="font-size: 9px; color: var(--text-muted); font-weight: 700;">PARTNER 2</span>
                            <strong>${pass.user2.name}</strong>
                            <small>${pass.user2.vibe}</small>
                        </div>
                    </div>

                    <div class="ticket-perforations">
                        <div class="cutout-left"></div>
                        <div class="perforated-dash-line"></div>
                        <div class="cutout-right"></div>
                    </div>

                    <div class="ticket-qr-zone">
                        <div class="qr-box-white">
                            <svg viewBox="0 0 100 100" width="100%" height="100%">
                                <path fill="#000" d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z M45,15 h10 v5 h-10 z M45,25 h5 v10 h-5 z M55,30 h5 v15 h-5 z M45,50 h15 v5 h-15 z M65,50 h10 v10 h-10 z M80,50 h10 v15 h-10 z M45,70 h10 v20 h-10 z M60,70 h20 v5 h-20 z M70,80 h20 v10 h-20 z M60,85 h5 v5 h-5 z"/>
                            </svg>
                        </div>

                        <div class="barcode-lines"></div>

                        <div class="ticket-savings-pill">
                            <span>💰 SAVED ${pass.stagSaved} STAG COVER</span>
                        </div>

                        <p style="font-size: 12px; text-align: center; color: var(--text-silver);">
                            Meetup Landmark: <strong>${pass.meetupSpot}</strong> at 10:15 PM.<br>
                            Show this joint QR pass at the entrance to bypass stag fee.
                        </p>

                        <button class="btn-confirm-met-btn" onclick="app.confirmWeMetInPerson()">
                            <span>${pass.verifiedAtDoor ? '✓ Verified Outside Venue (Ready to Enter)' : 'Tap When You Meet at Landmark'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    confirmWeMetInPerson() {
        if (!this.activePass) return;
        this.activePass.verifiedAtDoor = true;
        this.savePass(this.activePass);
        this.showToast("Verified! Couple Pass ready for club bouncer 🎟️");
        this.renderActivePassView();
    }

    quickTryPairing(clubId) {
        const club = MUMBAI_CLUBS.find(c => c.id === clubId) || MUMBAI_CLUBS[0];
        this.showDashboard();
        this.selectClubForArena(club.name);
    }

    selectClubForArena(clubName) {
        const arenaSelect = document.getElementById('arenaClubSelect');
        if (arenaSelect) {
            for (let i = 0; i < arenaSelect.options.length; i++) {
                if (clubName.toLowerCase().includes(arenaSelect.options[i].text.toLowerCase())) {
                    arenaSelect.selectedIndex = i;
                    break;
                }
            }
            this.onArenaClubChange(arenaSelect.value);
        }
        const tabBtn = document.querySelectorAll('.dash-tab')[0];
        this.switchDashTab('pair-feed', tabBtn);
    }

    onArenaClubChange(val) {
        this.selectedArenaClub = val;
        const club = MUMBAI_CLUBS.find(c => c.name.toLowerCase().includes(val)) || MUMBAI_CLUBS[0];
        
        const titleEl = document.getElementById('arenaClubTitle');
        if (titleEl) titleEl.textContent = club.name;
        
        const cutoffEl = document.getElementById('arenaCutoffTime');
        if (cutoffEl) cutoffEl.textContent = `${club.promoterCutoff} Today`;

        const meetupEl = document.getElementById('arenaMeetupSpot');
        if (meetupEl) meetupEl.textContent = club.meetupSpot;
        
        this.showToast(`Active Club: ${club.name}`);
        this.resetCandidateDeck();
    }

    switchDashTab(tabId, btnEl) {
        document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.dash-tab-pane').forEach(p => p.classList.remove('active'));

        if (btnEl) btnEl.classList.add('active');
        const pane = document.getElementById(`tab-${tabId}`);
        if (pane) pane.classList.add('active');

        if (tabId === 'squad-feed') {
            this.renderSquads();
        } else if (tabId === 'pair-feed') {
            this.renderCandidateCard();
            this.renderIncomingRequests();
        } else if (tabId === 'chat-coord') {
            this.renderChatHub();
        } else if (tabId === 'my-pass') {
            this.renderActivePassView();
        } else if (tabId === 'live-clubs') {
            this.renderDashboardClubs();
        }
    }

    triggerSOS() {
        alert("🛡️ SAFETY PROTOCOL DEMO\n\nIn the live NITE CREW platform, this one-tap emergency trigger dispatches your confirmed public meetup location to verified contacts and directly contacts local emergency services.");
    }

    // Mobile navigation toggle
    toggleMobileMenu() {
        const nav = document.getElementById('navLinks');
        const btn = document.getElementById('mobileMenuBtn');
        if (nav) nav.classList.toggle('open');
        if (btn) btn.classList.toggle('active');
    }

    closeMobileMenu() {
        const nav = document.getElementById('navLinks');
        const btn = document.getElementById('mobileMenuBtn');
        if (nav) nav.classList.remove('open');
        if (btn) btn.classList.remove('active');
    }

    // FAQ Accordion
    toggleFaq(element) {
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== element) item.classList.remove('open');
        });
        element.classList.toggle('open');
    }

    // Waitlist Form Submission
    handleWaitlist(e) {
        e.preventDefault();
        const input = document.getElementById('waitlistEmail');
        if (!input || !input.value) return;
        const email = input.value.trim();
        this.showToast(`🎉 You're on the early list! Invitation will be sent to ${email}`);
        input.value = '';
    }

    // Launch Interactive Demo Dashboard
    launchDemoDashboard() {
        this.currentUser = {
            name: "Demo Member",
            firstName: "Demo",
            email: "demo@nitecrew.in",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
            gender: "male",
            vibe: "⚡ The Hype",
            karma: 120,
            stagSaved: 9500
        };
        this.updateNavState(true);
        this.showDashboard();
        this.showToast("⚡ Interactive Prototype Activated — Explore Squads & Matching");
    }

    // Exit Demo Mode
    exitDemoMode() {
        this.currentUser = null;
        localStorage.removeItem(NITECREW_STORAGE_KEY);
        this.updateNavState(false);
        this.showLanding();
        this.closeUserMenu();
        this.showToast("Exited demo mode. Welcome back to NITE CREW Homepage.");
    }

    showSquadsForVenue() {
        this.closeClubDetailModal();
        this.scrollToSection('squads');
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new NiteCrewApp();
});
