Vue.component('men-itm', {
    props: ['itm'],
    template: '<li class="men-itm" v-on:click="displayVehicule()">{{ itm.titre }}<i :class="[itm.iconClass]" aria-hidden="true"></i></li>',
    methods: {
        displayVehicule: function () {
            test = "oui";
        }
    },
})

var app = new Vue({
    el: '#menu, #contenu',
    data: {
        vehicules
    },
    created:function(){
        this.vehicules.forEach(function(vehicule, index) {
            switch (vehicule.cat) {
                case 'moto':
                vehicule.iconClass = 'fa fa-motorcycle my-darkblue';
                break;
                case 'velo':
                vehicule.iconClass = 'fa fa-bicycle my-green';
                break;
                case 'voiture':
                vehicule.iconClass = 'fa fa-car my-orange';
                break;
                case 'van':
                vehicule.iconClass = 'fa fa-bus my-red';
                break;
                default:
                vehicule.iconClass = 'fa fa-file-image-o my-lightblue';
            }
        });
    },
    // methods: {
    //     displayVehicule: function () {
    //         test = "oui";
    //     }
    // },
})
