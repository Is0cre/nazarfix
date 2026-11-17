(function () {
  var campaignEnds = new Date("2026-12-01T00:00:00+01:00");

  if (Date.now() >= campaignEnds.getTime()) {
    var kampanj = document.getElementById("offer-kampanj");
    var ordinarie = document.getElementById("offer-ordinarie");
    var chip = document.getElementById("promo-chip");
    if (kampanj) kampanj.hidden = true;
    if (ordinarie) ordinarie.hidden = false;
    if (chip) chip.textContent = "Bilrekond från 2 000 kr";
  }

  document.querySelectorAll(".ba").forEach(function (ba) {
    var before = ba.querySelector(".ba-before");
    var handle = ba.querySelector(".ba-handle");
    var range = ba.querySelector("input");
    if (!before || !handle || !range) return;

    function set(value) {
      var v = Number(value);
      before.style.clipPath = "inset(0 " + (100 - v) + "% 0 0)";
      handle.style.left = v + "%";
    }

    set(range.value);
    range.addEventListener("input", function () {
      set(range.value);
    });
  });

  var dialog = document.getElementById("lightbox");
  if (!dialog || !dialog.showModal) return;
  var img = dialog.querySelector("img");
  var cap = dialog.querySelector("p");

  document.querySelectorAll("[data-zoom]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      img.src = link.getAttribute("href");
      img.alt = link.getAttribute("data-alt") || "";
      cap.textContent = link.getAttribute("data-alt") || "";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
