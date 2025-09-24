<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-6">韓国のおすすめスポット</h2>
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
          @click="$router.push('/KoreaPlan')" 
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
          title: "景福宮",
          img: "https://t4.ftcdn.net/jpg/01/30/17/73/240_F_130177363_4FIFgkj1SVmTwvC3jkZOX255Fhimjlxd.jpg",
          text: "朝鮮王朝の正宮で、壮大な建築と広大な庭園が魅力です。内部では王室の生活や儀式の展示もあり、衛兵交代式は観光客に人気の見どころ。伝統衣装チマチョゴリのレンタルで散策すれば、より雰囲気を楽しめます。四季折々の景観とともに歴史や文化を体感できるソウル定番スポットで、徒歩や地下鉄でのアクセスも便利です。",
        },
        {
          title: "昌徳宮",
          img: "https://t4.ftcdn.net/jpg/08/60/10/87/240_F_860108766_RhAJD0q7qnwNB6QoFnRnZy7RyUkwviKd.jpg",
          text: "ユネスコ世界遺産に登録された王宮で、美しい庭園と歴史的建築が見どころ。内部ガイドツアーに参加すると、庭園や建物の歴史的意味を深く理解できます。春は花、秋は紅葉が美しく、静かに散策可能です。景福宮や北村韓屋村からも近く、歴史と自然の両方を楽しめるソウル観光の重要スポットです。",
        },
        {
          title: "北村韓屋村",
          img: "https://t4.ftcdn.net/jpg/02/80/73/85/240_F_280738568_k7JqTLKTqKYYyZpAq6RmxTNUxoT9O7Zy.jpg",
          text: "伝統的な韓屋が立ち並ぶ歴史的街並み。細い路地を散策しながら昔ながらの家屋や庭園を眺められ、カフェや工芸品店も点在しています。景福宮や昌徳宮の近くに位置し、歴史文化体験や写真撮影に最適です。観光客向けの体験プログラムもあり、韓国の伝統建築や生活文化を身近に感じられる人気スポットです。",
        },
        {
          title: "仁寺洞",
          img: "https://t4.ftcdn.net/jpg/02/81/14/37/240_F_281143767_skrwGTIAuGg10Q9sbyRgdJnBcAVVFKqx.jpg",
          text: "韓国の伝統工芸やアートを集めた文化街で、陶器や工芸品、伝統雑貨を購入できます。伝統茶屋やカフェも点在し、散策しながらゆったり文化体験が可能です。観光客向けのワークショップや展示もあり、韓国文化を学びつつ楽しめるスポットです。アクセスも便利で、ソウル市内観光ルートに組み込みやすい定番エリアです。",
        },
        {
          title: "南山タワー（Nソウルタワー）",
          img: "https://t4.ftcdn.net/jpg/16/80/00/01/240_F_1680000169_7i0YIXxKCeCJ4n6nT80JRYNQaPv1IK5F.jpg",
          text: "ソウル市街地を一望できる展望台で、昼夜問わず絶景を楽しめます。夜景は特に美しく、カップルの南京錠の儀式も人気。ケーブルカーやハイキングで山頂までアクセスでき、自然散策と観光を同時に楽しめます。周辺の南山公園も散策に適しており、家族連れやカップルにおすすめの定番スポットです。",
        },
      {
          title: "東大門デザインプラザ（DDP）",
          img: "https://t3.ftcdn.net/jpg/14/55/44/60/240_F_1455446051_ylO5HhOTzcrVJYZMu3VAmAlCnxIaQbhE.jpg",
          text: "近未来的な建築が特徴の文化複合施設で、展示会やイベント、夜市も楽しめます。ライトアップされた建物は写真映え抜群で、観光客にも人気です。ファッションやデザイン関連の展示が多く、現代韓国文化に触れることができるスポット。周辺はショッピング街や飲食店も多く、観光の拠点として便利です。",
        },
        {
          title: "南大門市場",
          img: "https://th.bing.com/th/id/OIP.RMJJBoFAbx_pr4lxwlaCWAHaFj?w=259&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
          text: "韓国最大の伝統市場で、衣料品や食べ歩きグルメ、土産物が揃います。観光客だけでなく地元の人も訪れる活気あるスポットで、韓国の生活文化や雰囲気を体感可能。屋台グルメやローカルフードも充実しており、安くて美味しい韓国料理を楽しみながら散策できる定番観光地です。",
        },
        {
          title: "弘大（ホンデ）エリア",
          img: "https://t4.ftcdn.net/jpg/15/13/09/23/240_F_1513092332_E2zqjzwFEFcqtI1EkbcGezsonG5ua2Qr.jpg",
          text: "若者文化の発信地で、ストリートパフォーマンスやカフェ、ショップが立ち並ぶエネルギッシュな街です。アートや音楽、夜のクラブ文化も楽しめ、自由に歩きながら韓国のトレンドを体験できます。アートギャラリーやライブハウスも点在し、昼夜問わず観光や散策が楽しめる人気スポットです。",
        },
        {
          title: "清渓川（チョンゲチョン）",
          img: "https://th.bing.com/th/id/OIP.XVNvX2lzRAAjrAuF9XafMwHaEK?w=324&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
          text: "ソウル中心を流れる復元された都市型川で、散策路や橋、アート作品が点在しています。夜はライトアップされ、都会の中でのんびり散歩や写真撮影が楽しめるスポット。歴史的背景も学べ、地元の人々の憩いの場としても利用される観光名所です。",
        },
        {
          title: "ロッテワールド",
          img: "https://t4.ftcdn.net/jpg/09/46/99/09/240_F_946990905_ysJwZMYruf13ZLKOwOjB55qjArT1qWWC.jpg",
          text: "ソウル市内にある大型複合テーマパークで、屋内・屋外エリアを備えた世界最大級のアミューズメント施設です。屋内「ロッテワールドアドベンチャー」ではジェットコースターやメリーゴーラウンドなどのアトラクションが楽しめ、雨天でも安心。屋外「マジックアイランド」は湖上に広がる遊園地で、夜はライトアップされた観覧車や幻想的な景色が魅力です。季節ごとのパレードやイベントも充実しており、子どもから大人まで楽しめます。地下鉄でアクセス可能な立地も便利で、ショッピングモールや水族館と隣接しているため、一日中遊べる王道スポットです。",
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