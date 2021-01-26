const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleId = urlParams.get('article')

Vue.component('display-color', {
    props: ['item'],
    template: `
        <div class="border border-dark me-2 rounded-circle article-color" :style="'background-color: ' + item"></div>
    `})

Vue.component('display-size', {
    props: ['item'],
    template: `
        <div class="border-end border-dark px-2">{{ item }}</div>
    `})

var app = new Vue({
    el: '.container',
    data: {
        articles
    },
    computed: {
        // Récupère les infos de l'artice actuellement sur la page
        currentArticle: function () {
            return this.articles.find(x => x.id == articleId)
        },
    },
    methods: {
        // Ajoute un like à l'article
        addLikes: function () {
            this.articles.find(x => x.id == articleId).likes++;
        },
    }
});
