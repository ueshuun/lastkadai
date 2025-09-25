<template>
  <v-container>
    <v-card class="pa-6" outlined>
      <v-card-title class="text-h6 font-weight-bold justify-center align-center">
        <v-icon color="green" size="30">mdi-palm-tree</v-icon>ハワイ観光  <v-icon color="green" size="30">mdi-palm-tree</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="3" class="d-flex flex-column align-center" >
          <v-img
            src="https://t3.ftcdn.net/jpg/03/34/78/10/240_F_334781068_goKODR2ASoT1iRkuKE0viMeBivQKwWjS.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>ワイキキビーチ</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/11/33/49/99/240_F_1133499900_TNySjee3RHKFUwT8eGlq66GUqjKEZ44A.jpg"
            contain
            height="120"
          />
          <p>アラモアナセンター</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/02/93/57/29/240_F_293572963_M05gvwXcV8QKHKKclwLrtbPLR9apd4mp.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>ダイヤモンドヘッド</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/08/19/20/47/240_F_819204719_4X7mg4tdlFE3aUEEre6Rv4tJfzgXYrKK.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>マラサダ</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/04/24/07/93/240_F_424079347_CaRzD0joly1QGN5SCBhiDRA1YGJXxvH0.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>カメハメハ大王</p>
        
        </v-col>

        <v-col cols="6" class="d-flex flex-column justify-center">
          <ul class="time-list">
                    <p>1日目</p>
            <li>7:00：羽田空港を出発、ホノルルへ移動（直行便）</li>
            <li>19:00：ダニエル・K・イノウエ国際空港到着（時差で現地午前中）</li>
            <li>10:00：ワイキキのホテルにチェックイン、荷物を預ける</li>
            <li>11:00：ワイキキビーチ散策＆リラックス</li>
            <li>13:00：ランチ「チーズケーキファクトリー」でハワイアンランチ</li>
            <li>15:00：アラモアナセンターでショッピング</li>
            <li>18:30：夕食「ウルフギャング・ステーキハウス」</li>
            <li>20:00：ワイキキの夜景やカラカウア通りを散策</li>

            <p>2日目</p>
            <li>7:30：ホテルで朝食</li>
            <li>8:30：ダイヤモンドヘッド登頂、絶景を楽しむ</li>
            <li>11:00：ハナウマ湾でシュノーケリング</li>
            <li>13:00：ランチ「レナーズ・ベーカリー」でマラサダと軽食</li>
            <li>15:00：カイルアビーチでのんびり過ごす</li>
            <li>18:00：夕食「アランチーノ・ディ・マーレ」でイタリアン</li>
            <li>20:00：ワイキキのビーチ沿いで夜の散歩</li>

            <p>3日目</p>
            <li>7:00：ホテルで朝食＆チェックアウト</li>
            <li>8:00：カメハメハ大王像やイオラニ宮殿を観光</li>
            <li>10:30：ダウンタウンで散策＆カフェタイム</li>
            <li>12:00：ランチ「ハイウェイ・イン」でロコモコ</li>
            <li>14:00：空港へ移動、チェックイン</li>
            <li>16:00：ホノルル空港を出発</li>
            <li>20:00：羽田空港到着（翌日夕方）</li>


          </ul>
        </v-col>

        <v-col cols="3" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/04/48/39/84/240_F_448398427_e67tUJ8yCPvIYPfMSRufWTu3VnReHDtw.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p> ハワイアンランチ</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/04/36/56/86/240_F_436568645_RXUM1FvnjDoPvCNOs04MrHeiW9GgS1zj.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>カラカウア通り</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/01/28/46/30/240_F_128463048_yysdEmrYudvHKyInN0Jk5rwfr0wCa1aP.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>ハナウマ湾</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/01/63/71/77/240_F_163717774_3KqQddRsdSK5tCUpobJ2gCpTCOvWZf4T.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>カイルアビーチ</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/05/69/16/98/240_F_569169875_OpAXT2NLGDiC6qUwEVAtRBTjl1j6K6eg.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>ロコモコ</p>

          

          
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
