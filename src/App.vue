<template>
    <router-view></router-view>
</template>

<script>
import {
    onMounted,
    reactive
} from 'vue'

export default {
    name: 'App',
    components: {
    },
    setup() {
        const data = reactive({
            boardList: []
        });

        // springboot 프로젝트 게시판 API 를 호출해서 리스트 가져옴
        const getList = () => {
            fetch("http://localhost:9000/getListApi")
            .then(response => response.json())
            .then(response => {
                data.boardList = response;
            });
        };

        onMounted(() => {
            getList();
        });

        return {
            data: data,
            getList: getList
        }
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
</style>
