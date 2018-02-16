document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("transition").addEventListener("click", transition)
  console.log("ok");
})

var transition = function(event) {
  console.log("clicked");
  var changeA = document.getElementById("change-A").value
  var changeB = document.getElementById("change-B").value
  var changing = document.getElementById("changing")
  changing.style.color = ""
  changing.style.background = ""
  changing.style.fontStyle = ""
  changing.style.fontWeight = ""

  if (changeA === "" || changeB === "") {
    throw new Error(alert("whaaaah"))
  } else if (changeA !== "" || changeB !== "") {

setTimeout(function() {
  if (changeA == "color") {
    changing.style.color = "purple"
  } else if (changeA == "background") {
    changing.style.background = "pink"
  } else if (changeA == "font-style") {
    changing.style.fontStyle = "oblique"
  } else if (changeA == "font-weight") {
    changing.style.fontWeight = "bold"
  }
}, 700)

    setTimeout(function() {
      if (changeB == "color") {
        changing.style.color = "aquamarine"
      } else if (changeB == "background") {
        changing.style.background = "chartreuse"
      } else if (changeB == "font-style") {
        changing.style.fontStyle = "italic"
      } else if (changeB == "font-weight") {
        changing.style.fontWeight = "600"
      }
    }, 1500)
  }
}

// 1. Add an event listener to the button on click
// 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out the styles first before transition to new styles.
