Vue.component('display-item', {
    props: ['item'],
    template: `
    <div class="col-4">
        <div class="p-2 card text-white">
            <img v-bind:src="item.img" class="card-img" alt="">
            <div class="card-img-overlay">
                <span class="card-text bg-dark">{{ item.likes }} <i class="fas fa-heart"></i></span>
            </div>
        </div>
    </div>
    `
    // template: '<div class="men-itm" v-on:click="displayVehicule()">{{ itm.titre }}<i :class="[displayIcon(itm.cat)]" aria-hidden="true"></i></div>'
})

var app = new Vue({
    el: '.container',
    data: {
        articles
    }
});
