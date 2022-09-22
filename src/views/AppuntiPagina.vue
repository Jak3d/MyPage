<template>
  <div>
    <div class="card">
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="setAppunti('EPS')"
          >Elementi di Prob. e Stat.</a
        >
        <a href="#" class="card-footer-item" @click="setAppunti('LFT')"
          >Linguaggi formarli e Trad.</a
        >
      </footer>
    </div>
  </div>
  <div style="float: left; width: 15%; position: sticky; top: 1px; left: 5px;">
    <div class="box has-background-grey-lighter">
    
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>
  </div>
  
  <div>
    <Transition name="slide-fade">
      <body v-if="this.activeNotes === 'EPS'" style="width: 75%; float: right">
        <h2 class="title is-2">Elementi di Probabilità e Statistica</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis
        dolor ac lacus finibus, non viverra est gravida. Maecenas in feugiat mi.
        Suspendisse pharetra cursus sagittis. Mauris malesuada nisl sapien, at
        aliquet elit pulvinar a. Fusce pretium arcu non libero varius, vel
        fermentum turpis molestie. Cras at mauris vitae ligula mattis
        condimentum. Proin vitae nisi ut libero gravida elementum. Morbi
        porttitor, sem vitae pharetra porta, arcu nisi eleifend turpis, vitae
        scelerisque ex sapien a turpis. Vivamus lobortis ut purus ac accumsan.
        Proin ex tortor, iaculis in varius ut, lobortis sit amet turpis. Fusce
        ultrices diam sapien, non mattis mauris sollicitudin sit amet. Quisque
        mattis condimentum urna, a varius augue volutpat ut. Nullam mattis,
        felis eu rhoncus fermentum, sapien augue viverra tellus, non facilisis
        felis nibh elementum augue. Nulla in turpis eget justo efficitur cursus
        nec eget tellus. Nam pharetra quis erat in pharetra. Sed condimentum
        faucibus fermentum. Praesent ligula ligula, pretium quis tellus id,
        accumsan rutrum neque. Praesent nec purus id ipsum placerat rhoncus.
        Maecenas faucibus malesuada tempor. Vivamus et enim vitae arcu finibus
        placerat ut quis eros. Quisque semper leo id odio efficitur
        pellentesque. Duis eu nibh et urna molestie iaculis eu feugiat tortor.
        Etiam facilisis, urna et porttitor consectetur, lacus elit lobortis
        metus, vitae egestas nisl sem sit amet nulla. Pellentesque sit amet
        molestie est. Nunc faucibus nulla lorem, at luctus eros aliquam et.
        Proin nec erat diam. Cras congue orci non neque iaculis, at ornare neque
        volutpat. Cras iaculis at eros sit amet pulvinar. Aenean pellentesque
        viverra dolor, non ornare ex ornare vel. Sed eleifend vehicula tellus,
        sit amet molestie elit blandit sit amet. Nunc ac neque aliquam, vehicula
        nisl quis, luctus orci. Mauris tristique leo ac nibh fringilla, ut
        dictum mauris viverra. Fusce rutrum ex velit, in auctor leo lobortis
        vel. Sed efficitur erat a luctus mollis. Sed ut fringilla nisl. Cras ut
        eros tortor. Vivamus erat eros, tincidunt commodo semper quis, vehicula
        a tortor. Cras nisi enim, tristique ut fringilla a, interdum vel enim.
        Maecenas faucibus eget ligula non porttitor. Integer rhoncus non nibh eu
        tempor. Fusce posuere eget mi vitae tempus. Nam pellentesque augue vel
        ullamcorper bibendum. Mauris nec porta erat. Ut pretium ac justo ut
        imperdiet. Vestibulum id sapien eu mi consequat rhoncus vitae ac magna.
        Maecenas volutpat elit nec diam mattis, ut ultricies ante tempus.
        Praesent pellentesque sodales elit, at efficitur dui aliquam at. Duis
        consectetur metus eu odio commodo semper. Integer suscipit mi eu aliquet
        faucibus. Morbi nec pretium lorem. Duis convallis sem ut semper
        vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Pellentesque purus sapien, vestibulum id
        tellus sit amet, pretium dapibus velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam facilisis dolor ac lacus finibus, non
        viverra est gravida. Maecenas in feugiat mi. Suspendisse pharetra cursus
        sagittis. Mauris malesuada nisl sapien, at aliquet elit pulvinar a.
        Fusce pretium arcu non libero varius, vel fermentum turpis molestie.
        Cras at mauris vitae ligula mattis condimentum. Proin vitae nisi ut
        libero gravida elementum. Morbi porttitor, sem vitae pharetra porta,
        arcu nisi eleifend turpis, vitae scelerisque ex sapien a turpis. Vivamus
        lobortis ut purus ac accumsan. Proin ex tortor, iaculis in varius ut,
        lobortis sit amet turpis. Fusce ultrices diam sapien, non mattis mauris
        sollicitudin sit amet. Quisque mattis condimentum urna, a varius augue
        volutpat ut. Nullam mattis, felis eu rhoncus fermentum, sapien augue
        viverra tellus, non facilisis felis nibh elementum augue. Nulla in
        turpis eget justo efficitur cursus nec eget tellus. Nam pharetra quis
        erat in pharetra. Sed condimentum faucibus fermentum. Praesent ligula
        ligula, pretium quis tellus id, accumsan rutrum neque. Praesent nec
        purus id ipsum placerat rhoncus. Maecenas faucibus malesuada tempor.
        Vivamus et enim vitae arcu finibus placerat ut quis eros. Quisque semper
        leo id odio efficitur pellentesque. Duis eu nibh et urna molestie
        iaculis eu feugiat tortor. Etiam facilisis, urna et porttitor
        consectetur, lacus elit lobortis metus, vitae egestas nisl sem sit amet
        nulla. Pellentesque sit amet molestie est. Nunc faucibus nulla lorem, at
        luctus eros aliquam et. Proin nec erat diam. Cras congue orci non neque
        iaculis, at ornare neque volutpat. Cras iaculis at eros sit amet
        pulvinar. Aenean pellentesque viverra dolor, non ornare ex ornare vel.
        Sed eleifend vehicula tellus, sit amet molestie elit blandit sit amet.
        Nunc ac neque aliquam, vehicula nisl quis, luctus orci. Mauris tristique
        leo ac nibh fringilla, ut dictum mauris viverra. Fusce rutrum ex velit,
        in auctor leo lobortis vel. Sed efficitur erat a luctus mollis. Sed ut
        fringilla nisl. Cras ut eros tortor. Vivamus erat eros, tincidunt
        commodo semper quis, vehicula a tortor. Cras nisi enim, tristique ut
        fringilla a, interdum vel enim. Maecenas faucibus eget ligula non
        porttitor. Integer rhoncus non nibh eu tempor. Fusce posuere eget mi
        vitae tempus. Nam pellentesque augue vel ullamcorper bibendum. Mauris
        nec porta erat. Ut pretium ac justo ut imperdiet. Vestibulum id sapien
        eu mi consequat rhoncus vitae ac magna. Maecenas volutpat elit nec diam
        mattis, ut ultricies ante tempus. Praesent pellentesque sodales elit, at
        efficitur dui aliquam at. Duis consectetur metus eu odio commodo semper.
        Integer suscipit mi eu aliquet faucibus. Morbi nec pretium lorem. Duis
        convallis sem ut semper vulputate. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
        purus sapien, vestibulum id tellus sit amet, pretium dapibus velit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis
        dolor ac lacus finibus, non viverra est gravida. Maecenas in feugiat mi.
        Suspendisse pharetra cursus sagittis. Mauris malesuada nisl sapien, at
        aliquet elit pulvinar a. Fusce pretium arcu non libero varius, vel
        fermentum turpis molestie. Cras at mauris vitae ligula mattis
        condimentum. Proin vitae nisi ut libero gravida elementum. Morbi
        porttitor, sem vitae pharetra porta, arcu nisi eleifend turpis, vitae
        scelerisque ex sapien a turpis. Vivamus lobortis ut purus ac accumsan.
        Proin ex tortor, iaculis in varius ut, lobortis sit amet turpis. Fusce
        ultrices diam sapien, non mattis mauris sollicitudin sit amet. Quisque
        mattis condimentum urna, a varius augue volutpat ut. Nullam mattis,
        felis eu rhoncus fermentum, sapien augue viverra tellus, non facilisis
        felis nibh elementum augue. Nulla in turpis eget justo efficitur cursus
        nec eget tellus. Nam pharetra quis erat in pharetra. Sed condimentum
        faucibus fermentum. Praesent ligula ligula, pretium quis tellus id,
        accumsan rutrum neque. Praesent nec purus id ipsum placerat rhoncus.
        Maecenas faucibus malesuada tempor. Vivamus et enim vitae arcu finibus
        placerat ut quis eros. Quisque semper leo id odio efficitur
        pellentesque. Duis eu nibh et urna molestie iaculis eu feugiat tortor.
        Etiam facilisis, urna et porttitor consectetur, lacus elit lobortis
        metus, vitae egestas nisl sem sit amet nulla. Pellentesque sit amet
        molestie est. Nunc faucibus nulla lorem, at luctus eros aliquam et.
        Proin nec erat diam. Cras congue orci non neque iaculis, at ornare neque
        volutpat. Cras iaculis at eros sit amet pulvinar. Aenean pellentesque
        viverra dolor, non ornare ex ornare vel. Sed eleifend vehicula tellus,
        sit amet molestie elit blandit sit amet. Nunc ac neque aliquam, vehicula
        nisl quis, luctus orci. Mauris tristique leo ac nibh fringilla, ut
        dictum mauris viverra. Fusce rutrum ex velit, in auctor leo lobortis
        vel. Sed efficitur erat a luctus mollis. Sed ut fringilla nisl. Cras ut
        eros tortor. Vivamus erat eros, tincidunt commodo semper quis, vehicula
        a tortor. Cras nisi enim, tristique ut fringilla a, interdum vel enim.
        Maecenas faucibus eget ligula non porttitor. Integer rhoncus non nibh eu
        tempor. Fusce posuere eget mi vitae tempus. Nam pellentesque augue vel
        ullamcorper bibendum. Mauris nec porta erat. Ut pretium ac justo ut
        imperdiet. Vestibulum id sapien eu mi consequat rhoncus vitae ac magna.
        Maecenas volutpat elit nec diam mattis, ut ultricies ante tempus.
        Praesent pellentesque sodales elit, at efficitur dui aliquam at. Duis
        consectetur metus eu odio commodo semper. Integer suscipit mi eu aliquet
        faucibus. Morbi nec pretium lorem. Duis convallis sem ut semper
        vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Pellentesque purus sapien, vestibulum id
        tellus sit amet, pretium dapibus velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam facilisis dolor ac lacus finibus, non
        viverra est gravida. Maecenas in feugiat mi. Suspendisse pharetra cursus
        sagittis. Mauris malesuada nisl sapien, at aliquet elit pulvinar a.
        Fusce pretium arcu non libero varius, vel fermentum turpis molestie.
        Cras at mauris vitae ligula mattis condimentum. Proin vitae nisi ut
        libero gravida elementum. Morbi porttitor, sem vitae pharetra porta,
        arcu nisi eleifend turpis, vitae scelerisque ex sapien a turpis. Vivamus
        lobortis ut purus ac accumsan. Proin ex tortor, iaculis in varius ut,
        lobortis sit amet turpis. Fusce ultrices diam sapien, non mattis mauris
        sollicitudin sit amet. Quisque mattis condimentum urna, a varius augue
        volutpat ut. Nullam mattis, felis eu rhoncus fermentum, sapien augue
        viverra tellus, non facilisis felis nibh elementum augue. Nulla in
        turpis eget justo efficitur cursus nec eget tellus. Nam pharetra quis
        erat in pharetra. Sed condimentum faucibus fermentum. Praesent ligula
        ligula, pretium quis tellus id, accumsan rutrum neque. Praesent nec
        purus id ipsum placerat rhoncus. Maecenas faucibus malesuada tempor.
        Vivamus et enim vitae arcu finibus placerat ut quis eros. Quisque semper
        leo id odio efficitur pellentesque. Duis eu nibh et urna molestie
        iaculis eu feugiat tortor. Etiam facilisis, urna et porttitor
        consectetur, lacus elit lobortis metus, vitae egestas nisl sem sit amet
        nulla. Pellentesque sit amet molestie est. Nunc faucibus nulla lorem, at
        luctus eros aliquam et. Proin nec erat diam. Cras congue orci non neque
        iaculis, at ornare neque volutpat. Cras iaculis at eros sit amet
        pulvinar. Aenean pellentesque viverra dolor, non ornare ex ornare vel.
        Sed eleifend vehicula tellus, sit amet molestie elit blandit sit amet.
        Nunc ac neque aliquam, vehicula nisl quis, luctus orci. Mauris tristique
        leo ac nibh fringilla, ut dictum mauris viverra. Fusce rutrum ex velit,
        in auctor leo lobortis vel. Sed efficitur erat a luctus mollis. Sed ut
        fringilla nisl. Cras ut eros tortor. Vivamus erat eros, tincidunt
        commodo semper quis, vehicula a tortor. Cras nisi enim, tristique ut
        fringilla a, interdum vel enim. Maecenas faucibus eget ligula non
        porttitor. Integer rhoncus non nibh eu tempor. Fusce posuere eget mi
        vitae tempus. Nam pellentesque augue vel ullamcorper bibendum. Mauris
        nec porta erat. Ut pretium ac justo ut imperdiet. Vestibulum id sapien
        eu mi consequat rhoncus vitae ac magna. Maecenas volutpat elit nec diam
        mattis, ut ultricies ante tempus. Praesent pellentesque sodales elit, at
        efficitur dui aliquam at. Duis consectetur metus eu odio commodo semper.
        Integer suscipit mi eu aliquet faucibus. Morbi nec pretium lorem. Duis
        convallis sem ut semper vulputate. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
        purus sapien, vestibulum id tellus sit amet, pretium dapibus velit.
      </body>
    </Transition>
    <Transition name="slide-fade">
      <body v-if="this.activeNotes === 'LFT'">
        <h2 class="title is-2">Linguaggi formarli e Tradutori</h2>

        <div>
          <vue-mathjax :formula="formula"></vue-mathjax>
        </div>
      </body>
    </Transition>
  </div>
</template>

<script >
import { VueMathjax } from "vue-mathjax-next";
//import 'node_modules/mathjax/es5/tex-chtml.js';

export default {
  name: "AppuntiPage",
  components: {
    "vue-mathjax": VueMathjax,
  },
  data() {
    return {
      activeNotes: "",
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
    };
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"
    );
    document.head.appendChild(recaptchaScript);
  },

  metaInfo: {
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
      },
      {
        // type:'text/javascript', id:'MathJax-script', async:true, src:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
      },
    ],
  },
  MathJax: {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  },
  methods: {
    async setAppunti(Corso) {
      this.activeNotes = "";
      await this.delay(900);
      this.activeNotes = Corso;
    },
    async delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
