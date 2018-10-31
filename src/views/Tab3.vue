<template>
    <div>
        <Row>
            <Col span="6">
                <Row>
                    <Col span="24" class="search-input">
                        <Input v-model="origin" placeholder="出发地"/>
                    </Col>
                    <Col span="24" class="search-input">
                        <Input v-model="target" search enter-button="出发" placeholder="目的地" @on-search="go"/>
                    </Col>
                </Row>
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="24" class="search-input">
                <p v-if="origin && target">你输入的是: {{ origin + "和" + target }}</p>
                <p v-else>你为什么要清空{{origin ? "目的地" : (target ? "出发地" : "出发地和目的地")}}</p>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: "tab3",
    data() {
        return {
            origin: "杭州",
            target: "北京"
        };
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {},
        go() {
            if (this.origin && this.target){
                this.$Notice.open({
                    title: '你出发啦！',
                    desc: this.origin + "->" + this.target
                });
            } else {
                alert("请输入出发地和目的地");
            }
            
        }
    }
};
</script>

<style>
.search-input {
    padding: 5px;
}
</style>
