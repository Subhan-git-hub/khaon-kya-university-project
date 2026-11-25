const food_items_data = [
    {
        food_id: "burger",
        food_name: "Burger",
        food_urdu_name: "برگر",
        food_icon: "🍔",
        food_category: "fastfood",
        slice_background_color: "#FF4757",
        slice_text_color: "#FFFFFF",
        food_description: "Crispy zinger or beef patty with melted cheese and mayonnaise sauce.",
        food_tagline: "Crunch your hunger away!",
        popular_food_types: ["Zinger Burger", "Beef Cheese Burger", "Chapli Burger"]
    },
    {
        food_id: "biryani",
        food_name: "Biryani",
        food_urdu_name: "بریانی",
        food_icon: "🍛",
        food_category: "desi",
        slice_background_color: "#FFA502",
        slice_text_color: "#FFFFFF",
        food_description: "Karachi spicy chicken or beef dum biryani with raita and salad.",
        food_tagline: "Assignment stress? Biryani is the ultimate cure!",
        popular_food_types: ["Chicken Dum Biryani", "Beef Nalli Biryani", "Student Biryani"]
    },
    {
        food_id: "fries",
        food_name: "Fries",
        food_urdu_name: "فرائز",
        food_icon: "🍟",
        food_category: "fastfood",
        slice_background_color: "#F1C40F",
        slice_text_color: "#1E293B",
        food_description: "Crispy golden potato fries seasoned with chatpata masala or cheese.",
        food_tagline: "Hot, salty, crispy and impossible to share!",
        popular_food_types: ["Masala Fries", "Loaded Cheesy Fries", "Garlic Mayo Fries"]
    },
    {
        food_id: "shawarma",
        food_name: "Shawarma",
        food_urdu_name: "شاورما",
        food_icon: "🥙",
        food_category: "fastfood",
        slice_background_color: "#FF7F50",
        slice_text_color: "#FFFFFF",
        food_description: "Pita wrap stuffed with shredded chicken, garlic tahini, and pickles.",
        food_tagline: "Pocket-friendly fuel between lecture gaps!",
        popular_food_types: ["Spicy Chicken Shawarma", "Arabic Garlic Shawarma"]
    },
    {
        food_id: "roll",
        food_name: "Roll",
        food_urdu_name: "رول پراٹھا",
        food_icon: "🌯",
        food_category: "fastfood",
        slice_background_color: "#2ED573",
        slice_text_color: "#FFFFFF",
        food_description: "Paratha wrapped around grilled chicken boti, tikka, or zinger strip.",
        food_tagline: "The king of Karachi student meals!",
        popular_food_types: ["Chicken Mayo Garlic Roll", "Beef Bihari Roll", "Zinger Roll"]
    },
    {
        food_id: "chai",
        food_name: "Chai",
        food_urdu_name: "چائے",
        food_icon: "☕",
        food_category: "beverage",
        slice_background_color: "#8B572A",
        slice_text_color: "#FFFFFF",
        food_description: "Steaming hot kadak doodh patti brewed at the dhaba.",
        food_tagline: "Chai is not just tea, it is an emotion at FAST!",
        popular_food_types: ["Karak Doodh Patti", "Matka Elaichi Chai", "Sulemani Tea"]
    },
    {
        food_id: "halwa_poori",
        food_name: "Halwa Poori",
        food_urdu_name: "حلوہ پوری",
        food_icon: "🫓",
        food_category: "breakfast",
        slice_background_color: "#FF9F1A",
        slice_text_color: "#FFFFFF",
        food_description: "Puffy pooris served with warm suji halwa, aloo tarkari, and channay.",
        food_tagline: "The classic morning breakfast feast!",
        popular_food_types: ["Suji Halwa with Channay", "Aloo Tarkari Puri"]
    },
    {
        food_id: "lassi",
        food_name: "Lassi",
        food_urdu_name: "لسی",
        food_icon: "🥛",
        food_category: "beverage",
        slice_background_color: "#3498DB",
        slice_text_color: "#FFFFFF",
        food_description: "Chilled thick yogurt shake churned sweet or salted with balai.",
        food_tagline: "Perfect for beating the afternoon heat!",
        popular_food_types: ["Sweet Creamy Lassi", "Namkeen Lassi", "Peray Wali Lassi"]
    },
    {
        food_id: "doodh_soda",
        food_name: "Doodh Soda",
        food_urdu_name: "دودھ سوڈا",
        food_icon: "🥤",
        food_category: "beverage",
        slice_background_color: "#1DD1A1",
        slice_text_color: "#FFFFFF",
        food_description: "Cold milk mixed with Pakola or 7Up soda for a fizzy refreshment.",
        food_tagline: "Cool, bubbly and refreshing!",
        popular_food_types: ["Pakola Milk Soda", "7Up Classic Doodh Soda"]
    },
    {
        food_id: "spaghetti",
        food_name: "Spaghetti",
        food_urdu_name: "سپگیٹی",
        food_icon: "🍝",
        food_category: "fastfood",
        slice_background_color: "#FF3838",
        slice_text_color: "#FFFFFF",
        food_description: "Spicy chicken stir-fry spaghetti or creamy white Alfredo pasta.",
        food_tagline: "Saucy, spicy, and filling!",
        popular_food_types: ["Desi Chicken Tikka Spaghetti", "White Sauce Alfredo"]
    },
    {
        food_id: "karahi",
        food_name: "Karahi",
        food_urdu_name: "کڑاہی",
        food_icon: "🍲",
        food_category: "desi",
        slice_background_color: "#C0392B",
        slice_text_color: "#FFFFFF",
        food_description: "Sizzling wok of fresh chicken or mutton with ginger and green chillies.",
        food_tagline: "Squad treat on the highway!",
        popular_food_types: ["Chicken Shinwari Karahi", "White Creamy Karahi"]
    },
    {
        food_id: "samosa_chaat",
        food_name: "Samosa & Chaat",
        food_urdu_name: "سموسہ چاٹ",
        food_icon: "🥟",
        food_category: "breakfast",
        slice_background_color: "#6C5CE7",
        slice_text_color: "#FFFFFF",
        food_description: "Crispy samosas served with spicy chickpeas, yogurt, and imli chutney.",
        food_tagline: "Crispy, tangy, and bursting with flavors!",
        popular_food_types: ["Samosa Chaat", "Papdi Chaat", "Keema Samosa"]
    }
];

