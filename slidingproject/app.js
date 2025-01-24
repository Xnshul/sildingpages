let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){let items = document.querySelectorAll('.slide').appendChild(items[0])})

prev.addEventListener('click', function(){let items = document.querySelectorAll('.slide').prepend(items.length-1)})

