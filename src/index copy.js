// require("./css/style.less");
const Vue = require("vue/dist/vue.common");

// const hello = require("./component/hello.vue");

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

// Vue.config.productionTip = false;

// 全局组件
let count = 1;

// 组件名
// 字母全小写且必须包含一个连字符
Vue.component('demo-1', {
    template: "<h1>全局组件 {{msg}}</h1>",
    data() {
        return {
            msg: count++,
        }
    }
})

Vue.component('anchored-heading', {
    render: function (createElement) {
        // console.log(this.$slots);
        return createElement(
            'h' + this.level,   // 标签名称
            this.$slots.default // 子节点数组
        )
    },
    props: {
        level: {
            // required: true
        }
    }
})


Vue.component('anchored-heading-2', {
    render: function (createElement) {
        console.log(this.$scopedSlots);
        // console.log(this);
        return createElement(
            'h2',   // 标签名称
            {
                // 与 `v-bind:class` 的 API 相同，
                // 接受一个字符串、对象或字符串和对象组成的数组
                'class': {
                    foo: true,
                    bar: false
                },

                // 与 `v-bind:style` 的 API 相同，
                // 接受一个字符串、对象，或对象组成的数组
                style: {
                    color: 'red',
                    fontSize: '14px',
                    opacity: .5
                },

                // 普通的 HTML attribute
                attrs: {
                    id: 'foo',
                    "data-title": "hello, world."
                },

                // 组件 prop
                // props: {
                //     myProp: 'bar'
                // },

                // DOM property
                domProps: {
                    // innerHTML: 'baz 2134234'
                },

                // 事件监听器在 `on` 内，
                // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
                // 需要在处理函数中手动检查 keyCode。
                on: {
                    click: function () {
                        console.log("anchored-heading-s");
                    }
                },
                // 仅用于组件，用于监听原生事件，而不是组件内部使用
                // `vm.$emit` 触发的事件。
                // nativeOn: {
                //     click: this.nativeClickHandler
                // },

                // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
                // 赋值，因为 Vue 已经自动为你进行了同步。
                directives: [
                    // {
                    //     name: 'my-custom-directive',
                    //     value: '2',
                    //     expression: '1 + 1',
                    //     arg: 'foo',
                    //     modifiers: {
                    //         bar: true
                    //     }
                    // }
                ],

                // 作用域插槽的格式为
                // { name: props => VNode | Array<VNode> }
                // scopedSlots: {
                //     default: props => createElement('span', props.text)
                // },

                // 如果组件是其它组件的子组件，需为插槽指定名称
                // slot: 'default',

                // 其它特殊顶层 property
                // key: 'myKey',
                // ref: 'myRef',

                // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
                // 那么 `$refs.myRef` 会变成一个数组。
                // refInFor: true
            },
            this.$slots.default
        )
    },
    props: {
        level: {
            // type: [Number, String],
            // required: true
        }
    }
})


$(function () {
    $("h1").html("Coley48");

    let app = new Vue({
        // comments: true,
        el: "#app",
        data: {
            number: 100,
            html: "<span>this is a span tag.</span>",
            style: "A",
            classObj: {
                "A": true,
                "B": false,
                "C": false,
            },

            isLogin: false,
            code: 1,
            isShow: true,

            count: 0,
            arr: ['a', 'b', 'c'],
            obj: {
                name: "coley",
                age: 22,
                sex: "male",
            },

            text: "text",
            radio: "male",
            checkbox: [],
            checked: false,
            selected: "",

            text: "Hello, world.",
            textB: "text-B",
            firstName: "Coley",
            lastName: "Brooks",

            list: [
                {
                    id: 0,
                    title: "java",
                    content: "null"
                }, {
                    id: 1,
                    title: "C++",
                    content: "0"
                }, {
                    id: 2,
                    title: "go",
                    content: "nil"
                }, {
                    id: 3,
                    title: "javascript",
                    content: "undefined"
                }
            ],
            obj: {
                name: "Coley48",
                age: 22
            },

            rawId: "john"
        },
        watch: {
            text() {
                this.textB = "Hello, world.";
            },

            textB() {
                this.text = "Hello, world.";
            }
        },

        methods: {
            add(event, para) {
                console.log(event.target);
                this.count++;
            },

            handler() {
                console.log('baidu.com');
            },

            // 每次调用重新渲染
            reverseFunction() {
                return this.text.split('').reverse().join('');
            },

            changeName() {
                if (this.firstName === "Coley") {
                    this.fullName = "Stephen Coley";
                } else {
                    this.fullName = "Coley Brooks";
                }
            }
        },

        components: {
            "my-component": require("./component/hello.vue").default,
            // hello,
            // 局部组件
            "demo-2": {
                name: "noIdea",
                tag: "p",
                // template: "<div>这是一个局部组件。<div>"
                template: "#temp",
                props: ['title', 'content'],
            },

            "demo-3": {
                props: ["item"],
                // 禁止组件继承 attribute
                // 注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
                inheritAttrs: false,
                template: `
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                    <p v-bind="$attrs" >$attrs: {{$attrs}}</p>
                </div>
                `
            },

            "demo-4": {
                props: ["obj"],
                template: `
                    <div>
                        <h3>{{obj.name}}</h3>
                        <p>{{obj.age*2}}</p>
                    </div>
                `
            }
        },

        filters: {
            capitalize: function (value, ...rest) {
                console.log(value, rest);
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },

        // 生命周期钩子函数
        beforeCreate() {
            console.log("beforeCreate:", this.$el, this.$data);
            // undefined undefined
        },
        created() {
            console.log("created:", this.$el, this.$data);
            // undefined {}
            // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        },
        beforeMount() {
            console.log("beforeMount:", this.$el, this.$data);
            // <...{{}}> {}
        },
        mounted() {
            console.log("mounted:", this.$el, this.$data);
        },
        // beforeUpdate() {
        //     console.log("beforeUpdate:", this.$el, this.$data);
        // },
        // updated() {
        //     console.log("updated:", this.$el, this.$data);
        // },
        // beforeDestroy destroyed

        // 计算属性
        computed: {

            // 依赖缓存，只有数据变化时才重新渲染，性能高
            // 默认只有getter
            reverseString: function () {
                return this.text.split('').reverse().join('');
            },

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

    // 外部监听属性
    app.$watch('count', function (newValue, oldValue) {
        console.log(newValue, oldValue);
    })

    setTimeout(() => {
        app.style = "B";
        app.classObj = null;
        app.isLogin = true;
    }, 3000);

    // console.log(app.$el);
    // console.log(app.number);
    // console.log(app.$refs.testRef);


    // 判断是否在服务器端
    console.log(app.$isServer);

    // 可以通过将 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。

    // window.addEventListener("click", (e) => { console.log("Window was clicked."); });
});

console.log(process.env.NODE_ENV);