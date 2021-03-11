app.component('ship-display',{
    // props:{

    // },
    template:
        /*html*/
      `<div class="ship-display">
      <div class="product-container">
        <div class="product-image">
            <img v-bind:src="image">
        </div>
        <div>
        <h1>{{ shipName }}</h1>
            <p v-if="totalVoyage == 1">{{shipXO}}</p>
            <p v-if="totalVoyage >= 2">{{shipFO}}</p>
          <ul>
            <li v-for="(ship,index) in fleet" v-on:mouseover='shipSelect(index)' v-on:click='selectShip(index)'>{{ship.shipName}}</li>
          </ul>
          <!-- <div v-for="ship in ships" >{{ ship }}</div> -->

          <button class="button" v-on:click='warpOut'>Warp Out</button>
          <button class="button"v-on:click='fallBack'>Fall Back</button>
        </div>
      </div>
    </div>`,
    data:function(){
        return{
            fleet: [{shipId: 0, shipName: 'USS-Enterprise', shipCaptain: 'James T Kirk', shipFirstOfficer: 'Spock', totalVoyages: 0 ,shipImage: './assets/images/uss_enterprise.jpg'},
                    {shipId: 1, shipName: 'USS-Vengeance', shipCaptain: 'Admiral', shipFirstOfficer: 'TBA', totalVoyages: 0 ,shipImage: './assets/images/vengeance.png'},
                    {shipId: 2, shipName: 'Romulan-warbird', shipCaptain: 'NA', shipFirstOfficer: 'NA', totalVoyages: 0 ,shipImage: 'NA'},    
                    ],
            shipSelectId: 0,
            shipSelectT: 0,


        }
    },
    methods:{
        warpOut() {
            console.log(this.shipSelectT)
            this.fleet[this.shipSelectT].totalVoyages++,
            this.$emit("warp-out",this.fleet[this.shipSelectT].totalVoyages)
            console.log(this.fleet[this.shipSelectT].totalVoyages)
        },
        fallBack() {
            this.fleet[this.shipSelectT].totalVoyages = 0,
            this.$emit("reset")
        },
        selectShip(index){
            this.shipSelectT = index,
            console.log(this.shipSelectT)
        },
        shipSelect(index){
            this.shipSelectId = this.fleet[index].shipId
        }
    },
    computed:{
        image(){
            return this.fleet[this.shipSelectId].shipImage
        },
        shipName(){
            return this.fleet[this.shipSelectId].shipName
        },
        shipXO(){
            return this.fleet[this.shipSelectId].shipCaptain
            
        },
        shipFO(){
            return this.fleet[this.shipSelectId].shipFirstOfficer
        },
        totalVoyage(){
            return this.fleet[this.shipSelectId].totalVoyages
        }

        // onVoyage(){
            
        // }
    }
})