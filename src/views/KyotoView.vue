<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-6">北海道のおすすめスポット</h2>
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
          @click="$router.push('/KyotoPlan')" 
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
          title: "清水寺【世界遺産】",
          img: "https://t4.ftcdn.net/jpg/05/81/75/39/240_F_581753927_kTY438TFtIM8b5TqsQKflFjySIEEPxnV.jpg",
          text: "京都を代表する世界遺産・清水寺は、778年創建の歴史ある寺院です。「清水の舞台」と呼ばれる本堂の舞台からは、京都市街を一望でき、四季折々の景観が楽しめます。春の桜、秋の紅葉、冬の雪景色など、どの季節も魅力的です。境内には音羽の滝や地主神社もあり、恋愛成就や開運のご利益を求めて多くの参拝者が訪れます。京都観光で必ず訪れたい人気スポットです。",
        },
        {
          title: "金閣寺（鹿苑寺）【世界遺産】",
          img: "https://t3.ftcdn.net/jpg/05/35/12/74/240_F_535127478_AnyH4M6K99qddw2OFtZ9RUVHf5creOun.jpg",
          text: "金閣寺は、足利義満が建立した北山文化を象徴する世界遺産です。舎利殿は金箔で覆われ、水面に映る姿は絢爛豪華でまさに京都を代表する景観です。庭園は四季折々の美しさを見せ、特に雪景色の金閣は幻想的。観光客に常に人気が高く、海外からも多くの人々が訪れます。歴史と美を兼ね備えた金閣寺は、京都旅行で欠かせない観光名所のひとつです。",
        },
        {
          title: "銀閣寺（慈照寺）【世界遺産】",
          img: "https://t4.ftcdn.net/jpg/03/14/60/49/240_F_314604936_qLFTogxqhMnagtMBF5KuOjN0r6LRAIpq.jpg",
          text: "足利義政が建立した銀閣寺は、わび・さびの美を体現する世界遺産です。金閣寺とは対照的に質素で落ち着いた雰囲気を持ち、東山文化の象徴とされています。白砂が美しい「銀沙灘」や「向月台」、苔むした庭園は静寂に包まれ、訪れる人を魅了します。哲学の道への散策コースとしても人気があり、心を落ち着けたい人におすすめの京都屈指の名所です。",
        },
        {
          title: "伏見稲荷大社",
          img: "https://t3.ftcdn.net/jpg/00/74/21/72/240_F_74217295_JZkamicePd857d48m7K1pLBtdSHn56tE.jpg",
          text: "全国に約3万社ある稲荷神社の総本宮である伏見稲荷大社は、商売繁盛や五穀豊穣の神様を祀っています。特に有名なのは「千本鳥居」で、朱色の鳥居が延々と続く光景は圧巻です。境内から稲荷山にかけて参道が整備され、ハイキング感覚で登拝できます。国内外の観光客に大人気で、インスタ映えスポットとしても注目されています。京都観光で外せない神社です。",
        },
        {
          title: "嵐山・渡月橋",
          img: "https://t3.ftcdn.net/jpg/01/34/41/36/240_F_134413604_cBrItiTkYi9wcNl9cL5Ff6fEicE1LSFo.jpg",
          text: "嵐山は、自然と歴史が調和した京都西部の観光名所です。桂川にかかる渡月橋は四季折々に美しい景観を見せ、桜や紅葉の季節には特に多くの観光客で賑わいます。竹林の小径や天龍寺など見どころも豊富で、和の情緒を存分に感じられます。保津川下りやトロッコ列車も楽しめ、自然と文化を一度に体感できるエリアとして国内外から高い人気を集めています。",
        },
      {
          title: "祇園・花見小路",
          img: "https://t3.ftcdn.net/jpg/04/80/56/76/240_F_480567625_tbnEJVEjm39YrQqs9F3a2wT0tLtPVCcT.jpg",
          text: "京都随一の花街・祇園は、石畳の道と伝統的な町家が並ぶ情緒あるエリアです。花見小路では、運が良ければ舞妓さんに出会えることも。夜になると料亭やお茶屋の灯りがともり、幻想的な雰囲気が漂います。八坂神社や建仁寺も近く、散策にも最適。伝統文化と京都らしい風情を体感できる場所として、国内外の観光客に常に人気のスポットです。",
        },
        {
          title: "二条城【世界遺産】",
          img: "https://t3.ftcdn.net/jpg/02/64/90/32/240_F_264903211_geRxIb4ESOy8GXasViHYkgKTypW7dIaA.jpg",
          text: "徳川家康が築城した世界遺産・二条城は、江戸幕府の始まりと終わりを見届けた歴史的建造物です。豪華な障壁画や「鶯張りの廊下」が見どころで、桃山文化の粋を堪能できます。庭園は四季折々の美しさを楽しめ、特に春の桜は有名です。歴史好きはもちろん、京都文化を学びたい人にとって必見のスポット。日本の歴史の転換点を感じられる貴重な場所です",
        },
        {
          title: "平等院鳳凰堂【世界遺産】",
          img: "https://t4.ftcdn.net/jpg/07/01/75/95/240_F_701759552_QQByma7YQrBDAUtUDJsTXqFI95BF7xci.jpg",
          text: "宇治市にある世界遺産・平等院鳳凰堂は、藤原頼通が建立した極楽浄土を表現した名建築です。10円硬貨の図柄としても知られ、その優美な姿は日本を代表する文化財のひとつ。阿弥陀如来像や雲中供養菩薩像など、貴重な仏教美術も鑑賞できます。周囲の庭園や宇治川の風景とともに、四季折々の美しさを堪能できる場所として人気を集めています。",
        },
        {
          title: "鴨川",
          img: "https://t4.ftcdn.net/jpg/00/64/94/23/240_F_64942335_gx7XhQlKTChcywsT0ajJck4L1Rp8102Y.jpg",
          text: "京都市街を流れる鴨川は、観光や市民の憩いの場として親しまれています。川沿いには散歩道が整備され、春は桜並木、夏は川床料理、秋は紅葉と、四季折々の風情を楽しめます。特に夕暮れ時は美しい景観が広がり、カップルや観光客に人気。三条・四条エリアからのアクセスも良く、買い物や食事と合わせて訪れるのに最適です。京都らしい風情を感じられる名所です。",
        },
        {
          title: "東寺【世界遺産】",
          img: "https://t4.ftcdn.net/jpg/05/70/85/23/360_F_570852345_SnmvZAxT9oNadnWpBaSmTUe7AUq7XD2i.jpg",
          text: "真言宗の総本山である東寺は、弘法大師空海ゆかりの世界遺産です。日本一の高さを誇る木造五重塔は、京都のシンボル的存在。境内には国宝や重要文化財が数多くあり、歴史と信仰を感じられる場所です。春には桜、秋には紅葉が美しく、ライトアップされた五重塔とともに幻想的な景色を楽しめます。京都観光の締めくくりにもふさわしい格式ある名所です。",
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