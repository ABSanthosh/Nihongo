const sentences = [
  {
    postId: 1,
    sentences: [
      {
        "S.NO": "1",
        sentence: "watashi wa kono ie ne sunde imasu",
        meaning: "I live in this house",
      },
      {
        "S.NO": "2",
        sentence: "watashi wa kyoshi desu",
        meaning: "I am a teacher",
      },
      {
        "S.NO": "3",
        sentence: "watashi wa nihiongo o benkoyo shite imasu",
        meaning: "I am learning Japanese",
      },
      {
        "S.NO": "4",
        sentence: "anata wa shigotowa nandesuka?",
        meaning: "What is your job",
      },
      {
        "S.NO": "5",
        sentence: "watashi wa piano ga tokui desu",
        meaning: "I am good at piano",
      },
    ],
  },
  {
    postId: 2,
    sentences: [
      {
        "S.NO": "1",
        sentence: "watashi no namea wa santhosh desu",
        meaning: "my name is santhosh",
      },
      {
        "S.NO": "2",
        sentence: "anata no o namea wa nandesuka?",
        meaning: "what is your name?",
      },
      {
        "S.NO": "3",
        sentence: "midori wa watashi no daisukina iro desu",
        meaning: "green is my favorite color",
      },
      {
        "S.NO": "4",
        sentence: "watashi no okiniirino iro midorri desu",
        meaning: "Green is my favorite color",
      },
      {
        "S.NO": "5",
        sentence: "kono naze watashi wa anata no daksukidesu",
        meaning: "this is why I like you",
      },
    ],
  },
  {
    postId: 3,
    sentences: [
      {
        "S.NO": "1",
        sentence: "kore wa watashi no okaasan",
        meaning: "this is my mother",
      },
      {
        "S.NO": "2",
        sentence: "kyo no watashi no ie samui",
        meaning: "It's cold today at my house",
      },
      {
        "S.NO": "3",
        sentence: "sore wa totemo chiisana ie",
        meaning: "that is a very small house",
      },
      {
        "S.NO": "4",
        sentence: "watashi no kinou nete imashita",
        meaning: "i was sleeping yesterday",
      },
    ],
  },
  {
    postId: 4,
    sentences: [
      {
        "S.NO": "1",
        sentence: "kare ni wa watashi kara hamashimasu",
        meaning: "I will speak to him",
      },
      {
        "S.NO": "2",
        sentence: "ashita kara atarashii sekatsu o haanjimemasu",
        meaning: "tomorrow I'll start a new life",
      },
      {
        "S.NO": "3",
        sentence: "koko kara no nagame wa subarashii!",
        meaning: "The view from this place is fantastic",
      },
      {
        "S.NO": "4",
        sentence: "jinese no imi wa nandesuka?",
        meaning: "what is the meaning of life",
      },
      {
        "S.NO": "5",
        sentence: "kare wa maiusa shiinbun o youmimasu",
        meaning: "he reads newspaper every morning",
      },
      {
        "S.NO": "6",
        sentence: "ki wa midori iro desu",
        meaning: "the trees are green in color",
      },
      {
        "S.NO": "7",
        sentence: "tokidoki ki chisai",
        meaning: "sometimes trees are small",
      },
      {
        "S.NO": "8",
        sentence: "sore wa ki namae wa mario desu",
        meaning: "that trees name is mario",
      },
      {
        "S.NO": "9",
        sentence: "sono wa ki watashinoie ichiban chikai",
        meaning: "that tree is closest to my house",
      },
    ],
  },
  {
    postId: 5,
    sentences: [
      {
        "S.NO": "1",
        sentence: "zenkai atta kara anata no taiju ga fuemashita",
        meaning: "you've gained weight since we last met",
      },
      {
        "S.NO": "2",
        sentence: "toki wa kane desu",
        meaning: "time is money",
      },
      {
        "S.NO": "3",
        sentence: "kore wa sono koto to wa mattaku kankeu ga nai",
        meaning: "this has absolutely nothing to do with it",
      },
      {
        "S.NO": "4",
        sentence: "kanojo wa ano toshi ni shitewa genki desu ne",
        meaning: "she is in good shape for a woman in her age",
      },
      {
        "S.NO": "5",
        sentence: "tsugi no basu wa itsu kimaska",
        meaning: "when does the next bus come?",
      },
      {
        "S.NO": "6",
        sentence: "komi-san no okaasan totemo utsukushii",
        meaning: "komi's mother is very beautiful",
      },
    ],
  },
  {
    postId: 6,
    sentences: [
      {
        "S.NO": "1",
        sentence: "kanojo ga chiisana machi no sunde imasu",
        meaning: "she lives in a small town",
      },
      {
        "S.NO": "2",
        sentence: "doko ni iku no?",
        meaning: "where are you going?",
      },
      {
        "S.NO": "3",
        sentence: "gejutsu ni kyomi ga arimasuka?",
        meaning: "are you interested in art?",
      },
      {
        "S.NO": "4",
        sentence: "kanojo wa kanarino itazurakko deshita",
        meaning: "she was a very naughty child",
      },
      {
        "S.NO": "5",
        sentence: "kono hon wa totemo omoshiroi",
        meaning: "this book is very interesting",
      },
      {
        "S.NO": "6",
        sentence: "otoko no ko wa ni ki noborimashita",
        meaning: "the boy climbed the tree",
      },
      {
        "S.NO": "7",
        sentence: "watashi wa nihongo o hanashimasu",
        meaning: "i want to speak japanese",
      },
      {
        "S.NO": "8",
        sentence: "kono shumatsu no watashi wa nani o shita to omou",
        meaning: "guess what I did this weekend",
      },
      {
        "S.NO": "9",
        sentence: "gakko ni ikimasen",
        meaning: "I won't go to school",
      },
      {
        "S.NO": "10",
        sentence: "okashi o tabemasen",
        meaning: "I won't eat snacks",
      },
      {
        "S.NO": "11",
        sentence: "jusu o nomimasen",
        meaning: "I won't drink juice",
      },
    ],
  },
  {
    postId: 7,
    sentences: [
      {
        "S.NO": "1",
        sentence: "omoshiroi hito desu ne",
        meaning: "you are full of surprises",
      },
      {
        "S.NO": "2",
        sentence: "kino wa gutaitekiniwa nani ga atta nandeska?",
        meaning: "what exactly happened yesterday",
      },
      {
        "S.NO": "3",
        sentence: "watashi mo so omimasu",
        meaning: "I think so too",
      },
      {
        "S.NO": "4",
        sentence: "taimu toraberu ga dekiru ni ga yattekuru to omoimasu ki?",
        meaning: "Do you think time travel is possible one day?",
      },
      {
        "S.NO": "5",
        sentence: "atarashi hin shite yomimasu? ano totemo omoshiroi desu",
        meaning: "did you read the new book? that is very interesting",
      },
      {
        "S.NO": "6",
        sentence:
          "watashi no shigoto no kareea wa ryouko yote desuka. anata wa ni kimasuka",
        meaning: "In my job, they are planning for a trip. are you comming?",
      },
      {
        "S.NO": "7",
        sentence: "tsugi no basu wa itsu kuru oshiete kudasai",
        meaning: "please tell me when the next bus will come",
      },
      {
        "S.NO": "8",
        sentence: "anata wa shumatsu tanoshimimashita?",
        meaning: "did you enjoy your weekend?",
      },
    ],
  },
  {
    postId: 8,
    sentences: [
      {
        "S.NO": "1",
        sentence: "kono kotoba no tegi wa nandesuka?",
        meaning: "what is the definition of this word?",
      },
      {
        "S.NO": "2",
        sentence: "ie ni itai desu",
        meaning: "i want to stay home",
      },
      {
        "S.NO": "3",
        sentence: "kare wa go fun mae ni ie o desmashita",
        meaning: "he left the house 5 min ago",
      },
      {
        "S.NO": "4",
        sentence: "kanojo wa tokidoko megane motte iru",
        meaning: "she has glasses sometimes",
      },
      {
        "S.NO": "5",
        sentence: "kanojo wa megane nashidewa yomi masen",
        meaning: "she can't read without glasses",
      },
    ],
  },
];

export default sentences;
