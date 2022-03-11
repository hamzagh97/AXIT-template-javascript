    /* body paddingtop */
    document.querySelector("body").style.paddingTop = document.querySelector("nav").offsetHeight + "px";

    /* active link */
    document.querySelector(".navbar-toggle").addEventListener("click", function() {
        this.classList.toggle('toggle')
        document.querySelector(".navbar-right").classList.toggle("collapsed");
    });

    /* scroll to element */
    /* sync links with sections */
    document.querySelectorAll(".navigation li a").forEach(function(a) {
        a.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(".navbar-toggle").classList.toggle('toggle')
            document.querySelector(".navbar-right").classList.toggle("collapsed");
            let scrollSection = document.querySelector(e.target.dataset.scroll).offsetTop - document.querySelector("nav").offsetHeight;
            window.scrollTo({ top: scrollSection, behavior: 'smooth'});
        });
    });
    
    /* fixed-menu */
    document.querySelector('.fixed-menu .fa-gear').addEventListener('click' , function(){
        this.parentElement.classList.toggle('visible');
        if (this.parentElement.classList.contains('visible')) {
            this.parentElement.style.left = 0;
            document.querySelector('body').style.paddingLeft = this.parentElement.offsetWidth + "px";
        }

        else {
            this.parentElement.style.left = "-" + this.parentElement.offsetWidth + "px";
            document.querySelector('body').style.paddingLeft = 0;
        }

    });

    document.querySelectorAll(".tabs button").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            document.querySelectorAll(".tabs button").forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            document.querySelectorAll(".content div").forEach(function(div) {
                div.style.display = "none";
                div.classList.remove("activetext")
            })
            document.querySelector(e.target.dataset.show).classList.add("activetext");
        })
    })
            
    window.addEventListener("scroll", function() {
        document.querySelectorAll("section").forEach(function(section){
            if ((window.scrollY >= section.offsetTop - document.querySelector("nav").offsetHeight) && (window.scrollY <= section.offsetTop + section.offsetHeight - document.querySelector("nav").offsetHeight)){
                let sectionId = section.getAttribute('id');
                let menuList = document.querySelectorAll('.navigation li a');
                for (i=0 ; i<menuList.length; i++) {
                    menuList[i].classList.remove('active');
                    document.querySelector('.navigation li a[data-scroll="#' + sectionId + '"]').classList.add('active');
                }
            }
        });
    })

    
    // let numbers = document.querySelectorAll(".number");
    // let sectionPricing = document.querySelector(".pricing");
    // let started = false;

    // window.addEventListener("scroll", function() {
    //     if (window.scrollY >= sectionPricing.offsetTop - document.querySelector("nav").offsetHeight) {
    //         if (!started) {
    //             numbers.forEach((number) => countStart(number))
    //         }
    //         started = true;
    //     }
    //     function countStart(el) {
    //         let goal = el.dataset.goal;
    //         let count = setInterval(function() {
    //             el.textContent++;
    //             if (el.textContent == goal) {
    //                 clearInterval(count);
    //             }
    //         }, 500 / goal);                            
    //     }
    // })
    