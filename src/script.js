function wrapElement(element) {
    element.addClass = function(className) {
        element.classList.add(className);
    }

    element.removeClass = function(className) {
        element.classList.remove(className);
    }

    element.show = function() {
        element.style.display = "";
    }

    element.hide = function() {
        element.style.display = "none";
    }

    element.fadeIn = function() {
        element.show();
        element.addClass("animation-fadeIn");
        setTimeout(() => {
            element.removeClass("animation-fadeIn");
        }, 190);
    }

    element.fadeOut = function() {
        element.show();
        element.addClass("animation-fadeOut");
        setTimeout(() => {
            element.removeClass("animation-fadeOut");
            element.hide();
        }, 190);
    }

    element.wrapped = true;

    return element;
}

function get(query) {
    const element = document.querySelector(query);

    if (!element)
        return;
 
    if (element.wrapped)
        return element;

    return wrapElement(element);
}

document.querySelectorAll(".btn-modal, .close").forEach(element => element.onclick = function() { document.querySelectorAll(".modal").forEach(element => wrapElement(element).fadeOut()) });
document.querySelectorAll(".modal").forEach(element => wrapElement(element).hide());