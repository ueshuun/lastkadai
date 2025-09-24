<template>
  <v-container>
    <v-card class="pa-6" outlined>
          <v-card-title class="text-h6 font-weight-bold justify-center align-center">
       <v-icon color="#FF0000">mdi-chili-mild</v-icon> 韓国観光<v-icon color="#FF0000">mdi-chili-mild</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://t4.ftcdn.net/jpg/11/61/91/43/240_F_1161914312_yKQ6THVehqZa99A8u2DumdwC4tanLO7x.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p>カルグクス</p>
          <v-img
            src="https://media.istockphoto.com/id/905781186/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%98%8E%E6%B4%9E.webp?a=1&b=1&s=612x612&w=0&k=20&c=VtV0wSGAzF1wmeO66QEeXgFBHEHEnB-7sAJ2xNV7L2A="
            contain
            height="120"
          />
          <p>南大門市場</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/00/94/95/75/240_F_94957526_xdslCJrYGCs6849LSKRu6x9953aSJqc6.jpg"
            contain
            height="120"
          />
          <p>ソウルタワー</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/08/79/30/95/240_F_879309544_I97hlnqoIWwnAPafzTYjLjDmXmAnPS3P.jpg"
            contain
            height="120"
          />
          <p>カンジャンケジャン</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/15/13/09/15/240_F_1513091591_hdGJXY3HX9QLfGU6JfpVTpc25n3ef7HK.jpg"
            contain
            height="120"
          />
          <p>梨泰院</p>
        </v-col>

        <v-col cols="4" class="d-flex flex-column justify-center">
          <ul class="time-list">
            <p>1日目</p>
            <li>10:00：仁川国際空港到着、空港鉄道でソウル市内へ移動</li>
            <li>12:00：ランチ「明洞餃子」でカルグクス</li>
            <li>13:30：明洞を散策（コスメ・ショッピング）</li>
            <li>15:30：南大門市場を散策</li>
            <li>18:00：夕食「土俗村参鶏湯」でサムゲタン</li>
            <li>20:00：ソウルタワー（南山タワー）から夜景観賞</li>
            <li>22:00：ホテルチェックイン、休憩（明洞泊）</li>

            <p>2日目</p>
            <li>8:00：ホテルで朝食</li>
            <li>9:00：景福宮を観光（韓服体験も可）</li>
            <li>11:30：北村韓屋村を散策</li>
            <li>13:00：ランチ「広蔵市場」で屋台グルメ（キンパ、チヂミ）</li>
            <li>15:00：仁寺洞を散策（伝統工芸品・カフェ）</li>
            <li>18:00：夕食「プロカンジャンケジャン」でカンジャンケジャン</li>
            <li>20:00：東大門デザインプラザ＆ナイトマーケット散策</li>

            <p>3日目</p>
            <li>8:00：ホテルで朝食、チェックアウト</li>
            <li>9:00：梨泰院エリアを散策</li>
            <li>11:30：ランチ「梨泰院ベーカリーカフェ」で軽食</li>
            <li>13:00：カロスキルでショッピング＆カフェ巡り</li>
            <li>15:30：空港へ移動</li>
            <li>18:00：仁川国際空港から帰国</li>

          </ul>
        </v-col>

        <v-col cols="4" class="d-flex flex-column align-center">
          <v-img
            src="https://cdn.pixabay.com/photo/2014/04/17/05/16/myeongdong-326137_1280.jpg"
            contain
            height="120"
            class="mb-4"
          />
          <p> 明洞</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/08/43/75/05/240_F_843750509_NCiGlXWNnaPmYmy09lInUXTZsK7RVWF9.jpg"
            contain
            height="120"
          />
          <p>サムゲタン</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/00/70/61/92/240_F_70619287_SyI16wlrMbXWlP2jnJUAp0c6s6cJHilZ.jpg"
            contain
            height="120"
          />
          <p>景福宮</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/02/84/32/57/240_F_284325749_ugoWKonEkuoLcKtUOMXS5YoWuLf9jZWT.jpg"
            contain
            height="120"
          />
          <p>韓服体験</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/02/30/97/92/240_F_230979293_Gk4xiBffq2MpcovbIdgGrAwfr0S5d24k.jpg"
            contain
            height="120"
          />
          <p>東大門</p>

          
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
