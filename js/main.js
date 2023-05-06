let slidimgs = Array.from(document.querySelectorAll('.slider-container img'));
let imgcount = slidimgs.length;
current = 1;
let slidnum = document.getElementById('slide-number')
let prevbtn = document.getElementById('prev')
let nextbtn = document.getElementById('next')
prevbtn.onclick = prevslide;
nextbtn.onclick = nextslide;
let pagul = document.createElement('ul');
pagul.setAttribute('id', 'pagul');
for (let i = 1; i <= imgcount; i++) {
    let pagli = document.createElement('li');
    pagli.setAttribute('data-index', i);
    pagli.appendChild(document.createTextNode(i));
    pagul.appendChild(pagli);
}
document.getElementById('indicators').appendChild(pagul)
let ulcreat = document.getElementById('pagul')
let ularray = Array.from(document.querySelectorAll('#pagul li'));
for (let i = 0; i < ularray.length; i++) {
    ularray[i].onclick = function () {
        current = parseInt(this.getAttribute('data-index'))
        checker()
    }

}
checker()
function nextslide() {
    if (nextbtn.classList.contains('disabled')) {
        return false;
    } else {
        current++;
        checker()
    }
}
function prevslide() {
    if (prevbtn.classList.contains('disabled')) {
        return false;
    } else {
        current--;
        checker()
    }
}
function checker() {
    slidnum.textContent = `slide ${current} of ${imgcount}`;
    removeclass()
    slidimgs[current - 1].classList.add('active');
    ulcreat.children[current - 1].classList.add('active')
    if (current == 1) {
        prevbtn.classList.add('disabled')
    } else {
        prevbtn.classList.remove('disabled')
    }
    if (current == imgcount) {
        nextbtn.classList.add('disabled')
    } else {
        nextbtn.classList.remove('disabled')
    }
}
function removeclass() {
    slidimgs.forEach(function (img) {
        img.classList.remove('active');
    })
    ularray.forEach(function (li) {
        li.classList.remove('active')
    })
}