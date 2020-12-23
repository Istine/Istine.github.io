const slideInOnScroll = () => {
    const container = document.querySelector(".container")
    const scrollHeight = document.querySelector(".skills").scrollHeight
    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 180) {
            let children = [...document.querySelector(".skills").children]
            let delay = 100
            children.forEach(child => {
                child.style.cssText = `transition: left 500ms ease-in-out ${delay}ms;left:${delay}px;`
                delay += 250
            })
        }

        if (window.scrollY >= 1400) {
            const remarks = document.querySelector(".testimonials")
            const message = document.querySelector(".message")
            const cover = document.querySelector("#slider")
            const image = document.querySelector("#client_msg")
            const heading = document.querySelector(".testimonials h1")
            const role = document.querySelector(".testimonials h3")
            const button = document.querySelector(".testimonials button")
                message.style.cssText = "animation: message 1s ease 300ms forwards;"
                heading.style.cssText = `animation:name 500ms ease 100ms forwards;`;
                role.style.cssText = `animation:role 400ms ease 200ms forwards;`;
                button.style.cssText = `animation:button 400ms ease 300ms forwards;`;
                cover.style.cssText = "animation:cover 1s ease 100ms forwards"
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

    // const remarks = document.querySelector(".testimonials")
    // const message = document.querySelector(".message")
    // const cover = document.querySelector("#slider")
    // const image = document.querySelector("#client_msg")
    // const heading = document.querySelector(".testimonials h1")
    // const role = document.querySelector(".testimonials h3")
    // const button = document.querySelector(".testimonials button")
    // remarks.addEventListener("click", (e) => {
    //     message.style.cssText = "animation: message 1s ease 300ms forwards;"
    //     heading.style.cssText = `animation:name 800ms ease 100ms forwards;`;
    //     role.style.cssText = `animation:role 700ms ease 200ms forwards;`;
    //     button.style.cssText = `animation:button 700ms ease 300ms forwards;`;
    //     cover.style.cssText = "animation:cover 1s ease 100ms forwards"
    //     image.style.cssText = "animation:image 1s ease  forwards"
    // })

}
slideInOnScroll()