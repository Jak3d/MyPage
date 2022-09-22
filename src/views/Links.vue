<template>
    <button @click="test" class="button is-link">a</button>
  <transition>
    <body v-if="activePageFromParent==='Links'" style="[Devo aggiungere che quando cambio pagina/vado home, prima disattivo pagina ttuale, poi cambio effettivamente]">
      <div
        :style="[
          this.actualPosition[0] === 'right'
            ? 'text-align: centre; width: 50%; padding-left: 70px'
            : 'text-align: centre; width: 50%; float:right',
        ]"
      >
        <h1>test</h1>
        
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          facilisis dolor ac lacus finibus, non viverra est gravida. Maecenas in
          feugiat mi. Suspendisse pharetra cursus sagittis. Mauris malesuada
          nisl sapien, at aliquet elit pulvinar a. Fusce pretium arcu non libero
          varius, vel fermentum turpis molestie. Cras at mauris vitae ligula
          mattis condimentum. Proin vitae nisi ut libero gravida elementum.
          Morbi porttitor, sem vitae pharetra porta, arcu nisi eleifend turpis,
          vitae scelerisque ex sapien a turpis. Vivamus lobortis ut purus ac
          accumsan. Proin ex tortor, iaculis in varius ut, lobortis sit amet
          turpis. Fusce ultrices diam sapien, non mattis mauris sollicitudin sit
          amet. Quisque mattis condimentum urna, a varius augue volutpat ut.
          Nullam mattis, felis eu rhoncus fermentum, sapien augue viverra
          tellus, non facilisis felis nibh elementum augue. Nulla in turpis eget
          justo efficitur cursus nec eget tellus. Nam pharetra quis erat in
          pharetra. Sed condimentum faucibus fermentum. Praesent ligula ligula,
          pretium quis tellus id, accumsan rutrum neque. Praesent nec purus id
          ipsum placerat rhoncus. Maecenas faucibus malesuada tempor. Vivamus et
          enim vitae arcu finibus placerat ut quis eros. Quisque semper leo id
          odio efficitur pellentesque. Duis eu nibh et urna molestie iaculis eu
          feugiat tortor. Etiam facilisis, urna et porttitor consectetur, lacus
          elit lobortis metus, vitae egestas nisl sem sit amet nulla.
          Pellentesque sit amet molestie est. Nunc faucibus nulla lorem, at
          luctus eros aliquam et. Proin nec erat diam. Cras congue orci non
          neque iaculis, at ornare neque volutpat. Cras iaculis at eros sit amet
          pulvinar. Aenean pellentesque viverra dolor, non ornare ex ornare vel.
          Sed eleifend vehicula tellus, sit amet molestie elit blandit sit amet.
          Nunc ac neque aliquam, vehicula nisl quis, luctus orci. Mauris
          tristique leo ac nibh fringilla, ut dictum mauris viverra. Fusce
          rutrum ex velit, in auctor leo lobortis vel. Sed efficitur erat a
          luctus mollis. Sed ut fringilla nisl. Cras ut eros tortor. Vivamus
          erat eros, tincidunt commodo semper quis, vehicula a tortor. Cras nisi
          enim, tristique ut fringilla a, interdum vel enim. Maecenas faucibus
          eget ligula non porttitor. Integer rhoncus non nibh eu tempor. Fusce
          posuere eget mi vitae tempus. Nam pellentesque augue vel ullamcorper
          bibendum. Mauris nec porta erat. Ut pretium ac justo ut imperdiet.
          Vestibulum id sapien eu mi consequat rhoncus vitae ac magna. Maecenas
          volutpat elit nec diam mattis, ut ultricies ante tempus. Praesent
          pellentesque sodales elit, at efficitur dui aliquam at. Duis
          consectetur metus eu odio commodo semper. Integer suscipit mi eu
          aliquet faucibus. Morbi nec pretium lorem. Duis convallis sem ut
          semper vulputate. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Pellentesque purus sapien,
          vestibulum id tellus sit amet, pretium dapibus velit.
        </h1>
      </div>
    </body>
  </transition>
</template>
<script>
export default {
  name: "LinksPage",
  data() {
    return {};
  },
  props: {
    actualPosition: String,
    activePageFromParent: String
  },
  methods: {
    test() {
      console.log(this.actualPosition);
      console.log(this.activePageFromParent);
    },
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
