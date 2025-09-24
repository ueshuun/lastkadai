<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-4" style="max-width: 600px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 16px; background: white;">
      <h2 class="mb-4 text-center font-weight-bold" style="color: #1976D2;">旅行サポートチャット</h2>

      <v-card
        class="pa-3 mb-3"
        height="400px"
        style="overflow-y:auto; border-radius: 12px; background: white;"
        ref="chatArea"
      >
        <div>
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="d-flex mb-2"
            :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <v-sheet
              class="pa-3"
              :color="msg.role === 'user' ? 'blue lighten-4' : 'grey lighten-3'"
              rounded
              elevation="2"
              style="max-width: 70%; position: relative; white-space: pre-wrap; word-break: break-word;"
            >

              <div
                v-if="msg.role === 'user'"
                style="content:''; position:absolute; bottom:0; right:-10px; width:0; height:0; border-left:10px solid #90CAF9; border-top:10px solid transparent; border-bottom:10px solid transparent;"
              ></div>
              <div
                v-else
                style="content:''; position:absolute; bottom:0; left:-10px; width:0; height:0; border-right:10px solid #e0e0e0; border-top:10px solid transparent; border-bottom:10px solid transparent;"
              ></div>
              <span>{{ msg.text }}</span>
            </v-sheet>
          </div>
        </div>
      </v-card>

      <v-row>
        <v-col cols="9">
          <v-text-field
            v-model="message"
            label="質問を入力してください"
            dense
            outlined
            @keyup.enter="sendMessage"
            style="background: white; border-radius: 8px;"
          />
        </v-col>
        <v-col cols="3">
          <v-btn
            color="primary"
            block
            elevation="3"
            @click="sendMessage"
          >
            送信
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    
  </v-container>
  
</template>






<script>
import axios from "axios";

export default {
  name: "ChatSupport",
  data: () => ({
    message: "",
    messages: [],
  }),
  methods: {
    async sendMessage() {
      const trimmed = this.message.trim();
      if (!trimmed) return;

      this.messages.push({ role: "user", text: trimmed });
      this.message = "";

      try {
        const response = await axios.post("https://m3h-ueda-0730.azurewebsites.net/api/Function1?", {
          message: trimmed,
        });

         const contentText = response.data.Content[0].Text;
      this.messages.push({ role: 'bot', text: contentText });
      console.log(contentText)
      console.log(JSON.stringify(this.messages, null));
      } catch (err) {
        this.messages.push({ role: "bot", text: "エラー: " + err.message });
      }
    },
  },
};
</script>


