export const handleSidebarExpanded = (isSidebarExpanded) => {
  document.documentElement.style.setProperty(
    '--sidebar-width',
    isSidebarExpanded ? ' 250px' : '70px'
  )
}
