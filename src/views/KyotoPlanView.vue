<template>
  <v-container>
    <v-card class="pa-6" outlined>
        <v-card-title class="text-h6 font-weight-bold justify-center align-center">
        <v-icon color="red">mdi-temple-buddhist-outline</v-icon>京都観光<v-icon color="red">mdi-temple-buddhist-outline</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/01/94/24/32/240_F_194243258_FmeqAIGbnc3AGmmg48M3TAFlu1340Mo6.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p>清水寺</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/04/80/56/76/240_F_480567625_tbnEJVEjm39YrQqs9F3a2wT0tLtPVCcT.jpg"
            contain
            height="120"
          />
          <p>祇園</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/05/35/12/74/240_F_535127478_AnyH4M6K99qddw2OFtZ9RUVHf5creOun.jpg"
            contain
            height="120"
          />
          <p>金閣寺</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/05/32/86/83/240_F_532868302_emG5dCGEO45fCgkobiwafKtPxqvAc2nx.jpg"
            contain
            height="120"
          />
          <p>お蕎麦</p>
         
         
        </v-col>

        <v-col cols="4" class="d-flex flex-column justify-center">
          <ul class="time-list">
     <p>1日目</p>
    <li>7:00：東京駅を出発、新幹線で京都へ移動</li>
    <li>10:00：京都駅到着、荷物をホテルに預ける</li>
    <li>10:30：清水寺を参拝、三年坂・二年坂を散策</li>
    <li>12:30：ランチ「ゆどうふ奥丹 清水」で湯豆腐</li>
    <li>14:00：祇園・八坂神社を散策</li>
    <li>16:00：錦市場で食べ歩き（京漬物・コロッケ・甘味など）</li>
    <li>18:00：京料理ディナー「菊乃井」または町家レストラン</li>
    <li>20:00：鴨川沿いを散策、夜の祇園を楽しむ</li>
    <li>22:00：ホテルにチェックイン、休憩（京都泊）</li>

    <p>2日目</p>
    <li>8:00：ホテルで朝食</li>
    <li>9:00：金閣寺を拝観</li>
    <li>10:30：嵐山へ移動、竹林の小径を散策</li>
    <li>12:00：ランチ「嵐山よしむら」でそば</li>
    <li>13:30：渡月橋を散策、天龍寺を見学</li>
    <li>15:00：京都駅周辺でお土産購入（八ツ橋・漬物など）</li>
    <li>17:00：新幹線で東京へ向けて出発</li>
    <li>20:00：東京駅到着</li>

          </ul>
        </v-col>

        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/01/75/55/00/240_F_175550063_XoBrM6nrS6QFJ3NexKi7fNxXHbPROyNl.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p>湯豆腐</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/02/51/36/52/240_F_251365297_v3EAZaDCoJFSLQVAUbh6vlKf5nBcBtzx.jpg"
            contain
            height="120"
          />
          <p>鴨川</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/01/34/41/36/240_F_134413604_cBrItiTkYi9wcNl9cL5Ff6fEicE1LSFo.jpg"
            contain
            height="120"
          />
          <p>嵐山</p>
          <v-img
            src="https://as1.ftcdn.net/v2/jpg/02/77/64/66/1000_F_277646693_luUonQ5LUOZGPH9pT3fyChM0zuSK4u6f.jpg"
            contain
            height="120"
          />
          <p>天龍寺</p>
       
          
          
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.time-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
.time-list li {
  margin: 4px 0;
}
</style>
