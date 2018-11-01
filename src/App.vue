<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', left: 0, top: 0, right: 0}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">图数据库可视化</div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger class="sider-menu" breakpoint="md">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>可视化
                            </template>
                            <MenuItem router-link to="/" name="1-1">Option 1</MenuItem>
                            <MenuItem router-link to="/tab2" name="1-2">Option 2</MenuItem>
                            <MenuItem router-link to="/tab3" name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout class="content">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>图数据库可视化</BreadcrumbItem>
                        <BreadcrumbItem>{{tabName}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '40px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo {
    width: 200px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #ffffff;
    line-height: 30px;
    font-size: 20px;
}
.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.sider-menu {
    background: #ffffff;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 64px;
    overflow: auto;
}
.content {
    padding: 0 24px 24px;
    position: fixed;
    left: 200px;
    top: 64px;
    height: 100vh;
    right: 0;
    overflow: auto;
}
</style>

<script>
export default {
    name: "app",
    data() {
        return {
            tabName: ""
        };
    },
    watch: {
        $route: function(newUrl) {
            this.tabName = newUrl.name;
        }
    }
};
</script>
