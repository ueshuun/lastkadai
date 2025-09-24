<template>
  <v-container fluid class="pa-0">
   <div
  class="d-flex flex-column align-center justify-center" :style="{backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', paddingTop: '40px'}"
>
      <h2 style="color: black;" class="text-shadow-lg mb-8">旅の予定を立てよう!!</h2>

      <v-row
  justify="center"
  align="center"
  class="mb-6 rounded-lg pa-4"
  style="background-color: white; opacity: 0.7;"
>


        <v-col cols="12" sm="3">
          <v-text-field v-model="startPlace" label="出発地" outlined dense ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="endPlace" label="目的地" outlined dense></v-text-field>
        </v-col>

        
        <v-col cols="12" sm="3">
          <v-menu v-model="menuStart" transition="scale-transition" offset-y max-width="290px" min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="出発日"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="startDate" @change="menuStart = false" />
          </v-menu>
        </v-col>

    
        <v-col  sm="3">
          <v-menu v-model="menuEnd" transition="scale-transition" offset-y max-width="290px" min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                label="最終日"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="endDate" @change="menuEnd = false" />
          </v-menu>
        </v-col>
      </v-row>

    
      <v-btn
        color="#43AEFF"
        class="px-12 py-4 text-white mb-6"
        rounded
        dark
        @click="createPlan"
      >
        プランの作成
      </v-btn>

      <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card class="d-flex flex-column align-center justify-center pa-6">
        <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
        <p class="mt-4">プランを作成中です 
        <br>少々お待ちください...

        </p>
      </v-card>
    </v-dialog>
    </div>


 <v-container class="mt-12">
      <h3 class="mb-6">日本の人気の旅行先</h3>
      <v-row justify="center" align="center" dense>
        <v-col cols="3">
          <router-link to="/Hokkaido">
            <v-img src="https://t4.ftcdn.net/jpg/02/91/38/97/240_F_291389777_cuGvQhUPXd7BC6vJd7L4pkKbjPoImTeF.jpg" height="200px" rounded />
          </router-link>
          <p class="text-center mt-2">北海道</p>
        </v-col>
        <v-col cols="3">
          <router-link to="/Osaka">
            <v-img src="https://as1.ftcdn.net/v2/jpg/11/76/70/10/1000_F_1176701002_OOTSgbtqWMr8jdngQKNqCmh5tuh2sioS.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">大阪</p>
        </v-col>
        <v-col cols="3">
          <router-link to="/Kyoto">
            <v-img src="https://64.media.tumblr.com/5084eb6dc9b812bdec7a59c99a44ac24/tumblr_o20od5J4nP1t4k8xoo1_1280.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">京都</p>
        </v-col>
        <v-col md="3">
          <router-link to="/Okinawa">
            <v-img src="https://t3.ftcdn.net/jpg/00/71/14/86/240_F_71148658_q2Nnw7AiT9BJ1XCyEl84yeRKDMsOAC1r.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">沖縄</p>
        </v-col>

      </v-row>
    </v-container>

    <v-container class="mt-12">
      <h3 class="mb-6">プロモーション</h3>
      <v-row justify="center" align="center" dense>
       <v-col md="4">
  <a href="https://victorious-ocean-034401f1e.1.azurestaticapps.net/" target="_blank">
    <v-img
      src="@/assets/ushop.png"
      height="200"
      width="200"
    />
  </a>
</v-col>

<v-col md="4">
  <a href="https://blue-dune-01efe8600.2.azurestaticapps.net/" target="_blank">
    <v-img
      src="@/assets/pork.png"
      height="200"
      width="200"
    />
  </a>
</v-col>

<v-col md="4">
  <a href="https://blue-dune-01efe8600.2.azurestaticapps.net/" target="_blank">
    <v-img
      src="@/assets/MoneyBoard.png"
      height="200"
      width="200"
    />
  </a>
</v-col>

      </v-row>
    </v-container>
   <v-container class="mt-12">
      <h3 class="mb-6">日本以外の人気の旅行先</h3>
      <v-row justify="center" align="center" dense>
        <v-col md="3">
          <router-link to="/Hawaii">
            <v-img src="https://ruimaeda.com/wp-content/uploads/cache/2000_2018-12-06_16-11-04_730/274870745.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">ハワイ</p>
        </v-col>
        <v-col md="3">
          <router-link to="/Korea">
            <v-img src="https://cdn.pixabay.com/photo/2022/08/05/05/59/korea-7366040_1280.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">韓国</p>
        </v-col>
        <v-col md="3">
          <router-link to="/Italy">
            <v-img src="https://t3.ftcdn.net/jpg/02/82/38/10/360_F_282381041_O7uUYn2MgQHcltBSnRnVf2daOZDR9nmO.webp" height="200px" />
          </router-link>
          <p class="text-center mt-2">イタリア</p>
        </v-col>
        <v-col md="3">
          <router-link to="/Spain">
            <v-img src="https://t4.ftcdn.net/jpg/01/41/32/23/240_F_141322312_k0KBHFfcs34JepipgmqmUPZjesGtIqvt.jpg" height="200px" />
          </router-link>
          <p class="text-center mt-2">スペイン</p>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="#f5f5f5">
      <v-container class="text-left">
         <v-row>
        <v-col md="4">
          <h4>ヘルプ・お問い合わせ</h4>
          <a href="/Customer">サポートデスク</a>
        </v-col>
      
        <v-col md="4">
          <h4>Trip.jpについて</h4>
          <a href="/Like">お気に入り</a>
        </v-col>
        <v-col md="4">
          <h4>その他</h4>
          <a href="/Hokkaido">北海道</a>
          <br><a href="/Osaka">大阪</a>
          <br><a href="Kyoto">京都</a>
          <br><a href="/Okinawa">沖縄</a>
          <br><a href="/Hawaii">ハワイ</a>
          <br><a href="/Korea">韓国</a>
          <br><a href="/Italy">イタリア</a>
          <br><a href="/Spain">スペイン</a>
        </v-col>

        </v-row>
      </v-container>
    
    </v-footer>
    

  </v-container>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      startPlace: "",
      endPlace: "",
      startDate: "",
      endDate: "",
      menuStart: false,
      menuEnd: false,
      loading: false,
    };
  },
  methods: {
    async createPlan() {
      this.loading = true;
      const message = `出発地: ${this.startPlace}\n目的地: ${this.endPlace}\n出発日: ${this.startDate}\n最終日: ${this.endDate}`;
const res = await axios.post("https://m3h-ueda-ai.azurewebsites.net/api/Function1?", {
        message,
      });
      const aiResult = res.data.Content[0].Text;
       
      this.$router.push({
        path: "/Plan",
        query: { 
    result: aiResult,
    startPlace: this.startPlace,
    endPlace: this.endPlace,
    startDate: this.startDate,
    endDate: this.endDate
  },
      });
    },
  },
};
</script>

