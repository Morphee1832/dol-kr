function init_trHandheld()
{
	setup.trClothes.handheld = [
		{
			index: 0,
			name: "naked",
			name_ko: "벗음",
			variable: "naked",
			post: 0,
			description: "naked",
		},
		{
			index: 1,
			name: "umbrella",
			name_ko: "우산",
			variable: "umbrella",
			post: 0,
			description: "비를 막아준다.",
		},
		{
			index: 2,
			name: "parasol",
			name_ko: "파라솔",
			variable: "parasol",
			post: 2,
			description: "비를 막아준다.",
		},
		{
			index: 3,
			name: "sweet lolita parasol",
			name_ko: "스위트 로리타 파라솔",
			variable: "parasolsweet",
			post: 2,
			description: "비를 막아준다.",
		},
		{
			index: 4,
			name: "paper parasol",
			name_ko: "종이 파라솔",
			variable: "parasolpaper",
			post: 2,
			description: "비를 막기 위해, 투명 코팅이 되어 있다.",
		},
		{
			index: 5,
			name: "purse",
			name_ko: "핸드백",
			variable: "purse",
			post: 0,
			description: "교과서를 들고 다니기 충분하다.",
		},
		{
			index: 6,
			name: "heart purse",
			name_ko: "하트 모양 핸드백",
			variable: "heartpurse",
			post: 0,
			description: "교과서를 들고 다니기 충분하다.",
		},
		{
			index: 7,
			name: "messenger bag",
			name_ko: "메신저백",
			variable: "messengerbag",
			post: 0,
			description: "교과서를 들고 다닐 때 유용하다.",
		},
		{
			index: 8,
			name: "backpack",
			name_ko: "책가방",
			variable: "backpack",
			post: 0,
			description: "교과서를 들고 다닐 때 유용하다.",
		},
		{
			index: 9,
			name: "paper fan",
			name_ko: "종이 부채",
			variable: "paperfan",
			post: 1,
			description: "당신을 시원하게 해준다.",
		},
		{
			index: 10,
			name: "milkshake",
			name_ko: "밀크셰이크",
			variable: "milkshake",
			post: 1,
			description: "맛있고 상쾌해진다.",
		},
		{
			index: 11,
			name: "cigarette",
			name_ko: "담배",
			variable: "cigarette",
			post: 1,
			description: "나쁜 습관은 그리 멋지게 보이지 않는다.",
		},
		{
			index: 12,
			name: "feather duster",
			name_ko: "깃털 먼지털이개",
			variable: "featherduster",
			post: 1,
			description: "청소할 때 귀여워 보인다.",
		},
		{
			index: 13,
			name: "pom poms",
			name_ko: "폼폼",
			variable: "pompoms",
			post: 0,
			description: "당신 팀의 승리를 응원하기 위한 것.",
		},
		{
			index: 14,
			name: "balloon",
			name_ko: "풍선",
			variable: "balloon",
			post: 0,
			description: "손에서 놓지 말자.",
		},
		{
			index: 15,
			name: "heart balloon",
			name_ko: "하트모양 풍선",
			variable: "balloonheart",
			post: 0,
			description: "손에서 놓지 말자.",
		},
		{
			index: 16,
			name: "bag of popcorn",
			name_ko: "팝콘 봉지",
			variable: "popcorn",
			post: 1,
			description: "맛있다.",
		},
		{
			index: 17,
			name: "gingerbread man",
			name_ko: "사람 모양 생강 쿠키",
			variable: "gingerbread",
			post: 1,
			description: "맛있다. 여러 장면의 소품이다.",
		},
		{
			index: 18,
			name: "cup of lemonade",
			name_ko: "레모네이드 컵",
			variable: "lemonade",
			post: 0,
			description: "맛있다.",
		},
		{
			index: 19,
			name: "hot drink",
			name_ko: "뜨거운 음료",
			variable: "cocoa",
			post: 1,
			description: "맛있다.",
		},
		{
			index: 20,
			name: "mug",
			name_ko: "머그잔",
			variable: "mug",
			post: 0,
			description: "비어 있다.",
		},	
		{
			index: 21,
			name: "beer bottle",
			name_ko: "맥주병",
			variable: "beerbottle",
			post: 0,
			description: "술이다.",
		},	
		{
			index: 22,
			name: "mug of beer",
			name_ko: "맥주잔",
			variable: "beermug",
			post: 0,
			description: "술이다.",
		},	
		{
			index: 23,
			name: "shot glass",
			name_ko: "양주잔",
			variable: "shotglass",
			post: 0,
			description: "술이다.",
		},	
		{
			index: 24,
			name: "wine glass",
			name_ko: "와인잔",
			variable: "wine",
			post: 0,
			description: "술이다.",
		},	
		{
			index: 25,
			name: "torch",
			name_ko: "횃불",
			variable: "torch",
			post: 2,
			description: "불타올라라, 베이비, 불타올라라.",
		},	
		{
			index: 26,
			name: "gym bag",
			name_ko: "체육복 가방",
			variable: "gymbag",
			post: 0,
			description: "교과서를 들고 다닐 때 유용하다, 교과서에서 체육복 양말 냄새가 나는 것을 신경쓰지 않는다면.",
		},	
		{
			index: 27,
			name: "cup of tea",
			name_ko: "홍차컵",
			variable: "tea",
			post: 0,
			description: "뜨겁다, 왜냐하면 아이스 티는 교양없는 자들이나 마시는 것이기 때문에.",
		},	
		{
			index: 28,
			name: "cup of coffee",
			name_ko: "커피컵",
			variable: "coffee",
			post: 0,
			description: "뜨겁다.",
		},	
		{
			index: 29,
			name: "forkful of salad",
			name_ko: "포크로 찍어놓은 샐러드",
			variable: "salad",
			post: 1,
			description: "토끼 밥이다.",
		},	
		{
			index: 30,
			name: "forkful of pancake",
			name_ko: "포크로 찍어놓은 팬케이크",
			variable: "pancake",
			post: 1,
			description: "시럽이 듬뿍 발라져 있다.",
		},	
		{
			index: 31,
			name: "forkful of pasta",
			name_ko: "포크로 찍어놓은 파스타",
			variable: "pasta",
			post: 1,
			description: "엄마가 집에 와서 스파게티를 만들어 줬을 때 필요하다. 당신에게 엄마가 있다면.",
		},	
		{
			index: 32,
			name: "fork",
			name_ko: "포크",
			variable: "fork",
			post: 1,
			description: "식기다.",
		},	
		{
			index: 33,
			name: "spoon",
			name_ko: "숟가락",
			variable: "spoon",
			post: 0,
			description: "식기다.",
		},	
		{
			index: 34,
			name: "cream bun",
			name_ko: "크림빵",
			variable: "cream bun",
			post: 0,
			description: "음란한 액체로 더럽혀지지 않았다. 아마도.",
		},	
	];
}
window.init_trHandheld = init_trHandheld;