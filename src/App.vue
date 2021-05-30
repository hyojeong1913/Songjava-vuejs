<template>
    <div class="container">
        <div class="list-group">
            <a v-for="board in data.boardList" v-bind:key="board.boardSeq" class="list-group-item list-group-item-action active" aria-current="true">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{board.boardType}}</h5>
                    <small>{{board.regDate}}</small>
                </div>
                <p class="mb-1">{{board.title}}</p>
                <small>{{board.contents}}</small>
            </a>

            <a v-if="data.boardList.length == 0" class="list-group-item list-group-item-action active" aria-current="true">
                게시글이 없습니다.
            </a>
        </div>
    </div>
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
