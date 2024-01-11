<script setup>
const route = useRoute()
const  { data, error } = await useFetch(`http://www.omdbapi.com/?apikey=94b94659&i=${route.params.id}`,  
{
    pick: ["Plot",  "Title", "Error"],
    key: `/movies/${route.params.id}`,
})

if (error.value) {
    // lidar com o erro
}

if (data.value.Error === " Incorrect IMDc ID.") {
    showError({statusCode: 404, statusMessage: "Page Not Found"}) 
}

useHead({
    title: data.value.Title
})
</script>

<template>
    <pre>
        {{data}}
    </pre>
</template>

<style scoped></style>