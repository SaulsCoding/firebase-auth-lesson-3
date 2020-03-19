// setup materialize compoenents
document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = documents.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
