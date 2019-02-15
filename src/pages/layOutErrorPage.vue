<template>
    <div>
        <div class="redDivFather">
            <div class="redDiv"></div>
        </div>
            <div class="blueDiv"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.redDivFather{
    position: fixed;
    top:0px;
}
.redDiv{
    background: red;
    width: 30%;
    height: 200px;
    z-index: 100;
    position: fixed;
}
.blueDivFather{
    z-index: 1;
}
.blueDiv{
    background: blue;
    width: 30%;
    height: 200px;
    z-index: 99;
    position: fixed;
    top:100px;
}

</style>


