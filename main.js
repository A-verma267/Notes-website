gsap.to(".secondpage .achieve", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .achieve ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2 // use to repeat it 
        // markers: true

    }
})
gsap.to(".secondpage .semihead", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .semihead ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".secondpage .para", {
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .para ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box1", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box1",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box3", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box3",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box2", {
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box2",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
function toggleMenu() {
    let blurb = document.querySelector('.header');
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active');


    if (sideMenu.classList.contains('active')) {
        console.log("hey")
        blurb.classList.add('blur');
    }

    document.querySelector(".close-btn").addEventListener("click", () => {
        blurb.classList.remove('blur')
    })
}
let keywords=[
    'Web Development',
    'Ai with Python',
    'Cyber security',
    'C language',
    'C++ language',
    'Java Language',
    'Python Language',
    'Oops Language'

]
let input= document.querySelector("#input");
let result= document.querySelector("#resultBox")
input.addEventListener("click",()=>{
    result.style.display="block"
    if(input.value.length===0){
        result.innerHTML=`<li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./web development.html">Web Development</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./ai with python.html">Ai with Python</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./cyber security.html">Cyber security</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./c language.html">C language </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./c++ language.html">C++ language </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./java language.html">Java Langauge </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./python.html">Python Langauge </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./oops language.html">Oops Langauge </a></li>`
    }
    
})
input.onkeyup = function () {
    let results = [];
    let inputs = input.value;
    if (inputs.length) {
        results = keywords.filter((k) => {
            return k.toLowerCase().startsWith(inputs.toLowerCase());
        })
    }

    display(results);
    //   if(!result.length){
    //      resultBox.innerHTML="";
    //   } 
}

function display(results) {
    result.style.display = 'block';
    const content = results.map((list) => {
        return "<li class='list-none grid-box d-flex j-center items-center' onclick=selectInput(this)>" + list + "</li>";
    })
    result.innerHTML = content.join('');

    if (input.value.length == 0) {
        result.innerHTML = `<li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./web development.html">Web Development</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./ai with python.html">Ai with Python</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./cyber security.html">Cyber security</a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./c language.html">C language </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./c++ language.html">C++ language </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./java language.html">Java Langauge </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./python.html">Python Langauge </a></li>
                <li class="list-none grid-box d-flex j-center items-center"><a target="_blank"
                        href="./oops language.html">Oops Langauge </a></li>`;
    }

}
function selectInput(list) {
    input.value = list.innerHTML;

}
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = input.value.trim().toLowerCase();
        if (value === 'ring' || value === 'rings') {
            // Navigate to ring.html
            window.location.href = './ring.html';
        } else if (value === 'web development') {
            window.location.href = './web development.html';
        }
        else if (value === 'ai with python') {
            window.location.href = './ai with python.html';
        }
        else if (value === 'c language') {
            window.location.href = './c language.html';
        }
        else if (value === 'c++ language') {
            window.location.href = './c++ language.html';
        }
        else if (value === 'cyber security') {
            window.location.href = './cyber security.html';
        }
        else if (value === 'java language') {
            window.location.href = './java language.html';
        }
        else if (value === 'oops language') {
            window.location.href = './oops language.html';
        }
        else if (value === 'python language') {
            window.location.href = './python.html';
        }
        else {
            alert('No results found');
        }
    }
}) 
document.addEventListener('click', (e) => {
    const isClickInside = result.contains(e.target) || input.contains(e.target);
    if (!isClickInside) {
        result.style.display = 'none';
    }
});