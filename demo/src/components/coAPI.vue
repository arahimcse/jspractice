
<!-- VUE Script Setup -->
<!-- 
    <script  setup>
    const message = "This is abdur rahim"
    function date(){
        return 'this is karim'
    }
    const person = {firstName:"Abdur", lastName:"Rahim", getFullName(){return this.firstName + this.lastName}}
    </script> 
-->

<!-- Composition API -->
<!-- <script>
export default {
    setup(){
        const message = 'this is abdur Rahim'
        function date(){return 'this is karim'}
        const person = {firstName:'sumaia', lastName:'   aktar', getFullName(){return this.firstName + this.lastName}}

        return { message, date, person }
    }
}
</script> -->

<!-- Options API -->
<script> 
export default {
    data()
    {
        return {
            message:'this is abdur rahim',
            date(){return 'this is karim'},
            person: {firstName:"Abdur", lastName:"Rahim", getFullName(){return this.firstName + " " + this.lastName}}
        }
    }
}
</script>

<template>
{{ message }} -- {{ date() }} -- {{ person.getFullName() }}
</template>

<style  scoped>
    
</style>


