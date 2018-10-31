<template>
    <div id="myChart" :style="{width: '60vh', height: '400px', margin: '0 auto'}"></div>
</template>

<script>
export default {
    name: "tab1",
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let echarts = this.$echarts;
            let myChart = echarts.init(
                document.getElementById("myChart")
            );
            
            myChart.setOption({
                title: { text: "在Vue中使用echarts" },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        }
    }
};
</script>

<style>
</style>
