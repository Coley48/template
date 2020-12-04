// require("./css/style.less");
const Vue = require("vue/dist/vue.common");
import hello from "./component/hello.vue"

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

Vue.config.productionTip = false;

$(function () {

    let app = new Vue({
        // comments: true,
        el: "#app",
        data: {
            message: "Coley48"
        },
        watch: {
        },

        methods: {
        },

        components: {
            "my-component": hello
            // "my-component": require('./component/hello.vue').default

        },

        filters: {
            capitalize: function (value, ...rest) {
                console.log(value, rest);
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },

        // 计算属性
        computed: {

            fullName: {
                get: function () {
                    return this.firstName + " " + this.lastName;
                },

                set: function (newValue) {
                    let name = newValue.split(' ');
                    this.firstName = name[0];
                    this.lastName = name[1];
                }
            }
        }
    })

    // 判断是否在服务器端
    console.log(app.$isServer);

    // 可以通过将 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。

    // window.addEventListener("click", (e) => { console.log("Window was clicked."); });
});

console.log(process.env.NODE_ENV);