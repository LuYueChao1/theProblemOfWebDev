<template>
    <div>
        <form action="http://localhost:8080/mallServer" method="post" id="submitForm">
            <input id="input" v-model="inputData" ref="refInput" name='datainput'/>
        </form>
        <input type="submit" @click="submitOrder" />
        <div></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputData:''
        }
    },
    methods:{
        submitOrder(){
            //this.inputData='提交数据已被修改'
            document.getElementById('input').value='提交数据已被修改'
            //alert(document.getElementById('input').value)
            //this.$refs.refInput.value='提交数据已被修改'
            //document.getElementById('submitForm').submit();
            //alert(document.getElementById('input').value)
            this.$nextTick(()=>{
                alert('')
                document.getElementById('submitForm').submit();
            })
        }
    }
    
}
</script>
<style>

</style>


