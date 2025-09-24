<template>
  <v-container>
    <v-card class="pa-6" outlined>
         <v-card-title class="text-h6 font-weight-bold justify-center align-center">
        <v-icon color="#9E9E9E">mdi-bank</v-icon>イタリア観光 <v-icon color="#9E9E9E">mdi-bank</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/02/82/38/10/240_F_282381041_O7uUYn2MgQHcltBSnRnVf2daOZDR9nmO.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p>コロッセオ</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/01/09/14/93/240_F_109149332_D0TOFEq71ali74RutI4Ims0A87tF2QF5.jpg"
            contain
            height="120"
          />
          <p>カルボナーラ</p>
          <v-img
            src="https://as2.ftcdn.net/v2/jpg/04/04/22/29/1000_F_404222988_U0gXg5DIPvMseCFMxB9NuGOZH5x9jk93.jpg"
            contain
            height="120"
          />
          <p>サンタ・マリア・デル・フィオーレ大聖堂</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/04/46/75/48/240_F_446754836_LhXJeVtbIvgNGu5G67TlgNU9rpm584dK.jpg"
            contain
            height="120"
          />
          <p>ヴェッキオ橋</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/10/16/95/86/240_F_1016958605_Gb9ZzL5z8C21SChE14ujiZ0JK7MIXtDh.jpg"
            contain
            height="120"
          />
          <p>バチカン市国</p>
         
        </v-col>

        <v-col cols="4" class="d-flex flex-column justify-center">
          <ul class="time-list">
                    <p>1日目（ローマ）</p>
            <li>10:00：ローマ・フィウミチーノ空港到着</li>
            <li>11:30：ホテルにチェックイン、荷物を預ける</li>
            <li>12:00：ランチ「ピッツェリア・ラ・モンテカルロ」でローマ風ピッツァ</li>
            <li>13:30：コロッセオ観光</li>
            <li>15:00：フォロ・ロマーノとパラティーノの丘を散策</li>
            <li>17:00：トレヴィの泉、スペイン広場を散策</li>
            <li>19:00：夕食「トラットリア・ダ・エンツォ」でカルボナーラ</li>
            <li>21:00：夜のローマ市内を散策</li>

            <p>2日目（フィレンツェ日帰り）</p>
            <li>7:00：ローマから高速鉄道でフィレンツェへ移動（約1.5時間）</li>
            <li>9:00：ドゥオーモ（サンタ・マリア・デル・フィオーレ大聖堂）観光</li>
            <li>11:00：ウフィツィ美術館見学</li>
            <li>13:00：ランチ「トラットリア・マリオ」でビステッカ・アッラ・フィオレンティーナ</li>
            <li>15:00：ヴェッキオ橋・アルノ川周辺を散策</li>
            <li>17:00：フィレンツェ駅からローマへ戻る</li>
            <li>19:30：夕食「リストランテ・アルテミデ」でイタリアンディナー</li>
            <li>21:00：ホテルへ戻り休憩</li>

            <p>3日目（ローマ）</p>
            <li>8:00：ホテルで朝食、チェックアウト</li>
            <li>9:00：バチカン市国観光（サン・ピエトロ大聖堂、バチカン美術館）</li>
            <li>12:00：ランチ「ピッツェリア・ボナーミ」でマルゲリータピザ</li>
            <li>14:00：ナヴォーナ広場とパンテオンを散策</li>
            <li>16:00：空港へ移動</li>
            <li>18:30：ローマ・フィウミチーノ空港から帰国</li>


          </ul>
        </v-col>

        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/01/57/09/76/240_F_157097669_0JjS0n3TIQXsotJB5sXIyzlxGSxixFho.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p> トレヴィの泉</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/01/07/27/76/240_F_107277649_fFdlfQY1uxuA7geMxbgy8dPjjuCR4rXa.jpg"
            contain
            height="120"
          />
          <p>フィレンツェ</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/04/93/50/47/240_F_493504797_gtjljiLPuvOM1kIgJKepvkkP9XzTX2FI.jpg"
            contain
            height="120"
          />
          <p>ウフィツィ美術館</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/01/44/42/91/240_F_144429177_9rRLejhVbYGTfZLdBCXu88eQZ6H9V9BU.jpg"
            contain
            height="120"
          />
          <p>イタリアンディナー</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/02/66/68/94/240_F_266689449_cYL716S98k2MIt5A67Hbe0COR9bwa2u2.jpg"
            contain
            height="120"
          />
          <p>ナヴォ―ナ広場</p>
        

          
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
