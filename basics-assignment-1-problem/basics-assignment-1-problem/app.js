const app = Vue.createApp({
    data() {
        return {
            name: 'Facking Deivid',
            age: 23,
            vueLink: 'https://www.https://en.wikipedia.org/wiki/Brown_bear#/media/File:2010-kodiak-bear-1.jpg.com/https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/330px-2010-kodiak-bear-1.jpg?https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fbear&psig=AOvVaw22nT7Zhj0AP5WAxyHWotKX&ust=1670210347509000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiP2cWA3_sCFQAAAAAdAAAAABAJ=https%3A%2F%2Fwww.bearsmart.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fbear-look.jpg&imgrefurl=https%3A%2F%2Fwww.bearsmart.com%2Fblog%2Fwhy-bears%2F&tbnid=Eib4NuKYmn-T9M&vet=12ahUKEwjRjf3EgN_7AhUVwikDHddsA2EQMygFegUIARDpAQ..i&docid=-P6uJGNKYjZWpM&w=730&h=365&q=bear&ved=2ahUKEwjRjf3EgN_7AhUVwikDHddsA2EQMygFegUIARDpAQ',
        };
    },
    methods: {
        sumAge() {
            const totAge = this.age + 5;
            return totAge;
        },

        randNum(){
            return Math.random();
        }
    },
});

app.mount('#assignment');