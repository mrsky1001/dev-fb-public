// /*
//  * Copyright (©) 21.10.2021, 14:34. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
//  */
//
// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         // this is required because current typings of vee-validate have the old $validates in them, which doesn't work anymore
//         $_veeValidate?: any;
//     }
// }
import Vue from "vue";

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '@highlightjs/vue-plugin'
