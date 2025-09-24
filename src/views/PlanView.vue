<template>
  <v-container class="mt-8">
    <h2 class="mb-6" style="font-weight: bold; color: #1976D2; text-align: center;">
      AI旅行プラン
    </h2>

    <v-card 
      class="pa-4 mb-6"
      outlined
      elevation="6"
      style="border-radius: 16px; background: #f9f9f9; box-shadow: 0 6px 20px rgba(0,0,0,0.1);"
    >
      <v-card-title class="d-flex align-center" style="font-weight: bold; font-size: 1.1rem;">
  <v-icon color="blue" small style="margin-right:0;">mdi-calendar</v-icon>{{ startDate }}～{{ endDate }}
  <v-icon color="blue" small style="margin-right:0;">mdi-plane-train</v-icon>{{ startPlace }}→{{ endPlace }}
</v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-4" style="background: white; border-radius: 12px; max-height: 400px; overflow-y: auto; color: #333; font-size: 0.95rem; line-height: 1.5;">
        <pre class="whitespace-pre-wrap" style="margin: 0;">{{ result }}</pre>
      </v-card-text>

      <v-card-actions class="mt-4 justify-end">
        <v-btn
          color="#1976D2"
          dark
          elevation="3"
          rounded
          @click="savedata"
        >
          <v-icon left>mdi-heart</v-icon>
          お気に入りに保存
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import axios from "axios";

export default {
  name: "PlanView",
  computed: {
    result() {
      return this.$route.query.result;
    },
    startPlace() {
      return this.$route.query.startPlace;
    },
    endPlace() {
      return this.$route.query.endPlace;
    },
    startDate() {
      return this.$route.query.startDate;
    },
    endDate() {
      return this.$route.query.endDate;
    }
  },
  methods: {
    async savedata() {
      const res = await axios.post(
        "https://m3h-ueda-0825-g9ambehbcjczc8g5.japaneast-01.azurewebsites.net/api/INSERT",
        {
          startplace: this.startPlace,
          endplace: this.endPlace,
          startdate: this.startDate,
          enddate: this.endDate,
          plantext: this.result
        }
      );
      console.log(res.data);
    }
  }
};
</script>

