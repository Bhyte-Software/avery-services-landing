export function scrollToSection(hash: string, behavior: ScrollBehavior = "smooth") {
    const id = hash.replace(/^#/, "")
    if (!id) return false

    const target = document.getElementById(id)
    if (!target) return false

    target.scrollIntoView({ behavior, block: "start" })
    window.history.pushState(null, "", `#${id}`)
    return true
}
