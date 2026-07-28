export function scrollToSection(id) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const nav = document.querySelector("nav");
  const navOffset = nav ? nav.getBoundingClientRect().height + 16 : 96;
  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - navOffset
  );

  window.history.replaceState(null, "", `#${id}`);
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
