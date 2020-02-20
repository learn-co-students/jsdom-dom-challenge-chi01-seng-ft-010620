let likeHash = {'1': 2};

function likeCount(num){
    likeHash[num] = likeHash[num] || 0;
    likeHash[num] += 1;
}

let plus = document.getElementById('plus');
plus.addEventListener('click', function(event) {
   c = parseInt(document.getElementById('counter').innerHTML);
   c += 1
   document.getElementById('counter').innerHTML = c
});

let minus = document.getElementById('minus');
minus.addEventListener('click', function(event) {
   c = parseInt(document.getElementById('counter').innerHTML);
   c -= 1
   document.getElementById('counter').innerHTML = c
});

let like = document.getElementById('heart');
like.addEventListener('click', function(event) {
   c = parseInt(document.getElementById('counter').innerHTML);
   likeCount(c);
  l = document.querySelector('.likes');
  l.innerHTML += `<li>${c}. has ${likeHash[c.toString()]} likes</li>`;
  
});



