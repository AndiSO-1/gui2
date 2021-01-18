Vue.component('display-item', {
    props: ['item'],
    template: `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <a class="card p-2" v-bind:href="'article.html?article=' + item.id">
                <img v-bind:src="item.img" class="card-img" alt="">
                <div class="card-img-overlay d-flex">
                    <span class="card-text bg-light text-dark border border-dark shadow mt-auto ms-auto px-2 py-1">
                        {{ item.likes }} <i class="fas fa-heart text-danger"></i>
                    </span>
                </div>
            </a>
        </div>
    `})

var app = new Vue({
    el: '.container',
    data: {
        articles
    }
});