const restaurants_database = [
    {
        restaurant_id: "fast_main_canteen",
        restaurant_name: "FAST Main Cafeteria",
        place_type: "On-Campus Canteen",
        location_address: "Ground Floor, Student Center, FAST Main Campus Shah Latif",
        distance_in_kilometers: 0.05,
        walking_time_minutes: 1,
        food_items_served: ["burger", "biryani", "fries", "roll", "chai", "samosa_chaat", "spaghetti", "doodh_soda"],
        budget_category: "budget",
        price_range_text: "Rs 60 - 250",
        rating_score: 4.3,
        total_reviews: 420,
        opening_hours: "8:00 AM - 6:00 PM",
        student_advice: "Fresh biryani arrives at 12:45 PM daily.",
        maps_search_query: "FAST NUCES Karachi Main Campus Cafeteria National Highway",
        menu_items_list: [
            { item_name: "Chicken Dum Biryani (Single Plate)", price_in_rupees: 180, item_category: "desi" },
            { item_name: "Crispy Zinger Burger", price_in_rupees: 220, item_category: "fastfood" },
            { item_name: "Chicken Paratha Roll", price_in_rupees: 140, item_category: "fastfood" },
            { item_name: "Masala French Fries", price_in_rupees: 80, item_category: "fastfood" },
            { item_name: "Spicy Chicken Spaghetti Bowl", price_in_rupees: 170, item_category: "fastfood" },
            { item_name: "Chana Samosa Chaat Plate", price_in_rupees: 90, item_category: "breakfast" },
            { item_name: "Karak Doodh Patti Chai", price_in_rupees: 50, item_category: "beverage" },
            { item_name: "Chilled Pakola Doodh Soda", price_in_rupees: 70, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Daily Student Biryani Combo",
                deal_description: "Full plate hot chicken biryani with fresh raita and chilled doodh soda.",
                deal_items: ["Chicken Dum Biryani", "Raita & Salad", "Chilled Pakola Doodh Soda"],
                deal_price_in_rupees: 230,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "desi"
            },
            {
                deal_name: "Quick Zinger & Fries Meal",
                deal_description: "Crispy chicken zinger burger paired with hot masala fries.",
                deal_items: ["Crispy Zinger Burger", "Masala French Fries"],
                deal_price_in_rupees: 270,
                deal_tag: "Fast Food Special",
                deal_budget_type: "budget",
                deal_food_category: "fastfood"
            },
            {
                deal_name: "Pocket Saver Tea & Roll",
                deal_description: "One chicken paratha roll with a steaming cup of karak doodh patti.",
                deal_items: ["Chicken Paratha Roll", "Karak Doodh Patti Chai"],
                deal_price_in_rupees: 170,
                deal_tag: "Budget Saver",
                deal_budget_type: "budget",
                deal_food_category: "beverage"
            }
        ]
    },
    {
        restaurant_id: "fast_dhaba_khokha",
        restaurant_name: "FAST Lawn Khokha & Chai Spot",
        place_type: "On-Campus Tuck Shop",
        location_address: "Sports Lawn Area, FAST Main Campus Shah Latif",
        distance_in_kilometers: 0.1,
        walking_time_minutes: 2,
        food_items_served: ["chai", "doodh_soda", "lassi", "fries", "roll", "samosa_chaat"],
        budget_category: "budget",
        price_range_text: "Rs 40 - 180",
        rating_score: 4.8,
        total_reviews: 560,
        opening_hours: "8:30 AM - 7:30 PM",
        student_advice: "Great karak doodh patti tea during assignment study breaks.",
        maps_search_query: "FAST NUCES Karachi National Highway Sports Lawn",
        menu_items_list: [
            { item_name: "Special Karak Doodh Patti", price_in_rupees: 45, item_category: "beverage" },
            { item_name: "Sweet Thick Creamy Lassi", price_in_rupees: 90, item_category: "beverage" },
            { item_name: "Pakola Chilled Doodh Soda", price_in_rupees: 70, item_category: "beverage" },
            { item_name: "Chicken Garlic Mayo Roll", price_in_rupees: 130, item_category: "fastfood" },
            { item_name: "Hot Samosa Chaat", price_in_rupees: 80, item_category: "breakfast" },
            { item_name: "Lachha Paratha with Omelette", price_in_rupees: 110, item_category: "breakfast" },
            { item_name: "Crispy Peri Peri Fries", price_in_rupees: 80, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Study Break Dhaba Special",
                deal_description: "One chicken garlic mayo roll and a hot cup of karak chai.",
                deal_items: ["Chicken Garlic Mayo Roll", "Special Karak Doodh Patti"],
                deal_price_in_rupees: 160,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "beverage"
            },
            {
                deal_name: "Lawn Breakfast Meal",
                deal_description: "Crispy lachha paratha, double egg omelette, and karak chai.",
                deal_items: ["Lachha Paratha with Omelette", "Special Karak Doodh Patti"],
                deal_price_in_rupees: 140,
                deal_tag: "Morning Special",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            }
        ]
    },
    {
        restaurant_id: "fast_cs_kiosk",
        restaurant_name: "FAST CS Lobby Tuck Shop",
        place_type: "On-Campus Tuck Shop",
        location_address: "Beside Computer Science Department, FAST Main Campus",
        distance_in_kilometers: 0.12,
        walking_time_minutes: 2,
        food_items_served: ["shawarma", "burger", "fries", "doodh_soda", "samosa_chaat"],
        budget_category: "budget",
        price_range_text: "Rs 80 - 220",
        rating_score: 4.1,
        total_reviews: 190,
        opening_hours: "9:00 AM - 5:00 PM",
        student_advice: "Convenient spot for quick snacks between programming labs.",
        maps_search_query: "FAST NUCES Karachi CS Block",
        menu_items_list: [
            { item_name: "Chicken Garlic Shawarma", price_in_rupees: 150, item_category: "fastfood" },
            { item_name: "Crispy Chicken Burger", price_in_rupees: 160, item_category: "fastfood" },
            { item_name: "Potato Fries Cup", price_in_rupees: 70, item_category: "fastfood" },
            { item_name: "Chana Samosa Bowl", price_in_rupees: 80, item_category: "breakfast" },
            { item_name: "7Up Chilled Doodh Soda", price_in_rupees: 65, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Lab Break Shawarma Combo",
                deal_description: "Hot chicken shawarma with fries and refreshing doodh soda.",
                deal_items: ["Chicken Garlic Shawarma", "Potato Fries Cup", "7Up Chilled Doodh Soda"],
                deal_price_in_rupees: 250,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "quetta_al_hanif",
        restaurant_name: "New Quetta Al Hanif Restaurant",
        place_type: "Dhaba & Desi Restaurant",
        location_address: "Main National Highway, near Shah Latif Town Entrance",
        distance_in_kilometers: 0.8,
        walking_time_minutes: 9,
        food_items_served: ["chai", "halwa_poori", "lassi", "doodh_soda", "roll", "karahi"],
        budget_category: "budget",
        price_range_text: "Rs 70 - 450",
        rating_score: 4.5,
        total_reviews: 340,
        opening_hours: "24 Hours Open",
        student_advice: "Popular 24/7 dhaba for parathas and chai right on the highway.",
        maps_search_query: "New Quetta Al Hanif Restaurant National Highway Shah Latif Town Karachi",
        menu_items_list: [
            { item_name: "Halwa Poori Thali (3 Pooris + Channay + Halwa)", price_in_rupees: 170, item_category: "breakfast" },
            { item_name: "Sweet Curd Lassi with Balai", price_in_rupees: 120, item_category: "beverage" },
            { item_name: "Chicken Tikka Paratha Roll", price_in_rupees: 160, item_category: "fastfood" },
            { item_name: "Karak Special Doodh Patti", price_in_rupees: 60, item_category: "beverage" },
            { item_name: "Single Chicken Karahi Plate with 2 Naan", price_in_rupees: 420, item_category: "desi" },
            { item_name: "Pakola Chilled Milk Soda", price_in_rupees: 80, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Morning Poori Feast",
                deal_description: "Fresh halwa poori thali with hot channay, aloo tarkari, and sweet lassi.",
                deal_items: ["Halwa Poori Thali (3 Pooris)", "Sweet Curd Lassi with Balai"],
                deal_price_in_rupees: 260,
                deal_tag: "Breakfast Champion",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            },
            {
                deal_name: "Late Night Paratha & Chai Deal",
                deal_description: "Juicy chicken tikka paratha roll followed by famous highway doodh patti.",
                deal_items: ["Chicken Tikka Paratha Roll", "Karak Special Doodh Patti"],
                deal_price_in_rupees: 200,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "beverage"
            }
        ]
    },
    {
        restaurant_id: "quetta_alamgir_dhaba",
        restaurant_name: "Quetta Alamgir Hotel & Chai",
        place_type: "Traditional Dhaba",
        location_address: "Opposite Sector 17-A, National Highway, Shah Latif Town",
        distance_in_kilometers: 1.0,
        walking_time_minutes: 12,
        food_items_served: ["chai", "doodh_soda", "lassi", "halwa_poori", "roll"],
        budget_category: "budget",
        price_range_text: "Rs 50 - 200",
        rating_score: 4.4,
        total_reviews: 215,
        opening_hours: "5:00 AM - 2:00 AM",
        student_advice: "Fresh lachha parathas and strong doodh patti tea.",
        maps_search_query: "Quetta Alamgir Hotel National Highway Karachi",
        menu_items_list: [
            { item_name: "Lachha Paratha with Omelette", price_in_rupees: 120, item_category: "breakfast" },
            { item_name: "Matka Elaichi Chai", price_in_rupees: 70, item_category: "beverage" },
            { item_name: "Sweet Balai Lassi", price_in_rupees: 100, item_category: "beverage" },
            { item_name: "Chicken Kebab Paratha Roll", price_in_rupees: 150, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Alamgir Desi Breakfast Combo",
                deal_description: "Freshly made lachha paratha, cheese omelette, and matka elaichi chai.",
                deal_items: ["Lachha Paratha with Omelette", "Matka Elaichi Chai"],
                deal_price_in_rupees: 170,
                deal_tag: "Morning Special",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            }
        ]
    },
    {
        restaurant_id: "bfc_bangash_corner",
        restaurant_name: "BFC (Bangash Food Corner)",
        place_type: "Fast Food & BBQ",
        location_address: "Sector 17-C, Near Jamia Masjid Suleiman, Shah Latif Town",
        distance_in_kilometers: 1.2,
        walking_time_minutes: 15,
        food_items_served: ["burger", "fries", "shawarma", "roll", "spaghetti"],
        budget_category: "mid",
        price_range_text: "Rs 180 - 550",
        rating_score: 4.3,
        total_reviews: 285,
        opening_hours: "1:00 PM - 1:00 AM",
        student_advice: "Crispy zinger burger and club sandwiches near campus.",
        maps_search_query: "Bangash Food Corner Sector 17 C Shah Latif Town Karachi",
        menu_items_list: [
            { item_name: "BFC Jumbo Crispy Zinger Burger", price_in_rupees: 300, item_category: "fastfood" },
            { item_name: "Loaded Cheesy Garlic Fries", price_in_rupees: 180, item_category: "fastfood" },
            { item_name: "Chicken Bihari Paratha Roll", price_in_rupees: 200, item_category: "fastfood" },
            { item_name: "Arabic Chicken Shawarma Wrap", price_in_rupees: 170, item_category: "fastfood" },
            { item_name: "Chicken Tikka Stir-fry Spaghetti", price_in_rupees: 280, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "BFC Solo Zinger Box",
                deal_description: "Jumbo crispy zinger burger, portion of loaded fries, and cold drink.",
                deal_items: ["BFC Jumbo Crispy Zinger Burger", "Loaded Cheesy Garlic Fries"],
                deal_price_in_rupees: 420,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "mid",
                deal_food_category: "fastfood"
            },
            {
                deal_name: "Solo Student Shawarma Meal",
                deal_description: "Arabic chicken shawarma with spicy masala fries.",
                deal_items: ["Arabic Chicken Shawarma Wrap", "Loaded Cheesy Garlic Fries"],
                deal_price_in_rupees: 320,
                deal_tag: "Budget Saver",
                deal_budget_type: "mid",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "al_rahim_biryani",
        restaurant_name: "Al-Rahim Biryani & Beef Pulao",
        place_type: "Biryani & Pulao Centre",
        location_address: "Zakaria Chowk, Nizami Road, Shah Latif Town",
        distance_in_kilometers: 1.4,
        walking_time_minutes: 17,
        food_items_served: ["biryani", "roll"],
        budget_category: "budget",
        price_range_text: "Rs 200 - 380",
        rating_score: 4.5,
        total_reviews: 410,
        opening_hours: "11:30 AM - 11:30 PM",
        student_advice: "Flavourful chicken dum biryani with generous portions.",
        maps_search_query: "Al Rahim Biryani Zakaria Chowk Shah Latif Town Karachi",
        menu_items_list: [
            { item_name: "Special Chicken Dum Biryani Single", price_in_rupees: 220, item_category: "desi" },
            { item_name: "Special Beef Degi Pulao Single", price_in_rupees: 260, item_category: "desi" },
            { item_name: "Fresh Zeera Raita & Salad Cup", price_in_rupees: 40, item_category: "desi" },
            { item_name: "Shami Kabab Single Piece", price_in_rupees: 50, item_category: "desi" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Al-Rahim Solo Biryani Treat",
                deal_description: "Single chicken biryani with shami kabab and zeera raita.",
                deal_items: ["Special Chicken Dum Biryani Single", "Shami Kabab Single Piece", "Fresh Zeera Raita & Salad Cup"],
                deal_price_in_rupees: 280,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "desi"
            }
        ]
    },
    {
        restaurant_id: "pizzadda_shah_latif",
        restaurant_name: "Pizzadda & Fast Food",
        place_type: "Pizza & Fast Food",
        location_address: "Commercial Area, Sector 17-B, Shah Latif Town",
        distance_in_kilometers: 1.5,
        walking_time_minutes: 18,
        food_items_served: ["spaghetti", "burger", "fries", "shawarma"],
        budget_category: "mid",
        price_range_text: "Rs 280 - 650",
        rating_score: 4.2,
        total_reviews: 160,
        opening_hours: "12:00 PM - 12:30 AM",
        student_advice: "Decent chicken pasta and fast food combos.",
        maps_search_query: "Pizzadda Shah Latif Town Karachi",
        menu_items_list: [
            { item_name: "Creamy Chicken Alfredo Pasta Bowl", price_in_rupees: 380, item_category: "fastfood" },
            { item_name: "Spicy Chicken Macaroni Bowl", price_in_rupees: 280, item_category: "fastfood" },
            { item_name: "Crispy Chicken Patty Burger", price_in_rupees: 240, item_category: "fastfood" },
            { item_name: "Cheesy Oven Baked Fries", price_in_rupees: 200, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Pasta & Fries Meal",
                deal_description: "Creamy chicken Alfredo pasta served with cheesy baked fries.",
                deal_items: ["Creamy Chicken Alfredo Pasta Bowl", "Cheesy Oven Baked Fries"],
                deal_price_in_rupees: 520,
                deal_tag: "Italian Special",
                deal_budget_type: "mid",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "al_madina_sweets_halwa",
        restaurant_name: "Al-Madina Sweets & Bakers",
        place_type: "Breakfast & Bakers",
        location_address: "Main Commercial Market, Shah Latif Town",
        distance_in_kilometers: 1.6,
        walking_time_minutes: 20,
        food_items_served: ["halwa_poori", "lassi", "samosa_chaat", "doodh_soda"],
        budget_category: "budget",
        price_range_text: "Rs 80 - 240",
        rating_score: 4.4,
        total_reviews: 195,
        opening_hours: "6:00 AM - 10:00 PM",
        student_advice: "Puffy morning halwa pooris and fresh curd lassi.",
        maps_search_query: "Al Madina Sweets Shah Latif Town Karachi",
        menu_items_list: [
            { item_name: "Halwa Poori Plate with Channay & Tarkari", price_in_rupees: 160, item_category: "breakfast" },
            { item_name: "Peray Wali Creamy Lassi", price_in_rupees: 130, item_category: "beverage" },
            { item_name: "Crispy Samosa Chaat Bowl", price_in_rupees: 90, item_category: "breakfast" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Sweet Morning Breakfast Deal",
                deal_description: "Full plate halwa poori with special peray wali creamy lassi.",
                deal_items: ["Halwa Poori Plate with Channay & Tarkari", "Peray Wali Creamy Lassi"],
                deal_price_in_rupees: 270,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            }
        ]
    },
    {
        restaurant_id: "master_roll_corner",
        restaurant_name: "Master Roll Corner",
        place_type: "Roll Stall",
        location_address: "Sector 18 Service Road, National Highway",
        distance_in_kilometers: 1.8,
        walking_time_minutes: 22,
        food_items_served: ["roll", "fries", "burger", "shawarma"],
        budget_category: "budget",
        price_range_text: "Rs 150 - 350",
        rating_score: 4.4,
        total_reviews: 310,
        opening_hours: "4:00 PM - 1:00 AM",
        student_advice: "Chicken garlic mayo paratha roll with chutney.",
        maps_search_query: "Master Roll National Highway Shah Latif Karachi",
        menu_items_list: [
            { item_name: "Chicken Garlic Mayo Paratha Roll", price_in_rupees: 170, item_category: "fastfood" },
            { item_name: "Beef Bihari Kabab Roll", price_in_rupees: 190, item_category: "fastfood" },
            { item_name: "Zinger Paratha Roll", price_in_rupees: 210, item_category: "fastfood" },
            { item_name: "Hot Masala Fries Portion", price_in_rupees: 80, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Roll & Fries Combo",
                deal_description: "Special chicken garlic mayo roll served with hot masala fries.",
                deal_items: ["Chicken Garlic Mayo Paratha Roll", "Hot Masala Fries Portion"],
                deal_price_in_rupees: 230,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "dip_shop_shakes",
        restaurant_name: "The Dip Shop & Shakes",
        place_type: "Cool Drinks & Snacks",
        location_address: "Plot 501, National Highway, Near Manzil Petrol Pump",
        distance_in_kilometers: 2.5,
        walking_time_minutes: 30,
        food_items_served: ["doodh_soda", "lassi", "fries", "burger"],
        budget_category: "budget",
        price_range_text: "Rs 120 - 380",
        rating_score: 4.6,
        total_reviews: 520,
        opening_hours: "11:00 AM - 2:00 AM",
        student_advice: "Chilled Pakola doodh soda and milkshakes.",
        maps_search_query: "Dip Shop Manzil Pump National Highway Karachi",
        menu_items_list: [
            { item_name: "Special Pakola Ice Cream Doodh Soda", price_in_rupees: 140, item_category: "beverage" },
            { item_name: "Thick Mango / Banana Milkshake", price_in_rupees: 180, item_category: "beverage" },
            { item_name: "Crispy Potato Masala Fries", price_in_rupees: 110, item_category: "fastfood" },
            { item_name: "Crispy Chicken Patty Burger", price_in_rupees: 200, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Burger & Shake Deal",
                deal_description: "Crispy chicken burger with special ice cream doodh soda.",
                deal_items: ["Crispy Chicken Patty Burger", "Special Pakola Ice Cream Doodh Soda"],
                deal_price_in_rupees: 310,
                deal_tag: "Refreshment Special",
                deal_budget_type: "mid",
                deal_food_category: "beverage"
            }
        ]
    },
    {
        restaurant_id: "chatkazz_foods_bbq",
        restaurant_name: "Chatkazz Foods & BBQ",
        place_type: "BBQ & Fast Food",
        location_address: "National Highway, near Manzil Pump, Quaidabad",
        distance_in_kilometers: 2.7,
        walking_time_minutes: 34,
        food_items_served: ["roll", "karahi", "burger", "fries", "biryani"],
        budget_category: "mid",
        price_range_text: "Rs 250 - 680",
        rating_score: 4.3,
        total_reviews: 390,
        opening_hours: "1:00 PM - 2:00 AM",
        student_advice: "Good place for chicken tikka, handi, and rolls.",
        maps_search_query: "Chatkazz Foods National Highway Quaidabad Karachi",
        menu_items_list: [
            { item_name: "Chicken Tikka Leg Piece with Puri Paratha", price_in_rupees: 280, item_category: "desi" },
            { item_name: "Smoky Chicken Boti Paratha Roll", price_in_rupees: 210, item_category: "fastfood" },
            { item_name: "Single Boneless Handi Portion", price_in_rupees: 420, item_category: "desi" },
            { item_name: "Spicy Beef Dum Biryani", price_in_rupees: 250, item_category: "desi" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo BBQ Feast",
                deal_description: "Chicken tikka leg piece, fresh puri paratha, raita, and salad.",
                deal_items: ["Chicken Tikka Leg Piece with Puri Paratha", "Smoky Chicken Boti Paratha Roll"],
                deal_price_in_rupees: 450,
                deal_tag: "BBQ Special",
                deal_budget_type: "mid",
                deal_food_category: "desi"
            }
        ]
    },
    {
        restaurant_id: "pizza_max_quaidabad",
        restaurant_name: "Pizza Max Quaidabad",
        place_type: "Pizzeria & Pasta",
        location_address: "Maira Center, Main National Highway, Quaidabad",
        distance_in_kilometers: 2.8,
        walking_time_minutes: 36,
        food_items_served: ["spaghetti", "fries", "burger"],
        budget_category: "mid",
        price_range_text: "Rs 350 - 850",
        rating_score: 4.2,
        total_reviews: 680,
        opening_hours: "11:00 AM - 1:00 AM",
        student_advice: "Air conditioned dining with pasta and pizza options.",
        maps_search_query: "Pizza Max Quaidabad National Highway Karachi",
        menu_items_list: [
            { item_name: "Chicken Alfredo Creamy Pasta", price_in_rupees: 420, item_category: "fastfood" },
            { item_name: "Loaded Cheesy Sticks with Dip", price_in_rupees: 250, item_category: "fastfood" },
            { item_name: "Crispy Zinger Supreme Burger", price_in_rupees: 320, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Student Pasta Meal",
                deal_description: "Hot chicken Alfredo pasta bowl with cheesy garlic sticks.",
                deal_items: ["Chicken Alfredo Creamy Pasta", "Loaded Cheesy Sticks with Dip"],
                deal_price_in_rupees: 580,
                deal_tag: "Italian Feast",
                deal_budget_type: "mid",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "new_waseela_biryani",
        restaurant_name: "New Waseela Biryani",
        place_type: "Biryani House",
        location_address: "Gulistan Society, Quaidabad, National Highway",
        distance_in_kilometers: 3.2,
        walking_time_minutes: 40,
        food_items_served: ["biryani", "samosa_chaat"],
        budget_category: "budget",
        price_range_text: "Rs 220 - 450",
        rating_score: 4.5,
        total_reviews: 610,
        opening_hours: "11:00 AM - 11:00 PM",
        student_advice: "Hearty and spicy Karachi beef pulao and biryani.",
        maps_search_query: "New Waseela Biryani Quaidabad Karachi",
        menu_items_list: [
            { item_name: "Beef Nalli Dum Biryani Single", price_in_rupees: 280, item_category: "desi" },
            { item_name: "Special Chicken Dum Biryani Single", price_in_rupees: 230, item_category: "desi" },
            { item_name: "Shami Kabab Single", price_in_rupees: 50, item_category: "desi" },
            { item_name: "Raita & Fresh Salad Cup", price_in_rupees: 35, item_category: "desi" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Waseela Beef Biryani Deal",
                deal_description: "Generous beef nalli biryani single with shami kabab and salad.",
                deal_items: ["Beef Nalli Dum Biryani Single", "Shami Kabab Single", "Raita & Fresh Salad Cup"],
                deal_price_in_rupees: 340,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "desi"
            }
        ]
    },
    {
        restaurant_id: "karachi_bakers_snacks",
        restaurant_name: "Karachi Bakers & Sweets",
        place_type: "Snacks & Sweets",
        location_address: "Main National Highway, Near Quaidabad Flyover",
        distance_in_kilometers: 3.4,
        walking_time_minutes: 42,
        food_items_served: ["samosa_chaat", "halwa_poori", "chai", "lassi"],
        budget_category: "budget",
        price_range_text: "Rs 70 - 220",
        rating_score: 4.3,
        total_reviews: 290,
        opening_hours: "7:00 AM - 11:30 PM",
        student_advice: "Warm potato samosas and fresh chana chaat.",
        maps_search_query: "Karachi Bakers Sweets Quaidabad National Highway Karachi",
        menu_items_list: [
            { item_name: "Special Chana Samosa Chaat", price_in_rupees: 110, item_category: "breakfast" },
            { item_name: "Hot Aloo Samosa (2 Pieces)", price_in_rupees: 70, item_category: "breakfast" },
            { item_name: "Sweet Creamy Lassi Cup", price_in_rupees: 100, item_category: "beverage" },
            { item_name: "Cardamom Milk Chai", price_in_rupees: 50, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Evening Chaat Deal",
                deal_description: "Special samosa chaat paired with cardamom milk chai.",
                deal_items: ["Special Chana Samosa Chaat", "Cardamom Milk Chai"],
                deal_price_in_rupees: 150,
                deal_tag: "Evening Snack",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            }
        ]
    },
    {
        restaurant_id: "quetta_subhan_allah",
        restaurant_name: "Quetta Subhan Allah Cafe",
        place_type: "Desi Dhaba",
        location_address: "Quaidabad Commercial Area, National Highway",
        distance_in_kilometers: 3.5,
        walking_time_minutes: 45,
        food_items_served: ["halwa_poori", "chai", "lassi", "doodh_soda"],
        budget_category: "budget",
        price_range_text: "Rs 70 - 260",
        rating_score: 4.6,
        total_reviews: 450,
        opening_hours: "24 Hours Open",
        student_advice: "Murgh chholay and parathas with malai chai.",
        maps_search_query: "Quetta Subhan Allah Cafe Quaidabad Karachi",
        menu_items_list: [
            { item_name: "Special Murgh Chholay with 2 Naan", price_in_rupees: 220, item_category: "breakfast" },
            { item_name: "Halwa Poori Thali", price_in_rupees: 160, item_category: "breakfast" },
            { item_name: "Karak Malai Chai", price_in_rupees: 60, item_category: "beverage" },
            { item_name: "Sweet Meethi Lassi", price_in_rupees: 110, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Murgh Chholay Breakfast",
                deal_description: "Hot spiced murgh chholay, tandoori naan, and karak malai chai.",
                deal_items: ["Special Murgh Chholay with 2 Naan", "Karak Malai Chai"],
                deal_price_in_rupees: 260,
                deal_tag: "Desi Breakfast",
                deal_budget_type: "budget",
                deal_food_category: "breakfast"
            }
        ]
    },
    {
        restaurant_id: "super_madina_shinwari",
        restaurant_name: "Super Madina Shinwari & Karahi",
        place_type: "Highway Karahi",
        location_address: "Main National Highway, Malir Link",
        distance_in_kilometers: 4.0,
        walking_time_minutes: 52,
        food_items_served: ["karahi", "chai", "doodh_soda"],
        budget_category: "premium",
        price_range_text: "Rs 500 - 1400",
        rating_score: 4.6,
        total_reviews: 920,
        opening_hours: "4:00 PM - 3:00 AM",
        student_advice: "Chicken white karahi with hot roghani naan.",
        maps_search_query: "Super Madina Restaurant National Highway Karachi",
        menu_items_list: [
            { item_name: "Chicken Shinwari Karahi Half Kg", price_in_rupees: 750, item_category: "desi" },
            { item_name: "Hot Roghani Naan (2 Pieces)", price_in_rupees: 90, item_category: "desi" },
            { item_name: "Special Highway Green Tea / Chai", price_in_rupees: 60, item_category: "beverage" },
            { item_name: "Chilled Doodh Soda Glass", price_in_rupees: 90, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Single Diner Karahi Treat",
                deal_description: "Solo portion freshly cooked Shinwari karahi with 2 naan and doodh soda.",
                deal_items: ["Chicken Shinwari Karahi Half Kg", "Hot Roghani Naan (2 Pieces)", "Chilled Doodh Soda Glass"],
                deal_price_in_rupees: 880,
                deal_tag: "Highway Feast",
                deal_budget_type: "premium",
                deal_food_category: "desi"
            }
        ]
    },
    {
        restaurant_id: "al_sajjad_highway",
        restaurant_name: "Al-Sajjad Highway Restaurant",
        place_type: "Highway Restaurant",
        location_address: "National Highway, Towards Port Qasim Link",
        distance_in_kilometers: 4.3,
        walking_time_minutes: 55,
        food_items_served: ["karahi", "biryani", "chai", "doodh_soda"],
        budget_category: "premium",
        price_range_text: "Rs 600 - 1600",
        rating_score: 4.7,
        total_reviews: 1850,
        opening_hours: "5:00 PM - 4:00 AM",
        student_advice: "Great venue for group celebration treats after exams.",
        maps_search_query: "Al Sajjad Restaurant National Highway Karachi",
        menu_items_list: [
            { item_name: "Chicken Koyla Karahi Half Kg", price_in_rupees: 850, item_category: "desi" },
            { item_name: "Special Sajji Portion with Rice", price_in_rupees: 650, item_category: "desi" },
            { item_name: "Roghani Naan Fresh", price_in_rupees: 50, item_category: "desi" },
            { item_name: "Karak Doodh Patti", price_in_rupees: 70, item_category: "beverage" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Solo Sajji & Rice Plate",
                deal_description: "Quarter chicken sajji served over fragrant spiced rice and salad.",
                deal_items: ["Special Sajji Portion with Rice", "Karak Doodh Patti"],
                deal_price_in_rupees: 700,
                deal_tag: "Royal Treat",
                deal_budget_type: "premium",
                deal_food_category: "desi"
            }
        ]
    },
    {
        restaurant_id: "red_apple_malir",
        restaurant_name: "Red Apple Fast Food",
        place_type: "Fast Food Hub",
        location_address: "Malir Commercial, National Highway Cut",
        distance_in_kilometers: 4.5,
        walking_time_minutes: 58,
        food_items_served: ["roll", "burger", "fries", "shawarma", "spaghetti"],
        budget_category: "mid",
        price_range_text: "Rs 280 - 650",
        rating_score: 4.4,
        total_reviews: 1100,
        opening_hours: "12:00 PM - 2:00 AM",
        student_advice: "Garlic mayo paratha rolls and loaded fries.",
        maps_search_query: "Red Apple Malir Quaidabad Karachi",
        menu_items_list: [
            { item_name: "Red Apple Special Zinger Burger", price_in_rupees: 310, item_category: "fastfood" },
            { item_name: "Chicken Garlic Mayo Paratha Roll", price_in_rupees: 210, item_category: "fastfood" },
            { item_name: "Crispy Curly Seasoned Fries", price_in_rupees: 180, item_category: "fastfood" },
            { item_name: "Arabic Chicken Shawarma Wrap", price_in_rupees: 190, item_category: "fastfood" },
            { item_name: "Creamy Chicken Alfredo Pasta", price_in_rupees: 380, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Red Apple Solo Combo",
                deal_description: "Chicken garlic mayo roll with curly seasoned fries and cold drink.",
                deal_items: ["Chicken Garlic Mayo Paratha Roll", "Crispy Curly Seasoned Fries"],
                deal_price_in_rupees: 360,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "mid",
                deal_food_category: "fastfood"
            }
        ]
    },
    {
        restaurant_id: "student_biryani_quaidabad",
        restaurant_name: "Student Biryani",
        place_type: "Biryani & Fast Food",
        location_address: "Main Quaidabad Flyover Road, National Highway",
        distance_in_kilometers: 4.6,
        walking_time_minutes: 60,
        food_items_served: ["biryani", "burger", "fries", "roll"],
        budget_category: "budget",
        price_range_text: "Rs 240 - 520",
        rating_score: 4.1,
        total_reviews: 880,
        opening_hours: "11:00 AM - 12:30 AM",
        student_advice: "Chicken biryani and chicken broast with soft drinks.",
        maps_search_query: "Student Biryani Quaidabad Karachi",
        menu_items_list: [
            { item_name: "Classic Student Chicken Biryani Single", price_in_rupees: 250, item_category: "desi" },
            { item_name: "Crispy Fried Chicken Broast Quarter", price_in_rupees: 320, item_category: "fastfood" },
            { item_name: "Chicken Shami Burger", price_in_rupees: 160, item_category: "fastfood" },
            { item_name: "Potato Fries Regular", price_in_rupees: 100, item_category: "fastfood" }
        ],
        recommended_single_person_deals: [
            {
                deal_name: "Student Deal #1 (Biryani + Drink)",
                deal_description: "Classic chicken biryani single with raita, salad, and cold beverage.",
                deal_items: ["Classic Student Chicken Biryani Single", "Potato Fries Regular"],
                deal_price_in_rupees: 320,
                deal_tag: "Best 1-Person Value",
                deal_budget_type: "budget",
                deal_food_category: "desi"
            }
        ]
    }
];

const food_quotes_dictionary = {
    burger: [
        "Assignment submit ho gayi? Ab burger ka haq banta hai!",
        "Double patty, cheese melt aur fries, mood set!",
        "When code compiles without errors, celebrate with a burger!"
    ],
    biryani: [
        "Karachiites need no excuse for Biryani! Extra aloo and raita ready?",
        "Assignment stress ho ya exam ki tension, biryani solves everything!",
        "Khao Biryani, mast raho! Semester toh chalta rahega!"
    ],
    fries: [
        "Crispy, salty, and totally addictive snack!",
        "Masala fries with garlic mayo sauce.",
        "One fry is never enough for the table!"
    ],
    shawarma: [
        "Quick and tasty bite before the next lecture.",
        "Fresh chicken wrapped with spicy garlic tahini.",
        "Pocket friendly and super filling!"
    ],
    roll: [
        "Lachha paratha and crispy tikka boti with garlic mayo.",
        "Roll paratha is the classic Karachi campus lunch.",
        "Nothing beats a hot roll on an evening break."
    ],
    chai: [
        "FAST mein Chai is not just a drink, it is an emotion!",
        "Ek cup karak doodh patti, and bugs will fix themselves!",
        "Dhaba discussion with friends is the best part of the day."
    ],
    halwa_poori: [
        "Hot puffy pooris, sweet halwa, and spicy channay!",
        "Classic morning breakfast with classmates.",
        "Sweet and savory combination."
    ],
    lassi: [
        "Thick, creamy, sweet balai wali lassi!",
        "The ultimate antidote to the afternoon heat.",
        "Drink one glass and enjoy the break."
    ],
    doodh_soda: [
        "Chilled milk and fizzy Pakola soda!",
        "Sweet, bubbly, cold, and refreshing.",
        "The green Pakola milk magic never fails."
    ],
    spaghetti: [
        "Saucy, spicy desi-style pasta bowl.",
        "Creamy Alfredo or spicy chicken tikka spaghetti.",
        "A filling treat for lunch."
    ],
    karahi: [
        "Sizzling wok with fresh ginger, chillies and piping hot naan!",
        "Gather friends and order a chicken karahi.",
        "Highway air and freshly cooked karahi is pure comfort."
    ],
    samosa_chaat: [
        "Crispy samosa layered with chana masala and imli chutney!",
        "Crispy, tangy, and bursting with flavors.",
        "The perfect campus canteen snack."
    ]
};
