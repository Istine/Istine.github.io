const slideInOnScroll = () => {
    const container = document.querySelector(".container")
    const scrollHeight = document.querySelector(".skills").scrollHeight
    window.addEventListener("scroll", (e) => {
        console.log(window.scrollY)
        if(window.scrollY > 180) {
            let children = [...document.querySelector(".skills").children]
            let delay = 100
            children.forEach(child => {
                    child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:${delay}px;`
                    delay += 250
            })
        }
    })
}
slideInOnScroll()