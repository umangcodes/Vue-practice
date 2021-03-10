const app = Vue.createApp({
    data: function(){
            return {
                ship: 'USS - Enterprise NCC-1701',
                description: "Let's explore the final frontier!",
                image: './assets/images/uss_enterprise.jpg',
                link: 'https://www.anovos.com/products/star-trek-discovery-ncc-1701-u-s-s-enterprise-constitution-class-studio-scale-starship-filming-miniature',
                captain_status: 1,
                crew:[
                    {id : '1', name:'J T Kirk', position:'Captain'},
                    {id : '2', name:'Spock', position:'first_officer'},
                    {id : '3', name:'TBA', position:'TBA'}
                ],
                // captain: 'J T Kirk',
                // first_officer: 'Spock',
                // highest_rank: 'TBA',
                docked: true
            }
        }
    })