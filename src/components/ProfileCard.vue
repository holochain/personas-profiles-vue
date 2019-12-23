<template>
  <v-card class="mx-auto" height="100%" width="900px">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Profile Manager - {{ profileTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>
      <v-btn icon to="https://philt3r.com" target="_blank">
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn icon :to="{name: 'music-manager'}">
        <v-icon>mdi-library-music</v-icon>
      </v-btn>
    </v-toolbar>
    <v-img
      class="white--text align-end"
      height="400px"
      src="Psyland-Main-Stage.jpg">
    </v-img>
    <v-container class="ma-0 pl-5" fluid>
      <v-row justify="center">
        <p>@philt3r is not a metaphor for a side affect, but rather a side affect of a metamorphosis. For a decade, he has planted smiles and swivelled dials along that great stretch of party paradise that is the east-coast of Australia. @philt3r’s sets started out spanning more genres than a well thought out German street parade, but now it's techno, phat, dark, dystopic TECHNO!</p>
        <p>@philt3r can read a crowd better than airport security, and take them further up than their overpriced tickets. But that's what we like about @philt3r, his lack of tickets on himself. A regular on the festival scene, he is a resident at Psyland, and plays heaps of festivals inc Esoteric Festival, Dragon Dreaming (4x), Rainbow Serpent Festival, Burning Seed (6x), Squared Senses (2x), earthcore, Local Produce (2x), Sugarloaf, Digital HotDog (3x) and ShipReKt along with club gigs across states. @philt3r has also guest DJ’d on KISS FM for B-Tham’s show Friction.</p>
        <p>@philt3r has released 2 previous EP’s and is hard at work on his new EP “Agents of Anarchy”, a dark dystopic minimal techno EP using the power of music to bring about positive change in society.</p>
        <p>So get your 'TECHNO!' on with @philt3r at your next attempt to escape reality and keep your ears open for </p>
        <img src="agents-of-anarchy-symbol.png" alt="agents of anarchy symbol" />
      </v-row>
      <v-row>
        <h2>Mixes</h2>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fphilt3r%2Fbabylon-application-2019%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fphilt3r%2Flive-party-my-aeon%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fphilt3r%2Fsnake-pit-sound-session-backstage-at-esoteric%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Facid-punk-techno-junk-may-2019%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Fequinox-2019-rainbird-ep-launch%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Fthank-fuck-im-50-lukes-birthday-bash%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Fdigital-hotdog-2018%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Fsugarloaf-wtf-my-favourite-doof-for-years%2F" frameborder="0" ></iframe>
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fphilt3r%2Fdark-minimal-sept-2018%2F" frameborder="0" ></iframe>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileCard',
  components: {
  },
  data () {
    return {
    }
  },
  props: ['profileTitle']
}
</script>
