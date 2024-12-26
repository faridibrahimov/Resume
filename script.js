let links = document.querySelectorAll('.headera');
    let targetID;
    links.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            targetID = element.getAttribute('href');
            
            document.querySelector(targetID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })