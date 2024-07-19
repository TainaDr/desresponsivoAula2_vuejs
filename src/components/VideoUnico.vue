<template>
      <div id="video"><iframe id="video" width="100%" height="515"
                  src="https://www.youtube.com/embed/sVnfv3-SeuU?si=KvnzSI5xdwZEru8u" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe></div>
      <br>

</template>

<script>
export default { 
      name: 'VideoUnico' 
}
</script>

<style>
#video {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
}
</style>