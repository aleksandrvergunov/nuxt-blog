import Vue from 'vue'
import Element from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import VueMarkdown from 'vue-markdown'

import DateFilter from '@/common/filters/date.filter'

locale.use(lang)
Vue.use(Element)
Vue.component('vue-markdown', VueMarkdown)

Vue.filter('date', DateFilter)
