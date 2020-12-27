const slideInOnScroll = () => {
    const mobileScreen = 600 // mobile screen size
    const container = document.querySelector(".container")
    const scrollHeight = document.querySelector(".skills").scrollHeight
    window.addEventListener("scroll", (e) => {
        const { scrollY, innerWidth } = window
        let children = [...document.querySelector(".skills").children]
        let delay = 100
        if (scrollY > 180 && innerWidth > mobileScreen) {
            children.forEach(child => {
                child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:${delay}px;`
                delay += 250
            })
        }
        else if (scrollY > 180 && innerWidth < mobileScreen) {
            let new_margin = 40, bottom_elem = 40, top = 150
            children.forEach((child, index) => {
                if (index > 1 && index < children.length - 1) {
                    child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:${bottom_elem}px; top:${top}px;`
                    bottom_elem += 170
                    delay += 250
                }
                else if (index <= 1) {
                    child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:${new_margin}px;`
                    new_margin += 170
                    delay += 250
                }
                else if (index === children.length - 1) {
                    child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:130px; top:300px;`
                }
            })
        }

        const remarks = document.querySelector(".testimonials")
        const message = document.querySelector(".message")
        const cover = document.querySelector("#slider")
        const image = document.querySelector("#client_msg")
        const heading = document.querySelector(".testimonials h1")
        const role = document.querySelector(".testimonials h3")
        const button = document.querySelector(".testimonials button")
        if (window.scrollY >= 1400 && innerWidth > mobileScreen) {
            message.style.cssText = "animation: message 1s ease 300ms forwards;"
            heading.style.cssText = `animation:name 500ms ease 100ms forwards;`;
            role.style.cssText = `animation:role 400ms ease 200ms forwards;`;
            button.style.cssText = `animation:button 400ms ease 300ms forwards;`;
            cover.style.cssText = "animation:cover 1s ease 100ms forwards"
            image.style.cssText = "animation:image 1s ease  forwards"
        }
        if(window.scrollY >= 900 && innerWidth < mobileScreen) {
            message.style.cssText = "animation: mobileMessage 1s ease 300ms forwards;"
            heading.style.cssText = `animation:mobileName 500ms ease 100ms forwards;`;
            role.style.cssText = `animation:mobileRole 400ms ease 200ms forwards;`;
            button.style.cssText = `animation:mobileButton 400ms ease 300ms forwards;`;
            cover.style.cssText = "animation:mobileCover 1s ease 100ms forwards"
            image.style.cssText = "animation:image 1s ease  forwards"
        }
    })

    const element = document.getElementById("project_name")
    const element1 = document.getElementById("project_name1")
    const project = document.querySelector(".project")
    const project1 = document.querySelector(".project1")
    const next = document.querySelector(".next")
    const prev = document.querySelector(".previous")
    next.addEventListener("click", (e) => {
        e.preventDefault()
        element.style.top = "-350px";
        project.style.top = "-550px";
        element1.style.top = "-150px";
        project1.style.top = "-200px";
        next.style.display = "none"
        prev.style.cssText = "animation: animate 1s linear infinite alternate;"
    })
    prev.addEventListener("click", (e) => {
        e.preventDefault()
        element.style.top = "250px";
        project.style.top = "150px";
        element1.style.top = "300px";
        project1.style.top = "300px";
        next.style.display = "flex"
        prev.style.cssText = "animation: none;"
    })
}
slideInOnScroll()