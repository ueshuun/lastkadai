<template>
  <v-container>
    <v-card class="pa-6" outlined>
         <v-card-title class="text-h6 font-weight-bold justify-center align-center">
        <v-icon color="red">mdi-sword</v-icon>スペイン観光 <v-icon color="red">mdi-sword</v-icon>
      </v-card-title>

      <v-row>
        <v-col cols="3" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/02/37/62/70/240_F_237627042_Z8L0Ll7mmZqASJa2kqsn4ym2xvyb0ZEP.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>マヨール広場
          </p>
          <v-img
            src="https://t4.ftcdn.net/jpg/00/83/91/39/240_F_83913965_MdPt8k5xeVa4sIx0zuajUTGGtpqQijkv.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>プラド美術館</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/01/05/50/25/240_F_105502541_TfyTpCzIM76NYpTKb2epk1p4ZzARzC3J.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>サクラダファミリア</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/00/47/26/25/240_F_47262519_JBji4zbizuOybaNXaBFAlYyawW3zx066.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>グエル公園</p>
          <v-img
            src="https://t4.ftcdn.net/jpg/11/74/91/11/240_F_1174911111_I68bIhqs04t3sdUUxcMATAhJ6EZXvOCq.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>レティ―ロ公園</p>
         
        </v-col>

        <v-col cols="6" class="d-flex flex-column justify-center">
          <ul class="time-list">
                    <p>1日目（マドリード）</p>
        <li>10:00：マドリード・バラハス空港到着</li>
        <li>11:00：ホテルにチェックイン、荷物を預ける</li>
        <li>12:00：ランチ「ボティン」で子豚の丸焼き（世界最古のレストラン）</li>
        <li>14:00：マヨール広場を散策</li>
        <li>15:30：王宮とアルムデナ大聖堂を観光</li>
        <li>18:00：プラド美術館を見学</li>
        <li>20:00：夕食「メソン・デル・チャンピニョン」でタパス</li>
        <li>21:30：夜のグラン・ビア通りを散策</li>

        <p>2日目（バルセロナ日帰り）</p>
        <li>7:00：マドリードから高速列車AVEでバルセロナへ移動（約3時間）</li>
        <li>10:00：サグラダ・ファミリア観光</li>
        <li>12:00：ランチ「チリンギート・エスクリバ」でパエリア</li>
        <li>14:00：グエル公園を散策</li>
        <li>16:00：カサ・バトリョ、カサ・ミラなどガウディ建築を見学</li>
        <li>18:00：ランブラス通りを散策</li>
        <li>20:00：夕食「タパス24」でスペイン風小皿料理</li>
        <li>22:00：高速列車でマドリードへ戻る</li>

        <p>3日目（マドリード）</p>
        <li>8:00：ホテルで朝食、チェックアウト</li>
        <li>9:00：レティーロ公園を散策</li>
        <li>11:00：ソフィア王妃芸術センターで「ゲルニカ」を鑑賞</li>
        <li>13:00：ランチ「サン・ミゲル市場」で食べ歩き</li>
        <li>15:00：最後のショッピング（グラン・ビア周辺）</li>
        <li>17:00：空港へ移動</li>
        <li>19:00：マドリード・バラハス空港から帰国</li>


          </ul>
        </v-col>

        <v-col cols="3" class="d-flex flex-column align-center">
          <v-img
            src="https://t3.ftcdn.net/jpg/13/67/29/14/240_F_1367291497_RTorClm4saYjXQvgxdJlSwGWBJKS8EdN.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p> アルムデナ大聖堂</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/05/31/67/34/240_F_531673477_74NtxRbGyo1hLoFC2rX1hPQ6wyHPYRql.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>タパス</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/13/74/28/94/240_F_1374289478_V1qA14g0Qe3QbFx0we04WFD5AsLGlUrV.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>パエリア</p>
          <v-img
            src="https://t3.ftcdn.net/jpg/02/96/32/96/240_F_296329621_pbJvBmbLaBp98mQG7rADzejE5Ebxx4Bc.jpg"
            contain
            height="100"
            class="mb-2"
          />
          <p>カサ・バトリョ</p>
          <v-img
            src="https://media.istockphoto.com/id/459256067/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%9E%E3%83%89%E3%83%AA%E3%83%BC%E3%83%89-%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E3%82%B5%E3%83%B3%E3%83%9F%E3%82%B2%E3%83%AB%E5%B8%82%E5%A0%B4.jpg?s=612x612&w=0&k=20&c=Zj25ngfTdgWwrwqbwGyrWrjsLtxRXkCsBRmCXWFmJ-k="
            contain
            height="100"
            class="mb-2"
          />
          <p>サンミゲル広場</p>
        

          
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
