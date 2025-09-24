<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-6">沖縄のおすすめスポット</h2>
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
          @click="$router.push('/OkinawaPlan')" 
        >
          2泊3日のモデルプラン
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
          title: "首里城【世界遺産】",
          img: "https://t3.ftcdn.net/jpg/02/52/56/78/240_F_252567805_AudTLX4jSwGaoU3Nfhd6E5klES1e3Ow4.jpg",
          text: "琉球王国の象徴である首里城は、朱色の城壁や美しい庭園が魅力の歴史スポットです。復元された建物内では王国時代の生活や儀式の様子が展示され、写真スポットも多数あります。首里城公園内の資料館では琉球文化や歴史を学ぶことができ、四季折々の景色とともに城下町の雰囲気を楽しめます。観光や歴史散策に最適で、沖縄旅行の定番観光地として多くの観光客が訪れます。",
        },
        {
          title: "美ら海水族館",
          img: "https://t4.ftcdn.net/jpg/15/02/60/77/360_F_1502607737_3trdG1U2DxvXzJ0LzV59PEYWG8s4jA4e.jpg",
          text: "巨大水槽でジンベエザメやマンタの泳ぐ姿を間近で観察できる人気施設です。沖縄の海の生態系を学べる展示が充実し、子どもから大人まで楽しめます。周辺の海洋博公園では散策やビーチ体験も可能で、イルカショーやタッチプールなど体験型コンテンツも豊富。家族連れやカップルにおすすめの一日観光スポットです。",
        },
        {
          title: "国際通り",
          img: "https://t3.ftcdn.net/jpg/05/20/82/38/240_F_520823854_i5lrQq6zvZByQv2FBfLUzbB6iwGjy5bT.jpg",
          text: "那覇市中心部の繁華街で、土産物店や飲食店が立ち並び、沖縄文化やグルメを一度に体験できます。伝統工芸品や沖縄そば、泡盛などを購入でき、夜はライブ演奏や屋台も賑わいます。歩くだけでも楽しく、地元の人々や観光客で活気があり、食べ歩きやショッピング、文化体験まで幅広く楽しめる沖縄の定番スポットです。",
        },
        {
          title: "古宇利島",
          img: "https://t4.ftcdn.net/jpg/02/21/39/19/240_F_221391960_s5LIrZkS5rfHiBrvU7l22kiEaZ65yqzg.jpg",
          text: "透明度の高い海と白い砂浜が魅力の小島で、恋の島としても知られています。古宇利大橋からの絶景ドライブやシュノーケリング、海水浴が楽しめ、自然の美しさを満喫できます。写真映えする景観で観光やデートに人気。散策や海風を感じながらリフレッシュするのに最適なスポットです。",
        },
        {
          title: "万座毛",
          img: "https://t3.ftcdn.net/jpg/03/28/61/86/240_F_328618697_Rqro93Hs06J5Z6wetQHybkZzM39BF4tX.jpg",
          text: "象の鼻の形をした断崖と広がる青い海が特徴の絶景スポットです。太平洋を一望でき、特に夕日は空と海が美しく染まり観光客に人気。自然の雄大さを感じながら散策でき、写真撮影やのんびり散歩にも最適です。周囲の緑や岩場とのコントラストも美しく、沖縄らしい景観を堪能できるおすすめスポットです。",
        },
      {
          title: "斎場御嶽【世界遺産】",
          img: "https://t3.ftcdn.net/jpg/03/28/61/78/240_F_328617811_IoNqYZdbtOwh5KDNFfVFAcuAHMuwqaEz.jpg",
          text: "琉球王国最高の聖地で、自然と調和した神聖な雰囲気が魅力です。古代から続く祈りの場で、石門や祭祀跡を見学でき、琉球の宗教文化を体感できます。観光ガイドの解説を聞くことで歴史や信仰の意味も理解でき、神秘的な空間の中で静かに散策できます。世界遺産としても価値が高く、貴重な体験ができるスポットです。",
        },
        {
          title: "万座ビーチ",
          img: "https://t3.ftcdn.net/jpg/04/65/88/86/240_F_465888691_EWUeLEHLssc3QYelfKgnuiG0z5KQntlQ.jpg",
          text: "白い砂浜とエメラルドグリーンの海が広がるビーチで、シュノーケリングやマリンスポーツが楽しめます。リゾートホテルも近く、のんびり海辺で過ごしたり、写真撮影をしたりするのに最適です。家族連れやカップルに人気で、透明度の高い海や波の音を感じながら沖縄の美しい海を満喫できます。周辺の自然景観も豊かでリゾート気分を味わえます。",
        },
        {
          title: "瀬長島ウミカジテラス",
          img: "https://t3.ftcdn.net/jpg/04/14/57/30/240_F_414573035_O6D77m1tm0umobF2A6EniPJQrFiVlcz0.jpg",
          text: "海沿いに立つカフェやショップが集まる複合施設で、絶景を眺めながら食事や買い物が楽しめます。夕日は特に美しく、フォトジェニックなスポットも多くカップルに人気。散策しながらおしゃれな空間でリラックスでき、地元グルメや手作り雑貨も体験可能。海風に吹かれながらのんびり過ごす贅沢な時間が楽しめます。",
        },
        {
          title: "残波岬",
          img: "https://t4.ftcdn.net/jpg/03/63/41/07/240_F_363410703_4I36MVWHwvAkNRqBf5lBzu3KMvm4Vc2P.jpg",
          text: "断崖絶壁から太平洋の雄大な景色を望める岬で、灯台周辺の散策路も整備されています。四季折々の海景色を楽しめ、朝日や夕日も美しく、写真撮影やハイキングに最適です。自然の迫力を満喫でき、観光客だけでなく地元の人々にも親しまれる静かなスポットで、沖縄の海と自然を身近に感じられます。",
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