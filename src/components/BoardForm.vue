<template>
    <div class="container">
        <div class="mb-3">
            <label for="title" class="form-label">제목</label>
            <input type="text" class="form-control" id="title" name="title" placeholder="제목을 입력해주세요.">
        </div>
        <div class="mb-3">
            <label for="contents" class="form-label">내용</label>
            <textarea class="form-control" id="contents" name="contents" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="uploadFile" class="form-label">파일 첨부</label>
            <input class="form-control" type="file" id="uploadFile" name="uploadFile">
        </div>
    </div>
</template>

<script>
import {
    onMounted,
    reactive
} from 'vue'

export default {
    name: 'BoardForm',
    components: {
    },
    setup() {
        const data = reactive({
            boardList: []
        });

        // springboot 프로젝트 게시판 API 를 호출해서 리스트 가져옴
        const save = () => {
            fetch("http://localhost:9000/restapi/board")
                    .then(response => response.json())
                    .then(response => {
                        data.boardList = response;
                    });
        };

        onMounted(() => {
            save();
        });

        return {
            data: data,
            getList: save
        }
    }
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
</style>
