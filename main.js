const app = Vue.createApp({
    data: function(){
            return {
                ship_status: {0:'Docked', 1:'on voyage', 2:'Destroyed'},
                shipLocation: 'Docked'
            }
        },
    methods: {
        updateStatus(index){
            if(index <= 2){
                this.shipLocation = this.ship_status[index]
            }
            else{
                this.shipLocation = 'NA'
            }
        },
        resetShip(){
            console.log("System Reset!")
        }
    }
})