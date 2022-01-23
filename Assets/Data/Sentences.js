const sentences = [
  {
    postId: 1,
    sentences: [
      {
        sentence: "watashi wa kono ie ne sunde imasu",
        meaning: "I live in this house",
      },
      {
        sentence: "watashi wa kyoshi desu",
        meaning: "I am a teacher",
      },
      {
        sentence: "watashi wa nihiongo o benkoyo shite imasu",
        meaning: "I am learning Japanese",
      },
      {
        sentence: "anata wa shigotowa nandesuka?",
        meaning: "What is your job",
      },
      {
        sentence: "watashi wa piano ga tokui desu",
        meaning: "I am good at piano",
      },
    ],
  },
  {
    postId: 2,
    sentences: [
      {
        sentence: "watashi no namea wa santhosh desu",
        meaning: "my name is santhosh",
      },
      {
        sentence: "anata no o namea wa nandesuka?",
        meaning: "what is your name?",
      },
      {
        sentence: "midori wa watashi no daisukina iro desu",
        meaning: "green is my favorite color",
      },
      {
        sentence: "watashi no okiniirino iro midorri desu",
        meaning: "Green is my favorite color",
      },
      {
        sentence: "kono naze watashi wa anata no daksukidesu",
        meaning: "this is why I like you",
      },
    ],
  },
  {
    postId: 3,
    sentences: [
      {
        sentence: "kore wa watashi no okaasan",
        meaning: "this is my mother",
      },
      {
        sentence: "kyo no watashi no ie samui",
        meaning: "It's cold today at my house",
      },
      {
        sentence: "sore wa totemo chiisana ie",
        meaning: "that is a very small house",
      },
      {
        sentence: "watashi no kinou nete imashita",
        meaning: "i was sleeping yesterday",
      },
    ],
  },
  {
    postId: 4,
    sentences: [
      {
        sentence: "kare ni wa watashi kara hamashimasu",
        meaning: "I will speak to him",
      },
      {
        sentence: "ashita kara atarashii sekatsu o haanjimemasu",
        meaning: "tomorrow I'll start a new life",
      },
      {
        sentence: "koko kara no nagame wa subarashii!",
        meaning: "The view from this place is fantastic",
      },
      {
        sentence: "jinese no imi wa nandesuka?",
        meaning: "what is the meaning of life",
      },
      {
        sentence: "kare wa maiusa shiinbun o youmimasu",
        meaning: "he reads newspaper every morning",
      },
      {
        sentence: "ki wa midori iro desu",
        meaning: "the trees are green in color",
      },
      {
        sentence: "tokidoki ki chisai",
        meaning: "sometimes trees are small",
      },
      {
        sentence: "sore wa ki namae wa mario desu",
        meaning: "that trees name is mario",
      },
      {
        sentence: "sono wa ki watashinoie ichiban chikai",
        meaning: "that tree is closest to my house",
      },
    ],
  },
  {
    postId: 5,
    sentences: [
      {
        sentence: "zenkai atta kara anata no taiju ga fuemashita",
        meaning: "you've gained weight since we last met",
      },
      {
        sentence: "toki wa kane desu",
        meaning: "time is money",
      },
      {
        sentence: "kore wa sono koto to wa mattaku kankeu ga nai",
        meaning: "this has absolutely nothing to do with it",
      },
      {
        sentence: "kanojo wa ano toshi ni shitewa genki desu ne",
        meaning: "she is in good shape for a woman in her age",
      },
      {
        sentence: "tsugi no basu wa itsu kimaska",
        meaning: "when does the next bus come?",
      },
      {
        sentence: "komi-san no okaasan totemo utsukushii",
        meaning: "komi's mother is very beautiful",
      },
    ],
  },
  {
    postId: 6,
    sentences: [
      {
        sentence: "kanojo ga chiisana machi no sunde imasu",
        meaning: "she lives in a small town",
      },
      {
        sentence: "doko ni iku no?",
        meaning: "where are you going?",
      },
      {
        sentence: "gejutsu ni kyomi ga arimasuka?",
        meaning: "are you interested in art?",
      },
      {
        sentence: "kanojo wa kanarino itazurakko deshita",
        meaning: "she was a very naughty child",
      },
      {
        sentence: "kono hon wa totemo omoshiroi",
        meaning: "this book is very interesting",
      },
      {
        sentence: "otoko no ko wa ni ki noborimashita",
        meaning: "the boy climbed the tree",
      },
      {
        sentence: "watashi wa nihongo o hanashimasu",
        meaning: "i want to speak japanese",
      },
      {
        sentence: "kono shumatsu no watashi wa nani o shita to omou",
        meaning: "guess what I did this weekend",
      },
      {
        sentence: "gakko ni ikimasen",
        meaning: "I won't go to school",
      },
      {
        sentence: "okashi o tabemasen",
        meaning: "I won't eat snacks",
      },
      {
        sentence: "jusu o nomimasen",
        meaning: "I won't drink juice",
      },
    ],
  },
  {
    postId: 7,
    sentences: [
      {
        sentence: "omoshiroi hito desu ne",
        meaning: "you are full of surprises",
      },
      {
        sentence: "kino wa gutaitekiniwa nani ga atta nandeska?",
        meaning: "what exactly happened yesterday",
      },
      {
        sentence: "watashi mo so omimasu",
        meaning: "I think so too",
      },
      {
        sentence: "taimu toraberu ga dekiru ni ga yattekuru to omoimasu ki?",
        meaning: "Do you think time travel is possible one day?",
      },
      {
        sentence: "atarashi hin shite yomimasu? ano totemo omoshiroi desu",
        meaning: "did you read the new book? that is very interesting",
      },
      {
        sentence:
          "watashi no shigoto no kareea wa ryouko yote desuka. anata wa ni kimasuka",
        meaning: "In my job, they are planning for a trip. are you comming?",
      },
      {
        sentence: "tsugi no basu wa itsu kuru oshiete kudasai",
        meaning: "please tell me when the next bus will come",
      },
      {
        sentence: "anata wa shumatsu tanoshimimashita?",
        meaning: "did you enjoy your weekend?",
      },
    ],
  },
  {
    postId: 8,
    sentences: [
      {
        sentence: "kono kotoba no tegi wa nandesuka?",
        meaning: "what is the definition of this word?",
      },
      {
        sentence: "ie ni itai desu",
        meaning: "i want to stay home",
      },
      {
        sentence: "kare wa go fun mae ni ie o desmashita",
        meaning: "he left the house 5 min ago",
      },
      {
        sentence: "kanojo wa tokidoko megane motte iru",
        meaning: "she has glasses sometimes",
      },
      {
        sentence: "kanojo wa megane nashidewa yomi masen",
        meaning: "she can't read without glasses",
      },
    ],
  },
  {
    postId: 9,
    sentences: [],
  },
  {
    postId: 10,
    sentences: [],
  },
  {
    postId: 11,
    sentences: [
      {
        sentence: "otokoto ga ki no noboru to kudadu",
        meaning: "The boy climbed the tree and down",
      },
      {
        sentence: "ie ni shuppats, 5 fun maeni, otoko ga shinbun yomimasu",
        meaning: "A man reads newspaper 5 min before leaving home",
      },
    ],
  },
  {
    postId: 12,
    sentences: [
      {
        sentence: "kare wa shigoto de isogashii",
        meaning: "he is buys in his job",
      },
      {
        sentence: "kare wa kekoteki imasen. Kare wa guai ga warui",
        meaning: "He is not healthy. He is sick",
      },
      {
        sentence: "kyowa tottemo kaze no tsuyoi demo kino wa hareta imashita",
        meaning: "Its very windy today but it was sunny yesterday",
      },
      {
        sentence: "kyo no asa wa kumotto imashita demo ima hareta imasu",
        meaning: "Today morining it was cloudy but now its sunny",
      },
    ],
  },
  {
    postId: 13,
    sentences: [
      {
        sentence: "sakana wa mizu ni sunde imasu",
        meaning: "fish lives in water",
      },{
        sentence: "kare wa sakana ga mizuga suki desu ga demo kare wa mizu sukijanai",
        meaning: "His fish lives water but he doesn't like water",
      },{
        sentence: "anatawa okasan kangoshi desu ka?",
        meaning: "hai! watashi no okasan shikaku o knagoshi desu.",
      },
    ],
  },
  {
    postId:14,
    sentences:[
      {
        sentence: "sura wa hon ga kaeru desuka?",
        meaning: "can you return that book?",
      },{
        sentence: "anata no musuko de okiru imaska?",
        meaning: "can you wakup your son?",
      },{
        sentence: "kore michi no atarashi mise no sakana wa oishii desu ne?",
        meaning: "Fish in the new store in this road is delicious right?",
      },{
        sentence: "are wa atarashi mise wa akeru desuka?",
        meaning: "Is that new shop open?",
      },{
        sentence: "atarashi mise kara 2 sakana o ikimasu",
        meaning: "go and buy 2 fish from the new store",
      },
    ]
  },{
    postId:15,
    sentences:[
      {
        sentence: "anata wa toteemo tsumaranai",
        meaning: "you are vary boring",
      },{
        sentence: "anata wa subete ni tottemo shinsetsu desu",
        meaning: "you are very kind to all",
      },{
        sentence: "anata wa mondai nandesuka? kimi wa tottemo majime",
        meaning: "what is your problem, you are very serious",
      },{
        sentence: "atarashi kyoshi wa tottemo nonki ne?",
        meaning: "the new teacher is very care-free right?",
      },{
        sentence: "ano kangoshi wa minna nintaizuyoi desu",
        meaning: "that nurse is patient with everyone",
      },{
        sentence: "sono wa kodomo ne minna otono ni teinei desu",
        meaning: "that child is kind to all adults",
      },
    ]
  }
];

export default sentences;
