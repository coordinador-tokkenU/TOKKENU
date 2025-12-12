    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".children").forEach(function (children) {
        children.style.display = "none";
      });

      document.querySelectorAll(".node").forEach(function (node) {
        const box = node.querySelector(":scope > .box");
        const children = node.querySelector(":scope > .children");

        if (box && children) {
          box.classList.add("clickable");
          box.addEventListener("click", function (e) {
            e.stopPropagation();
            const visible = children.style.display === "block";
            children.style.display = visible ? "none" : "block";
            const icon = box.querySelector(".toggle-icon");
            if (icon) {
              icon.textContent = visible ? "▶" : "▼";
            }
          });
        } else if (box) {
          box.classList.add("leaf");
        }
      });
    });
