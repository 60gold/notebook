import { createStore } from 'vuex'

export default createStore({
  state: {
    idCount: 5,
    newNote: '',
    noteId: null,
    note: {
      id: null,
      time: null,
      title: null,
      content: null,
      src: null,
      fav: null,
    },
    notes: [
      {
        id: 0,
        time: '2021-08-05 14:09:20',
        title: '斷了生路的女公關們如何謀生？',
        content: '#武漢肺炎#酒店#酒店小姐\n酒店女公關確診後，連帶追蹤到123位相關接觸者，經採檢結果為零感染，指揮中心也順勢在4月22日宣布結案。\n但酒店等陪侍業場所持續被停業，風聲鶴唳下，相關的從業人員透露，該行已被迫走入地下化；徵求傳播外派、私接工作在臉書「八大同業社團」大量曝光，另一邊也有公關小姐發起連署自救，呼籲政府儘速恢復工作權。\n\n酒店無限期停業　小姐成受災戶\n「頂多還可以再撐一、兩個月，但如果再沒有工作，就要吃土了。」\n26歲酒店女公關明明(化名)，四年前從南邊城市北上酒店工作、存錢，最近搬家，租金加押金剛付了兩萬多元出去，當知道全國酒店被勒令停業時，她覺得自己是第一線受災戶。\n明明說，基於某些原因讓她選擇在酒店擔任女公關，入行尚稱資淺的她「工作很拚」，有時候一天的工時會超過12小時。在明明看來，酒店這行計算收入的方式，也有點像外頭排班的計程車跳表收費：她們晚間9點上班打卡，進來後先坐在休息室休息，當被客人點檯、進入包廂才開始算錢。\n4月8日北部酒店女公關確診感染新冠病毒，隔天全台酒店、舞廳等陪侍行業被下令無限期停業。\n明明和她的經紀人芸芸(化名)都覺得疫情指揮中心命令來得太突然，宣布停業當下，她上班的那家酒店連會計出納都無法上班，當週6日到8日前三天的薪水被延遲發放，上一週薪水也暫時沒進帳，經濟壓力瞬間倍增。',
        src: 'https://server.newslab.pts.org.tw/uploads/News/202/5ea9234475861.jpg',
        fav: false,
      },
      {
        id: 1,
        time: '2021-08-12 19:20:20',
        title: '我們是手遊玩家》關鍵少數？手遊世界裡的女玩家',
        content: '#手遊#課金#女性玩家\n過去，電子遊戲往往給予大家一種「男性主導」、「只有男生在玩」的刻板印象；但近年來女性玩家族群有擴張之勢，日本也出現了首位女性職業電競選手——ChocoBlanka。在台灣，也有不少女性玩家投入手遊世界，她們的戰力比起男性，毫不遜色。\n女性在遊戲玩家性別比例上，越來越接近男性：根據荷蘭遊戲產業市場調查公司Newzoo在2019年公布的報告，預估女性玩家在全球將突破10億人，占總數的46%。在台灣，據資策會的調查，女性玩家喜愛的遊戲類型前3名分別是：益智解謎、經營模擬、互動養成。\n\n開話題不尷尬 捨交友軟體拓社交圈\n「交友App很尷尬，say完hi，然後就不知道講什麼了。」\n20多歲的小龜，是一位課後班老師，她每天花4到5個小時玩手遊。喜歡在遊戲裡跟其他玩家互動的她坦言，「手遊比交友App好用多了！」\n半年前，小龜因為朋友推薦開始接觸某款手遊，從此被遊戲裡的組織戰、競技系統所吸引，玩手遊就成為了每天生活的「日常任務」。但每天花4到5小時滑手機玩遊戲，不會覺得累嗎？\n「不會，因為除了玩遊戲，也會跟別人聊天。」有使用交友App經驗的小龜認為，交友app雖然可以「速配」，但沒有共同話題，或為了找話題聊，常常成為雙方無法更進一步的困難點。然而，手遊玩家從遊戲這個話題開始，相識時間久了，也會聊生活上的小事，就不會那麼尷尬。',
        src: null,
        fav: false,
      },
      {
        id: 2,
        time: '2021-08-20 09:40:20',
        title: '誰改寫台灣鳳梨出口市場？解讀台灣鳳梨關鍵數字',
        content: '入春後的三月天，正逢南台灣鳳梨盛產期，不過中國在2月26日以「屢次檢出介殼蟲」為由，3月1日起暫停進口台灣鳳梨。每年約有4萬到5萬公噸的鳳梨銷往中國，其出口占全台年產量一成，鳳梨瞬間無處可售。主責機關農委會祭出十億元穩定價格，府院高層號召國人一起吃鳳梨，台灣民眾也自發「用新台幣下架鳳梨」行動，力挺果農。\n\n哪些國家買台灣鳳梨？\n入春後的三月天，正逢南台灣鳳梨盛產期，不過中國在2月26日以「屢次檢出介殼蟲」為由，3月1日起暫停進口台灣鳳梨。\n根據農委會貿易統計，2008年日本仍是台灣鳳梨出口的主要市場，外銷占比接近出口總量的8成，中國排名第二，但占比不到一成。2009年後中國市場迅速擴大，到了2011年更一舉超越日本市場，成為台灣鳳梨主要輸出國。\n近三年台灣鳳梨年產43萬公噸，約有一成做出口外銷，2017年到2019年中國占台灣鳳梨外銷市場的的97%，居次的日本僅佔2%，銷往香港、新加坡、澳門泰國等地的生鮮鳳梨每年只有幾百公噸，占比不到1%。\n也就是說這時中國不僅是最大的外銷去處，更幾乎可說是一國獨大、壟斷台灣鳳梨的出路。',
        src: 'https://server.newslab.pts.org.tw/uploads/News/329/603f44e665991.jpg',
        fav: false,
      },
      {
        id: 3,
        time: '2021-08-21 08:13:20',
        title: '懶人包》三倍券看這！振興三倍券 + 安心旅遊方案',
        content: '本週二（7）就是三倍券首波預購的最後一天。根據經濟部今（6）早統計，預購總人數為652萬1580人。其中紙本實體券有528萬8246人約佔八成，數位綁定約兩成。\n\n振興三倍券 人人都有嗎？\n簡單來說，您是中華民國的國民一定有，以及有居留權的配偶當然也可有。還有歸化為我國國籍的外國人士，可以拿居留證領取。而中低收入的朋友辛苦了，政府會直接將一千元匯入您的戶頭，依您的需求選擇使用紙本或數位三倍券。\n\n紙本、數位三倍券 docchi？\n小編看了這麼多紙本、數位三倍券的綁定網站，只能幫網友分析出一個真理，就是事先選好你要消費的目標（不要報復性消費啊！）。像是小編想要去南部旅遊，事先查好飯店有沒有針對三倍券加碼，是不是一定要用紙本三倍券。\n還有如果您常交易的商家不能刷卡和使用電子支付，就必須使用紙本券，部分夜市、餐廳針對實體三倍券另推出加碼優惠，像是北市寧夏夜市一桌22道菜的千歲宴只要3000元、個人消費滿3千送提鍋，桃園市用200元三倍券可換400元桃園夜市券等。\n\n三倍券消費還有限制？\n基本上實體店家購買服務，都是可以使用三倍券，但是不可以拿來買線上購物還有股票、水電費、罰金罰鍰、健保費、稅捐、行政規費與儲值交易都是不行的。很多網友敲碗詢問app叫計程車、訂國內機票、台鐵、高鐵，這些服務都是使用和累積三倍券消費的。但不要忘記三倍券是不找零的唷，消費者不能強迫店家找零。',
        src: null,
        fav: true,
      },
      {
        id: 4,
        time: '2021-08-21 10:12:24',
        title: '台北電影節看迷因史─被賜死的佩佩蛙',
        content: '#台北電影節#佩佩蛙\n如果用劍橋辭典去查迷因（meme）這個詞，會得到兩個意思：在不受基因影響的情況，隔代流傳的文化特徵或特定行為；或是在網路上迅速傳播的概念（包括圖像、影片等）。誕生於2005年佩佩蛙（Pepe the frog）無疑是第二種。\n\n一句無厘頭的話 「魯蛇」佩佩蛙爆紅\n接著佩佩蛙在美國4chan貼圖討論板出現各種二創，除了覺得很好蛙、悲傷蛙、魯蛇（Loser）蛙以外，更有人教如何畫佩佩蛙的妝容。連美國流行歌手凱蒂・佩芮、妮姬・米娜都曾帶領話題推波助瀾。\n\n「感覺不錯蛙」到「恐怖分子蛙」\n不過在不斷被改造的過程中，有佩佩蛙駕駛飛機撞向美國雙子星大廈、它更跑到伊斯蘭國斬首俘虜，2015年川普蛙的出現，讓佩佩蛙的人生徹底失控，它踏足政治，成為川普和希拉蕊唇槍舌戰的素材。\n接著，佩佩蛙突然又成為白人種族主義、右翼組織、納粹的象徵。看著佩佩蛙越走越歪，就像一個恐怖分子，還被NGO列為種族仇視圖形，作者在2017年忍痛將悲傷的佩佩蛙賜死，得年12歲，當時各大媒體還大篇幅報導佩佩蛙的葬禮。\n佩佩蛙的作者麥特・弗里（Matt Furie）為了幫佩佩蛙平反，2018年控訴右翼組織在未獲得授權下，擅自使用佩佩蛙的圖樣，試圖為12歲的佩佩蛙洗刷罪名。\n「鄉民惡搞佩佩蛙梗圖有錯嗎？」麥特・弗里回答：「如果貼文寫『殺猶太人片甲不留』就有。」',
        src: 'https://server.newslab.pts.org.tw/uploads/News/234/5ef17ba1624be.png',
        fav: false,
      },
      {
        id: 5,
        time: '2021-08-22 16:30:24',
        title: '奶茶聯盟 台港泰緬如何歃「奶茶」為盟',
        content: '2021年4月8日，推特官方帳號推出#MilkTeaAlliance專屬符號，紀念奶茶聯盟組成一周年。推特官方表示，「#MilkTeaAlliance從迷因，發展為全球民主運動。」過去一年，在推特上共有超過1100萬條發文帶有#MilkTeaAlliance標籤，且在這一波緬甸政變中，再一次達到顛峰。\n奶茶聯盟取名自台灣、泰國、香港的特色飲品，藉以代表共同對抗極權的決心，而這一切源自於一位泰國影星引發的中泰網路戰。\n\n茶香奶香加煉乳，在國境尚未封鎖前，每當入境泰國，你是否也急著在街頭找尋手標泰奶；在香港反送中爆發前，你是否也曾列隊中環蘭芳園小攤前，飲一杯絲襪奶茶。但不管如何，當飛機降落，步行在台灣街頭，還是會忍不住買杯微糖微冰的珍珠奶茶一解鄉愁。\n2020年中，奶茶一躍成為亞洲反極權的象徵，台灣、泰國、香港網友以「#奶茶聯盟 」為號召，共同對抗中共勢力——10月的泰國學運，#MilkTeaAlliance反覆出現在社群平台上，這股勢力逐漸蔓延到亞洲其他國家，近期緬甸政變，推特上的相關貼文也都打上#MilkTeaAlliance的hashtag，奶茶聯盟儼然成為反極權的代名詞。\n2021年4月8日，推特官方帳號推出#MilkTeaAlliance專屬符號，紀念奶茶聯盟組成一周年。只要在推文中以中、英、泰文等打出奶茶聯盟標籤，就會出現以三種茶色設計而成的奶茶符號。推特表示，「#MilkTeaAlliance從迷因，發展為全球民主運動。」過去一年共有超過一千一百萬條推文帶有#MilkTeaAlliance，且在這一波緬甸政變中，再一次達到顛峰。\n\n2021年4月8日，推特官方帳號推出#MilkTeaAlliance專屬符號，紀念奶茶聯盟組成一周年。只要在推文中以中、英、泰文等打出奶茶聯盟標籤，就會出現以三種茶色設計而成的奶茶符號。',
        src: 'https://server.newslab.pts.org.tw/uploads/News/345/606fc7774ca62.jpg',
        fav: true,
      },
    ],
    onNotebookPage: true,
    onContentPage: false,
    onAddPage: false,
    onFavoritePage: false,
    onOpenMenu: false,
  },
  getters: {
    reverseNote(state) {
      return state.notes.reverse();
    }
  },
  mutations: {
    recordId(state, id) {
      state.noteId = id;
    },
    recordSrc(state, id) {
      state.note.src = id;
    },
    isFavorite(state) {
      state.notes[state.noteId].fav = !state.notes[state.noteId].fav;
    },
    isOpenMenu(state) {
      state.onOpenMenu = !state.onOpenMenu;
    },
    clearNoteId(state) {
      state.noteId = null;
    },
    clearNote(state) {
      state.note = {
        id: null,
        time: null,
        title: null,
        content: null,
        src: null,
        fav: null,
      };
    },
    loadNote(state) {
      state.note = Object.assign({}, state.notes[state.noteId]);
    },
    finishNote(state) {
      var Today = new Date();
      let newNote = {
        id: ++state.idCount,
        time: Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate() + '  ' + Today.getHours() + ':' + Today.getMinutes() + 1 + ':' + Today.getSeconds(),
        title: state.note.title,
        content: state.note.content,
        src: state.note.src,
        fav: false,
      };
      state.notes.push(newNote);
      // state.notes[state.noteId] = Object.assign({}, state.note);
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1);
    },
    theNotebook(state) {
      state.onContentPage = false;
      state.onAddPage = false;
      state.onFavoritePage = false;
      state.onNotebookPage = true;
    },
    theContentPage(state) {
      state.onNotebookPage = false;
      state.onAddPage = false;
      state.onFavoritePage = false;
      state.onContentPage = true;
    },
    theAddPage(state) {
      state.onNotebookPage = false;
      state.onContentPage = false;
      state.onFavoritePage = false;
      state.onAddPage = true;
    },
    theFavoritePage(state) {
      state.onNotebookPage = false;
      state.onContentPage = false;
      state.onAddPage = false;
      state.onFavoritePage = true;
    },
    closeHeaderMenu() {
      var menu = document.getElementById("switch");
      if (menu.checked == true) {
        menu.checked = false;
      }
    },
  },
  actions: {
  },
  modules: {
  },
})
