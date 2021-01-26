var app = new Vue({
    el: 'nav',
    data: {
        baskets
    },
    computed: {
        // Récupère le nombre d'articles
        nbArticle: function () {
            return this.baskets.length;
        },
    }
});
