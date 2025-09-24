<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-6">大阪のおすすめスポット</h2>
      </v-col>

     <v-col
      v-for="(spot, index) in selectedSpots"
      :key="index"
      cols="12"
      md="4"
    >
      <v-card class="mx-auto" max-width="344" outlined>
        <v-img :src="spot.img" height="200px" />
        <v-card-title>{{ spot.title }}</v-card-title>
        <v-card-text>{{ spot.text }}</v-card-text>
      </v-card>
    </v-col>
<v-col cols="12" class="text-center mt-8">
        <v-btn
          color="primary"
          large
          rounded
          @click="$router.push('/OsakaPlan')" 
        >
          1泊2日のモデルプラン
        </v-btn>
      </v-col>
       

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      spots: [
        {
          title: "大阪城",
          img: "https://t4.ftcdn.net/jpg/02/64/30/87/240_F_264308766_9LPiZWazBnUFCOZ4nntQ6Xo1U4wGXrvW.jpg",
          text: "豊臣秀吉によって築かれた大阪城は、大阪を代表する歴史的名所です。現在の天守閣は博物館となっており、豊臣氏や戦国時代の資料が展示されています。展望台からは大阪市街を一望でき、春は桜の名所としても有名です。広大な大阪城公園は市民の憩いの場で、四季折々の自然が楽しめます。歴史と文化、自然を同時に感じられる大阪観光の王道スポットです。",
        },
        {
          title: "道頓堀",
          img: "https://t4.ftcdn.net/jpg/03/56/32/99/240_F_356329969_ojJcbQvbIuzSW0m4hv8AHnG83Lo2ddxI.jpg",
          text: "大阪ミナミの中心・道頓堀は、グリコの看板やカニ道楽などネオンきらめく街並みで有名です。たこ焼きやお好み焼きなど大阪グルメの食べ歩きも楽しめ、観光客で常に賑わいます。戎橋から眺める道頓堀川の景観も名物で、夜にはより華やかな雰囲気に。買い物やエンタメも充実しており、大阪らしい活気を味わえる場所として国内外の旅行者に人気です。",
        },
        {
          title: "ユニバーサル・スタジオ・ジャパン（USJ）",
          img: "https://t4.ftcdn.net/jpg/03/07/26/97/240_F_307269738_zkf4fNfMIEdKeQcrnDTxGHbNRV7IPv8F.jpg",
          text: "大阪湾沿いに位置するUSJは、日本を代表するテーマパークの一つです。ハリー・ポッターやマリオ、スパイダーマンなど世界的な映画やゲームを題材にしたアトラクションが豊富で、大人から子どもまで楽しめます。シーズンごとのショーやパレードも大人気で、一日中遊んでも飽きません。関西観光の目玉スポットとして、国内外から年間を通じて多くの人が訪れています。",
        },
        {
          title: "通天閣・新世界",
          img: "https://t3.ftcdn.net/jpg/06/02/10/22/240_F_602102270_TjgTZxb3WFdJ2Bqaa7PUndPDBbKkR0gF.jpg",
          text: "大阪のシンボル・通天閣は、昭和レトロな雰囲気が残る新世界エリアにそびえる展望塔です。展望台からは大阪の街並みを一望でき、幸運の神様「ビリケンさん」に願いをかけるのも定番。周辺には串カツの名店が立ち並び、食べ歩きも楽しめます。昔懐かしい雰囲気と庶民的な活気を味わえる新世界は、大阪らしさを感じられる観光地として根強い人気を誇ります。",
        },
        {
          title: "海遊館",
          img: "https://t4.ftcdn.net/jpg/07/85/36/31/240_F_785363114_7ldlxx5nfc7R595mxN9LxM1ufb2fobuu.jpg",
          text: "世界最大級の水族館・海遊館は、大阪港に位置する人気スポットです。太平洋をテーマにした巨大な水槽ではジンベエザメが悠々と泳ぎ、迫力ある姿を間近で観察できます。イルカやアシカ、ペンギンなど多彩な生き物との出会いも魅力で、子どもから大人まで楽しめます。昼と夜で雰囲気が変わる展示演出も好評。隣接する天保山マーケットプレースと合わせて一日遊べる場所です。",
        },
      {
          title: "天王寺動物園・天王寺公園",
          img: "https://t3.ftcdn.net/jpg/00/96/43/58/240_F_96435813_WoYPZx8JuNIUE245QRqIczuEQJiEhei3.jpg",
          text: "天王寺にある天王寺動物園は、1915年に開園した歴史ある都市型動物園です。約200種の動物を飼育しており、キリンやライオンなど人気の動物を間近に観察できます。隣接する天王寺公園「てんしば」は広大な芝生広場で、のんびり過ごすのに最適。家族連れやカップルに人気のエリアで、動物園と公園を一緒に楽しめるのが魅力です。大阪の中心で自然と触れ合える貴重な場所です。",
        },
        {
          title: "大阪天満宮・天神橋筋商店街",
          img: "https://t3.ftcdn.net/jpg/03/39/06/52/240_F_339065231_rYeZInQGaHmocHDnvMtzUKhr5oKtpAmW.jpg",
          text: "学問の神様を祀る大阪天満宮は、受験生や観光客で賑わう由緒ある神社です。毎年夏に開催される「天神祭」は日本三大祭りのひとつとして有名で、大川で行われる船渡御や花火大会は圧巻です。周辺には日本一長い商店街「天神橋筋商店街」があり、食べ歩きや買い物を満喫できます。歴史と文化、庶民的な賑わいが共存するエリアで、大阪らしい魅力を感じられるスポットです。",
        },
        {
          title: "梅田スカイビル・空中庭園展望台",
          img: "https://t3.ftcdn.net/jpg/06/01/70/08/240_F_601700864_DhyuA14PM3FuVvyTQF3Kp4S3lob36k88.jpg",
          text: "梅田スカイビルは、地上173メートルの高さにある空中庭園展望台が人気の近代的ランドマークです。360度ガラス張りの展望フロアからは大阪市街を一望でき、特に夜景は圧巻。梅田エリアの高層ビル群や遠くの山並みまで見渡せます。下層階には映画館や飲食店も併設され、観光と娯楽が楽しめる複合施設です。梅田観光の目玉として国内外から多くの人が訪れています。",
        },
        {
          title: "住吉大社",
          img: "https://t3.ftcdn.net/jpg/04/64/34/70/240_F_464347065_TZ1G3vycvFn3gSRPJeS6t6TgtDPZNeSs.jpg",
          text: "全国に約2,000社ある住吉神社の総本社である住吉大社は、大阪を代表する由緒ある神社です。航海安全や厄除けのご利益で知られ、初詣には毎年200万人以上が訪れます。反橋（そりばし）と呼ばれる太鼓橋は特に有名で、絵になる風景として人気です。四季折々の行事や祭りも魅力で、歴史と伝統を感じられる場所。大阪観光の際に立ち寄りたい神聖なスポットです。",
        },
        {
          title: "あべのハルカス",
          img: "https://t4.ftcdn.net/jpg/02/95/76/15/240_F_295761599_xrTKPcLun6WcK71ah8VZcz6jmgZ4QKLE.jpg",
          text: "日本一の高さを誇る超高層ビル「あべのハルカス」は、地上300メートルの展望台「ハルカス300」からの眺望が魅力です。大阪市街や大阪湾、遠くは神戸や奈良まで一望できます。館内には百貨店、美術館、ホテルが揃い、ショッピングから文化体験まで楽しめる複合施設です。昼と夜で異なる景色を見比べるのもおすすめ。大阪の新しいランドマークとして人気急上昇中の観光名所です。",
        },

      ],
      selectedSpots: [],
    };
  },
  created() {
    this.shuffleSpots();
  },
methods: {
  shuffleSpots() {
    let spotsCopy = [...this.spots];
    this.selectedSpots = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * spotsCopy.length);
      this.selectedSpots.push(spotsCopy[index]);
      spotsCopy.splice(index, 1);
    }
  }
}


};
</script>