const app = Vue.createApp({
    data: function(){
            return {
                ships: ['USS - Enterprise NCC-1701','Vengeance'],
                description: "Let's explore the final frontier!",
                image: './assets/images/uss_enterprise.jpg',
                link: 'https://www.anovos.com/products/star-trek-discovery-ncc-1701-u-s-s-enterprise-constitution-class-studio-scale-starship-filming-miniature',
                captain_status: 3,
                crew:[
                    {id : '3', name:'J T Kirk', position:'Captain'},
                    {id : '2', name:'Spock', position:'first_officer'},
                    {id : '1', name:'TBA', position:'TBA'}
                ],
                ship_status: ['Docked', 'on voyage', 'destroyed'],
                ship_sts: 3,
                ship_health: 3,
                trips: 1
            }
        },
    methods: {
        warpOut() {
            this.ship_sts -= this.trips,
            this.ship_health -= 1,
            this.captain_status -= 1,
            this.trips ++
        },
        fallBack() {
            this.ship_sts += 1
            // this.ship_health += 1
            // this.captain_status += 1
        },
        changeShip(shipImage){
            if (shipImage == 'USS - Enterprise NCC-1701'){
                this.image = './assets/images/uss_enterprise.jpg'
            }else if (shipImage == 'Vengeance'){
                this.image = "./assets/images/vengeance.png"
            }
        }

    }
})