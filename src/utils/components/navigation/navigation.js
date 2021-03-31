export const handleSidebarExpanded = (
  isSidebarExpanded,
  customWidth = '250px'
) => {
  document.documentElement.style.setProperty(
    '--sidebar-width',
    isSidebarExpanded ? customWidth : '70px'
  )
}
