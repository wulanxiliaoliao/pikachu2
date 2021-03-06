const string = `.skin {
    position: relative;
    background: #ffe500;
    height: 50vh;
}

.san {
    height: 0px;
    width: 0px;
    border: 10px solid transparent;
    border-color: black transparent transparent;
    border-bottom: none;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(8deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-8deg);
    }


    100% {
        transform: rotate(0deg);
    }

}

.san:hover {
    transform-origin: center bottom;
    /*中心以下面为基准*/
    animation: wave 0.2s infinite linear
}

.yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    width: 64px;
    height: 64px;
    border: 2px solid #000000;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
    background: white;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 180px;
}

.mouth .up {
    position: relative;
    top: -26px;

}

.mouth .up .lip {
    border: 5px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe500;
    z-index: 1;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    background: #ffe500;
    position: absolute;
    bottom: 0px;
}

.mouth .up .lip::after {
    content: '';
    display: block;
    width: 90px;
    height: 10px;
    position: absolute;
    top: -10px;
    background: #ffe500;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.left::after {
    left: 50%;
    margin-left: -44px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .up .lip.right::after {
    right: 50%;
    margin-right: -44px;
}

.mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -100px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 2px solid black;
    width: 200px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -100px;
    background: #9a010a;
    border-radius: 100px/500px;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    background: #ff4760;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    z-index: 5;
    margin-left: -44px;
    border-radius: 50%;
}

.face.left {
    transform: translateX(-180px);
    background: #ff1800;
}

.face.right {
    transform: translateX(180px);
    background: #ff1800;
}`

export default string
