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
          @click="$router.push('/HokkaidoPlan')" 
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
          title: "札幌テレビ塔",
          img: "https://t4.ftcdn.net/jpg/01/20/55/67/240_F_120556749_oG8I7eFczWtCPm5w1fYIfp1NVm2cc1BG.jpg",
          text: "札幌市の中心、大通公園に立つ高さ147.2メートルの札幌テレビ塔は、北海道観光のシンボル的存在です。展望台からは四季折々の札幌市街を一望でき、冬の雪まつりや夜のライトアップは特に幻想的。周辺にはグルメやショッピングスポットも多く、観光の拠点として便利です。昼と夜で異なる景色を楽しめるのも魅力で、札幌を訪れたら外せない観光名所です。",
        },
        {
          title: "旭山動物園",
          img: "https://t3.ftcdn.net/jpg/02/49/79/86/240_F_249798621_AIcEvARXeJC8MDLRge1V8V620VpMOOSP.jpg",
          text: "旭川市にある旭山動物園は、日本最北の動物園として有名で、動物本来の姿を引き出す「行動展示」が人気です。ホッキョクグマの迫力ある水中遊泳や、冬季限定のペンギンの散歩は必見。間近で動物たちの生き生きとした姿を観察でき、子どもから大人まで楽しめます。四季ごとに異なる魅力があり、何度訪れても新しい発見がある北海道屈指の観光スポットです。",
        },
        {
          title: "富良野",
          img: "https://t4.ftcdn.net/jpg/02/91/38/97/240_F_291389777_cuGvQhUPXd7BC6vJd7L4pkKbjPoImTeF.jpg",
          text: "北海道のほぼ中央に位置する富良野・美瑛は、美しい自然と四季折々の風景が楽しめる人気エリアです。夏はラベンダー畑が一面紫に染まり絶景が広がり、秋には色鮮やかな丘陵地帯が広がります。幻想的な「青い池」や冬のスキーリゾートも見どころで、季節ごとに異なる魅力を満喫できます。ドラマやCMの舞台にもなったこの地は、北海道の自然美を象徴するスポットです。",
        },
        {
          title: "小樽運河",
          img: "https://t4.ftcdn.net/jpg/01/95/17/89/240_F_195178977_JfBSxjyf5IxEb3Z4oJe0g06m2xnfHU0R.jpg",
          text: "ノスタルジックな雰囲気漂う小樽運河は、歴史的建造物と石造り倉庫が並ぶ小樽観光の中心地です。日中は運河クルーズで街並みを眺め、夕暮れ時にはガス灯に照らされたロマンチックな景色が広がります。運河沿いにはガラス工房やオルゴール堂、海鮮グルメが楽しめる店も多く、散策にもぴったり。四季を通じて異なる表情を見せる小樽運河は、訪れる人々を魅了する人気スポットです。",
        },
        {
          title: "函館山夜景",
          img: "https://t3.ftcdn.net/jpg/02/47/15/38/240_F_247153858_zZpeghMOqmgLqWQU3dgG69eVj5I8bWBR.jpg",
          text: "函館山から望む夜景は「世界三大夜景」のひとつに数えられ、宝石を散りばめたような美しさで知られています。標高334メートルの山頂からは、津軽海峡と函館湾に挟まれた街並みが輝き、息をのむ光景が広がります。ロープウェイやバスで気軽にアクセスでき、昼間の眺望や夕暮れの移り変わりも絶景です。恋人たちのデートスポットとしても人気が高く、函館観光のハイライトとして外せません。",
        },
      {
          title: "知床五湖【世界遺産】",
          img: "https://t3.ftcdn.net/jpg/05/17/30/14/240_F_517301494_2kMbSG6oJIj7jHk44JQAbMx4VsjnuWXr.jpg",
          text: "世界自然遺産・知床に位置する知床五湖は、原生林に囲まれた神秘的な湖群です。遊歩道が整備されており、初心者でも大自然を満喫しながら散策できます。晴れた日には湖面に知床連山が映り込み、幻想的な光景が広がります。野生動物との遭遇も魅力のひとつで、運が良ければエゾシカやキタキツネに出会えることも。手つかずの自然に包まれる体験は、訪れる人に深い感動を与えてくれます。",
        },
        {
          title: "登別温泉",
          img: "https://t3.ftcdn.net/jpg/01/42/91/70/240_F_142917078_C08CP2SGi65aAmbLKxpLUNYkAkasCjfE.jpg",
          text: "北海道を代表する温泉地・登別温泉は、9種類もの泉質を持つ「温泉のデパート」と称されます。特に硫黄の香り漂う「地獄谷」は、噴煙や湯けむりが立ち上る迫力ある景観が魅力です。温泉街には多彩な宿泊施設や日帰り温泉がそろい、旅の疲れを癒すのに最適。四季折々の自然と温泉を同時に楽しめるため、国内外から多くの観光客が訪れます。心身ともにリフレッシュできる人気スポットです。",
        },
        {
          title: "大雪山旭岳",
          img: "https://t3.ftcdn.net/jpg/05/35/99/48/240_F_535994823_VP2IlM6lvpdqxN5GpLqJYKBFdlB1O4Af.jpg",
          text: "北海道の屋根とも呼ばれる大雪山連峰の主峰・旭岳は、標高2,291メートルを誇る名峰です。ロープウェイで標高1,600メートル付近まで一気に上がれるため、気軽に雄大な自然を体感できます。夏は高山植物が咲き誇り、秋には日本一早い紅葉を楽しめるのが特徴。冬はスキーリゾートとしても人気で、パウダースノーを求める旅行者で賑わいます。四季を通じて大自然の魅力を感じられる場所です。",
        },
        {
          title: "摩周湖",
          img: "https://t3.ftcdn.net/jpg/04/72/34/18/240_F_472341866_JXdVNDawTMnygqke31PcHBMJojS5jVmn.jpg",
          text: "「霧の摩周湖」として知られる摩周湖は、透明度の高さと神秘的な美しさで有名です。周囲を外輪山に囲まれ、晴れた日には摩周ブルーと呼ばれる澄んだ湖面が広がります。一方で、霧に包まれる幻想的な光景も人気で、訪れるたびに異なる表情を楽しめます。湖畔には展望台が整備されており、気軽に絶景を眺められるのも魅力。北海道を代表する神秘的な観光スポットとして、多くの人を惹きつけています。",
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