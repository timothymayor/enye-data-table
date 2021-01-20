export default {
     data() {
         return {
             size: 20,
             currentPage: 0,
         }
     },
     computed: {
         pageCount() {
             let i = Number(this.users.length),
                 s = Number(this.size);

             return Math.floor((i + s - 1) / s);
         },
          paginationData() {
              let start = Number(this.currentPage) * Number(this.size),
                  end = start + Number(this.size);
                let result = this.users.filter(res => {
                    let data = res.FirstName.match(new RegExp(this.search, 'i')) 
                    || 
                    res.LastName.match(new RegExp(this.search, 'i')) 
                    || 
                    res.Email.match(new RegExp(this.search, 'i')) 
                    ||
                    res.Gender.match(new RegExp(this.search, 'i')) 
                    ||
                    res.UserName.match(new RegExp(this.search, 'i'));
                    return data;

                }).slice(start, end);
                return result;
          },
     },
     methods: {
         nextPage() {
             this.currentPage++;
         },
         prevPage() {
             this.currentPage--;
         },
         beforeEnter (el) {
        el.style.opacity = 0
        el.style.height = 0
        },
        enter(el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
            el,
            { opacity: 1, height: '1.6em' },
            { complete: done }
            )
        }, delay)
        },
        leave(el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
            )
        }, delay)
        }

     }
}