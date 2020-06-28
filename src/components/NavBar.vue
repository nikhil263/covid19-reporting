<template>
  <v-container class="nav-bar">
    <v-app-bar color="transparent" elevation="0">
      <v-tabs right slider-color="white" slider-size="1">
        <v-tab v-for="tab in tabs" :key="tab.name" :to="tab.path">
          <span class="white--text nav-tab" :class="`lang-${selectedLang}`">{{
            $t(tab.name)
          }}</span>
        </v-tab>
      </v-tabs>
   
    </v-app-bar>
  </v-container>
</template>
<script>
import { bus } from "../main";
export default {
  name: "NavBar",
  data: function() {
    return {
      selectedLang: this.$i18n.locale.toUpperCase(),
      languages: [
        {
          code: "EN",
          name: "English",
          i18code: "en"
        },
        {
          code: "NL",
          name: "Nederlands",
          i18code: "nl"
        },
        {
          code: "DE",
          name: "German",
          i18code: "de"
        },
        {
          code: "FR",
          name: "Français",
          i18code: "fr"
        },
        {
          code: "ES",
          name: "Español",
          i18code: "es"
        },
        {
          code: "MR",
          name: "मराठी",
          i18code: "mr"
        },
        {
          code: "TA",
          name: "தமிழ்",
          i18code: "ta"
        },
        {
          code: "HI",
          name: "हिन्दी",
          i18code: "hi"
        }
      ],
      tabs: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Graphs",
          path: "/graphs"
        },
       
      ]
    };
  },
  methods: {
    switchLanguage: function(item) {
      this.selectedLang = item.code;
      this.$i18n.locale = item.i18code;
      window.localStorage.setItem("i18code", item.i18code);
      bus.$emit("i18codeChanged");
      /*Change left and width of side bar below active tab*/
      setTimeout(function() {
        const activeTabElm = document.querySelectorAll(".v-tab--active")[0];
        const activeTabElmLeft = activeTabElm.offsetLeft;
        const activeTabWidth = activeTabElm.offsetWidth;
        let sideBarElm = document.querySelectorAll(".v-tabs-slider-wrapper")[0];
        const sidebarLeft = parseInt(activeTabElmLeft);
        sideBarElm.style.left = `${sidebarLeft}px`;
        sideBarElm.style.width = `${activeTabWidth}px`;
      });
    }
  }
};
</script>

<style lang="scss">
.nav-bar.container {
  padding-top: 0;
  .lang-code {
    font-size: 10px;
  }
  .v-toolbar__content {
    padding: 0;
  }
  .v-slide-group__prev {
    display: none !important;
  }
  .v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before,
  .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
    opacity: 0;
  }
}

@media screen and (max-width: 321px) {
  .v-slide-group__content.v-tabs-bar__content {
    .v-tab {
      padding: 0;
      margin: 0;
    }
  }
  .nav-tab {
    font-size: 8px;
    &.lang-MR,
    &.lang-TA,
    &.lang-HI,
    &.lang-EN,
    &.lang-ES {
      font-size: 12px;
    }
    &.lang-FR,
    &.lang-DE {
      font-size: 10px;
    }
  }
}

@media screen and (min-width: 321px) and (max-width: 374px) {
  .v-slide-group__content.v-tabs-bar__content {
    .v-tab {
      padding: 0;
      margin: 0;
    }
  }
  .nav-tab {
    font-size: 10px;
    &.lang-MR,
    &.lang-TA,
    &.lang-HI,
    &.lang-EN,
    &.lang-ES {
      font-size: 12px;
    }
    &.lang-FR,
    &.lang-DE {
      font-size: 10px;
    }
  }
}
@media screen and (min-width: 375px) and (max-width: 600px) {
  .nav-tab {
    font-size: 12px;
  }
}
</style>
