<template>
	<section>
    <router-view></router-view>
    <hint :on="hintOn" :msg="hintMsg"></hint>
    <spinner v-show="loading"></spinner>
  </section>
</template>

<script type="text/ecmascript-6">

</script>
