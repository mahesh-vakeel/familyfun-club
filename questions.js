// Quiz questions by topic and difficulty.
// Each entry: [question, correct answer, wrong answer, wrong answer, wrong answer]
export const QUIZ = {
  gk: { name: "General knowledge", icon: "💡", easy: [
    ["How many days are there in a leap year?", "366", "365", "364", "360"],
    ["Which colour do you get by mixing blue and yellow?", "Green", "Purple", "Orange", "Brown"],
    ["How many legs does a spider have?", "8", "6", "10", "12"],
    ["What do bees make?", "Honey", "Milk", "Silk", "Wax paper"],
    ["How many continents are there?", "7", "5", "6", "8"],
    ["Which is the largest ocean?", "Pacific", "Atlantic", "Indian", "Arctic"],
    ["How many hours are in a day?", "24", "12", "36", "48"]
  ], medium: [
    ["Which is the hardest natural substance?", "Diamond", "Gold", "Iron", "Quartz"],
    ["Which language has the most native speakers in the world?", "Mandarin Chinese", "English", "Hindi", "Spanish"],
    ["How many players are on a football (soccer) team on the field?", "11", "10", "9", "12"],
    ["What is the largest organ of the human body?", "Skin", "Liver", "Heart", "Brain"],
    ["Which instrument has 88 keys?", "Piano", "Harmonium", "Guitar", "Violin"],
    ["Which country gifted the Statue of Liberty to the USA?", "France", "Britain", "Spain", "Italy"],
    ["How many sides does a hexagon have?", "6", "5", "7", "8"]
  ], hard: [
    ["What is the smallest bone in the human body?", "Stapes (in the ear)", "Femur", "Little toe bone", "Kneecap"],
    ["Which element has the chemical symbol Au?", "Gold", "Silver", "Aluminium", "Argon"],
    ["How many bones does an adult human have?", "206", "196", "216", "226"],
    ["Which planet has the most known moons (as of 2024)?", "Saturn", "Jupiter", "Uranus", "Neptune"],
    ["Who painted the Mona Lisa?", "Leonardo da Vinci", "Michelangelo", "Picasso", "Van Gogh"],
    ["In which year did the Titanic sink?", "1912", "1905", "1920", "1898"],
    ["What is the currency of Japan?", "Yen", "Won", "Yuan", "Ringgit"]
  ]},
  india: { name: "India", icon: "🇮🇳", easy: [
    ["What is the capital of India?", "New Delhi", "Mumbai", "Kolkata", "Chennai"],
    ["What is India's national animal?", "Bengal tiger", "Lion", "Elephant", "Peacock"],
    ["What is India's national bird?", "Peacock", "Parrot", "Sparrow", "Eagle"],
    ["Which festival is known as the festival of lights?", "Diwali", "Holi", "Pongal", "Eid"],
    ["Which festival is known as the festival of colours?", "Holi", "Diwali", "Onam", "Lohri"],
    ["How many colours are in India's national flag (not counting the chakra)?", "3", "2", "4", "5"],
    ["Which city is famous for the Gateway of India?", "Mumbai", "Delhi", "Jaipur", "Goa"]
  ], medium: [
    ["Who wrote India's national anthem, Jana Gana Mana?", "Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
    ["How many spokes does the Ashoka Chakra on the flag have?", "24", "12", "20", "32"],
    ["Which is the longest river flowing within India?", "Ganga", "Yamuna", "Godavari", "Narmada"],
    ["Which state is called the Land of Five Rivers?", "Punjab", "Haryana", "Bihar", "Assam"],
    ["In which city is the Charminar?", "Hyderabad", "Lucknow", "Agra", "Mysuru"],
    ["Which Indian state has the longest coastline?", "Gujarat", "Kerala", "Tamil Nadu", "Maharashtra"],
    ["Who was the first Prime Minister of India?", "Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi", "Lal Bahadur Shastri"]
  ], hard: [
    ["In which year did India become a republic?", "1950", "1947", "1952", "1949"],
    ["Who is known as the Father of the Indian Constitution?", "B. R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad", "Mahatma Gandhi"],
    ["Which was India's first satellite?", "Aryabhata", "Bhaskara", "Rohini", "INSAT-1A"],
    ["Which mountain range separates North and South India?", "Vindhya", "Aravalli", "Himalaya", "Western Ghats"],
    ["Where is the Sun Temple of Konark?", "Odisha", "West Bengal", "Gujarat", "Andhra Pradesh"],
    ["Which Mughal emperor built the Taj Mahal?", "Shah Jahan", "Akbar", "Aurangzeb", "Humayun"],
    ["Which is the smallest state of India by area?", "Goa", "Sikkim", "Tripura", "Mizoram"]
  ]},
  science: { name: "Science & nature", icon: "🔬", easy: [
    ["What do plants need from the sun to make food?", "Sunlight", "Moonlight", "Wind", "Sand"],
    ["What is H2O better known as?", "Water", "Salt", "Oxygen", "Sugar"],
    ["Which gas do we breathe in to stay alive?", "Oxygen", "Carbon dioxide", "Helium", "Nitrogen only"],
    ["What is frozen water called?", "Ice", "Steam", "Fog", "Dew"],
    ["Which animal is known as the king of the jungle?", "Lion", "Tiger", "Elephant", "Bear"],
    ["How many wings does a butterfly have?", "4", "2", "6", "8"]
  ], medium: [
    ["What gas do plants take in from the air?", "Carbon dioxide", "Oxygen", "Hydrogen", "Helium"],
    ["What is the boiling point of water at sea level?", "100°C", "90°C", "120°C", "80°C"],
    ["Which part of the plant makes food?", "Leaf", "Root", "Stem", "Flower"],
    ["Which is the largest mammal?", "Blue whale", "Elephant", "Giraffe", "Hippopotamus"],
    ["What force pulls things towards the Earth?", "Gravity", "Magnetism", "Friction", "Wind"],
    ["How many teeth does an adult human usually have?", "32", "28", "30", "36"]
  ], hard: [
    ["What is the chemical symbol for sodium?", "Na", "So", "Sd", "S"],
    ["What part of the cell is called its powerhouse?", "Mitochondria", "Nucleus", "Ribosome", "Cell wall"],
    ["What is the speed of light, roughly?", "300,000 km per second", "30,000 km per second", "3,000 km per second", "3 million km per second"],
    ["Which blood type is the universal donor for red cells?", "O negative", "AB positive", "A positive", "B negative"],
    ["Which vitamin does the body make from sunlight?", "Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
    ["What is the most common gas in Earth's air?", "Nitrogen", "Oxygen", "Carbon dioxide", "Argon"]
  ]},
  geography: { name: "World & geography", icon: "🌍", easy: [
    ["Which country is famous for the pyramids of Giza?", "Egypt", "Mexico", "India", "Greece"],
    ["What is the capital of England?", "London", "Paris", "Manchester", "Dublin"],
    ["Which country has the kangaroo as a famous animal?", "Australia", "Brazil", "Kenya", "Canada"],
    ["Which is the tallest mountain in the world?", "Mount Everest", "K2", "Kangchenjunga", "Kilimanjaro"],
    ["In which country is the Eiffel Tower?", "France", "Italy", "Germany", "Spain"],
    ["Which is the coldest continent?", "Antarctica", "Europe", "Asia", "North America"]
  ], medium: [
    ["What is the capital of Australia?", "Canberra", "Sydney", "Melbourne", "Perth"],
    ["Which is the longest river in the world (by most measures)?", "Nile", "Amazon", "Ganga", "Mississippi"],
    ["The Gobi desert lies in which countries?", "Mongolia and China", "India and Pakistan", "Iran and Iraq", "Kazakhstan and Russia"],
    ["Which country has the most people (2023 onwards)?", "India", "China", "USA", "Indonesia"],
    ["What is the capital of Canada?", "Ottawa", "Toronto", "Vancouver", "Montreal"],
    ["Mount Kilimanjaro is in which country?", "Tanzania", "Kenya", "Uganda", "Ethiopia"]
  ], hard: [
    ["Which is the smallest country in the world?", "Vatican City", "Monaco", "San Marino", "Maldives"],
    ["Which country has the most time zones (including territories)?", "France", "Russia", "USA", "China"],
    ["What is the capital of New Zealand?", "Wellington", "Auckland", "Christchurch", "Queenstown"],
    ["Lake Baikal, the deepest lake in the world, is in which country?", "Russia", "Canada", "Mongolia", "Finland"],
    ["Which is the largest country in Africa by area?", "Algeria", "Nigeria", "Egypt", "Sudan"],
    ["Which two countries share the longest international border?", "Canada and USA", "Russia and China", "India and Bangladesh", "Argentina and Chile"]
  ]},
  sports: { name: "Sports & cricket", icon: "🏏", easy: [
    ["How many players are in a cricket team on the field?", "11", "9", "10", "12"],
    ["In which sport do you hit a shuttlecock?", "Badminton", "Tennis", "Squash", "Hockey"],
    ["How many runs is a hit over the boundary without bouncing?", "6", "4", "5", "8"],
    ["Which sport is played at Wimbledon?", "Tennis", "Cricket", "Golf", "Football"],
    ["What colour medal is given for first place?", "Gold", "Silver", "Bronze", "Platinum"],
    ["Which sport uses a puck?", "Ice hockey", "Basketball", "Volleyball", "Baseball"]
  ], medium: [
    ["Who is known as the 'God of Cricket'?", "Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Kapil Dev"],
    ["In which year did India win its first Cricket World Cup?", "1983", "2011", "1987", "1979"],
    ["How many rings are on the Olympic flag?", "5", "4", "6", "7"],
    ["Which country has won the most FIFA World Cups?", "Brazil", "Germany", "Italy", "Argentina"],
    ["What is India's national sport often said to be?", "Hockey", "Cricket", "Kabaddi", "Football"],
    ["How many balls are in a cricket over?", "6", "5", "8", "4"]
  ], hard: [
    ["Who was the first Indian to win an individual Olympic gold medal?", "Abhinav Bindra", "Neeraj Chopra", "Milkha Singh", "PV Sindhu"],
    ["In which sport is the Ranji Trophy played?", "Cricket", "Football", "Hockey", "Kabaddi"],
    ["Neeraj Chopra won Olympic gold in 2021 in which event?", "Javelin throw", "Shot put", "High jump", "Discus throw"],
    ["How long is a cricket pitch (stumps to stumps)?", "22 yards", "20 yards", "24 yards", "18 yards"],
    ["Which city hosted the 2010 Commonwealth Games?", "New Delhi", "Mumbai", "Glasgow", "Melbourne"],
    ["How many points is a touchdown worth in American football?", "6", "3", "7", "5"]
  ]},
  movies: { name: "Movies & TV", icon: "🎬", easy: [
    ["What is the name of the snowman in Frozen?", "Olaf", "Sven", "Kristoff", "Hans"],
    ["Which film's famous line is 'Kitne aadmi the'?", "Sholay", "Deewar", "Don", "Zanjeer"],
    ["What kind of animal is Simba in The Lion King?", "Lion", "Tiger", "Cheetah", "Leopard"],
    ["Which superhero is called the friendly neighbourhood hero?", "Spider-Man", "Batman", "Superman", "Iron Man"],
    ["Which cartoon cat always chases Jerry?", "Tom", "Garfield", "Felix", "Sylvester"],
    ["In Chhota Bheem, what is Bheem's favourite sweet?", "Laddoo", "Jalebi", "Rasgulla", "Barfi"]
  ], medium: [
    ["Which actor is known as the 'Badshah of Bollywood'?", "Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Akshay Kumar"],
    ["The Oscar-winning song 'Naatu Naatu' is from which film?", "RRR", "Baahubali", "Pushpa", "KGF"],
    ["Who directed the movie 'Titanic'?", "James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"],
    ["What is the name of the wizard school in Harry Potter?", "Hogwarts", "Durmstrang", "Narnia", "Rivendell"],
    ["Which 2001 Aamir Khan film was nominated for the Oscar?", "Lagaan", "Dil Chahta Hai", "Rang De Basanti", "Taare Zameen Par"],
    ["Who plays Iron Man in the Marvel films?", "Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"]
  ], hard: [
    ["Which was India's first full-length feature film (1913)?", "Raja Harishchandra", "Alam Ara", "Mother India", "Kisan Kanya"],
    ["Which was the first Indian sound film (1931)?", "Alam Ara", "Raja Harishchandra", "Devdas", "Achhut Kanya"],
    ["Who composed the music for the film 'Slumdog Millionaire'?", "A. R. Rahman", "Ilaiyaraaja", "Pritam", "Shankar–Ehsaan–Loy"],
    ["Which film has Mogambo saying 'Mogambo khush hua'?", "Mr. India", "Karma", "Tezaab", "Ram Lakhan"],
    ["Satyajit Ray's first film was?", "Pather Panchali", "Charulata", "Apur Sansar", "Jalsaghar"],
    ["Which movie features the song 'Chaiyya Chaiyya'?", "Dil Se", "Taal", "Kuch Kuch Hota Hai", "Dilwale Dulhania Le Jayenge"]
  ]},
  food: { name: "Food", icon: "🍛", easy: [
    ["Which fruit is called the king of fruits in India?", "Mango", "Banana", "Apple", "Jackfruit"],
    ["What is the main ingredient of guacamole?", "Avocado", "Tomato", "Peas", "Cucumber"],
    ["Idli and dosa come from which part of India?", "South India", "North India", "East India", "North-east India"],
    ["Which vegetable makes you cry when you cut it?", "Onion", "Potato", "Carrot", "Cabbage"],
    ["What is paneer made from?", "Milk", "Wheat", "Rice", "Soybean only"],
    ["Which country is pizza originally from?", "Italy", "USA", "France", "Greece"]
  ], medium: [
    ["Which spice gives turmeric dishes their yellow colour?", "Turmeric", "Saffron", "Chilli", "Cumin"],
    ["Rasgulla is most famously linked to which states?", "West Bengal and Odisha", "Punjab and Haryana", "Gujarat and Rajasthan", "Kerala and Karnataka"],
    ["What is sushi traditionally wrapped in?", "Seaweed", "Rice paper", "Banana leaf", "Lettuce"],
    ["Which Indian state is famous for dhokla?", "Gujarat", "Maharashtra", "Bihar", "Assam"],
    ["Which is the most expensive spice by weight?", "Saffron", "Cardamom", "Vanilla", "Black pepper"],
    ["Vada pav is a famous street food of which city?", "Mumbai", "Delhi", "Chennai", "Kolkata"]
  ], hard: [
    ["Bhut Jolokia, one of the hottest chillies, comes from which region?", "North-east India", "Rajasthan", "Kerala", "Punjab"],
    ["Which country is the largest producer of tea?", "China", "India", "Sri Lanka", "Kenya"],
    ["What is the main ingredient of traditional hummus?", "Chickpeas", "Lentils", "Kidney beans", "Peanuts"],
    ["Which Indian state is famous for Rogan Josh?", "Jammu and Kashmir", "Punjab", "Goa", "Bihar"],
    ["Which grain is used to make traditional Japanese sake?", "Rice", "Barley", "Wheat", "Millet"],
    ["Hyderabadi biryani is traditionally cooked in which style?", "Dum (slow cooked, sealed)", "Deep fried", "Tandoor", "Steamed in leaves"]
  ]},
  space: { name: "Space", icon: "🚀", easy: [
    ["Which planet do we live on?", "Earth", "Mars", "Venus", "Jupiter"],
    ["What is the name of our star?", "The Sun", "The Moon", "Polaris", "Sirius"],
    ["Which planet is known as the Red Planet?", "Mars", "Venus", "Mercury", "Saturn"],
    ["Which planet has big beautiful rings?", "Saturn", "Earth", "Mars", "Mercury"],
    ["What do astronauts wear in space?", "Spacesuit", "Raincoat", "Swimsuit", "Kurta"],
    ["How many planets are in our solar system?", "8", "9", "7", "10"]
  ], medium: [
    ["Which is the largest planet in our solar system?", "Jupiter", "Saturn", "Neptune", "Earth"],
    ["Who was the first person to walk on the Moon?", "Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Rakesh Sharma"],
    ["Which planet is closest to the Sun?", "Mercury", "Venus", "Mars", "Earth"],
    ["Who was the first Indian to go to space?", "Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "APJ Abdul Kalam"],
    ["What is India's space agency called?", "ISRO", "NASA", "DRDO", "ESA"],
    ["Which is the hottest planet in our solar system?", "Venus", "Mercury", "Mars", "Jupiter"]
  ], hard: [
    ["Chandrayaan-3 landed near which part of the Moon in 2023?", "South pole region", "North pole region", "Far side equator", "Sea of Tranquility"],
    ["What is the name of India's Mars mission launched in 2013?", "Mangalyaan", "Chandrayaan", "Gaganyaan", "Aditya"],
    ["How long does sunlight take to reach Earth, roughly?", "8 minutes", "8 seconds", "8 hours", "1 minute"],
    ["What is the name of our galaxy?", "Milky Way", "Andromeda", "Whirlpool", "Sombrero"],
    ["Which was the first human-made satellite (1957)?", "Sputnik 1", "Explorer 1", "Aryabhata", "Vostok 1"],
    ["Which planet spins on its side?", "Uranus", "Neptune", "Saturn", "Venus"]
  ]},
  maths: { name: "Maths & puzzles", icon: "🔢", easy: [
    ["What is 7 + 8?", "15", "14", "16", "13"],
    ["What is 9 × 3?", "27", "24", "21", "30"],
    ["How many minutes are in an hour?", "60", "100", "30", "90"],
    ["What is half of 50?", "25", "20", "30", "15"],
    ["How many sides does a triangle have?", "3", "4", "5", "2"],
    ["What comes next: 2, 4, 6, 8, …?", "10", "9", "12", "11"]
  ], medium: [
    ["What is 15% of 200?", "30", "15", "20", "45"],
    ["What is 12 × 12?", "144", "124", "132", "156"],
    ["What is the square root of 81?", "9", "8", "7", "11"],
    ["How many seconds are in 5 minutes?", "300", "500", "250", "360"],
    ["What comes next: 1, 1, 2, 3, 5, 8, …?", "13", "11", "12", "15"],
    ["If a dozen eggs cost ₹72, how much is one egg?", "₹6", "₹7", "₹8", "₹5"]
  ], hard: [
    ["What is 17 × 23?", "391", "381", "401", "371"],
    ["What is the next prime number after 31?", "37", "33", "35", "39"],
    ["A train goes 60 km in 45 minutes. What is its speed?", "80 km/h", "60 km/h", "75 km/h", "90 km/h"],
    ["How many degrees are inside all the angles of a pentagon?", "540", "360", "720", "450"],
    ["What is 2 to the power of 10?", "1024", "1000", "512", "2048"],
    ["If 3 cats catch 3 mice in 3 minutes, how many cats catch 100 mice in 100 minutes?", "3", "100", "33", "300"]
  ]}
};

// Funny "Would you rather" choices. Score by picking what most of the family picks.
export const WOULD_RATHER = [
  ["Eat only khichdi for a month", "Eat only Maggi for a month"],
  ["Have a tail", "Have horns"],
  ["Always talk in rhymes", "Always sing instead of talk"],
  ["Be able to fly", "Be invisible"],
  ["Never use a phone again", "Never watch TV again"],
  ["Live without chai", "Live without sweets"],
  ["Have Dadi's cooking every day", "Eat at a 5-star hotel every day"],
  ["Sneeze glitter", "Burp bubbles"],
  ["Go on a holiday to the mountains", "Go on a holiday to the beach"],
  ["Wake up at 5 am every day", "Stay up until 2 am every day"],
  ["Have a pet dinosaur", "Have a pet dragon"],
  ["Speak every language", "Talk to animals"],
  ["Be the funniest person in the family", "Be the smartest person in the family"],
  ["Lose your phone charger", "Lose the TV remote"],
  ["Have hair that changes colour with your mood", "Have a nose that glows when you lie"],
  ["Dance at every wedding", "Sing at every wedding"],
  ["Travel back in time", "Travel to the future"],
  ["Have unlimited pani puri", "Have unlimited ice cream"],
  ["Be a famous cricketer", "Be a famous film star"],
  ["Fight one elephant-sized ant", "Fight 100 ant-sized elephants"],
  ["Only whisper for a day", "Only shout for a day"],
  ["Have a rewind button for life", "Have a pause button for life"]
];

// Funny answers: everyone writes something, then everyone votes for the funniest.
export const FUNNY_PROMPTS = [
  "The real reason Dadaji is always watching the news",
  "A terrible name for a family WhatsApp group",
  "What the dog is actually thinking about all day",
  "The worst gift to bring to a wedding",
  "A new rule for family dinners",
  "What Mummy really means when she says 'we'll see'",
  "The worst excuse for being late",
  "A secret ingredient that would ruin any biryani",
  "What our family would be famous for on TV",
  "The worst thing to say in a family photo",
  "A new festival our family should celebrate",
  "The title of a movie about our family",
  "What you'd find in Papa's secret drawer",
  "A bad name for a new sweet shop",
  "The first thing aliens would say after meeting our family",
  "A new Olympic sport our family would win",
  "The weirdest thing to shout during a cricket match",
  "What the fridge would say if it could talk",
  "A terrible job for a superhero",
  "Why the remote control is always missing"
];
