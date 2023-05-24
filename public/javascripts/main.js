
  let scrollpos = window.scrollY
  const header = document.querySelector("#mainNav")

  const add_class_on_scroll = () => header.classList.add("fade-in")
  const remove_class_on_scroll = () => header.classList.remove("fade-in")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= 3) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })

