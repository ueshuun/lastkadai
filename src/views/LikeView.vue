<template>
  <v-container>
    <h3 class="mb-4">
      <v-icon left color="amber">mdi-star</v-icon>
      お気に入りプラン
    </h3>

   
    <v-row>
      <v-col cols="12" v-for="plan in plans" :key="plan.id">
        <v-card
          class="pa-4 mb-3"
          outlined
          @click="togglePlan(plan.id)"
        >
          <div>
           <v-icon left color="blue">mdi-calendar</v-icon> {{ plan.startdate }} ～ {{ plan.enddate }}
            <v-icon left color="blue">mdi-plane-train</v-icon>{{ plan.startplace }} → {{ plan.endplace }} の旅行プラン
          </div>
          
        </v-card>


        <v-expand-transition>
          <div v-if="expandedId === plan.id" class="pa-4 grey lighten-4 rounded">
            <pre style="white-space: pre-line">{{ plan.planText }}</pre>
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FavoritePlans",
  data() {
    return {
      plans: [],
      expandedId: null
    };
  },
  methods: {
    async fetchPlans() {
      const res = await fetch(
        "https://m3h-ueda-0825-g9ambehbcjczc8g5.japaneast-01.azurewebsites.net/api/SELECT?"
      );
      const json = await res.json();
      this.plans = json.List.map(({ id, startplace, startdate, enddate, endplace, planText }) => ({
  id, startplace, startdate, enddate, endplace, planText
}));

    },
    togglePlan(id) {
      this.expandedId = this.expandedId === id ? null : id;
    }
  },
  mounted() {
    this.fetchPlans();
  }
};
</script>

