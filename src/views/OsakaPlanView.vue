<template>
  <v-container>
    <v-card class="pa-6" outlined>
          <v-card-title class="text-h6 font-weight-bold justify-center align-center">
        <v-icon color="#9C27B0">mdi-ferris-wheel</v-icon>大阪観光 <v-icon color="#9C27B0">mdi-ferris-wheel</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="3" class="d-flex flex-column align-center">
          <v-img
            src="https://t4.ftcdn.net/jpg/02/19/88/67/240_F_219886796_jJNLQVTsagLS8HVkaZaO7oYBhXumODQx.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>お好み焼き</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/02/84/79/43/240_F_284794360_jBksBOvSB4MNAWKbffJXr7uVZUSqNAwx.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>たこ焼き</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/03/56/32/99/240_F_356329981_xjTi7MphOQfd7lwEE25BPSW2leGJVuyJ.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>通天閣</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/03/71/94/21/240_F_371942171_zI5THgiH3wZ4KMnRYKtDwbIb5D6FmHrb.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>あべのハルカス</p>
         
         
        </v-col>

        <v-col cols="6" class="d-flex flex-column justify-center">
          <ul class="time-list">
          <p>1日目</p>
        <li>7:00：東京駅を出発、新幹線で新大阪へ移動</li>
        <li>11:30：新大阪駅到着</li>
        <li>12:00：お好み焼きランチ「美津の」（道頓堀）</li>
        <li>13:30：大阪城公園を散策、天守閣を見学</li>
        <li>15:30：心斎橋筋商店街・道頓堀を散策（グリコ看板、食べ歩き）</li>
        <li>18:00：たこ焼き＆ねぎ焼きディナー「やまもと」</li>
        <li>20:00：道頓堀の夜景・戎橋周辺を散策</li>
        <li>22:00：難波エリアのホテルにチェックイン、休憩</li>

        <p>2日目</p>
        <li>8:00：ホテルで朝食</li>
        <li>9:00：通天閣を見学、新世界エリアを散策</li>
        <li>11:00：串カツランチ「だるま 新世界総本店」</li>
        <li>13:00：あべのハルカス展望台から大阪市街を一望</li>
        <li>15:00：なんばパークスや心斎橋でショッピング</li>
        <li>17:00：新大阪駅へ移動</li>
        <li>18:00：新大阪駅で「551蓬莱」の肉まんを購入</li>
        <li>18:30：軽食・駅弁を食べて新幹線で東京へ出発</li>
        <li>22:30：東京駅到着</li>

          </ul>
        </v-col>

        <v-col cols="3" class="d-flex flex-column align-center">
          <v-img
            src="https://t4.ftcdn.net/jpg/02/64/30/87/240_F_264308766_9LPiZWazBnUFCOZ4nntQ6Xo1U4wGXrvW.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>大阪城</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/03/56/32/99/240_F_356329969_ojJcbQvbIuzSW0m4hv8AHnG83Lo2ddxI.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>道頓堀</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/03/78/82/27/240_F_378822707_foke5OH81T3USZ03xbbV0v4Amj0LqpoM.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>串カツ</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/12/13/71/63/240_F_1213716359_wcxtYM5WT5mr4wG2UhbYQ6VRZHZFimz5.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>551蓬莱</p>
       
          
          
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
  text-align: center;
}
.time-list li {
  margin: 4px 0;
}
</style>
