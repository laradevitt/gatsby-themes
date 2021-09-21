// Hook into Gatsby's onRouteUpdate API method to focus automatically on a skip
// link on page change.
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("[data-reach-skip-link]")
    if (skipLink) {
      skipLink.focus()
    }
  }
}