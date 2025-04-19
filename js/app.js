document.addEventListener('DOMContentLoaded', function() {
    // Initialize SideNav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {
      edge: 'left',
      draggable: true,
      preventScrolling: true
    });
  
    // Initialize Floating Button
    const fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab, {});
  });