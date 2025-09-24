<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-6">ハワイのおすすめスポット</h2>
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
          @click="$router.push('/HawaiiPlan')" 
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
          title: "ワイキキビーチ（オアフ島）",
          img: "https://t3.ftcdn.net/jpg/03/51/76/44/240_F_351764488_Q6NeydEECsXZ07DNKRGJMA1bIro4TdAj.jpg",
          text: "ハワイを代表する観光名所で、白い砂浜と青い海が広がる美しいビーチです。サーフィンや海水浴、日光浴を楽しめるほか、周辺にはショッピングモールやレストラン、カフェが立ち並び、観光の拠点としても便利です。夕暮れ時にはサンセットが美しく、写真映えも抜群。夜はライブやイベントも開催され、昼夜問わず楽しめる定番スポットです。",
        },
        {
          title: "ダイヤモンドヘッド（オアフ島）",
          img: "https://t3.ftcdn.net/jpg/12/78/94/58/240_F_1278945806_aiCbdv3mu1EKz0nU52I7qnx15xYAXCk8.jpg",
          text: "火山の噴火口で形成された絶景の山で、ハイキングで頂上まで登るとワイキキや太平洋を一望できます。朝日や夕日の時間帯は特に美しく、登山道も整備されているため初心者でも楽しめます。歴史的には砲台跡も残っており、自然だけでなく文化的な見どころも豊富。景色と運動を同時に楽しめる観光スポットです。",
        },
        {
          title: "パールハーバー（オアフ島）",
          img: "https://t4.ftcdn.net/jpg/07/51/97/69/240_F_751976941_ugbwTsWDwWsuonqpB8ZS6KJyZEotT04i.jpg",
          text: "第二次世界大戦の歴史を学べる記念館や戦艦ミズーリが展示されている施設で、歴史好きには外せない観光スポットです。展示や映画で真珠湾攻撃の経緯を学べるほか、戦艦や潜水艦の内部見学も可能。平和の象徴としても価値が高く、歴史や文化を深く理解できる場所です。",
        },
        {
          title: "ハナウマ湾（オアフ島）",
          img: "https://as1.ftcdn.net/v2/jpg/01/28/46/30/1000_F_128463048_yysdEmrYudvHKyInN0Jk5rwfr0wCa1aP.jpg",
          text: "自然保護区に指定された美しい湾で、シュノーケリングや海水浴に最適です。色とりどりの熱帯魚やサンゴ礁を間近で観察でき、家族連れやカップルにも人気。入場前に自然保護のためのビデオを見る必要がありますが、その分安心して海の生態系を体験できます。透き通った海と豊かな自然が魅力です。",
        },
        {
          title: "ハレアカラ国立公園（マウイ島）",
          img: "https://as2.ftcdn.net/v2/jpg/01/66/28/79/1000_F_166287904_16LjtxLOf0UjYx70U7GfVLabEqQ6om5g.jpg",
          text: "ハナまで続く絶景ドライブコースで、滝やジャングル、黒砂ビーチなど変化に富んだ景色が楽しめます。道中には絶景ポイントが点在し、ドライブだけでも観光体験として価値があります。ゆっくり停車しながら自然の迫力を堪能でき、フォトスポットも多く、写真撮影やピクニックにも最適です。",
        },
      {
          title: "アラモアナセンター（オアフ島）",
          img: "https://cdn.pixabay.com/photo/2022/07/23/16/05/shopping-mall-7340181_1280.jpg",
          text: "世界最大級のオープンエアショッピングモールで、ブランドショップからローカル店まで多彩な店舗が揃います。レストランやカフェも豊富で、ショッピングだけでなく食事や休憩も楽しめます。観光客向けの免税店やお土産店もあり、ハワイ旅行の定番スポットとして人気です。",
        },
        {
          title: "ロイヤル・ハワイアン・センター（オアフ島）",
          img: "https://tse2.mm.bing.net/th/id/OIP.Zo6jYWkyBXz15Jl9ABocWAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "ワイキキ中心部にある大型商業施設で、ショッピングやレストラン、文化体験が揃います。フラショーやウクレレ体験などのイベントもあり、ハワイらしい文化に触れながら買い物が楽しめます。観光拠点としても便利で、ワイキキ散策の合間に立ち寄れるスポットです。",
        },
        {
          title: "キラウエア火山（ハワイ島）",
          img: "https://t4.ftcdn.net/jpg/07/08/01/77/240_F_708017723_F5HvYkEmxWaGN9PZU50c4O2NT54VUGB5.jpg",
          text: "世界でも有数の活火山で、火山活動の迫力を間近で体感できます。溶岩台地や火口の景色は圧巻で、自然の力強さを実感できるスポットです。公園内にはハイキングコースや展望台も整備されており、安全に見学可能。昼間だけでなく、夜間に溶岩の赤い光を見るツアーも人気です。",
        },
        {
          title: "ポリネシアン・カルチャー・センター（オアフ島）",
          img: "https://t4.ftcdn.net/jpg/01/02/20/05/240_F_102200506_YVFb5K00tiQCcJCeWcLUnMv9Co2gQi5o.jpg",
          text: "ポリネシア文化を体験できるテーマパークで、伝統舞踊や工芸体験、カヌー体験、ショーなど多彩なアクティビティがあります。文化を楽しみながら学べる教育的要素もあり、家族連れやカップルに人気です。夕方のルアウ（ディナーショー）ではダンスと食事を同時に楽しめます。",
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